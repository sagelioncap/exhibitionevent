import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import AboutSection from '@/app/components/AboutSection';
import GallerySection from '@/app/components/GallerySection';
import ScheduleSection from '@/app/components/ScheduleSection';
import TestimonialsSection from '@/app/components/TestimonialsSection';
import ContactSection from '@/app/components/ContactSection';

export default function HomePage() {
  return (
    <main className="overflow-x-hidden bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <ScheduleSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
