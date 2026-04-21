import React from 'react';

const testimonials = [
  {
    name: 'Mara Okonkwo',
    role: 'Art Director, Meridian Studio',
    quote:
      "The most cohesive exhibition I've attended in years. Every room felt intentional — not just filled with work, but curated with a point of view.",
  },
  {
    name: 'James Whitfield',
    role: 'Independent Collector, Boston',
    quote:
      'I came to browse and left with three acquisitions and a whole new network. The artist talks alone were worth the trip from Boston.',
  },
  {
    name: 'Sofia Reinholt',
    role: 'Graphic Designer, Berlin',
    quote:
      'The Night Market on Day 7 was absolutely electric. Watching artists create live while music played — I still think about it months later.',
  },
  {
    name: 'Pradeep Nair',
    role: 'Founder, Arthouse Collective',
    quote:
      'We brought our entire team of 18 people. It sparked conversations about our own work that are still influencing how we design six months on.',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-light text-foreground mb-4">What past visitors say</h2>
          <p className="text-muted-foreground">
            Over 15,000 visitors attended last year. Here are a few of their stories.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-card p-6">
              <blockquote className="text-sm text-muted-foreground mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div>
                <p className="font-medium text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
