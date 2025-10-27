
import React from 'react';
import { articles } from '../data';
import type { Article } from '../data';

const FeaturedArticle: React.FC<{ article: Article }> = ({ article }) => (
  <div
    onClick={() => window.location.hash = `#article/${article.slug}`}
    className="bg-surface rounded-xl border border-border overflow-hidden group cursor-pointer shadow hover:-translate-y-1 transition-transform duration-300"
  >
    <div className="relative">
      <img src={article.imageUrl} alt={article.title} className="w-full h-64 object-cover" loading="eager" fetchpriority="high" width="400" height="250" />
      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300"></div>
    </div>
    <div className="p-6">
      <span className="text-sm font-semibold uppercase text-accent">Flagship Article</span>
      <h3 className="font-semibold text-2xl text-ink mt-2 group-hover:underline">
        {article.title}
      </h3>
    </div>
  </div>
);

const Hero: React.FC = () => {
  const featuredArticle = articles[0];

  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Intro Text + Newsletter */}
          <div className="text-center md:text-left">
            <p className="font-semibold text-accent uppercase tracking-wider">Policy Collective Global</p>
            <h1 className="text-4xl md:text-5xl font-bold text-ink leading-tight mt-2">
              Ideas That Shape Tomorrow’s Policy
            </h1>
            <p className="mt-6 text-lg text-muted max-w-xl mx-auto md:mx-0">
              A youth-led collective advancing inclusive and evidence-based policy dialogue.
            </p>
            <div className="mt-10">
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto md:mx-0">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 border border-border rounded-lg bg-white focus:outline-none focus:ring-1 focus:ring-primary"
                  aria-label="Email for newsletter"
                />
                <button
                  type="submit"
                  className="bg-primary text-white font-bold py-3 px-6 rounded-lg shadow-sm hover:bg-opacity-90 transition-all duration-300 w-full sm:w-auto"
                >
                  Subscribe
                </button>
              </form>
               <p className="text-xs text-muted/60 mt-3 text-center sm:text-left">Stay informed with our newsletter.</p>
            </div>
          </div>

          {/* Right: Featured Article */}
          <div className="max-w-md mx-auto">
             {featuredArticle && <FeaturedArticle article={featuredArticle} />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
