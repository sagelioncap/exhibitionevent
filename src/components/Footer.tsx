import React from 'react';
import AppLogo from '@/components/ui/AppLogo';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo + Brand */}
        <div className="flex items-center gap-2">
          <AppLogo size={28} />
          <span className="font-bold text-base text-foreground tracking-tight">
            ExhibitionEvent
          </span>
        </div>

        {/* Links */}
        <nav className="flex items-center gap-8 flex-wrap justify-center">
          {[
            { label: 'About', href: '#about' },
            { label: 'Gallery', href: '#gallery' },
            { label: 'Schedule', href: '#schedule' },
            { label: 'Contact', href: '#contact' },
            { label: 'Privacy', href: '#' },
            { label: 'Terms', href: '#' },
          ]?.map((link) => (
            <a
              key={link?.label}
              href={link?.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link?.label}
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <p className="text-sm font-medium text-muted-foreground">
          © 2026 ExhibitionEvent
        </p>
      </div>
    </footer>
  );
}