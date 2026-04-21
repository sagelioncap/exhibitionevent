import React from 'react';
import Icon from '@/components/ui/AppIcon';

const benefits = [
  {
    icon: 'EyeIcon',
    label: 'The Experience',
    pain: '"I want something more than just looking at art..."',
    painSub: 'Most exhibitions feel passive and disconnected',
    statValue: '30+',
    statSuffix: 'Installations',
    solution:
      'Immersive, multi-sensory installations that pull you inside the work — not just in front of it.',
  },
  {
    icon: 'UsersIcon',
    label: 'The Community',
    pain: '"How do I connect with artists and other creatives?"',
    painSub: 'No platform to meet the people behind the work',
    statValue: '120+',
    statSuffix: 'Artists Present',
    solution:
      'Live artist talks, open studios, and curated networking sessions built into every day of the event.',
  },
  {
    icon: 'ChartBarIcon',
    label: 'The Impact',
    pain: '"I want to support artists — but how do I know it matters?"',
    painSub: 'Unclear where your attendance dollars go',
    statValue: '100%',
    statSuffix: 'Artist-Led',
    solution:
      'Every ticket sold funds participating artists directly. We publish full transparency reports after each event.',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="overflow-hidden bg-foreground pt-20 pb-20 relative">
      {/* Atmospheric background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary opacity-20 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent opacity-10 blur-[100px] rounded-full -translate-x-1/3 translate-y-1/3" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-foreground border border-secondary/30 text-secondary text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-sm">
            <Icon name="SparklesIcon" size={12} className="text-secondary" />
            Why Attend
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-5 leading-tight">
            Three reasons this is the exhibition{' '}
            <span className="text-secondary">you can&apos;t miss.</span>
          </h2>
          <p className="text-lg text-white/70 leading-relaxed max-w-2xl font-normal">
            ExhibitionEvent 2026 is built differently. Here&apos;s how we address the frustrations
            that keep people away from exhibitions.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((b) => (
            <div
              key={b.label}
              className="group relative flex flex-col rounded-3xl bg-white/[0.05] border border-white/10 p-1 overflow-hidden transition-all duration-300 hover:bg-white/[0.08] hover:border-secondary/30 hover:-translate-y-1"
            >
              <div className="flex flex-col p-6 lg:p-8 bg-gradient-to-b from-white/[0.02] to-transparent h-full rounded-[1.6rem] relative">
                {/* Pain */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4 text-white/40">
                    <Icon name={b.icon as 'EyeIcon'} size={18} className="text-white/40" />
                    <span className="text-xs font-bold uppercase tracking-wider opacity-80">
                      {b.label}
                    </span>
                  </div>
                  <h3 className="text-lg font-medium text-white/80 leading-snug">{b.pain}</h3>
                  <p className="mt-2 text-sm text-white/40 font-medium">{b.painSub}</p>
                </div>

                {/* Separator */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

                {/* Solution */}
                <div className="mt-auto">
                  <div className="absolute -left-4 -top-4 w-12 h-12 bg-primary/20 blur-xl rounded-full group-hover:bg-primary/30 transition-all" />
                  <div className="flex items-center gap-2 mb-3 text-secondary">
                    <Icon name="CheckCircleIcon" size={16} className="text-secondary" />
                    <span className="text-xs font-bold uppercase tracking-wider">Our Answer</span>
                  </div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-5xl lg:text-6xl font-bold text-white tracking-tighter">
                      {b.statValue}
                    </span>
                    <span className="text-sm text-white/50 font-medium">{b.statSuffix}</span>
                  </div>
                  <p className="text-sm text-white/70 leading-relaxed font-medium">{b.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
