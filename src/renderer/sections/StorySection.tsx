import type { SectionProps } from '../types';

export function StorySection({ content, theme }: SectionProps) {
  const title = content['title'] as string | undefined;
  const body = content['body'] as string | undefined;
  const headingFont = theme?.fonts?.heading ?? 'serif';

  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        {title && <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: headingFont }}>{title}</h2>}
        {body && <p className="text-lg text-gray-600 leading-relaxed whitespace-pre-line">{body}</p>}
      </div>
    </section>
  );
}
