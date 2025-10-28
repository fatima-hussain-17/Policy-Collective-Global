import React from 'react';
import { podcasts, podcastPlatforms } from '../data';
import SectionTitle from '../components/SectionTitle';
import { PlayIcon, SpotifyIcon, ApplePodcastsIcon, AudioWaveIcon } from '../components/Icons';

const iconMap: { [key: string]: React.FC<{className?: string}> } = {
  SpotifyIcon,
  ApplePodcastsIcon,
};

const PodcastPage: React.FC = () => {
  const [latestEpisode, ...olderEpisodes] = podcasts;

  const handleNav = (path: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.hash = path;
  };

  return (
    <div className="bg-bg py-16"> {/* <-- This is the opening <div> tag... */}
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <SectionTitle>Policy in Focus Podcast</SectionTitle>
            <p className="mt-8 text-lg text-muted max-w-3xl mx-auto">
             Tune in for insightful conversations with policymakers, researchers, and innovators who are tackling the most pressing challenges in the Global South.
            </p>
        </div>
        
        {/* Latest Episode Hero */}
        {latestEpisode && (
          <div className="bg-surface rounded-xl shadow-lg border border-border p-6 md:p-8 mb-16">
            <div className="flex flex-col md:flex-row gap-8">
              <img src={latestEpisode.imageUrl} alt={latestEpisode.title} className="w-full md:w-1/3 h-auto object-cover rounded-lg aspect-square" loading="eager" fetchpriority="high" width="500" height="500" />
              <div className="flex flex-col justify-center">
                <p className="font-semibold text-accent uppercase tracking-wider text-sm mb-2">
                  Latest Episode
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-ink mb-3">{latestEpisode.title}</h2>
                <p className="text-sm font-semibold text-muted mb-4">
                  Episode {latestEpisode.episodeNumber} &bull; {new Date(latestEpisode.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </p>
                <p className="text-muted leading-relaxed mb-6">
                  {latestEpisode.summary}
                </p>
                <div className="flex items-center gap-4">
                  <a href={`#podcast/${latestEpisode.slug}`} onClick={handleNav(`podcast/${latestEpisode.slug}`)} className="inline-flex items-center gap-2 bg-primary text-white font-bold py-2 px-6 rounded-lg shadow-sm hover:bg-opacity-90 transition-all">
                    <PlayIcon className="h-5 w-5" />
                    <span>Listen Now</span>
                  </a>
                  <a href={`#podcast/${latestEpisode.slug}`} onClick={handleNav(`podcast/${latestEpisode.slug}`)} className="inline-flex items-center gap-2 text-primary font-bold hover:underline">
                    Read Transcript &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Older Episodes & Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-2xl font-bold text-ink border-b-2 border-border pb-2">Previous Episodes</h3>
            {olderEpisodes.map((episode) => (
              <div key={episode.slug} className="bg-surface rounded-xl border border-border p-4 flex flex-col sm:flex-row items-center gap-6 transition-shadow hover:shadow-md">
                <img
                  src={episode.imageUrl}
                  alt={episode.title}
                  className="w-32 h-32 rounded-lg flex-shrink-0 object-cover"
                  loading="lazy"
                  decoding="async"
                  width="500"
                  height="500"
                />
                <div className="flex-grow text-center sm:text-left">
                  <p className="text-sm font-semibold text-muted mb-1">
                    Episode {episode.episodeNumber} &bull; {new Date(episode.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
                  </p>
                  <h3 className="text-xl font-bold text-ink mb-2">
                    <a href={`#podcast/${episode.slug}`} onClick={handleNav(`podcast/${episode.slug}`)} className="hover:underline">
                      {episode.title}
                    </a>
                  </h3>
                  <p className="text-muted text-sm leading-relaxed mb-4 hidden md:block">{episode.summary}</p>
                    <a href={`#podcast/${episode.slug}`} onClick={handleNav(`podcast/${episode.slug}`)} className="text-primary font-bold text-sm inline-flex items-center gap-1 group">
                      Listen Now <span className="transition-transform duration-300 group-hover:translate-x-1 inline-block">&rarr;</span>
                    </a>
                </div>
              </div>
            ))}
          </div>

          <aside className="lg:col-span-1 h-fit lg:sticky lg:top-32">
              <div className="bg-surface rounded-xl border border-border p-6">
                <h3 className="text-xl font-bold text-ink mb-4 flex items-center gap-2">
                  <AudioWaveIcon className="h-6 w-6 text-accent" />
                  Subscribe
                </h3>
                <p className="text-muted text-sm mb-6">Never miss an episode. Subscribe on your favorite platform.</p>
                <div className="space-y-3">
                    {podcastPlatforms.map(platform => {
                        const Icon = iconMap[platform.icon];
                        return (
                            <a key={platform.name} href={platform.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 bg-bg-alt rounded-lg border border-border hover:border-primary transition-colors">
                                {Icon && <Icon className="h-6 w-6 text-primary" />}
                                <span className="font-bold text-primary">{platform.name}</span>
                            </a>
                        )
                    })}
                </div>
              </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default PodcastPage;