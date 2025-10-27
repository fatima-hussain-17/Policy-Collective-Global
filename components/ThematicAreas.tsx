
import React from 'react';
import { thematicAreas } from '../data';
import SectionTitle from './SectionTitle';

const ThematicAreas: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-bg-alt">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <SectionTitle>Our Thematic Areas</SectionTitle>
           <p className="mt-8 text-lg text-muted max-w-3xl mx-auto">Our research focuses on three critical pillars shaping the future of the Global South.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {thematicAreas.map((area, index) => (
             <div key={index} className="bg-surface p-8 rounded-xl border border-border shadow text-center hover:-translate-y-1 transition-transform duration-300">
                <img src={area.imageUrl.replace('/600/400', '/400/250')} alt={area.title} className="w-full h-40 object-cover rounded-lg mx-auto mb-6" loading="lazy" decoding="async" width="400" height="250" />
                <h3 className="text-2xl font-bold text-ink mb-4">{area.title}</h3>
                <p className="text-muted leading-relaxed mb-6">{area.description}</p>
                 <a href={`#thematic-areas/${area.slug}`} onClick={(e) => { e.preventDefault(); window.location.hash = `#thematic-areas/${area.slug}`; }} className="font-semibold text-primary hover:underline group">
                  Explore this Theme <span className="transition-transform duration-300 group-hover:translate-x-1 inline-block">&rarr;</span>
                </a>
              </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThematicAreas;