import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const testimonials = [
  {
    avatar: 'https://img.rocket.new/generatedImages/rocket_gen_img_14da91c34-1763294780479.png',
    avatarAlt:
      'Smiling woman with curly brown hair, warm neutral background, professional portrait',
    name: 'Mara Okonkwo',
    role: 'Art Director, Meridian Studio',
    quote:
      "The most cohesive exhibition I've attended in years. Every room felt intentional — not just filled with work, but curated with a point of view.",
    metricA: { label: 'Sessions Attended', value: '14' },
    metricB: { label: 'Artists Met', value: '22' },
  },
  {
    avatar: 'https://img.rocket.new/generatedImages/rocket_gen_img_1454884bf-1772130103220.png',
    avatarAlt:
      'Professional man with glasses and light beard, clean white background, studio portrait',
    name: 'James Whitfield',
    role: 'Independent Collector, Boston',
    quote:
      'I came to browse and left with three acquisitions and a whole new network. The artist talks alone were worth the trip from Boston.',
    metricA: { label: 'Acquisitions', value: '3' },
    metricB: { label: 'Talks Attended', value: '6' },
  },
  {
    avatar: 'https://img.rocket.new/generatedImages/rocket_gen_img_1899c6c13-1765217063116.png',
    avatarAlt: 'Young woman with blond hair smiling outdoors, soft natural light background',
    name: 'Sofia Reinholt',
    role: 'Graphic Designer, Berlin',
    quote:
      'The Night Market on Day 7 was absolutely electric. Watching artists create live while music played — I still think about it months later.',
    metricA: { label: 'Events Attended', value: '9' },
    metricB: { label: 'Workshops', value: '2' },
  },
  {
    avatar: 'https://images.unsplash.com/photo-1575267685835-9a301978a612',
    avatarAlt: 'Middle-aged man with dark hair smiling warmly, soft blurred outdoor background',
    name: 'Pradeep Nair',
    role: 'Founder, Arthouse Collective',
    quote:
      'We brought our entire team of 18 people. It sparked conversations about our own work that are still influencing how we design six months on.',
    metricA: { label: 'Team Members', value: '18' },
    metricB: { label: 'Days Attended', value: '5' },
  },
];

export default function TestimonialsSection() {
  return (
    <section className="overflow-hidden bg-muted border-t border-border pt-20 pb-20 relative">
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: 'radial-gradient(var(--border) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-gradient-to-b from-background to-transparent pointer-events-none z-0" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-4">
            What past visitors say
          </h2>
          <p className="text-lg text-muted-foreground font-medium leading-relaxed">
            Over 15,000 visitors attended last year. Here are a few of their stories.
          </p>
        </div>

        {/* BENTO AUDIT: 4 testimonial cards, md:grid-cols-2 lg:grid-cols-4 */}
        {/* Row 1 (lg): [col-1: T1] [col-2: T2] [col-3: T3] [col-4: T4] */}
        {/* Placed 4/4 cards ✓ */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials?.map((t) => (
            // Each card: col-span-1
            <div
              key={t?.name}
              className="flex flex-col bg-card border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Stars + Company */}
              <div className="flex justify-between items-start mb-6">
                <div className="flex gap-0.5 text-accent">
                  {[...Array(5)]?.map((_, i) => (
                    <Icon
                      key={i}
                      name="StarIcon"
                      size={14}
                      variant="solid"
                      className="text-accent"
                    />
                  ))}
                </div>
              </div>
              {/* Metrics */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[t?.metricA, t?.metricB]?.map((m) => (
                  <div
                    key={m?.label}
                    className="bg-muted p-3 rounded-xl border border-border shadow-sm group-hover:border-secondary/20 transition-colors"
                  >
                    <div className="flex items-center gap-1 mb-1 text-muted-foreground">
                      <Icon name="CheckIcon" size={10} className="text-primary" />
                      <span className="text-[10px] uppercase tracking-wider font-bold">
                        {m?.label}
                      </span>
                    </div>
                    <div className="text-lg font-bold text-primary">{m?.value}</div>
                  </div>
                ))}
              </div>
              {/* Quote */}
              <blockquote className="flex-1 text-sm font-medium text-muted-foreground leading-relaxed mb-6">
                &ldquo;{t?.quote}&rdquo;
              </blockquote>
              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-border mt-auto">
                <AppImage
                  src={t?.avatar}
                  alt={t?.avatarAlt}
                  width={48}
                  height={48}
                  className="w-12 h-12 object-cover rounded-xl ring-2 ring-border"
                />

                <div>
                  <div className="text-sm font-bold text-foreground">{t?.name}</div>
                  <div className="text-xs font-semibold text-muted-foreground">{t?.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
