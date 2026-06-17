import type { SiteStyle } from '../api/site';

export interface SectionProps {
  content: Record<string, unknown>;
  style: Record<string, string>;
  theme: SiteStyle;
}

export type SectionComponent = React.ComponentType<SectionProps>;
