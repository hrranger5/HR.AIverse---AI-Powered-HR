
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Page components
import FeaturesPage from './pages/FeaturesPage';
import AboutPage from './pages/AboutPage';
import TestimonialsPage from './pages/TestimonialsPage';
import ContactPage from './pages/ContactPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'features':
        return <FeaturesPage />;
      case 'about':
        return <AboutPage />;
      case 'testimonials':
        return <TestimonialsPage />;
      case 'contact':
        return <ContactPage />;
      case 'home':
      default:
        return (
          <>
            <Hero setCurrentPage={setCurrentPage} />
            <Features />
            <About />
            <Testimonials />
          </>
        );
    }
  };

  return (
    <div className="bg-primary min-h-screen">
      <Header setCurrentPage={setCurrentPage} currentPage={currentPage} />
      <main>{renderPage()}</main>
      <Footer />
    </div>
  );
};

export default App;