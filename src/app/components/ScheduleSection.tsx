'use client';
import React, { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const slides = [
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_14967c620-1767887837191.png",
  alt: 'Grand exhibition hall opening with crowds and dramatic lighting, dark atmospheric exhibition space with spotlights',
  day: 'Day 1',
  date: 'June 14',
  title: 'Opening Night Gala',
  subtitle: 'Doors open at 6PM — champagne & curator tours',
  type: 'Gala',
  location: 'Grand Pavilion'
},
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_1e44f2153-1772075201170.png",
  alt: 'Artist presenting large abstract painting in well-lit gallery space, dark walls with spotlit artwork',
  day: 'Days 2–4',
  date: 'June 15–17',
  title: 'Artist Talks Series',
  subtitle: '3 talks per day — morning, noon, and evening',
  type: 'Talks',
  location: 'Studio Hall'
},
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_1cacbba44-1776776880306.png",
  alt: 'Intimate workshop session with participants creating art, dim warm workshop lighting with focused task lighting',
  day: 'Days 5–6',
  date: 'June 18–19',
  title: 'Hands-On Workshops',
  subtitle: 'Limited to 20 participants — book in advance',
  type: 'Workshop',
  location: 'Creative Labs'
},
{
  src: "https://images.unsplash.com/photo-1686682670712-9b4a3a35f218",
  alt: 'Outdoor evening exhibition with string lights and art installations, moody dark sky with warm accent lighting',
  day: 'Day 7',
  date: 'June 21',
  title: 'Night Market & Live Art',
  subtitle: 'Open air event — artists creating live until midnight',
  type: 'Special',
  location: 'Courtyard'
},
{
  src: "https://images.unsplash.com/photo-1660771781953-a60f51e7f0e5",
  alt: 'Closing ceremony with audience applauding artists on stage, dark dramatic venue with bright stage lighting',
  day: 'Day 8',
  date: 'June 22',
  title: 'Awards & Closing Ceremony',
  subtitle: 'Celebrate the artists — black tie optional',
  type: 'Ceremony',
  location: 'Main Stage'
}];


const timelineSteps = [
{
  icon: 'MegaphoneIcon',
  tag: 'Before the Event',
  title: 'Register & Plan Your Visit',
  desc: 'Book your tickets online, select workshops, and get your personalised event itinerary emailed to you.'
},
{
  icon: 'TicketIcon',
  tag: 'On Arrival',
  title: 'Check In at the Pavilion',
  desc: 'Show your QR code at any entrance gate. Collect your lanyard, programme booklet, and exhibition map.'
},
{
  icon: 'EyeIcon',
  tag: 'During the Event',
  title: 'Explore at Your Own Pace',
  desc: 'All 120+ exhibitor spaces are open daily. Join scheduled talks or drop into workshops — your badge covers everything.'
},
{
  icon: 'StarIcon',
  tag: 'Special Moments',
  title: 'Attend Curated Highlights',
  desc: 'Don\'t miss the Opening Gala, Night Market on Day 7, or the closing ceremony — these fill up fast.'
}];


export default function ScheduleSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section id="schedule" className="overflow-hidden bg-background pt-20 pb-20 relative">
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
          'linear-gradient(to right, rgba(26,122,74,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(26,122,74,0.03) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />


      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-left max-w-3xl mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-5">
            What&apos;s happening at the exhibition?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 font-normal">
            Eight days of programming across five distinct spaces. Every day brings something new.
            Here&apos;s how to make the most of your visit.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm font-semibold px-8 py-3.5 rounded-full hover:bg-secondary transition-all duration-200 shadow-lg shadow-primary/20">

            Register Now
            <Icon name="ArrowRightIcon" size={16} className="text-primary-foreground" />
          </a>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          {/* Left: Sticky Carousel */}
          <div className="lg:sticky lg:top-28 relative">
            <div className="overflow-hidden aspect-[4/5] bg-foreground ring-1 ring-white/10 rounded-[2.5rem] shadow-2xl relative group">
              {/* Slides */}
              {slides.map((slide, idx) =>
              <div
                key={idx}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`
                }>

                  <AppImage
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-cover animate-ken-burns"
                  sizes="(max-width: 1024px) 100vw, 50vw" />

                </div>
              )}

              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-20 pointer-events-none" />

              {/* Content overlay */}
              <div className="absolute inset-0 z-30 flex flex-col justify-end p-8 md:p-10">
                <div className="w-full max-w-lg">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-flex items-center text-[10px] font-bold text-primary-foreground tracking-widest bg-primary rounded-full px-3 py-1 uppercase">
                      {slides[currentSlide].type}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-white tracking-widest bg-white/10 backdrop-blur-md rounded-full px-3 py-1 uppercase">
                      <Icon name="MapPinIcon" size={12} className="text-secondary" />
                      {slides[currentSlide].location}
                    </span>
                  </div>

                  <div className="space-y-2 mb-6">
                    <p className="text-secondary font-bold text-sm uppercase tracking-widest">
                      {slides[currentSlide].day} — {slides[currentSlide].date}
                    </p>
                    <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
                      {slides[currentSlide].title}
                    </h3>
                    <p className="text-base text-white/80 font-medium leading-snug">
                      {slides[currentSlide].subtitle}
                    </p>
                  </div>

                  {/* Dots */}
                  <div className="flex items-center gap-2">
                    {slides.map((_, idx) =>
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      aria-label={`Go to slide ${idx + 1}`}
                      className={`h-1 rounded-full transition-all duration-500 ease-out ${
                      idx === currentSlide ? 'bg-white w-8' : 'bg-white/30 w-4 hover:bg-white/60'}`
                      } />

                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative border */}
            <div className="absolute -top-6 -left-6 w-full h-full border border-border rounded-[2.5rem] -z-10" />
          </div>

          {/* Right: Timeline */}
          <div className="pt-4 relative">
            {/* Vertical line */}
            <div className="absolute left-[28px] top-10 bottom-12 w-[2px] bg-border" />

            {timelineSteps.map((step, idx) =>
            <div key={idx} className={`flex gap-8 group ${idx < timelineSteps.length - 1 ? 'mb-14' : ''} relative`}>
                <div className="relative z-10 shrink-0">
                  <div
                  className={`flex w-14 h-14 rounded-2xl items-center justify-center ring-8 ring-background transition-all duration-300
                      ${idx === 0 ?
                  'bg-primary text-primary-foreground shadow-xl shadow-primary/20 group-hover:scale-110' :
                  'bg-card text-muted-foreground border border-border shadow-sm group-hover:border-primary group-hover:text-primary'}`
                  }>

                    <Icon name={step.icon as 'MegaphoneIcon'} size={22} />
                  </div>
                </div>
                <div className="pt-2">
                  <span className="inline-block text-xs font-bold text-secondary uppercase tracking-wider mb-2">
                    {step.tag}
                  </span>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed font-normal">{step.desc}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

}