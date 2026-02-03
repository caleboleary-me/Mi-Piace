
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Menu } from './components/Menu';
import { WhyVisit } from './components/WhyVisit';
import { Location } from './components/Location';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header isScrolled={isScrolled} />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="about" className="py-20 lg:py-32">
          <About />
        </section>
        <section id="menu" className="py-20 bg-[#F5F1EA]">
          <Menu />
        </section>
        <section id="why-visit" className="py-20 lg:py-32">
          <WhyVisit />
        </section>
        <section id="location" className="py-20 bg-white">
          <Location />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
