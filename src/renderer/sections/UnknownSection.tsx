import type { SectionProps } from '../types';

interface UnknownSectionProps extends SectionProps {
  sectionType: string;
}

export function UnknownSection({ sectionType }: UnknownSectionProps) {
  return (
    <section className="py-8 px-4 bg-amber-50 text-center">
      <p className="text-sm text-amber-700">Unknown section type: {sectionType}</p>
    </section>
  );
}
