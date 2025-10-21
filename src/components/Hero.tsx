
import React from 'react';

interface HeroProps {
  setCurrentPage: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ setCurrentPage }) => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center">
      <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1920&auto=format&fit=crop')" }}>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-primary opacity-80"></div>
      <div className="relative z-10 text-white p-4">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
          The Future of HR is <span className="text-accent">Here</span>.
        </h1>
        <p className="text-lg md:text-2xl mb-8 max-w-3xl mx-auto text-neutral-300">
          Harnessing Artificial Intelligence to build smarter, faster, and more efficient HR workflows for your business.
        </p>
        <button
          onClick={() => setCurrentPage('contact')}
          className="bg-accent hover:bg-accent-dark text-primary font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105"
        >
          Request a Demo
        </button>
      </div>
    </section>
  );
};

export default Hero;