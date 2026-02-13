interface QuoteBlockProps {
  quote: string;
  author: string;
  variant?: 'default' | 'fullwidth' | 'centered';
}

export default function QuoteBlock({ quote, author, variant = 'default' }: QuoteBlockProps) {
  if (variant === 'fullwidth') {
    return (
      <section className="bg-forest-800 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="font-heading text-2xl md:text-3xl lg:text-4xl text-cream-100 italic leading-relaxed">
            &ldquo;{quote}&rdquo;
          </blockquote>
          <cite className="mt-6 block text-gold-400 text-lg font-medium not-italic">
            – {author}
          </cite>
        </div>
      </section>
    );
  }

  if (variant === 'centered') {
    return (
      <div className="max-w-3xl mx-auto text-center py-12">
        <blockquote className="font-heading text-xl md:text-2xl lg:text-3xl text-forest-700 italic leading-relaxed">
          &ldquo;{quote}&rdquo;
        </blockquote>
        <cite className="mt-4 block text-sage-500 text-base font-medium not-italic">
          – {author}
        </cite>
      </div>
    );
  }

  return (
    <div className="relative pl-6 border-l-4 border-gold-400 py-2">
      <blockquote className="font-heading text-lg md:text-xl text-forest-700 italic leading-relaxed">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <cite className="mt-3 block text-sage-500 text-sm font-medium not-italic">
        – {author}
      </cite>
    </div>
  );
}
