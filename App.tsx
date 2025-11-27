import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import HowTo from './components/HowTo';
import Features from './components/Features';
import FAQ from './components/FAQ';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-bg-primary font-sans text-text-primary">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <HowTo />
        <Features />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}

export default App;