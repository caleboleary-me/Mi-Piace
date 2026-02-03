
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] hover:scale-105"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=2070&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h2 className="text-white text-sm md:text-base font-medium tracking-[0.5em] uppercase mb-4 opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
          Sheridan Street, Cairns
        </h2>
        <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-serif mb-6 opacity-0 animate-[fadeIn_1s_ease-out_0.3s_forwards]">
          Mi Piace <br className="md:hidden" /> Espresso Bar
        </h1>
        <p className="text-white/90 text-lg md:text-xl font-light mb-10 opacity-0 animate-[fadeIn_1s_ease-out_0.6s_forwards]">
          Quality coffee. Quick service. Your daily city ritual.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-[fadeIn_1s_ease-out_0.9s_forwards]">
          <a 
            href="#location" 
            className="w-full sm:w-auto px-8 py-4 bg-white text-stone-900 font-medium tracking-wide hover:bg-stone-100 transition-colors"
          >
            FIND US
          </a>
          <a 
            href="#menu" 
            className="w-full sm:w-auto px-8 py-4 border border-white text-white font-medium tracking-wide hover:bg-white/10 transition-colors"
          >
            VIEW MENU
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/60 text-[10px] tracking-widest uppercase gap-2">
        <span>Scroll</span>
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-white animate-[scrollLine_2s_infinite]"></div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scrollLine {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </div>
  );
};
