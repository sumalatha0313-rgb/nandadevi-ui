import type { SectionProps } from '../types';

export function EventListSection({ content, theme }: SectionProps) {
  const title = content['title'] as string | undefined;
  const events = content['events'] as Array<{ name: string; time: string; location: string }> | undefined;
  const headingFont = theme?.fonts?.heading ?? 'serif';

  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        {title && <h2 className="text-3xl font-bold text-center mb-10" style={{ fontFamily: headingFont }}>{title}</h2>}
        <div className="space-y-6">
          {events?.map((event, i) => (
            <div key={i} className="border-l-4 border-indigo-500 pl-4 py-2">
              <h3 className="font-semibold text-lg">{event.name}</h3>
              <p className="text-sm text-gray-500">{event.time} · {event.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
