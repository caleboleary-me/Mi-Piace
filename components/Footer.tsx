
import React from 'react';
import { Instagram, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-serif mb-6 italic text-stone-300">"Stop by for your next coffee."</h2>
          <p className="text-stone-500 max-w-md mb-10 leading-relaxed">
            Follow our journey and stay updated with seasonal brews and daily specials.
          </p>
          <div className="flex gap-6">
            <a href="#" className="w-12 h-12 flex items-center justify-center border border-stone-700 rounded-full hover:bg-white hover:text-stone-900 transition-all duration-300">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-12 h-12 flex items-center justify-center border border-stone-700 rounded-full hover:bg-white hover:text-stone-900 transition-all duration-300">
              <Facebook size={20} />
            </a>
          </div>
        </div>

        <div className="pt-10 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-xl font-serif tracking-widest">MI PIACE</span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-stone-500">ESPRESSO BAR</span>
          </div>
          
          <p className="text-stone-600 text-xs">
            © {new Date().getFullYear()} Mi Piace Espresso Bar Cairns. All rights reserved.
          </p>
          
          <div className="flex gap-8 text-[10px] tracking-widest uppercase text-stone-500 font-medium">
            <a href="#" className="hover:text-white transition-colors">PRIVACY</a>
            <a href="#" className="hover:text-white transition-colors">TERMS</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
