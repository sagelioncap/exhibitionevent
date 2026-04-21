'use client';
import React, { useState, useEffect } from 'react';
import AppLogo from '@/components/ui/AppLogo';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Contact', href: '#contact' },
  { label: 'Admin', href: '/admin/sales' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => setMobileOpen(false);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav border-b border-border shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <AppLogo size={36} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
          <span className="font-bold text-lg text-foreground tracking-tight hidden sm:block">
            ExhibitionEvent
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks?.map((link) => (
            <a
              key={link?.label}
              href={link?.href}
              className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {link?.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm font-bold px-5 py-2.5 rounded-full hover:bg-secondary transition-all duration-200 shadow-md"
        >
          Attend the Event
        </a>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-foreground p-2 rounded-lg"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
        </button>
      </div>
      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden glass-nav border-t border-border px-6 py-6 flex flex-col gap-5">
          {navLinks?.map((link) => (
            <a
              key={link?.label}
              href={link?.href}
              onClick={handleLinkClick}
              className="text-base font-semibold text-foreground hover:text-primary transition-colors py-2"
            >
              {link?.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={handleLinkClick}
            className="inline-flex justify-center bg-primary text-primary-foreground font-bold text-sm px-6 py-3 rounded-full hover:bg-secondary transition-all"
          >
            Attend the Event
          </a>
        </div>
      )}
    </header>
  );
}
