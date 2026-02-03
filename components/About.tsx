
import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="w-full lg:w-1/2 relative">
          <div className="aspect-[4/5] bg-stone-200 overflow-hidden relative">
            <img 
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop" 
              alt="Mi Piace Espresso Bar Interior"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[#E8EAE6] -z-10 hidden md:block"></div>
        </div>
        
        <div className="w-full lg:w-1/2 flex flex-col items-start">
          <span className="text-stone-400 text-xs font-semibold tracking-widest uppercase mb-4">ESTABLISHED LOCAL</span>
          <h2 className="text-4xl md:text-5xl text-stone-900 font-serif leading-tight mb-8">
            Your morning ritual, sorted.
          </h2>
          <div className="space-y-6 text-stone-600 leading-relaxed max-w-lg">
            <p>
              Located on Sheridan Street, Mi Piace Espresso Bar is a central hub for Cairns locals and city workers. We know your time is valuable, which is why we focus on two things: consistency and speed.
            </p>
            <p>
              Whether you're stopping by for your first coffee of the day or a quick mid-afternoon pick-me-up, you can count on a high-quality brew every time. We're proud to be a reliable part of the Cairns CBD community.
            </p>
          </div>
          <div className="mt-10 flex items-center gap-6">
            <div className="flex flex-col">
              <span className="text-stone-900 font-serif text-3xl italic">Reliable</span>
              <span className="text-xs text-stone-400 tracking-widest uppercase">Service</span>
            </div>
            <div className="w-[1px] h-12 bg-stone-200"></div>
            <div className="flex flex-col">
              <span className="text-stone-900 font-serif text-3xl italic">Consistent</span>
              <span className="text-xs text-stone-400 tracking-widest uppercase">Quality</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
