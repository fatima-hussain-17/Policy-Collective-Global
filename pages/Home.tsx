
import React from 'react';
import Hero from '../components/Hero';
import ThematicAreas from '../components/ThematicAreas';
import ArticlesPreview from '../components/ArticlesPreview';
import PolicyRoundupPreview from '../components/PolicyRoundupPreview';
import PodcastPreview from '../components/PodcastPreview';
import SectionTitle from '../components/SectionTitle';
import { articles } from '../data';

interface HomeProps {
  searchQuery: string;
}

const Home: React.FC<HomeProps> = ({ searchQuery }) => {
  return (
    <>
      <Hero />
      <ArticlesPreview articles={articles} searchQuery={searchQuery} />
      <ThematicAreas />
       <section className="py-20 md:py-28 bg-surface">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img src="https://picsum.photos/seed/mission/600/400" alt="Team collaborating on policy research" className="rounded-xl shadow w-full h-auto object-cover" loading="lazy" decoding="async" width="600" height="400"/>
            </div>
            <div className="text-left">
              <SectionTitle>Our Mission</SectionTitle>
              <div className="prose prose-lg max-w-none text-muted leading-relaxed space-y-6 mt-8">
                <p>
                  Policy Collective Global is a youth-led collective dedicated to advancing inclusive and evidence-based policy dialogue. Our mission is to generate <strong>ideas that shape tomorrow's policy</strong>, focusing on the unique challenges and opportunities within the Global South.
                </p>
                <a href="#about" onClick={(e) => { e.preventDefault(); window.location.hash = '#about'; }} className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg shadow-sm hover:bg-opacity-90 transition-all duration-300 no-underline">
                  Learn More About Us
                </a>
              </div>
            </div>
          </div>
        </div>
         <style>{`
          .prose a { text-decoration: none; }
        `}</style>
      </section>
      <PolicyRoundupPreview />
      <PodcastPreview />
    </>
  );
};

export default Home;