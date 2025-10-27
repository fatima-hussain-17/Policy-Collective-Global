

import React from 'react';
import { researchers, mentors } from '../data';
import SectionTitle from './SectionTitle';

const Contributors: React.FC = () => {

  return (
    <section className="py-20 md:py-28 bg-bg-alt">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <SectionTitle>Meet Our Team</SectionTitle>
        </div>
        
        {/* Researchers */}
        <div className="mb-16">
            <h3 className="text-2xl font-bold text-ink text-center mb-10">Contributors</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            {researchers.slice(0,3).map((researcher, index) => (
                    <div key={index} className="text-center">
                    <img
                        src={researcher.imageUrl}
                        alt={researcher.name}
                        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow"
                        loading="lazy"
                        decoding="async"
                        width="200"
                        height="200"
                    />
                    <h3 className="text-xl font-bold text-ink">{researcher.name}</h3>
                    <p className="text-muted">{researcher.title}</p>
                    </div>
                ))}
            </div>
        </div>
        
        {/* Mentors */}
        <div>
            <h3 className="text-2xl font-bold text-ink text-center mb-10">Mentors</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto">
                {mentors.map((mentor, index) => (
                    <div key={index} className="text-center">
                    <img
                        src={mentor.imageUrl}
                        alt={mentor.name}
                        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow"
                        loading="lazy"
                        decoding="async"
                        width="200"
                        height="200"
                    />
                    <h3 className="text-xl font-bold text-ink">{mentor.name}</h3>
                    <p className="text-muted">{mentor.title}</p>
                    </div>
                ))}
            </div>
        </div>

        <div className="text-center mt-20">
            <a href="#contributors" onClick={(e) => { e.preventDefault(); window.location.hash = '#contributors'; }} className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg shadow-sm hover:bg-opacity-90 transition-all duration-300">
                Meet Our Team
            </a>
        </div>
      </div>
    </section>
  );
};

export default Contributors;