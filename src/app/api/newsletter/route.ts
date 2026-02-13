import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    const BREVO_API_KEY = process.env.BREVO_API_KEY;

    if (!BREVO_API_KEY) {
      console.error('BREVO_API_KEY is not set');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Add contact to Brevo
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY,
      },
      body: JSON.stringify({
        email: email,
        updateEnabled: true,
        listIds: [2], // Default list ID; change if you have a specific list
      }),
    });

    if (response.ok) {
      return NextResponse.json({ success: true });
    }

    const data = await response.json();

    // Contact already exists — still a success for the user
    if (data.code === 'duplicate_parameter') {
      return NextResponse.json({ success: true, alreadySubscribed: true });
    }

    console.error('Brevo API error:', data);
    return NextResponse.json(
      { error: 'Subscription failed' },
      { status: 500 }
    );
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
