import React from 'react';
import CustomCursor from './components/CustomCursor';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PainPointsSection from './components/PainPointsSection';
import SoulfulMethodology from './components/SoulfulMethodology';
import InfiniteScrollRail from './components/InfiniteScrollRail';
import ServicesSection from './components/ServicesSection';
import ComparisonSection from './components/ComparisonSection';
import AuditSection from './components/AuditSection';
import WhoWeHelpSection from './components/WhoWeHelpSection';
import FinalCTASection from './components/FinalCTASection';

function App() {
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
      <AuditSection />
      <WhoWeHelpSection />
      <FinalCTASection />
    </div>
  );
}

export default App;