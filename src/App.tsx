import React, { useEffect, useState } from 'react';
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
  // Re-mount key: bump when page is restored from back-forward cache so layout/animations reset
  const [contentKey, setContentKey] = useState(0);

  // Fix layout/animations when returning via browser back (bfcache restore)
  useEffect(() => {
    const handlePageShow = (event: PageTransitionEvent) => {
      if (event.persisted) {
        window.scrollTo(0, 0);
        setContentKey((k) => k + 1);
      }
    };
    window.addEventListener('pageshow', handlePageShow);
    return () => window.removeEventListener('pageshow', handlePageShow);
  }, []);

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
      <SoulfulMethodology key={contentKey} />
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