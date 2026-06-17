import type { SiteData } from '../api/site';
import { PageRenderer } from './PageRenderer';

interface SiteRendererProps {
  data: SiteData;
}

export function SiteRenderer({ data }: SiteRendererProps) {
  const sortedPages = [...data.pages].sort((a, b) => {
    if (a.path === '/') return -1;
    if (b.path === '/') return 1;
    return Number(a.order) - Number(b.order);
  });

  const colours = data.style?.colours;

  return (
    <div
      className="site-root"
      style={{
        fontFamily: data.style?.fonts?.body ?? 'Inter, sans-serif',
        backgroundColor: colours?.background ?? '#ffffff',
        color: colours?.textPrimary ?? '#111827',
      }}
    >
      {sortedPages.map((page) => (
        <PageRenderer key={page.id} page={page} theme={data.style} />
      ))}
    </div>
  );
}
