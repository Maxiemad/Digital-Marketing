import React, { useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PainPointsSection from './components/PainPointsSection';
import SoulfulMethodology from './components/SoulfulMethodology';
import InfiniteScrollRail from './components/InfiniteScrollRail';
import ServicesSection from './components/ServicesSection';
import ComparisonSection from './components/ComparisonSection';
import WhatPeopleSaySection from './components/WhatPeopleSaySection';
import AuditSection from './components/AuditSection';
import WhoWeHelpSection from './components/WhoWeHelpSection';
import NewsletterSignupSection from './components/NewsletterSignupSection';
import FinalCTASection from './components/FinalCTASection';

function App() {
  // Handle anchor links for direct navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const elementId = hash.substring(1);
        const element = document.getElementById(elementId);
        if (element) {
          // Multiple attempts to ensure scrolling works
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 300);
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 800);
        }
      }
    };

    // Handle initial load with hash
    setTimeout(() => {
      handleHashChange();
    }, 500);

    // Handle hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <CustomCursor />
      <Header />
      <HeroSection />
      <PainPointsSection />
      <SoulfulMethodology />
      <InfiniteScrollRail />
      <ServicesSection />
      <ComparisonSection />
      <WhatPeopleSaySection />
      <AuditSection />
      <WhoWeHelpSection />
      <NewsletterSignupSection />
      <FinalCTASection />
    </div>
  );
}

export default App;