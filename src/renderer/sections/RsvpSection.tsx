import type { SectionProps } from '../types';

export function RsvpSection({ content, theme }: SectionProps) {
  const title = content['title'] as string | undefined;
  const description = content['description'] as string | undefined;
  const headingFont = theme?.fonts?.heading ?? 'serif';

  return (
    <section className="py-16 px-4 bg-gray-900 text-white">
      <div className="max-w-2xl mx-auto text-center">
        {title && <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: headingFont }}>{title}</h2>}
        {description && <p className="text-gray-300 mb-8">{description}</p>}
        <button className="rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-700 transition-colors">
          RSVP Now
        </button>
      </div>
    </section>
  );
}
