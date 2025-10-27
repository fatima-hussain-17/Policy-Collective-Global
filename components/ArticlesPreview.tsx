
import React from 'react';
import type { Article } from '../data';
import SectionTitle from './SectionTitle';

interface ArticlesPreviewProps {
  articles: Article[];
  searchQuery: string;
}

const ArticlesPreview: React.FC<ArticlesPreviewProps> = ({ articles, searchQuery }) => {
  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.summary.toLowerCase().includes(searchQuery.toLowerCase())
  ).slice(0, 6); // Show up to 6 articles on the homepage

  const handleArticleClick = (slug: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.hash = `#article/${slug}`;
  };

  return (
    <section className="py-16 md:py-24 bg-bg-alt">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
           <SectionTitle>Latest Articles</SectionTitle>
           <p className="mt-8 text-lg text-muted max-w-3xl mx-auto">Explore our most recent analysis and commentary on pressing policy issues.</p>
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
            : (
              <div className="col-span-1 md:col-span-3 text-center py-12">
                <p className="text-xl text-muted">No articles found matching your search.</p>
              </div>
            )
          }
        </div>
         <div className="text-center mt-16">
            <a href="#thematic-areas" onClick={(e) => { e.preventDefault(); window.location.hash = '#thematic-areas'; }} className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg shadow-sm hover:bg-opacity-90 transition-all duration-300">
                View All Articles
            </a>
        </div>
      </div>
    </section>
  );
};

export default ArticlesPreview;