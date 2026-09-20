import { useEffect, useState } from 'react';
import { Footer } from './components/common/Footer';
import { Header } from './components/common/Header';
import { Homepage } from './components/Homepage';
import { DataPrivacyPortal } from './components/legal/DataPrivacyPortal';
import { PrivacyPolicy } from './components/legal/PrivacyPolicy';
import { TermsAndConditions } from './components/legal/TermsAndConditions';
import { SectionPage, type SectionPageName } from './components/SectionPage';

type AppRoute = SectionPageName | 'privacy-policy' | 'terms' | 'privacy-requests' | 'grievance';

const sectionPages: SectionPageName[] = ['ecosystem', 'programs', 'events', 'community', 'opportunities'];
const legalPages: AppRoute[] = ['privacy-policy', 'terms', 'privacy-requests', 'grievance'];

function readPage(): AppRoute | null {
  const value = window.location.hash.replace('#', '').split('?')[0];
  if (sectionPages.includes(value as SectionPageName)) return value as SectionPageName;
  if (legalPages.includes(value as AppRoute)) return value as AppRoute;
  return null;
}

function App() {
  const [page, setPage] = useState<AppRoute | null>(readPage);

  useEffect(() => {
    const performScroll = () => {
      const hash = window.location.hash;
      const targetId = hash.replace('#', '').split('?')[0];
      if (targetId === 'join' || targetId === 'our-story' || targetId === 'story') {
        const targetElementId = targetId === 'join' ? 'join' : 'our-story';
        const scrollToTarget = () => {
          const el = document.getElementById(targetElementId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        };
        // Give React DOM a moment to mount Homepage if coming from another route
        requestAnimationFrame(() => {
          scrollToTarget();
          setTimeout(scrollToTarget, 60);
        });
      } else if (!hash || hash === '#top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const targetId = hash.replace('#', '').split('?')[0];
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    };

    const handleRoute = () => {
      setPage(readPage());
      performScroll();
    };

    // Run on initial page load as well
    performScroll();

    window.addEventListener('hashchange', handleRoute);
    return () => window.removeEventListener('hashchange', handleRoute);
  }, []);

  const renderContent = () => {
    if (page === 'privacy-policy') return <PrivacyPolicy />;
    if (page === 'terms') return <TermsAndConditions />;
    if (page === 'privacy-requests' || page === 'grievance') return <DataPrivacyPortal />;
    if (page && sectionPages.includes(page as SectionPageName)) {
      return <SectionPage page={page as SectionPageName} />;
    }
    return <Homepage />;
  };

  return (
    <div className="site-shell">
      <Header />
      <main id="top">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
}

export default App;

