import type { SectionProps } from '../types';

export function HeroSection({ content, theme }: SectionProps) {
  const bg = content['backgroundImage'] as string | undefined;
  const title = content['title'] as string | undefined;
  const subtitle = content['subtitle'] as string | undefined;
  const description = content['description'] as string | undefined;
  const headingFont = theme?.fonts?.heading ?? 'serif';

  return (
    <section
      className="relative flex items-center justify-center overflow-hidden"
      style={{ minHeight: '100vh', backgroundImage: bg ? `url(${bg})` : undefined, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {bg && <div className="absolute inset-0 bg-black/40" />}
      <div className="relative z-10 text-center px-4 py-20 max-w-3xl mx-auto">
        {subtitle && <p className="text-sm uppercase tracking-widest text-white/80 mb-4">{subtitle}</p>}
        {title && <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: headingFont }}>{title}</h1>}
        {description && <p className="text-lg text-white/90 max-w-xl mx-auto">{description}</p>}
      </div>
    </section>
  );
}
