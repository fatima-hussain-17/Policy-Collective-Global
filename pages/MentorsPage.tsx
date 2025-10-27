
import React from 'react';
import { mentors } from '../data';
import type { Person } from '../data';
import SectionTitle from '../components/SectionTitle';
import { LinkedInIcon, TwitterIcon } from '../components/Icons';

const MentorCard: React.FC<{ person: Person }> = ({ person }) => {
  return (
    <div className="bg-surface rounded-xl border border-border shadow-sm p-6 flex flex-col sm:flex-row items-center text-center sm:text-left gap-6">
      <img
        src={person.imageUrl}
        alt={person.name}
        className="w-32 h-32 rounded-full mx-auto sm:mx-0 flex-shrink-0 object-cover"
      />
      <div>
        <h3 className="text-2xl font-bold text-ink">{person.name}</h3>
        <p className="text-primary font-semibold mb-1">{person.title}</p>
        <p className="text-accent font-semibold text-sm mb-3">{person.region}</p>
        <blockquote className="text-muted italic text-sm mb-4 relative pl-5">
            <span className="absolute left-0 top-0 text-3xl text-accent/50 leading-none">&ldquo;</span>
            {person.bio}
        </blockquote>
        <div className="flex items-center justify-center sm:justify-start gap-4">
          {person.linkedin && (
            <a href={person.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${person.name}'s LinkedIn`} className="text-muted hover:text-primary transition-colors duration-200">
              <LinkedInIcon className="h-6 w-6" />
            </a>
          )}
          {person.twitter && (
            <a href={person.twitter} target="_blank" rel="noopener noreferrer" aria-label={`${person.name}'s Twitter`} className="text-muted hover:text-primary transition-colors duration-200">
              <TwitterIcon className="h-6 w-6" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const MentorsPage: React.FC = () => {
  return (
    <section className="bg-bg py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <SectionTitle>Our Mentors</SectionTitle>
          <p className="mt-8 text-lg text-muted max-w-3xl mx-auto">
            We are grateful for the guidance and expertise of our distinguished mentors, who are leaders in their respective fields.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
            {mentors.map((person, index) => (
              <MentorCard key={index} person={person} />
            ))}
        </div>

      </div>
    </section>
  );
};

export default MentorsPage;
