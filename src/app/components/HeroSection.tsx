'use client';
import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

export default function HeroSection() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!glowRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 30;
      const y = (clientY / innerHeight - 0.5) * 30;
      glowRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden bg-background grid-bg">
      {/* Atmospheric blobs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-blob pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[100px] animate-blob animation-delay-2000 pointer-events-none" />
      <div
        ref={glowRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none transition-transform duration-700 ease-out" />


      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left: Event Photo */}
        <div className="lg:col-span-4 relative group order-2 lg:order-1">
          <div className="absolute -inset-4 bg-primary/15 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl" />
          <div className="relative rounded-3xl overflow-hidden border border-border shadow-2xl aspect-[3/4]">
            <AppImage
              src="https://images.unsplash.com/photo-1620548687934-c856fc039693"
              alt="Bright modern exhibition hall with large artworks on white walls, warm gallery lighting, polished floors, airy open space"
              fill
              className="object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              priority />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Date badge */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-accent">
                    Registration Open
                  </span>
                </div>
                <p className="text-white font-bold text-lg leading-tight">June 14–22, 2026</p>
                <p className="text-white/70 text-xs font-medium">Grand Pavilion, New York</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Headline + CTA */}
        <div className="lg:col-span-8 space-y-10 order-1 lg:order-2">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 bg-primary/8 border border-primary/20 rounded-full px-4 py-1.5">
            <Icon name="SparklesIcon" size={14} className="text-primary" />
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Annual Exhibition 2026
            </span>
          </div>

          {/* Headline */}
          <h1 className="hero-text font-extrabold text-foreground">
            Where Art{' '}
            <span className="text-primary">Meets</span>
            <br />
            Experience.
          </h1>

          {/* Sub */}
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl font-medium">
            Eight days of immersive exhibitions, curated installations, and live talks from
            artists redefining what it means to create in 2026.
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap gap-8">
            {[
            { value: '120+', label: 'Exhibitors' },
            { value: '8 Days', label: 'Of Events' },
            { value: '15K+', label: 'Expected Visitors' }].
            map((stat) =>
            <div key={stat.label}>
                <p className="text-3xl font-extrabold text-primary tracking-tight">{stat.value}</p>
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{stat.label}</p>
              </div>
            )}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold text-sm px-10 py-4 rounded-full hover:bg-secondary transition-all duration-200 shadow-lg shadow-primary/25">

              Attend the Event
              <Icon name="ArrowRightIcon" size={16} className="text-primary-foreground" />
            </a>
            <a
              href="#schedule"
              className="inline-flex items-center gap-4 group">

              <div className="w-14 h-14 rounded-full border-2 border-border flex items-center justify-center group-hover:border-primary transition-colors duration-200">
                <Icon name="CalendarDaysIcon" size={22} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors">
                View Schedule
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>);

}