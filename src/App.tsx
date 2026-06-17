import { useEffect, useState } from 'react';
import { detectSite } from './utils/urlDetector';
import { fetchSiteData, type SiteData } from './api/site';
import { SiteRenderer } from './renderer/SiteRenderer';
import { NotFoundPage } from './pages/NotFoundPage';
import { ErrorPage } from './pages/ErrorPage';
import { LoadingPage } from './pages/LoadingPage';

type AppState = 'loading' | 'ready' | 'not-found' | 'error';

export default function App() {
  const [state, setState] = useState<AppState>('loading');
  const [siteData, setSiteData] = useState<SiteData | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    const detected = detectSite();
    if (!detected) {
      setState('not-found');
      return;
    }

    setState('loading');
    fetchSiteData(detected.urlType, detected.urlValue)
      .then((data) => {
        setSiteData(data);
        setState('ready');
        // Update page title with event name
        document.title = data.eventName || 'Event Site';
      })
      .catch((err) => {
        if (err instanceof Error && err.message.includes('404')) {
          setState('not-found');
        } else {
          setErrorMessage(err instanceof Error ? err.message : 'Failed to load site');
          setState('error');
        }
      });
  }, [retryCount]);

  if (state === 'loading') return <LoadingPage />;
  if (state === 'not-found') return <NotFoundPage />;
  if (state === 'error') return <ErrorPage message={errorMessage} onRetry={() => setRetryCount(c => c + 1)} />;
  if (state === 'ready' && siteData) return <SiteRenderer data={siteData} />;
  return null;
}
