'use client';
import React, { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 px-6 bg-foreground">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-light text-white mb-4">Get in Touch</h2>
            <p className="text-white/60 mb-8">
              Send us your details and we&apos;ll get back to you with ticketing options and
              everything you need to plan your visit.
            </p>
            <div className="space-y-4">
              <p className="text-sm text-white/60">Response within 24 hours</p>
              <p className="text-sm text-white/60">Flexible ticket options available</p>
            </div>
          </div>

          <div className="bg-card p-8">
            {submitted ? (
              <div className="text-center py-12">
                <h3 className="text-xl font-light text-foreground mb-2">Message Sent!</h3>
                <p className="text-muted-foreground">We&apos;ll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-input border border-border rounded p-3 text-foreground"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-input border border-border rounded p-3 text-foreground"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-input border border-border rounded p-3 text-foreground resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-white text-foreground py-3 font-light hover:bg-white/90 transition-colors"
                >
                  Send
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
