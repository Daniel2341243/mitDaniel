import { ImageIcon } from 'lucide-react';

interface ImagePlaceholderProps {
  description: string;
  aspectRatio?: 'square' | 'landscape' | 'portrait' | 'wide';
  className?: string;
}

export default function ImagePlaceholder({ description, aspectRatio = 'landscape', className = '' }: ImagePlaceholderProps) {
  const ratioClasses = {
    square: 'aspect-square',
    landscape: 'aspect-video',
    portrait: 'aspect-[3/4]',
    wide: 'aspect-[21/9]',
  };

  return (
    <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-sage-100 via-sand-200 to-warm-200 ${ratioClasses[aspectRatio]} flex flex-col items-center justify-center gap-3 ${className}`}>
      <ImageIcon className="w-10 h-10 text-sage-400/60" />
      <p className="text-sage-500/80 text-sm font-medium text-center px-4">{description}</p>
    </div>
  );
}
