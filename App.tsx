
import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ArticlePage from './components/ArticlePage';
import Home from './pages/Home';
import ThematicAreasPage from './pages/ThematicAreasPage';
import AboutPage from './pages/AboutPage';
import PlaceholderPage from './pages/PlaceholderPage';
import ThemeDetailPage from './pages/ThemeDetailPage';
import ContributorsPage from './pages/TeamPage';
import PodcastPage from './pages/PodcastPage';
import PodcastEpisodePage from './pages/PodcastEpisodePage';
import InfographicsPage from './pages/InfographicsPage';
import PolicyRoundupPage from './pages/PolicyRoundupPage';


import { getArticleBySlug, articles, getThematicAreaBySlug, getPodcastBySlug } from './data';
import type { Article } from './data';


// Helper to parse the current route from the URL hash
const getRoute = () => {
  const hash = window.location.hash.substring(1);
  if (hash.startsWith('article/')) {
    const slug = hash.substring('article/'.length);
    return { page: 'article', param: slug };
  }
  if (hash.startsWith('thematic-areas/')) {
    const slug = hash.substring('thematic-areas/'.length);
    return { page: 'thematic-area-detail', param: slug };
  }
  if (hash.startsWith('podcast/')) {
    const slug = hash.substring('podcast/'.length);
    return { page: 'podcast-episode', param: slug };
  }
  return { page: hash || 'home', param: null };
};

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [route, setRoute] = useState(getRoute());
  const [displayedContent, setDisplayedContent] = useState<React.ReactNode>(null);
  const [transitionClass, setTransitionClass] = useState('');
  const isInitialMount = useRef(true);

  const renderContentForRoute = (page: string, param: string | null): React.ReactNode => {
    if (page === 'article' && param) {
      const article = getArticleBySlug(param);
      if (article) {
        return <ArticlePage article={article} onBack={() => window.location.hash = '#thematic-areas'} />;
      }
      return <PlaceholderPage title="Article Not Found" />;
    }

    if (page === 'thematic-area-detail' && param) {
      const area = getThematicAreaBySlug(param);
      if (area) {
        return <ThemeDetailPage area={area} articles={articles} />;
      }
      return <PlaceholderPage title="Thematic Area Not Found" />;
    }

    if (page === 'podcast-episode' && param) {
      const podcast = getPodcastBySlug(param);
      if (podcast) {
        return <PodcastEpisodePage podcast={podcast} />;
      }
      return <PlaceholderPage title="Podcast Episode Not Found" />;
    }

    switch (page) {
      case 'articles': // Fall through for backward compatibility
      case 'thematic-areas':
        return <ThematicAreasPage articles={articles} searchQuery={searchQuery} />;
      case 'contributors':
        return <ContributorsPage />;
      case 'infographics':
        return <InfographicsPage />;
      case 'roundup':
        return <PolicyRoundupPage />;
      case 'podcast':
        return <PodcastPage />;
      case 'about':
        return <AboutPage />;
      case 'home':
      default:
        return <Home searchQuery={searchQuery} />;
    }
  };


  useEffect(() => {
    const handleHashChange = () => {
      setRoute(getRoute());
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Set initial page on load

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  useEffect(() => {
    if (isInitialMount.current) {
      const initialContent = renderContentForRoute(route.page, route.param);
      setDisplayedContent(initialContent);
      setTransitionClass('page-enter');
      isInitialMount.current = false;
      return;
    }

    setTransitionClass('page-exit');

    const timeoutId = setTimeout(() => {
      const newContent = renderContentForRoute(route.page, route.param);
      setDisplayedContent(newContent);
      setTransitionClass('page-enter');
    }, 250); // Match CSS animation duration

    return () => clearTimeout(timeoutId);
  }, [route, searchQuery]);


  return (
    <div className="font-sans text-ink antialiased">
       <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:z-50 focus:px-4 focus:py-2 focus:top-2 focus:left-2 bg-surface text-primary border border-primary rounded-lg">
        Skip to main content
       </a>
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <main id="main-content" className={transitionClass}>
        {displayedContent}
      </main>
      <Footer />
    </div>
  );
};

export default App;