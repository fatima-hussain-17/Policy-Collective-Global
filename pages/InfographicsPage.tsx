
import React from 'react';
import SectionTitle from '../components/SectionTitle';

const InfographicsPage: React.FC = () => {
  return (
    <div className="bg-bg py-20 md:py-28">
      <div className="container mx-auto px-6 text-center">
        <SectionTitle>Interactive Infographics</SectionTitle>
        <p className="mt-8 text-xl text-muted max-w-3xl mx-auto">
          Exciting things are coming! This space will soon feature cutting-edge, <strong className="text-primary">AI-powered interactive infographics</strong>. We're working on transforming complex policy data into engaging, explorable visualizations to make it more accessible than ever.
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

export default InfographicsPage;
