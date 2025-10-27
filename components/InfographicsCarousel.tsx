
import React from 'react';
import { infographics } from '../data';
import SectionTitle from './SectionTitle';

const InfographicsCarousel: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <SectionTitle>Infographics</SectionTitle>
           <p className="mt-8 text-lg text-muted max-w-2xl mx-auto">
            Visualizing complex policy data to make it accessible and understandable.
          </p>
        </div>
      </div>
      <div className="relative">
        <div className="flex overflow-x-auto space-x-8 pb-8 px-6 snap-x snap-mandatory">
          {infographics.map((item, index) => (
            <div key={index} className="flex-shrink-0 w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4 snap-center">
              <div className="bg-surface rounded-xl shadow border border-border overflow-hidden group cursor-pointer hover:-translate-y-1 transition-transform duration-300">
                <img src={item.imageUrl} alt={item.title} className="w-full h-auto object-cover aspect-square" loading="lazy" decoding="async" width="500" height="500" />
                <div className="p-4">
                  <h3 className="font-bold text-ink truncate group-hover:underline">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
           <div className="flex-shrink-0 w-8"></div>
        </div>
      </div>
    </section>
  );
};

export default InfographicsCarousel;