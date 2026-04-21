'use client';
import React from 'react';
import AppImage from '@/components/ui/AppImage';

const scheduleItems = [
  {
    day: 'Day 1',
    date: 'June 14',
    title: 'Opening Night Gala',
    location: 'Grand Pavilion',
  },
  {
    day: 'Days 2–4',
    date: 'June 15–17',
    title: 'Artist Talks Series',
    location: 'Studio Hall',
  },
  {
    day: 'Days 5–6',
    date: 'June 18–19',
    title: 'Hands-On Workshops',
    location: 'Creative Labs',
  },
  {
    day: 'Day 7',
    date: 'June 21',
    title: 'Night Market & Live Art',
    location: 'Courtyard',
  },
  {
    day: 'Day 8',
    date: 'June 22',
    title: 'Awards & Closing Ceremony',
    location: 'Main Stage',
  },
];

export default function ScheduleSection() {
  return (
    <section id="schedule" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-light text-foreground mb-4">Schedule</h2>
          <p className="text-muted-foreground">
            Eight days of programming across five distinct spaces.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scheduleItems.map((item, idx) => (
            <div key={idx} className="bg-muted p-6">
              <p className="text-xs font-medium tracking-wider text-muted-foreground mb-2">
                {item.day} · {item.date}
              </p>
              <h3 className="text-lg font-light text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
