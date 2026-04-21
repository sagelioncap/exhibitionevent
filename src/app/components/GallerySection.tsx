'use client';
import React from 'react';
import AppImage from '@/components/ui/AppImage';

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1703936205356-11814e31bfda?w=800',
    alt: 'Abstract painting',
  },
  {
    src: 'https://images.unsplash.com/photo-1578163678052-eef169544f75?w=800',
    alt: 'Sculpture installation',
  },
  {
    src: 'https://images.unsplash.com/photo-1628354283574-0bd71d8fe3d7?w=800',
    alt: 'Mixed-media art',
  },
  {
    src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1a6402649-1776776880509.png?w=800',
    alt: 'Artist talk',
  },
  {
    src: 'https://images.unsplash.com/photo-1632258521940-b29d7d2ae9f5?w=800',
    alt: 'Botanical illustration',
  },
  {
    src: 'https://images.unsplash.com/photo-1620548687934-c856fc039693?w=800',
    alt: 'Photography exhibition',
  },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-light text-foreground mb-4">Gallery</h2>
          <p className="text-muted-foreground">A glimpse of past editions.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((img, idx) => (
            <div key={idx} className="aspect-square overflow-hidden bg-muted">
              <AppImage
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
