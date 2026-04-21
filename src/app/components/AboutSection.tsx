import React from 'react';

const benefits = [
  {
    label: 'The Experience',
    statValue: '30+',
    statSuffix: 'Installations',
    description:
      'Immersive, multi-sensory installations that pull you inside the work — not just in front of it.',
  },
  {
    label: 'The Community',
    statValue: '120+',
    statSuffix: 'Artists Present',
    description:
      'Live artist talks, open studios, and curated networking sessions built into every day of the event.',
  },
  {
    label: 'The Impact',
    statValue: '100%',
    statSuffix: 'Artist-Led',
    description:
      'Every ticket sold funds participating artists directly. We publish full transparency reports after each event.',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 bg-muted">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl font-light text-foreground mb-4">
            Three reasons this is the exhibition you can&apos;t miss.
          </h2>
          <p className="text-muted-foreground">
            ExhibitionEvent 2026 is built differently. Here&apos;s how we address the frustrations
            that keep people away from exhibitions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((b) => (
            <div key={b.label} className="bg-card p-8">
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-4">
                {b.label}
              </p>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-5xl font-light text-foreground">{b.statValue}</span>
                <span className="text-sm text-muted-foreground">{b.statSuffix}</span>
              </div>
              <p className="text-muted-foreground">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
