
import React from 'react';
import { LinkedInIcon, TwitterIcon, ScrollIcon, InstagramIcon } from './Icons';

const Footer: React.FC = () => {

  return (
    <footer className="text-sm">
      <div className="bg-surface border-t border-border">
        <div className="container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-3 gap-10 text-center md:text-left">
            
            {/* Column 1: Logo & Mission */}
            <div className="space-y-4">
              <div className="flex justify-center md:justify-start">
                  <a href="#home" onClick={(e) => { e.preventDefault(); window.location.hash = '#home'; }} className="flex items-center gap-2 text-primary font-bold text-xl">
                  <ScrollIcon className="h-8 w-8" />
                  <span>Policy Collective Global</span>
                </a>
              </div>
              <p className="text-muted max-w-sm mx-auto md:mx-0">
                A youth-led collective advancing inclusive and evidence-based policy dialogue.
              </p>
            </div>

            {/* Column 2: Newsletter */}
            <div>
              <h3 className="font-semibold text-lg text-ink mb-4">Stay Connected</h3>
              <p className="text-muted mb-4">Get the latest policy insights delivered to your inbox.</p>
              <form className="flex flex-col gap-3 max-w-sm mx-auto md:mx-0">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-4 py-2 border border-border rounded-lg bg-white placeholder-muted/70 focus:outline-none focus:ring-1 focus:ring-primary"
                    aria-label="Email for newsletter"
                  />
                  <button
                    type="submit"
                    className="bg-primary text-white font-bold py-2 px-4 rounded-lg hover:bg-opacity-90 transition-all"
                  >
                    Subscribe
                  </button>
                </form>
            </div>

            {/* Column 3: Social Links */}
            <div className="md:justify-self-end">
              <h3 className="font-semibold text-lg text-ink mb-4">Follow Us</h3>
              <div className="flex justify-center md:justify-start items-center gap-6">
                <a href="https://www.linkedin.com/company/policycollectiveglobal" aria-label="LinkedIn" className="text-muted hover:text-ink transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                  <LinkedInIcon className="h-6 w-6" />
                </a>
                <a href="https://instagram.com/policycollectiveglobal" aria-label="Instagram" className="text-muted hover:text-ink transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                  <InstagramIcon className="h-6 w-6" />
                </a>
                <a href="https://twitter.com/PolicyCoGlobal" aria-label="Twitter" className="text-muted hover:text-ink transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                  <TwitterIcon className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary text-white">
        <div className="container mx-auto px-6 py-6 text-center text-sm text-white/80">
          <p>&copy; {new Date().getFullYear()} Policy Collective Global. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
