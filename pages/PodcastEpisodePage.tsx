
import React from 'react';
import type { Podcast } from '../data';
import { podcastPlatforms } from '../data';
import Breadcrumbs from '../components/Breadcrumbs';
import { SpotifyIcon, ApplePodcastsIcon, AudioWaveIcon } from '../components/Icons';

const iconMap: { [key: string]: React.FC<{className?: string}> } = {
  SpotifyIcon,
  ApplePodcastsIcon,
};

interface PodcastEpisodePageProps {
  podcast: Podcast;
}

const PodcastEpisodePage: React.FC<PodcastEpisodePageProps> = ({ podcast }) => {
  const crumbs = [
    { label: 'Home', href: '#home' },
    { label: 'Podcast', href: '#podcast' },
    { label: podcast.title, href: `#podcast/${podcast.slug}` },
  ];

  return (
    <div className="bg-surface py-12 md:py-16">
      <div className="container mx-auto px-6">
        <Breadcrumbs crumbs={crumbs} />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-6">
          <div className="lg:col-span-2">
            <header className="mb-8">
              <p className="font-semibold text-accent uppercase tracking-wider text-sm mb-2">
                Episode {podcast.episodeNumber}
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-ink leading-tight mb-4">
                {podcast.title}
              </h1>
              <p className="text-muted font-semibold">
                {new Date(podcast.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </header>

            <div className="mb-8">
                <audio controls src={podcast.audioUrl} className="w-full rounded-lg shadow">
                    Your browser does not support the audio element.
                </audio>
            </div>
            
            <article>
              <h2 className="text-3xl font-bold text-ink border-b-2 border-border pb-3 mb-6">
                Transcript
              </h2>
              <div 
                className="prose prose-lg max-w-none text-muted leading-relaxed space-y-4"
                dangerouslySetInnerHTML={{ __html: podcast.transcript }}
              />
            </article>
          </div>

          <aside className="lg:col-span-1 h-fit lg:sticky lg:top-32">
            <div className="space-y-8">
                <div>
                    <img src={podcast.imageUrl} alt={podcast.title} className="w-full h-auto object-cover rounded-xl shadow-lg aspect-square" loading="eager" fetchpriority="high" width="500" height="500" />
                </div>
                <div className="bg-bg-alt rounded-xl border border-border p-6">
                    <h3 className="text-xl font-bold text-ink mb-4 flex items-center gap-2">
                      <AudioWaveIcon className="h-6 w-6 text-accent" />
                      Subscribe
                    </h3>
                    <p className="text-muted text-sm mb-6">Never miss an episode. Subscribe on your favorite platform.</p>
                    <div className="space-y-3">
                        {podcastPlatforms.map(platform => {
                            const Icon = iconMap[platform.icon];
                            return (
                                <a key={platform.name} href={platform.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 bg-surface rounded-lg border border-border hover:border-primary transition-colors">
                                    {Icon && <Icon className="h-6 w-6 text-primary" />}
                                    <span className="font-bold text-primary">{platform.name}</span>
                                </a>
                            )
                        })}
                    </div>
                </div>
            </div>
          </aside>
        </div>
      </div>
       <style>{`
        .prose p { margin-bottom: 1em; }
        .prose strong { color: var(--ink); }
      `}</style>
    </div>
  );
};

export default PodcastEpisodePage;