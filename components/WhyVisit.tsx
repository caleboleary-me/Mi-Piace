
import React from 'react';
import { Coffee, Zap, MapPin, Clock } from 'lucide-react';

const reasons = [
  {
    icon: <Coffee className="w-8 h-8 text-[#3D4D3D]" />,
    title: 'Consistent Quality',
    description: 'We use premium beans roasted for the Queensland climate to ensure a perfect cup every time.'
  },
  {
    icon: <Zap className="w-8 h-8 text-[#3D4D3D]" />,
    title: 'Fast Service',
    description: "Built for city workers and commuters. We'll get you back to your day without the wait."
  },
  {
    icon: <MapPin className="w-8 h-8 text-[#3D4D3D]" />,
    title: 'CBD Location',
    description: 'Centrally located on Sheridan Street. Easy to find, easy to visit on your way into work.'
  },
  {
    icon: <Clock className="w-8 h-8 text-[#3D4D3D]" />,
    title: 'Reliable Hours',
    description: 'We open early at 6:30am, ready when you are. Your reliable morning start in Cairns.'
  }
];

export const WhyVisit: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="mb-16">
        <span className="text-stone-400 text-xs font-semibold tracking-widest uppercase mb-4 block">WHY CHOOSE US</span>
        <h2 className="text-4xl md:text-5xl text-stone-900 font-serif leading-tight">
          Cairns' reliable coffee stop.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {reasons.map((reason, idx) => (
          <div 
            key={idx} 
            className="group p-8 border border-stone-100 bg-white transition-all hover:shadow-md"
          >
            <div className="mb-6 text-[#3D4D3D]">
              {reason.icon}
            </div>
            <h3 className="text-xl font-serif text-stone-900 mb-3">{reason.title}</h3>
            <p className="text-stone-500 text-sm leading-relaxed">
              {reason.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
