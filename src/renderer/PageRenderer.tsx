import type { SitePage, SiteStyle } from '../api/site';
import { getSectionComponent } from './sectionRegistry';
import { UnknownSection } from './sections/UnknownSection';

interface PageRendererProps {
  page: SitePage;
  theme: SiteStyle;
}

export function PageRenderer({ page, theme }: PageRendererProps) {
  const sortedSections = [...page.sections].sort(
    (a, b) => Number(a.order) - Number(b.order),
  );

  return (
    <div id={`page-${page.id}`} data-page-path={page.path}>
      {sortedSections.map((section) => {
        const Component = getSectionComponent(section.type);
        if (!Component) {
          return <UnknownSection key={section.id} content={section.content} style={section.style} theme={theme} sectionType={section.type} />;
        }
        return <Component key={section.id} content={section.content} style={section.style} theme={theme} />;
      })}
    </div>
  );
}
