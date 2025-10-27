import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, className }) => (
  <div className={`relative inline-block ${className}`}>
    <h2 className="text-3xl md:text-4xl font-bold text-ink">
      {children}
    </h2>
    <div className="absolute left-0 bottom-[-10px] w-16 h-[3px] bg-accent rounded-full"></div>
  </div>
);

export default SectionTitle;