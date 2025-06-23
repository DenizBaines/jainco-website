import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import InfoCardsSection from './components/InfoCardsSection';
import WhatWeDoSection from './components/WhatWeDoSection';
import HeroCarousel from './components/HeroCarousel';
import Careers from './pages/Careers/Careers';
import Infrastructure from './pages/Infrastructure/Infrastructure';
import Contact from './pages/Contact/Contact';
import Consultation from './pages/Consultation/Consultation';
import Social from './pages/Social/Social';
import Management from './pages/Management/Management';
import './App.css';
import WaterTreatmentSystem from './pages/WaterTreatmentSystem/WaterTreatmentSystem';
import SewerageTreatment from './pages/SewerageTreatment/SewerageTreatment';
import DrainageSystem from './pages/DrainageSystem/DrainageSystem';
import PlumbingSanitation from './pages/PlumbingSanitation/PlumbingSanitation';
import WaterTreatmentPlants from './pages/WaterTreatmentPlants/WaterTreatmentPlants';
import ScrollToTop from './ScrollToTop';
import CompanySummary from './pages/CompanySummary/CompanySummary';
import FadeWrapper from './components/FadeWrapper';
import Testimonial from './pages/Testimonial/Testimonial';
import Projects from './pages/Projects/Projects';







function App() {
  return (
    
    <HashRouter>
      <ScrollToTop />
    
      <div className="App">
        <NavigationBar />
        
        <Routes>
          <Route path="/" element={
            <>
              {/* Hero Carousel */}
              <HeroCarousel />
              <InfoCardsSection />
              <WhatWeDoSection />
            </>
          } />
          
          <Route path="/management" element={<Management />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/infrastructure" element={<Infrastructure />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/social" element={<Social />} />
          <Route path="/water-treatment-system" element={<WaterTreatmentSystem />} />
          <Route path="/sewerage-treatment" element={<SewerageTreatment />} />
          <Route path="/drainage-system" element={<DrainageSystem />} />
          <Route path="/plumbing-sanitation" element={<PlumbingSanitation />} />
          <Route path="/water-treatment-plants" element={<WaterTreatmentPlants />} />
          <Route path="/company-summary" element={<FadeWrapper><CompanySummary /></FadeWrapper>} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/projects" element={<FadeWrapper><Projects /></FadeWrapper>} />


          {/* Add more routes as needed */}
        </Routes>
        
        <Footer />
      </div>

    </HashRouter>
  );
}

export default App;