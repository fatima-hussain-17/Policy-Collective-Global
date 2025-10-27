
import React, { useState, useEffect } from 'react';
import { MenuIcon, CloseIcon, ScrollIcon, SearchIcon, ChevronDownIcon } from './Icons';
import { thematicAreas } from '../data';

const navLinks = [
  { name: 'Home', path: '#home' },
  {
    name: 'Thematic Areas',
    path: '#thematic-areas',
    children: thematicAreas.map(area => ({
      name: area.title,
      path: `#thematic-areas/${area.slug}`
    }))
  },
  { name: 'Infographics', path: '#infographics' },
  { name: 'Roundup', path: '#roundup' },
  { name: 'Podcast', path: '#podcast' },
  { name: 'Contributors', path: '#contributors' },
  { name: 'About', path: '#about' },
];

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ searchQuery, onSearchChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);
  
  const handleNavClick = (path: string) => {
    window.location.hash = path;
    setIsMenuOpen(false);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.hash = '#thematic-areas';
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };


  return (
    <>
      <header className="sticky top-0 z-40 bg-surface/90 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between gap-8">
            <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }} className="flex items-center gap-2 text-primary font-bold text-xl flex-shrink-0">
              <ScrollIcon className="h-8 w-8" />
              <span className="hidden sm:inline">Policy Collective Global</span>
              <span className="sm:hidden">PCG</span>
            </a>
            
            <div className="flex items-center justify-end w-full">
                <nav className="hidden md:flex items-center gap-3 lg:gap-6">
                  {navLinks.map((link) => (
                    link.children ? (
                      <div key={link.name} className="relative group">
                        <a href={link.path} onClick={(e) => { e.preventDefault(); handleNavClick(link.path.substring(1)); }} className="flex items-center gap-1 text-muted font-medium hover:text-ink transition-colors duration-300 cursor-pointer text-sm lg:text-base whitespace-nowrap">
                          {link.name}
                          <ChevronDownIcon className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                        </a>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-72 bg-surface rounded-xl shadow border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 p-2">
                          <div className="flex flex-col gap-1">
                            {link.children.map(child => (
                              <a key={child.name} href={child.path} onClick={(e) => { e.preventDefault(); handleNavClick(child.path.substring(1)); }} className="block px-4 py-2 text-muted hover:bg-bg-alt hover:text-ink rounded-lg transition-colors">
                                {child.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <a key={link.name} href={link.path} onClick={(e) => { e.preventDefault(); handleNavClick(link.path.substring(1)); }} className="text-muted font-medium hover:text-ink transition-colors duration-300 text-sm lg:text-base whitespace-nowrap">
                        {link.name}
                      </a>
                    )
                  ))}
                </nav>

                <form onSubmit={handleSearchSubmit} className="hidden md:flex items-center relative ml-4 lg:ml-8">
                    <SearchIcon className="absolute left-3 h-5 w-5 text-gray-400 pointer-events-none" />
                    <input
                        type="search"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => onSearchChange(e.target.value)}
                        className="pl-10 pr-4 py-2 w-28 lg:w-48 border border-gray-300 rounded-lg bg-transparent focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                    />
                </form>

                <div className="md:hidden">
                <button onClick={() => setIsMenuOpen(true)} aria-label="Open menu">
                    <MenuIcon className="h-6 w-6 text-primary" />
                </button>
                </div>
            </div>
          </div>
        </div>
      </header>
      
      <div
        className={`md:hidden fixed inset-0 z-50 transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        role="dialog"
        aria-modal="true"
      >
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        ></div>
        
        <div className={`relative bg-surface w-4/5 max-w-xs h-full shadow-xl transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="p-6">
            <div className="flex items-center justify-between mb-8">
                <a href="#home" className="flex items-center gap-2 text-primary font-bold text-xl" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>
                    <ScrollIcon className="h-8 w-8" />
                    <span>PCG</span>
                </a>
                <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
                  <CloseIcon className="h-6 w-6 text-primary" />
                </button>
            </div>
            
            <form onSubmit={handleSearchSubmit} className="relative mb-6">
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                <input
                    type="search"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                    className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                />
            </form>

            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <a 
                    href={link.path}
                    className="text-muted font-semibold text-lg hover:text-ink transition-colors duration-300"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.path.substring(1));
                    }}
                  >
                    {link.name}
                  </a>
                  {link.children && (
                    <div className="mt-3 pl-4 flex flex-col gap-3 border-l-2 border-border">
                      {link.children.map(child => (
                        <a
                          key={child.name}
                          href={child.path}
                          className="text-muted font-medium text-base hover:text-ink transition-colors duration-300"
                           onClick={(e) => {
                              e.preventDefault();
                              handleNavClick(child.path.substring(1));
                           }}
                        >
                          {child.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
