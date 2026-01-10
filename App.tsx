import React from 'react';
import { HashRouter } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/home/Hero';
import Stats from './components/home/Stats';
import HowItWorks from './components/home/HowItWorks';
import Specialties from './components/home/Specialties';
import Differentiators from './components/home/Differentiators';
import Testimonials from './components/home/Testimonials';
import FAQ from './components/home/FAQ';
import FinalCTA from './components/home/FinalCTA';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen bg-white text-dale-text font-sans selection:bg-dale-main selection:text-white">
        <Header />
        <main>
          <Hero />
          <Stats />
          <HowItWorks />
          <Specialties />
          <Differentiators />
          <Testimonials />
          <FAQ />
          <FinalCTA />
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </HashRouter>
  );
};

export default App;