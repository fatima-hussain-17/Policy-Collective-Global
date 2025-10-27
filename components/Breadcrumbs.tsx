import React from 'react';

interface Breadcrumb {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  crumbs: Breadcrumb[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ crumbs }) => {
  const handleNav = (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.hash = href;
  };

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center gap-2 text-sm text-muted flex-wrap">
        {crumbs.map((crumb, index) => (
          <li key={index} className="flex items-center gap-2">
            {index < crumbs.length - 1 ? (
              <a href={crumb.href} onClick={handleNav(crumb.href)} className="hover:underline text-primary font-semibold">
                {crumb.label}
              </a>
            ) : (
               <span className="font-medium text-muted" aria-current="page">{crumb.label}</span>
            )}
            {index < crumbs.length - 1 && <span className="text-muted/60">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;