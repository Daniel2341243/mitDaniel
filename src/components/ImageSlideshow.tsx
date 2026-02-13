'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Slide {
  src: string;
  alt: string;
}

interface ImageSlideshowProps {
  slides: Slide[];
  className?: string;
}

export default function ImageSlideshow({ slides, className = '' }: ImageSlideshowProps) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));

  if (slides.length === 0) return null;

  return (
    <div className={`relative group ${className}`}>
      {/* Image */}
      <div className="relative overflow-hidden rounded-2xl bg-sand-100">
        <div className="relative aspect-[4/3]">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                index === current ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 672px"
                quality={80}
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      {slides.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm shadow-soft flex items-center justify-center text-forest-700 hover:bg-white transition-all opacity-0 group-hover:opacity-100"
            aria-label="Vorheriges Bild"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm shadow-soft flex items-center justify-center text-forest-700 hover:bg-white transition-all opacity-0 group-hover:opacity-100"
            aria-label="Nächstes Bild"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}

      {/* Dots */}
      {slides.length > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                index === current
                  ? 'bg-forest-600 w-6'
                  : 'bg-forest-300/40 hover:bg-forest-300/60'
              }`}
              aria-label={`Bild ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
