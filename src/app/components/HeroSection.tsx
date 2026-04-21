'use client';
import React from 'react';
import AppImage from '@/components/ui/AppImage';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center px-6 py-20 bg-background">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1">
          <p className="text-xs font-medium tracking-widest text-muted-foreground mb-4">
            JUNE 14–22, 2026 · NEW YORK
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-foreground leading-[1.1] mb-6">
            Art Exhibition
            <br />
            2026
          </h1>
          <p className="text-lg text-muted-foreground max-w-md mb-8">
            Eight days of contemporary art installations and artist talks at the Grand Pavilion.
          </p>
          <div className="flex gap-8 text-sm">
            <div>
              <p className="font-medium">120+ Exhibitors</p>
            </div>
            <div>
              <p className="font-medium">8 Days</p>
            </div>
            <div>
              <p className="font-medium">15K+ Visitors</p>
            </div>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <div className="aspect-[4/5] overflow-hidden bg-muted">
            <AppImage
              src="https://images.unsplash.com/photo-1545989253-02cc26577f88?w=1200"
              alt="White minimalist gallery space with artworks"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
