
import React from 'react';
import SectionTitle from '../components/SectionTitle';

const AboutPage: React.FC = () => {
  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center">
            <SectionTitle>Our Mission</SectionTitle>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center my-16">
            <div className="prose prose-lg max-w-none text-muted leading-relaxed space-y-6 text-left">
                <p>
                    Policy Collective Global is a youth-led collective dedicated to advancing inclusive and evidence-based policy dialogue. Our mission is to generate <strong>ideas that shape tomorrow's policy</strong>, focusing on the unique challenges and opportunities within the Global South. 
                </p>
                <p>
                    We empower young thinkers and leaders by providing a platform for rigorous analysis, fostering a deeper understanding of the forces shaping our world.
                </p>
            </div>
            <div>
                <img src="https://picsum.photos/seed/mission/600/400" alt="Team collaborating on policy research" className="rounded-xl shadow w-full h-auto object-cover" loading="lazy" decoding="async" width="600" height="400"/>
            </div>
        </div>
        
        <hr className="my-16 border-t border-accent/20" />

        <div className="prose prose-lg max-w-none text-muted leading-relaxed space-y-6 mx-auto text-center">
          <h2 className="text-3xl font-bold text-ink pt-6">What We Do</h2>
          <p>
            We are a dynamic collective of students, young professionals, and researchers united by a passion for evidence-based policymaking. Our work is centered on three critical thematic areas: Technology & AI Governance, Sustainable Development & Urban Futures, and Health Policy & Equity. Through in-depth articles, accessible infographics, and comprehensive monthly roundups, we dissect complex policy challenges. Our collaborative research approach emphasizes diverse perspectives to propose innovative, equitable, and actionable solutions tailored for the Global South.
          </p>
          
          <hr className="my-12 border-t border-accent/20" />
          
           <h2 className="text-3xl font-bold text-ink pt-6">Join the Dialogue</h2>
           <p>
            We believe that diverse voices lead to better policy. We are always looking for passionate new contributors to join our collective. If you are a student, researcher, or young professional with expertise in our thematic areas and a desire to influence policy debates, we want to hear from you. We welcome submissions for articles, data visualizations, and research papers that are well-researched and offer a fresh perspective. Get in touch to share your ideas and become part of a community shaping the future.
           </p>
        </div>

        <div className="mt-16 bg-bg-alt p-8 md:p-12 rounded-xl border border-border">
          <h2 className="text-3xl font-bold text-ink text-center mb-8">Contact Us</h2>
          <form className="max-w-xl mx-auto space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-ink mb-2">Full Name</label>
                <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-border rounded-lg bg-white focus:outline-none focus:ring-1 focus:ring-primary" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-ink mb-2">Email Address</label>
                <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-border rounded-lg bg-white focus:outline-none focus:ring-1 focus:ring-primary" required />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-bold text-ink mb-2">Subject</label>
              <input type="text" id="subject" name="subject" className="w-full px-4 py-2 border border-border rounded-lg bg-white focus:outline-none focus:ring-1 focus:ring-primary" required />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-bold text-ink mb-2">Message</label>
              <textarea id="message" name="message" rows={5} className="w-full px-4 py-2 border border-border rounded-lg bg-white focus:outline-none focus:ring-1 focus:ring-primary" required></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="inline-block bg-primary text-white font-bold py-3 px-10 rounded-lg shadow-sm hover:bg-opacity-90 transition-all duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
};

export default AboutPage;