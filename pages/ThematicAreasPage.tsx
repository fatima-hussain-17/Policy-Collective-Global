
import React, { useState, useMemo } from 'react';
import { thematicAreas } from '../data';
import type { Article } from '../data';
import SectionTitle from '../components/SectionTitle';

interface ThematicAreasPageProps {
  articles: Article[];
  searchQuery: string;
}

type ThemeFilter = 'All' | 'Technology' | 'Sustainability' | 'Health';
type SortOrder = 'newest' | 'oldest';

const ThematicAreasPage: React.FC<ThematicAreasPageProps> = ({ articles, searchQuery }) => {
  const [themeFilter, setThemeFilter] = useState<ThemeFilter>('All');
  const [authorFilter, setAuthorFilter] = useState<string>('All');
  const [sortOrder, setSortOrder] = useState<SortOrder>('newest');

  const authors = useMemo(() => ['All', ...Array.from(new Set(articles.map(a => a.author)))], [articles]);

  const filteredArticles = useMemo(() => {
    return articles
      .filter(article =>
        themeFilter === 'All' || article.theme === themeFilter
      )
      .filter(article =>
        authorFilter === 'All' || article.author === authorFilter
      )
      .filter(article =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.summary.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .sort((a, b) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
      });
  }, [articles, themeFilter, authorFilter, searchQuery, sortOrder]);
  
  const themes: ThemeFilter[] = ['All', 'Technology', 'Sustainability', 'Health'];

  const handleArticleClick = (slug: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.hash = `#article/${slug}`;
  };

  const selectStyles = "w-full px-4 py-2 text-sm sm:text-base font-semibold rounded-lg border border-border bg-white text-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors duration-300";


  return (
    <div className="bg-bg py-16">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <SectionTitle>Our Thematic Areas</SectionTitle>
                <p className="text-lg text-muted mt-8 max-w-3xl mx-auto">
                    Our research is concentrated on three core pillars that are critical to the future of the Global South. Explore each area to find our latest work.
                </p>
            </div>

            <div className="space-y-16 max-w-5xl mx-auto">
                {thematicAreas.map((area, index) => (
                     <div key={index} className="bg-surface p-8 rounded-xl shadow border border-border flex flex-col md:flex-row gap-8 items-center">
                        <div className="md:w-1/3 w-full">
                            <img 
                              src={area.imageUrl} 
                              alt={area.title} 
                              className="rounded-lg shadow-sm w-full h-auto object-cover aspect-video"
                              loading={index === 0 ? 'eager' : 'lazy'}
                              fetchpriority={index === 0 ? 'high' : 'auto'}
                              decoding="async"
                              width="600"
                              height="400"
                            />
                        </div>
                        <div className="md:w-2/3 w-full text-center md:text-left">
                            <h2 className="text-3xl font-bold text-ink mb-4">{area.title}</h2>
                            <p className="text-muted leading-relaxed text-lg mb-6">{area.description}</p>
                            <a href={`#thematic-areas/${area.slug}`} onClick={(e) => { e.preventDefault(); window.location.hash = `#thematic-areas/${area.slug}`; }} className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg shadow-sm hover:bg-opacity-90 transition-all duration-300">
                                Explore Theme
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            <hr className="my-20 border-t border-accent/20" />

            <div id="all-articles" className="text-center mb-12">
              <SectionTitle>All Articles</SectionTitle>
              <p className="text-lg text-muted mt-8 max-w-2xl mx-auto">
                Explore our full library of research, analysis, and commentary. Filter by theme to find what interests you most.
              </p>
            </div>
            
            <div className="mb-12 p-6 bg-surface rounded-xl shadow border border-border">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-end">
                    <div className="col-span-1 sm:col-span-2 lg:col-span-3">
                        <p className="font-bold text-ink mb-3 text-center sm:text-left">Filter by Theme</p>
                        <div className="flex justify-center sm:justify-start gap-2 sm:gap-4 flex-wrap">
                            {themes.map(theme => (
                                <button 
                                    key={theme}
                                    onClick={() => setThemeFilter(theme)}
                                    className={`px-4 py-2 text-sm sm:text-base font-semibold rounded-lg border transition-colors duration-300 ${
                                        themeFilter === theme 
                                        ? 'bg-primary text-white border-primary' 
                                        : 'bg-white text-primary border-border hover:bg-bg-alt'
                                    }`}
                                >
                                    {theme}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div>
                         <label htmlFor="author-filter" className="block font-bold text-ink mb-1 text-sm">Author</label>
                         <select id="author-filter" value={authorFilter} onChange={(e) => setAuthorFilter(e.target.value)} className={selectStyles}>
                            {authors.map(author => <option key={author} value={author}>{author}</option>)}
                         </select>
                    </div>
                     <div>
                         <label htmlFor="sort-order" className="block font-bold text-ink mb-1 text-sm">Sort by</label>
                         <select id="sort-order" value={sortOrder} onChange={(e) => setSortOrder(e.target.value as SortOrder)} className={selectStyles}>
                            <option value="newest">Newest First</option>
                            <option value="oldest">Oldest First</option>
                         </select>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.length > 0
                ? filteredArticles.map((article) => (
                    <div
                      key={article.slug}
                      className="bg-surface rounded-xl border border-border overflow-hidden transition-all duration-300 shadow hover:-translate-y-1 flex flex-col"
                    >
                      <a href={`#article/${article.slug}`} onClick={handleArticleClick(article.slug)}>
                        <img src={article.imageUrl} alt={article.title} className="w-full h-48 object-cover" loading="lazy" decoding="async" width="400" height="250" />
                      </a>
                      <div className="p-6 flex flex-col flex-grow">
                         <div className="flex items-center gap-2 mb-3">
                            <span className="bg-bg-alt text-primary border border-border font-semibold px-3 py-1 rounded-full text-xs self-start">{article.theme}</span>
                         </div>
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
                : (
                  <div className="col-span-1 md:col-span-3 text-center py-16">
                    <p className="text-2xl text-muted">No articles found.</p>
                    <p className="text-muted mt-2">Try adjusting your search or filter.</p>
                  </div>
                )
              }
            </div>
        </div>
    </div>
  );
};

export default ThematicAreasPage;