import type { SectionProps } from '../types';

export function GallerySection({ content, theme }: SectionProps) {
  const title = content['title'] as string | undefined;
  const images = content['images'] as Array<{ url: string; alt?: string }> | undefined;
  const headingFont = theme?.fonts?.heading ?? 'serif';

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {title && <h2 className="text-3xl font-bold text-center mb-10" style={{ fontFamily: headingFont }}>{title}</h2>}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images?.map((img, i) => (
            <img key={i} src={img.url} alt={img.alt ?? ''} className="w-full h-64 object-cover rounded-lg" />
          ))}
        </div>
      </div>
    </section>
  );
}
