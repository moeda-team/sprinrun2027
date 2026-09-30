type PictureProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes?: string;
  priority?: boolean;
  className?: string;
};

const widths = [480, 768, 1280, 1920] as const;

function sourceSet(src: string, extension: string) {
  const base = src.replace(/\.[^/.]+$/, '');
  return widths.map((width) => `${base}-${width}.${extension} ${width}w`).join(', ');
}

export function Picture({
  src,
  alt,
  width,
  height,
  sizes = '100vw',
  priority = false,
  className,
}: PictureProps) {
  const fallback = `${src.replace(/\.[^/.]+$/, '')}-1280.jpg`;
  return (
    <picture>
      <source type="image/avif" srcSet={sourceSet(src, 'avif')} sizes={sizes} />
      <source type="image/webp" srcSet={sourceSet(src, 'webp')} sizes={sizes} />
      <img
        src={fallback}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
        className={className}
      />
    </picture>
  );
}
