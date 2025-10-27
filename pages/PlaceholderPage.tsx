import React from 'react';

interface PlaceholderPageProps {
  title: string;
}

const PlaceholderPage: React.FC<PlaceholderPageProps> = ({ title }) => {
  return (
    <div className="bg-bg" style={{ padding: '100px 0' }}>
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-ink mb-6">{title}</h1>
        <p className="mt-4 text-xl text-muted/70 max-w-2xl mx-auto">
          This section is being updated.
        </p>
        <div className="mt-10">
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); window.location.hash = '#home'; }}
            className="inline-block bg-transparent border-2 border-primary text-primary font-bold py-3 px-8 rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
          >
            Return to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default PlaceholderPage;