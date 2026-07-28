import React, { useState } from 'react';
import ArchitecturalNavbar from './components/ArchitecturalNavbar';
import HeroSection from './components/HeroSection';
import SlicedVerticalShowcase from './components/SlicedVerticalShowcase';
import SolutionsMatrix from './components/SolutionsMatrix';
import VectorSimulator from './components/VectorSimulator';
import ContactGlassModal from './components/ContactGlassModal';
import Footer from './components/Footer';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflowX: 'hidden' }}>
      {/* 1. Architectural Header */}
      <ArchitecturalNavbar onOpenContact={() => setIsContactOpen(true)} />

      {/* Main Content Flow */}
      <main>
        {/* 2. Hero Section with WebGL Background & Particle Word */}
        <HeroSection onOpenContact={() => setIsContactOpen(true)} />

        {/* 3. Sliced Vertical Curtain Showcase (Motos, E-Bikes, Ads, E-commerce) */}
        <div id="verticales">
          <SlicedVerticalShowcase onOpenContact={() => setIsContactOpen(true)} />
        </div>

        {/* 4. Soluções Integradas (Brandbook, Photo/Video, Instagram, Landing, E-commerce, Ads) */}
        <SolutionsMatrix onOpenContact={() => setIsContactOpen(true)} />

        {/* 5. Simulador de Tração E-Mobility */}
        <VectorSimulator onOpenContact={() => setIsContactOpen(true)} />
      </main>

      {/* 6. Footer */}
      <Footer onOpenContact={() => setIsContactOpen(true)} />

      {/* 7. Contact Form Glass Modal */}
      <ContactGlassModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}
