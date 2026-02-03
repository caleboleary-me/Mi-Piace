
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  isScrolled: boolean;
}

export const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Why Visit', href: '#why-visit' },
    { name: 'Location', href: '#location' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#hero" className="flex flex-col items-center group">
          <span className={`text-2xl font-serif tracking-widest transition-colors ${isScrolled ? 'text-stone-900' : 'text-white'}`}>
            MI PIACE
          </span>
          <div className={`h-[1px] w-full transition-colors ${isScrolled ? 'bg-stone-400' : 'bg-white/50'}`}></div>
          <span className={`text-[10px] tracking-[0.3em] uppercase transition-colors ${isScrolled ? 'text-stone-500' : 'text-white/80'}`}>
            ESPRESSO BAR
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-stone-500 ${
                isScrolled ? 'text-stone-800' : 'text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#location"
            className={`px-5 py-2 text-sm tracking-wide transition-all border ${
              isScrolled 
                ? 'border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white' 
                : 'border-white text-white hover:bg-white hover:text-stone-900'
            }`}
          >
            FIND US
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? 'text-stone-900' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-stone-900' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-stone-100 shadow-xl p-8 flex flex-col space-y-6 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium text-stone-800 border-b border-stone-50 pb-2"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#location"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full text-center py-4 bg-stone-900 text-white font-medium"
          >
            FIND US
          </a>
        </div>
      )}
    </header>
  );
};
