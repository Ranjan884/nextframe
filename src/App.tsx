import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { WorkSection } from './components/WorkSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#0F172A] flex flex-col selection:bg-[#2563EB] selection:text-white font-sans antialiased">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. About Section & Founders */}
        <AboutSection />

        {/* 3. Services Section (7 Core Disciplines) */}
        <ServicesSection />

        {/* 4. Projects Section (Primary Focus & Protected Management) */}
        <WorkSection />

        {/* 5. Contact Section (Email, GitHub) */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
