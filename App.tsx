import React, { useEffect } from 'react';
import { MemoryRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Building from './pages/Building';
import Plastering from './pages/Plastering';
import Roofing from './pages/Roofing';
import Plumbing from './pages/Plumbing';
import Drywall from './pages/Drywall';
import Ceiling from './pages/Ceiling';
import Electrical from './pages/Electrical';
import Flooring from './pages/Flooring';
import Painting from './pages/Painting';
import Solar from './pages/Solar';
import Carpentry from './pages/Carpentry';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <MemoryRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        
        {/* Service Details */}
        <Route path="/building" element={<Building />} />
        <Route path="/plastering" element={<Plastering />} />
        <Route path="/roofing" element={<Roofing />} />
        <Route path="/plumbing" element={<Plumbing />} />
        <Route path="/drywall" element={<Drywall />} />
        <Route path="/ceiling" element={<Ceiling />} />
        <Route path="/electrical" element={<Electrical />} />
        <Route path="/flooring" element={<Flooring />} />
        <Route path="/painting" element={<Painting />} />
        <Route path="/solar" element={<Solar />} />
        <Route path="/carpentry" element={<Carpentry />} />
      </Routes>
    </MemoryRouter>
  );
};

export default App;