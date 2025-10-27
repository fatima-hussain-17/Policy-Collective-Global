import React from 'react';
import SectionTitle from './SectionTitle';

const PolicyRoundupPreview: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <SectionTitle>Monthly Policy Roundup</SectionTitle>
          <p className="mt-8 text-lg text-muted">
            Our curated digest of the most important policy developments in technology, sustainability, and health from across the Global South.
          </p>
        </div>
        <div className="bg-bg-alt border border-border p-8 rounded-xl max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-ink mb-2">October 2023 Roundup</h3>
            <p className="text-muted mb-6">Key insights on AI regulation, climate finance, and public health infrastructure.</p>
            <a href="#roundup" onClick={(e) => { e.preventDefault(); window.location.hash = '#roundup'; }} className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg shadow-sm hover:bg-opacity-90 transition-all duration-300">
                Read Now
            </a>
        </div>
      </div>
    </section>
  );
};

export default PolicyRoundupPreview;