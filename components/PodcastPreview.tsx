
import React from 'react';
import { podcasts } from '../data';
import SectionTitle from './SectionTitle';

const PodcastPreview: React.FC = () => {
  const latestEpisode = podcasts[0];

  if (!latestEpisode) {
    return null;
  }

  return (
    <section className="py-20 md:py-28 bg-bg-alt">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <SectionTitle>Latest Podcast Episode</SectionTitle>
        </div>
        <div className="bg-surface rounded-xl shadow-lg border border-border p-8 md:p-10 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-shrink-0">
            <img 
              src={latestEpisode.imageUrl} 
              alt={latestEpisode.title} 
              className="w-52 h-52 md:w-64 md:h-64 rounded-xl object-cover shadow-md"
              loading="lazy"
              decoding="async"
              width="500"
              height="500"
            />
          </div>
          <div className="text-center md:text-left">
             <p className="font-semibold text-accent uppercase tracking-wider text-sm mb-2">
              Episode {latestEpisode.episodeNumber} &bull; {new Date(latestEpisode.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
            <h3 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              {latestEpisode.title}
            </h3>
            <p className="text-muted leading-relaxed mb-8">
              {latestEpisode.summary}
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <a 
                href={`#podcast/${latestEpisode.slug}`}
                onClick={(e) => { e.preventDefault(); window.location.hash = `#podcast/${latestEpisode.slug}`; }} 
                className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg shadow-sm hover:bg-opacity-90 transition-all duration-300"
              >
                Listen Now
              </a>
              <a 
                href="#podcast" 
                onClick={(e) => { e.preventDefault(); window.location.hash = '#podcast'; }} 
                className="inline-block bg-transparent border-2 border-primary text-primary font-bold py-3 px-8 rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
              >
                View All Episodes
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PodcastPreview;