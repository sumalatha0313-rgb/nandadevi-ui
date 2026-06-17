const API_BASE = '';

export interface SiteSection {
  id: string;
  type: string;
  order: string;
  content: Record<string, unknown>;
  style: Record<string, string>;
  visibility?: Record<string, unknown>;
}

export interface SitePage {
  id: string;
  name: string;
  path: string;
  order: string;
  sections: SiteSection[];
}

export interface SiteStyle {
  colours?: Record<string, string>;
  fonts?: Record<string, string>;
  borderRadius?: Record<string, string>;
  spacing?: Record<string, string>;
}

export interface SiteData {
  eventId: string;
  eventName: string;
  eventType: string;
  templateName: string;
  version: string;
  thumbnail: string | null;
  tags: string[];
  style: SiteStyle;
  pages: SitePage[];
}

interface ApiResponse<T> {
  success: boolean;
  data: T;
  error?: string;
}

export async function fetchSiteData(urlType: string, urlValue: string): Promise<SiteData> {
  const params = new URLSearchParams({ urlType, urlValue });
  const res = await fetch(`${API_BASE}/api/v1/site/resolve?${params}`);

  if (res.status === 404) {
    throw new Error('404: Site not found');
  }
  if (!res.ok) {
    throw new Error(`Failed to load site: ${res.status}`);
  }

  const body: ApiResponse<SiteData> = await res.json();
  if (!body.success) {
    throw new Error(body.error ?? 'Unknown error');
  }
  return body.data;
}
