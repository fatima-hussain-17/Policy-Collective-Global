
import React, { useState, useEffect, useRef } from 'react';
import { LinkedInIcon, TwitterIcon, FacebookIcon, WhatsappIcon, EmailIcon } from './Icons';
import type { Article } from '../data';
import { researchers } from '../data';
import Breadcrumbs from './Breadcrumbs';

interface ArticlePageProps {
  article: Article;
  onBack: () => void;
}

const placeholderRelatedArticles = [
  {
    title: "AI Ethics in Developing Nations",
    imageUrl: "https://picsum.photos/seed/related1/400/250",
    slug: "#",
  },
  {
    title: "The Gig Economy's Impact on Social Safety Nets",
    imageUrl: "https://picsum.photos/seed/related2/400/250",
    slug: "#",
  },
];

type FontSize = 'base' | 'lg' | 'xl';
interface TocItem {
    id: string;
    level: number;
    text: string;
}

const TableOfContents: React.FC<{ items: TocItem[]; activeId: string | null }> = ({ items, activeId }) => {
    if (!items || items.length === 0) return null;

    const handleTocClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 120; // Matches scroll-mt-32 approx
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
            // Update URL hash without jumping
            history.pushState(null, '', `#${id}`);
        }
    };

    return (
        <div className="mb-12">
            <h3 className="text-xl font-bold text-ink mb-4">On this page</h3>
            <nav>
                <ul className="space-y-2">
                    {items.map(item => (
                        <li key={item.id} style={{ marginLeft: `${(item.level - 2) * 1}rem` }}>
                            <a 
                                href={`#${item.id}`}
                                onClick={(e) => handleTocClick(e, item.id)}
                                className={`block text-sm border-l-2 py-1 px-3 transition-all duration-200 ${
                                    activeId === item.id 
                                    ? 'border-primary text-primary font-semibold bg-primary/5' 
                                    : 'border-border text-muted hover:border-primary/50 hover:text-ink'
                                }`}
                            >
                                {item.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};


const ArticlePage: React.FC<ArticlePageProps> = ({ article, onBack }) => {
  const [fontSize, setFontSize] = useState<FontSize>('lg');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [tocItems, setTocItems] = useState<TocItem[]>([]);
  const [activeTocId, setActiveTocId] = useState<string | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  const authorProfile = researchers.find(p => p.name === article.author);

  // Effect for Table of Contents generation and scrollspy
  useEffect(() => {
    const articleContent = document.getElementById('article-content');
    if (!articleContent) return;

    const headings = Array.from(articleContent.querySelectorAll('h2, h3'));
    const newTocItems = headings.map((heading) => {
      const text = heading.textContent || '';
      const id = text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
      heading.id = id;
      return {
        id,
        level: parseInt(heading.tagName.substring(1), 10),
        text,
      };
    });
    setTocItems(newTocItems);

    if (observer.current) {
        observer.current.disconnect();
    }

    observer.current = new IntersectionObserver((entries) => {
        const visibleHeadings = entries
            .filter(entry => entry.isIntersecting)
            .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        
        if (visibleHeadings.length > 0) {
            setActiveTocId(visibleHeadings[0].target.id);
        }
    }, {
        rootMargin: '-120px 0px -50% 0px', // Top margin should match header offset
    });

    const headingElements = newTocItems.map(({ id }) => document.getElementById(id)).filter(Boolean);
    headingElements.forEach(el => observer.current!.observe(el!));

    return () => {
        observer.current?.disconnect();
    };

  }, [article.slug]);


  // Effect for reading progress bar
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollProgress(docHeight > 0 ? scrolled : 0);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set initial progress

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const crumbs = [
    { label: 'Home', href: '#home' },
    { label: 'Thematic Areas', href: '#thematic-areas' },
    { label: article.title, href: `#article/${article.slug}` },
  ];

  const shareUrl = window.location.href;
  const shareTitle = article.title;
  const shareSummary = article.summary;

  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(shareTitle);
  const encodedSummary = encodeURIComponent(shareSummary);

  const shareLinks = [
    { name: 'Facebook', icon: FacebookIcon, url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}` },
    { name: 'Twitter', icon: TwitterIcon, url: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}` },
    { name: 'LinkedIn', icon: LinkedInIcon, url: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}&summary=${encodedSummary}` },
    { name: 'WhatsApp', icon: WhatsappIcon, url: `https://api.whatsapp.com/send?text=${encodedTitle} ${encodedUrl}` },
    { name: 'Email', icon: EmailIcon, url: `mailto:?subject=${encodedTitle}&body=${encodedSummary} ${encodedUrl}` },
  ];

  return (
    <>
      {/* Reading Progress Bar */}
      <div 
        className="fixed top-0 left-0 w-full h-1 z-50 bg-border" 
        role="progressbar" 
        aria-label="Reading progress" 
        aria-valuenow={Math.round(scrollProgress)} 
        aria-valuemin={0} 
        aria-valuemax={100}
      >
        <div
          className="h-1 bg-accent transition-all duration-100 ease-linear"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      <div className="bg-bg py-16 md:py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <Breadcrumbs crumbs={crumbs} />

          <div className="lg:flex lg:gap-12 xl:gap-16">
            {/* Main Article Content */}
            <div className="lg:w-2/3">
              <article>
                <header className="mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-bg-alt text-primary border border-border font-semibold px-3 py-1 rounded-full text-xs self-start">{article.theme}</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold text-ink leading-tight mb-4">
                    {article.title}
                  </h1>
                  <div className="flex items-center justify-between flex-wrap gap-y-4 border-t border-b border-border py-4">
                      <div className="flex items-center gap-4 text-muted">
                          <img 
                            src={authorProfile?.imageUrl || `https://ui-avatars.com/api/?name=${encodeURIComponent(article.author)}&background=2E4D3D&color=fff`}
                            alt={article.author} 
                            className="w-12 h-12 rounded-full object-cover bg-border"
                            width="200"
                            height="200"
                          />
                          <div>
                              <p className="font-semibold text-primary">{article.author}</p>
                              <p className="text-sm">Published on {new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                          </div>
                      </div>
                      <div className="flex items-center gap-x-6">
                         <div className="flex items-center gap-1" role="group" aria-label="Font size controls">
                              <button
                                  onClick={() => setFontSize('base')}
                                  title="Small font"
                                  aria-label="Set font size to small"
                                  className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold transition-colors duration-200 ${fontSize === 'base' ? 'bg-primary text-white' : 'bg-bg-alt text-primary hover:bg-border'}`}
                                  aria-pressed={fontSize === 'base'}
                              >
                                  A
                              </button>
                              <button
                                  onClick={() => setFontSize('lg')}
                                  title="Medium font"
                                  aria-label="Set font size to medium"
                                  className={`w-8 h-8 flex items-center justify-center rounded-full text-base font-bold transition-colors duration-200 ${fontSize === 'lg' ? 'bg-primary text-white' : 'bg-bg-alt text-primary hover:bg-border'}`}
                                  aria-pressed={fontSize === 'lg'}
                              >
                                  A
                              </button>
                              <button
                                  onClick={() => setFontSize('xl')}
                                  title="Large font"
                                  aria-label="Set font size to large"
                                  className={`w-8 h-8 flex items-center justify-center rounded-full text-lg font-bold transition-colors duration-200 ${fontSize === 'xl' ? 'bg-primary text-white' : 'bg-bg-alt text-primary hover:bg-border'}`}
                                  aria-pressed={fontSize === 'xl'}
                              >
                                  A
                              </button>
                          </div>
                          <div className="flex items-center gap-x-2">
                            <span className="text-sm font-semibold text-muted mr-2 hidden sm:inline">Share:</span>
                              {shareLinks.map(({ name, icon: Icon, url }) => (
                                  <a 
                                      key={name}
                                      href={url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      title={`Share on ${name}`}
                                      aria-label={`Share on ${name}`}
                                      className="text-muted hover:text-primary transition-colors duration-200"
                                  >
                                      <Icon className="h-5 w-5" />
                                  </a>
                              ))}
                          </div>
                      </div>
                  </div>
                </header>

                <img src={article.imageUrl.replace('/400/250', '/800/500')} alt={article.title} className="w-full h-auto rounded-xl shadow mb-10" loading="eager" fetchpriority="high" width="800" height="500" />

                <div className={`prose max-w-none text-ink leading-relaxed space-y-6 ${
                    fontSize === 'base' ? 'prose-base' :
                    fontSize === 'lg' ? 'prose-lg' :
                    'prose-xl'
                }`}>
                    <p className="text-xl italic text-muted">
                        {article.summary}
                    </p>
                    <div 
                      id="article-content" 
                      className="space-y-6"
                      dangerouslySetInnerHTML={{ __html: article.content }} 
                    />
                </div>

                {/* Author Bio Section */}
                {authorProfile && (
                  <div className="mt-16 pt-8 border-t border-border">
                    <h3 className="text-2xl font-bold text-ink mb-6">About the Author</h3>
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 bg-bg-alt p-6 rounded-xl border border-border">
                      <img 
                        src={authorProfile.imageUrl || `https://ui-avatars.com/api/?name=${encodeURIComponent(authorProfile.name)}&background=2E4D3D&color=fff`} 
                        alt={authorProfile.name} 
                        className="w-24 h-24 rounded-full object-cover flex-shrink-0 bg-border"
                        loading="lazy"
                        decoding="async"
                        width="200"
                        height="200"
                      />
                      <div className="text-center sm:text-left">
                        <h4 className="text-xl font-bold text-primary">{authorProfile.name}</h4>
                        <p className="text-muted font-semibold text-sm mb-2">{authorProfile.title}</p>
                        <p className="text-muted text-sm leading-relaxed mb-4">{authorProfile.bio}</p>
                        <div className="flex items-center justify-center sm:justify-start gap-4">
                          {authorProfile.linkedin && (
                            <a href={authorProfile.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${authorProfile.name}'s LinkedIn`} className="text-muted hover:text-primary transition-colors">
                              <LinkedInIcon className="h-5 w-5" />
                            </a>
                          )}
                          {authorProfile.twitter && (
                            <a href={authorProfile.twitter} target="_blank" rel="noopener noreferrer" aria-label={`${authorProfile.name}'s Twitter`} className="text-muted hover:text-primary transition-colors">
                              <TwitterIcon className="h-5 w-5" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                  {/* Newsletter CTA */}
                  <div className="mt-16 p-8 bg-bg-alt rounded-xl border border-border text-center">
                      <h3 className="text-2xl font-bold text-ink mb-3">Stay Ahead of the Curve</h3>
                      <p className="text-muted mb-6 max-w-lg mx-auto">Subscribe to our newsletter for weekly insights and analysis on the policies shaping our world.</p>
                      <form className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto">
                          <input type="email" placeholder="Your email" className="flex-grow px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-1 focus:ring-primary" />
                          <button type="submit" className="bg-primary text-white font-bold py-2 px-6 rounded-lg hover:bg-opacity-90 transition-all">Sign Up</button>
                      </form>
                  </div>
              </article>
            </div>

            {/* Sticky Sidebar */}
            <aside className="lg:w-1/3 mt-16 lg:mt-0 lg:sticky lg:top-32 h-fit">
              <div className="space-y-12">
                <TableOfContents items={tocItems} activeId={activeTocId} />
                
                {/* Related Infographics Section */}
                <div>
                  <h3 className="text-2xl font-bold text-ink mb-4">Related Infographics</h3>
                  <a href="#infographics" className="block group">
                      <img src="https://picsum.photos/seed/infog-side/500/500" alt="Related Infographic" className="w-full h-auto rounded-xl shadow group-hover:-translate-y-1 transition-transform" loading="lazy" decoding="async" width="500" height="500"/>
                  </a>
                </div>
                
                {/* Tags Section */}
                <div>
                  <h3 className="text-2xl font-bold text-ink mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map(tag => (
                      <a href="#" key={tag} className="bg-bg-alt text-primary border border-border text-sm font-semibold px-3 py-1 rounded-full hover:bg-border transition-colors duration-300">
                        {tag}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Related Articles Section */}
                <div>
                  <h3 className="text-2xl font-bold text-ink mb-4">Related Articles</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {placeholderRelatedArticles.map((relatedArticle, index) => (
                      <a href={relatedArticle.slug} key={index} className="flex items-center gap-4 bg-surface p-3 rounded-xl border border-border shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 group">
                        <img src={relatedArticle.imageUrl} alt={relatedArticle.title} className="w-24 h-20 object-cover rounded-lg flex-shrink-0" loading="lazy" decoding="async" width="400" height="250" />
                        <div>
                          <h4 className="font-semibold text-ink leading-tight group-hover:underline">{relatedArticle.title}</h4>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
        <style>{`
          html {
            scroll-behavior: smooth;
          }
          .prose h2, .prose h3 { color: var(--ink); }
          .prose-base { font-size: 1rem; line-height: 1.75; }
          .prose-lg { font-size: 1.125rem; line-height: 1.75; }
          .prose-xl { font-size: 1.25rem; line-height: 1.75; }
        `}</style>
      </div>
    </>
  );
};

export default ArticlePage;