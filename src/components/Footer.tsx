import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">© 2026 ExhibitionEvent</p>
        <nav className="flex items-center gap-6">
          <a href="#about" className="text-sm text-muted-foreground hover:text-foreground">
            About
          </a>
          <a href="#gallery" className="text-sm text-muted-foreground hover:text-foreground">
            Gallery
          </a>
          <a href="#schedule" className="text-sm text-muted-foreground hover:text-foreground">
            Schedule
          </a>
          <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground">
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
}
