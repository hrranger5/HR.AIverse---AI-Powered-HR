
import React, { useState, useEffect } from 'react';
import MenuIcon from './icons/MenuIcon';
import XIcon from './icons/XIcon';
import Logo from './Logo';

interface NavLinkProps {
  children: React.ReactNode;
  onClick: () => void;
  isActive: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ children, onClick, isActive }) => (
  <a
    href="#"
    onClick={(e) => {
      e.preventDefault();
      onClick();
    }}
    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
      isActive
        ? 'bg-accent text-primary font-bold'
        : 'text-neutral-300 hover:bg-accent hover:text-primary'
    }`}
    aria-current={isActive ? 'page' : undefined}
  >
    {children}
  </a>
);

interface HeaderProps {
    setCurrentPage: (page: string) => void;
    currentPage: string;
}

const Header: React.FC<HeaderProps> = ({ setCurrentPage, currentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { page: 'home', text: 'Home' },
    { page: 'features', text: 'Features' },
    { page: 'about', text: 'About' },
    { page: 'testimonials', text: 'Testimonials' },
    { page: 'contact', text: 'Contact' },
  ];
  
  const handleNavClick = (page: string) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    window.scrollTo(0, 0); // Scroll to top on page change
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled || isMenuOpen || currentPage !== 'home' ? 'bg-primary/80 shadow-lg backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>
              <Logo />
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <NavLink key={link.page} onClick={() => handleNavClick(link.page)} isActive={currentPage === link.page}>
                    {link.text}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="bg-neutral-800 inline-flex items-center justify-center p-2 rounded-md text-neutral-400 hover:text-white hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-primary border-t border-neutral-700" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.page}
                href="#"
                onClick={(e) => { e.preventDefault(); handleNavClick(link.page); }}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                    currentPage === link.page
                    ? 'bg-accent text-primary font-bold'
                    : 'text-neutral-300 hover:bg-accent hover:text-primary'
                }`}
                aria-current={currentPage === link.page ? 'page' : undefined}
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;