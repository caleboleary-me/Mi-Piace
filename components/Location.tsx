
import React from 'react';
import { MapPin, Clock, Phone, Navigation } from 'lucide-react';

export const Location: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row gap-16">
        {/* Contact Info & Hours */}
        <div className="w-full lg:w-1/3">
          <h2 className="text-4xl font-serif text-stone-900 mb-10">Find Us</h2>
          
          <div className="space-y-10">
            <div>
              <div className="flex items-center gap-3 text-stone-900 mb-3">
                <MapPin className="w-5 h-5" />
                <span className="font-medium tracking-wide">ADDRESS</span>
              </div>
              <p className="text-stone-500 leading-relaxed ml-8 mb-4">
                83 Sheridan Street,<br />
                Cairns City QLD 4870
              </p>
              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=Mi+Piace+Espresso+Bar+Cairns" 
                target="_blank" 
                rel="noopener noreferrer"
                className="ml-8 inline-flex items-center gap-2 text-stone-900 text-sm font-semibold underline underline-offset-4 hover:text-stone-600 transition-colors"
              >
                <Navigation className="w-4 h-4" />
                GET DIRECTIONS
              </a>
            </div>

            <div>
              <div className="flex items-center gap-3 text-stone-900 mb-3">
                <Clock className="w-5 h-5" />
                <span className="font-medium tracking-wide">OPENING HOURS</span>
              </div>
              <div className="ml-8 text-stone-500 grid grid-cols-2 max-w-[260px]">
                <span className="mb-1">Mon — Fri:</span>
                <span className="mb-1 font-medium text-stone-900">6:30am — 3:00pm</span>
                <span className="mb-1">Saturday:</span>
                <span className="mb-1 font-medium text-stone-900">7:00am — 12:00pm</span>
                <span className="mb-1">Sunday:</span>
                <span className="mb-1 font-medium text-stone-400">Closed</span>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 text-stone-900 mb-3">
                <Phone className="w-5 h-5" />
                <span className="font-medium tracking-wide">CONTACT</span>
              </div>
              <a href="tel:0740413333" className="text-stone-500 ml-8 hover:text-stone-900 transition-colors">(07) 4041 3333</a>
            </div>
          </div>
        </div>

        {/* Map - Fully Colored */}
        <div className="w-full lg:w-2/3 h-[450px] bg-stone-100 overflow-hidden relative shadow-inner">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.824874409385!2d145.7725965153288!3d-16.9202724883548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x697863901b56345d%3A0xc3f7358e888494b8!2sMi%20Piace%20Espresso%20Bar!5e0!3m2!1sen!2sau!4v1620000000000!5m2!1sen!2sau" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy"
            className="transition-all duration-300"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
