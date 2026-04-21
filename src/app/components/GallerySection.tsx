'use client';
import React, { useState, useCallback } from 'react';
import AppImage from '@/components/ui/AppImage';

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1703936205356-11814e31bfda',
    alt: 'Large abstract painting with bold green and black brushstrokes on white gallery wall, bright gallery lighting',
  },
  {
    src: 'https://images.unsplash.com/photo-1578163678052-eef169544f75',
    alt: 'Visitors viewing contemporary sculpture installation in open exhibition space, natural light from skylights',
  },
  {
    src: 'https://images.unsplash.com/photo-1628354283574-0bd71d8fe3d7',
    alt: 'Colorful mixed-media art installation with hanging fabric elements, vibrant exhibition hall interior',
  },
  {
    src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1a6402649-1776776880509.png',
    alt: 'Artist giving talk to attentive audience seated in rows, exhibition opening night event',
  },
  {
    src: 'https://images.unsplash.com/photo-1632258521940-b29d7d2ae9f5',
    alt: 'Close-up of detailed botanical illustration artwork in ornate frame on gallery wall',
  },
  {
    src: 'https://images.unsplash.com/photo-1620548687934-c856fc039693',
    alt: 'Modern photography exhibition with large format prints mounted on minimalist white walls',
  },
];

const rotations = ['-rotate-6', '-rotate-2', 'rotate-3', '-rotate-1', 'rotate-2', 'rotate-6'];
const translateY = [
  'translate-y-4',
  'translate-y-8',
  'translate-y-2',
  '-translate-y-2',
  'translate-y-4',
  'translate-y-8',
];

export default function GallerySection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleCardClick = useCallback((idx: number) => {
    setActiveIndex((prev) => (prev === idx ? null : idx));
  }, []);

  return (
    <section id="gallery" className="overflow-hidden bg-background pt-20 pb-20 relative">
      {/* Atmospheric */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[100px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 blur-[80px] rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-4">
            See the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              exhibition
            </span>{' '}
            in motion.
          </h2>
          <p className="text-lg text-muted-foreground font-medium leading-relaxed">
            A glimpse of past editions — each year more immersive than the last.
          </p>
        </div>

        {/* Floating badges */}
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute -top-6 left-[5%] sm:left-[15%] z-20 animate-float-slow">
            <div className="relative">
              <div className="absolute inset-0 bg-primary blur-md opacity-20 rounded-full" />
              <span className="inline-flex items-center gap-2 text-sm font-bold text-primary bg-white border border-primary/20 rounded-full px-4 py-2 relative shadow-lg">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                Exhibition 2026
              </span>
            </div>
          </div>

          <div className="absolute -top-8 right-[5%] sm:right-[12%] z-20 animate-float-delayed">
            <span className="inline-flex items-center gap-2 text-sm font-bold text-secondary bg-white border border-secondary/20 rounded-full px-4 py-2 shadow-lg">
              <span>🎨</span>
              120+ Artists
            </span>
          </div>

          {/* Gallery grid */}
          {/* BENTO AUDIT: 6 cards in grid-cols-6, each col-span-1 */}
          {/* Row 1: [col-1: Card0] [col-2: Card1] [col-3: Card2] [col-4: Card3] [col-5: Card4] [col-6: Card5] */}
          {/* Placed 6/6 cards ✓ */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-5 py-10">
            {galleryImages.map((img, idx) => (
              // STEP 4: Each card is col-span-1 (2 per row mobile, 3 tablet, 6 desktop)
              <div
                key={idx}
                onClick={() => handleCardClick(idx)}
                className={`cursor-pointer will-change-transform transition-all duration-700 ease-out
                  ${rotations[idx]} ${translateY[idx]}
                  ${activeIndex === idx ? 'scale-[1.15] !rotate-0 !translate-y-[-10px] z-50' : ''}
                  ${activeIndex !== null && activeIndex !== idx ? 'opacity-50 blur-[3px] scale-95 z-10' : 'z-20'}
                  hover:scale-105 hover:z-30
                `}
                style={{
                  boxShadow:
                    activeIndex === idx ? '0 25px 50px -12px rgba(26,122,74,0.25)' : undefined,
                }}
              >
                <div className="aspect-[3/4] overflow-hidden rounded-2xl border-[3px] border-white shadow-xl hover:shadow-2xl transition-shadow duration-500 bg-muted">
                  <AppImage
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 16vw"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex justify-center mt-6">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold text-primary-foreground bg-primary rounded-full hover:bg-secondary transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5"
            >
              Reserve Your Spot
              <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
