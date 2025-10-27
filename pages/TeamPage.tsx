
import React, { useState } from 'react';
import { researchers, mentors } from '../data';
import type { Person } from '../data';
import SectionTitle from '../components/SectionTitle';
import { LinkedInIcon, TwitterIcon, ChevronDownIcon } from '../components/Icons';

const ProfileCard: React.FC<{ person: Person }> = ({ person }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const profileId = `profile-details-${person.name.replace(/\s+/g, '-')}`;

  return (
    <div className="bg-surface rounded-xl border border-border shadow transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left p-6 flex flex-col items-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-xl"
        aria-expanded={isExpanded}
        aria-controls={profileId}
      >
        <img
          src={person.imageUrl}
          alt={person.name}
          className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
          loading="lazy"
          decoding="async"
          width="200"
          height="200"
        />
        <h3 className="text-xl font-bold text-ink text-center">{person.name}</h3>
        <p className="text-muted text-center">{person.title}</p>
        <div className="flex items-center gap-2 text-primary font-semibold text-sm mt-2">
            <span>{isExpanded ? 'Show Less' : 'Show More'}</span>
            <ChevronDownIcon className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
        </div>
      </button>
      <div
        id={profileId}
        className={`transition-all duration-500 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[500px]' : 'max-h-0'}`}
      >
        <div className="px-6 pb-6 border-t border-border pt-4 text-center">
          <p className="text-muted text-sm mb-6">{person.bio}</p>

          <div className="space-y-4 text-sm text-left">
            {person.degree && (
              <div className="flex">
                <span className="font-bold text-ink w-24 flex-shrink-0">Education</span>
                <span className="text-muted">{person.degree}</span>
              </div>
            )}
            {person.thematicAreas && person.thematicAreas.length > 0 && (
              <div className="flex">
                <span className="font-bold text-ink w-24 flex-shrink-0">Focus Areas</span>
                <span className="text-muted">{person.thematicAreas.join(', ')}</span>
              </div>
            )}
            {person.latestWorks && person.latestWorks.length > 0 && (
              <div className="flex">
                <span className="font-bold text-ink w-24 flex-shrink-0">Latest Work</span>
                <div className="flex flex-col">
                  {person.latestWorks.map(work => (
                    work.slug ? (
                      <a key={work.title} href={`#article/${work.slug}`} onClick={(e) => { e.preventDefault(); window.location.hash = `#article/${work.slug}`; }} className="text-primary hover:underline">{work.title}</a>
                    ) : (
                      <span key={work.title} className="text-muted">{work.title}</span>
                    )
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="flex items-center justify-center gap-4 mt-6">
            {person.linkedin && (
              <a href={person.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${person.name}'s LinkedIn`} className="text-muted hover:text-primary transition-colors">
                <LinkedInIcon className="h-5 w-5" />
              </a>
            )}
            {person.twitter && (
              <a href={person.twitter} target="_blank" rel="noopener noreferrer" aria-label={`${person.name}'s Twitter`} className="text-muted hover:text-primary transition-colors">
                <TwitterIcon className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const ContributorsPage: React.FC = () => {
  return (
    <section className="bg-bg py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <SectionTitle>Our Team</SectionTitle>
          <p className="mt-8 text-lg text-muted max-w-3xl mx-auto">
            We are a dynamic collective of students, young professionals, and researchers passionate about evidence-based policymaking, supported by a network of experienced mentors.
          </p>
        </div>

        {/* Researchers */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-ink text-center mb-12">Contributors</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchers.map((person) => (
              <ProfileCard key={person.name} person={person} />
            ))}
          </div>
        </div>

        {/* Mentors */}
        <div>
          <h2 className="text-3xl font-bold text-ink text-center mb-12">Mentors</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {mentors.map((person) => (
              <ProfileCard key={person.name} person={person} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContributorsPage;