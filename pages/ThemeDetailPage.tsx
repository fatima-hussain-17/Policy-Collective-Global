
import React from 'react';
import type { ThematicArea, Article } from '../data';
import Breadcrumbs from '../components/Breadcrumbs';

interface ThemeDetailPageProps {
  area: ThematicArea;
  articles: Article[];
}

const ThemeDetailPage: React.FC<ThemeDetailPageProps> = ({ area, articles }) => {
  const themeArticles = articles.filter(article => article.theme === area.shortName);

  const handleArticleClick = (slug: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.hash = `#article/${slug}`;
  };
  
  const crumbs = [
    { label: 'Home', href: '#home' },
    { label: 'Thematic Areas', href: '#thematic-areas' },
    { label: area.title, href: `#thematic-areas/${area.slug}` },
  ];

  return (
    <div className="bg-bg">
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-20 md:py-28">
        <img src={area.imageUrl} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" loading="eager" fetchpriority="high" width="600" height="400" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold">{area.title}</h1>
          <p className="mt-6 text-lg text-white/80 max-w-3xl mx-auto">{area.description}</p>
        </div>
      </section>

      {/* Articles Grid */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <Breadcrumbs crumbs={crumbs} />
          <h2 className="text-3xl font-bold text-ink mb-8 text-center">Articles in this Theme</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {themeArticles.length > 0 ? (
              themeArticles.map((article) => (
                <div
                  key={article.slug}
                  className="bg-surface rounded-xl border border-border overflow-hidden transition-all duration-300 shadow hover:-translate-y-1 flex flex-col"
                >
                  <a href={`#article/${article.slug}`} onClick={handleArticleClick(article.slug)}>
                    <img src={article.imageUrl} alt={article.title} className="w-full h-48 object-cover" loading="lazy" decoding="async" width="400" height="250" />
                  </a>
                  <div className="p-6 flex flex-col flex-grow">
                    <span className="bg-bg-alt text-primary border border-border font-semibold px-3 py-1 rounded-full text-xs self-start mb-3">{article.theme}</span>
                    <h3 className="text-xl font-bold text-ink mb-2">
                        <a href={`#article/${article.slug}`} onClick={handleArticleClick(article.slug)} className="hover:underline">{article.title}</a>
                    </h3>
                    <p className="text-muted text-sm leading-relaxed mb-4 flex-grow">{article.summary}</p>
                    <div className="mt-auto pt-4 border-t border-border/50">
                        <p className="font-semibold text-sm text-primary">By {article.author}</p>
                        <p className="text-xs text-muted">{new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                        <a href={`#article/${article.slug}`} onClick={handleArticleClick(article.slug)} className="text-accent font-bold text-sm mt-3 inline-block group">
                            Read Article <span className="transition-transform duration-300 group-hover:translate-x-1 inline-block">&rarr;</span>
                        </a>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-16">
                <p className="text-2xl text-muted">No articles found for this theme yet.</p>
                <p className="text-muted mt-2">Check back soon!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeDetailPage;