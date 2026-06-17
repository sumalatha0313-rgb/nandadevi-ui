export interface DetectedSite {
  urlType: 'SUBDOMAIN' | 'PATH';
  urlValue: string;
}

const MAIN_DOMAIN = 'kailash.app';

export function detectSite(): DetectedSite | null {
  const hostname = window.location.hostname;
  const pathname = window.location.pathname;
  const params = new URLSearchParams(window.location.search);

  // Dev mode: query params ?site=xxx&type=SUBDOMAIN
  const siteParam = params.get('site');
  const typeParam = params.get('type');
  if (siteParam) {
    return {
      urlType: (typeParam === 'PATH' ? 'PATH' : 'SUBDOMAIN') as 'SUBDOMAIN' | 'PATH',
      urlValue: siteParam,
    };
  }

  // Subdomain detection: xxx.kailash.app (not www)
  if (hostname.endsWith('.' + MAIN_DOMAIN)) {
    const subdomain = hostname.replace('.' + MAIN_DOMAIN, '');
    if (subdomain && subdomain !== 'www') {
      return { urlType: 'SUBDOMAIN', urlValue: subdomain };
    }
  }

  // Local dev subdomain: xxx.localhost
  if (hostname.endsWith('.localhost') || hostname.match(/^.+\.localhost$/)) {
    const subdomain = hostname.replace('.localhost', '');
    if (subdomain && subdomain !== 'www') {
      return { urlType: 'SUBDOMAIN', urlValue: subdomain };
    }
  }

  // Path detection: kailash.app/xxx
  if (hostname === MAIN_DOMAIN || hostname === 'www.' + MAIN_DOMAIN) {
    const pathValue = pathname.split('/')[1];
    if (pathValue && pathValue.length >= 3) {
      return { urlType: 'PATH', urlValue: pathValue };
    }
  }

  // Local dev with just a path: localhost:5174/john-jane
  if (hostname === 'localhost' || hostname === '127.0.0.1') {
    const pathValue = pathname.split('/')[1];
    if (pathValue && pathValue.length >= 3) {
      return { urlType: 'PATH', urlValue: pathValue };
    }
  }

  return null;
}
