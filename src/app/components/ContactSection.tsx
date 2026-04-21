'use client';
import React, { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const avatars = [
  {
    src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1cd88554e-1776776878976.png',
    alt: 'Attendee avatar',
  },
  {
    src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1cd88554e-1776776878976.png',
    alt: 'Attendee avatar',
  },
  {
    src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1cd88554e-1776776878976.png',
    alt: 'Attendee avatar',
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    attendees: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submit — backend integration point
    setSubmitted(true);
  };

  return (
    <section id="contact" className="overflow-hidden bg-foreground pt-20 pb-20 relative">
      {/* Atmospheric */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary opacity-[0.16] blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary opacity-[0.14] blur-[100px] rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-soft-light pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="diagonal-rays absolute inset-0 pointer-events-none opacity-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left: Value Prop */}
          <div className="lg:col-span-6 space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 uppercase text-xs font-semibold text-white/90 tracking-wider bg-primary/15 border border-white/10 rounded-full px-3 py-1 backdrop-blur-sm">
                <Icon name="ClockIcon" size={12} className="text-secondary" />
                Response within 24 hours
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                Ready to experience{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
                  the exhibition
                </span>
                ?
              </h2>

              <p className="text-lg text-white/75 leading-relaxed max-w-lg font-normal">
                Send us your details and we&apos;ll get back to you with ticketing options, group
                packages, and everything you need to plan your visit.
              </p>
            </div>

            {/* Trust indicators */}
            <div className="space-y-4">
              {[
                {
                  icon: 'TicketIcon',
                  title: 'Flexible ticket options',
                  desc: 'Day passes, full-event passes, and group discounts available.',
                },
                {
                  icon: 'ShieldCheckIcon',
                  title: 'No commitment required',
                  desc: "Just reach out — we'll answer your questions first.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.05] border border-white/10 hover:bg-white/[0.08] transition-colors duration-300"
                >
                  <div className="shrink-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-secondary">
                    <Icon name={item.icon as 'TicketIcon'} size={18} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm mb-0.5">{item.title}</h3>
                    <p className="text-sm text-white/65 leading-snug">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-4 pt-2 border-t border-white/10">
              <div className="flex -space-x-3">
                {avatars.map((a, i) => (
                  <AppImage
                    key={i}
                    src={a.src}
                    alt={a.alt}
                    width={40}
                    height={40}
                    className="w-10 h-10 object-cover rounded-full border-2 border-foreground"
                  />
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-foreground bg-white/10 text-white text-xs font-semibold flex items-center justify-center">
                  +15K
                </div>
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Visitors attended last edition</p>
                <div className="flex gap-0.5 mt-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Icon
                      key={i}
                      name="StarIcon"
                      size={12}
                      variant="solid"
                      className="text-accent"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-6">
            <div className="bg-card rounded-[2rem] p-8 shadow-2xl shadow-black/20 relative overflow-hidden border border-white/10">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-70 pointer-events-none" />

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center relative z-10">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <Icon name="CheckCircleIcon" size={36} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground max-w-xs">
                    We&apos;ll be in touch within 24 hours with your ticketing options.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                  <div className="mb-5">
                    <h3 className="text-2xl font-bold text-foreground tracking-tight mb-1">
                      Get in Touch
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Fill in your details and we&apos;ll handle the rest.
                    </p>
                  </div>

                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2"
                    >
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center text-muted-foreground pointer-events-none">
                        <Icon name="UserIcon" size={16} />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full bg-input border border-border rounded-xl pl-11 pr-4 py-3.5 text-foreground text-sm placeholder:text-muted-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2"
                    >
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center text-muted-foreground pointer-events-none">
                        <Icon name="EnvelopeIcon" size={16} />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full bg-input border border-border rounded-xl pl-11 pr-4 py-3.5 text-foreground text-sm placeholder:text-muted-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* Attendees */}
                  <div>
                    <label
                      htmlFor="attendees"
                      className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2"
                    >
                      Number of Attendees <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="attendees"
                        name="attendees"
                        required
                        value={formData.attendees}
                        onChange={handleChange}
                        className="appearance-none w-full bg-input border border-border rounded-xl pl-4 pr-10 py-3.5 text-foreground text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 cursor-pointer"
                      >
                        <option value="" disabled>
                          Select number of attendees
                        </option>
                        <option value="1">Just me (1 person)</option>
                        <option value="2-5">Small group (2–5 people)</option>
                        <option value="6-20">Group (6–20 people)</option>
                        <option value="20+">Large group (20+ people)</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-muted-foreground">
                        <Icon name="ChevronDownIcon" size={16} />
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2"
                    >
                      Message{' '}
                      <span className="text-muted-foreground font-normal normal-case">
                        (optional)
                      </span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Any questions or special requirements?"
                      className="w-full bg-input border border-border rounded-xl px-4 py-3.5 text-foreground text-sm placeholder:text-muted-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold text-sm py-4 rounded-xl hover:bg-secondary transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 group"
                    >
                      Send My Enquiry
                      <Icon
                        name="ArrowRightIcon"
                        size={16}
                        className="text-primary-foreground group-hover:translate-x-1 transition-transform"
                      />
                    </button>
                    <p className="text-center text-[11px] text-muted-foreground mt-4 leading-relaxed">
                      By submitting you agree to our{' '}
                      <a href="#" className="underline hover:text-foreground">
                        Privacy Policy
                      </a>
                      .
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
