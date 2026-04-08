import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading.jsx';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeading
          subtitle="Get in Touch"
          title="We'd Love to Hear From You"
          description="Ready to book a session or have questions? Drop us a message and we'll get back to you within 24 hours."
        />

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16 border border-border bg-card p-10"
              >
                <div className="w-16 h-16 rounded-full bg-gold/15 text-gold flex items-center justify-center mx-auto mb-6">
                  <Send size={28} />
                </div>
                <h3 className="font-heading text-2xl text-foreground">Message Sent!</h3>
                <p className="text-muted-foreground font-body mt-3">
                  Thank you for reaching out. We'll respond within one business day.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs tracking-widest uppercase font-body text-muted-foreground mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full border border-border bg-card px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-gold transition-colors"
                      placeholder="Raja"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase font-body text-muted-foreground mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full border border-border bg-card px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-gold transition-colors"
                      placeholder="Ram"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase font-body text-muted-foreground mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full border border-border bg-card px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-gold transition-colors"
                    placeholder="hello@example.com"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase font-body text-muted-foreground mb-2">
                    Service Interested In
                  </label>
                  <select className="w-full border border-border bg-card px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-gold transition-colors">
                    <option value="">Select a service...</option>
                    <option>Wedding Photography</option>
                    <option>Portrait Session</option>
                    <option>Family Photography</option>
                    <option>Newborn & Maternity</option>
                    <option>Corporate & Events</option>
                    <option>Product & Commercial</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase font-body text-muted-foreground mb-2">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full border border-border bg-card px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-gold transition-colors resize-none"
                    placeholder="Tell us about your vision, preferred dates, and any questions you may have..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gold text-gold-foreground px-10 py-3.5 text-sm tracking-widest uppercase font-body font-semibold hover:opacity-90 transition-opacity"
                >
                  Send Message <Send size={14} />
                </button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-secondary p-8">
              <h3 className="font-heading text-lg text-foreground mb-5">Contact Info</h3>
              <div className="space-y-4 font-body text-sm">
                <p className="flex items-start gap-3 text-muted-foreground">
                  <Phone size={16} className="text-gold mt-0.5 shrink-0" />
                  +91 8778724099
                </p>
                <p className="flex items-start gap-3 text-muted-foreground">
                  <Mail size={16} className="text-gold mt-0.5 shrink-0" />
                    hashtagtudiopvt@gmail.com                </p>
                <p className="flex items-start gap-3 text-muted-foreground">
                  <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
                  107,Kanniyamman Kovil St,1st floor,<br />Arcot Road, Cheyyar-604407
                </p>
                <p className="flex items-start gap-3 text-muted-foreground">
                  <Clock size={16} className="text-gold mt-0.5 shrink-0" />
                  Mon–Fri: 9am – 6pm<br />Sat: By appointment<br />Sun: Closed
                </p>
              </div>
            </div>

            <div className="bg-secondary p-8">
              <h3 className="font-heading text-lg text-foreground mb-3">Quick Response</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                We typically respond within 24 hours on business days. For urgent inquiries, please call us directly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
