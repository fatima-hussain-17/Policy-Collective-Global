
import React from 'react';
import SectionTitle from '../components/SectionTitle';

const PolicyRoundupPage: React.FC = () => {
  return (
    <div className="bg-bg py-20 md:py-28">
      <div className="container mx-auto px-6 text-center">
        <SectionTitle>Monthly Policy Roundup</SectionTitle>
        <p className="mt-8 text-xl text-muted max-w-3xl mx-auto">
          This section is currently under development. Soon, you'll find our curated digests of the most important policy developments in technology, sustainability, and health from across the Global South right here.
        </p>
        <div className="mt-12">
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); window.location.hash = '#home'; }}
            className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg shadow-sm hover:bg-opacity-90 transition-all duration-300"
          >
            Return to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default PolicyRoundupPage;
