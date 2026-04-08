import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading.jsx';
import { Award, Users, Clock, Aperture } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-xs tracking-[0.3em] uppercase text-gold font-body font-semibold">Our Story</span>
            <h1 className="font-heading text-4xl lg:text-5xl mt-3 text-foreground leading-tight">
              Passionate about capturing life's most <em className="italic">beautiful</em> moments
            </h1>
            <p className="mt-6 text-muted-foreground font-body leading-relaxed">
              Founded in 2017 by A.K.Sarath, #Hashtag Studio was born from a simple belief: every person has a story worth preserving. What started as a one-Man operation in a small downtown loft has grown into one of TN's most sought-after photography studios.
            </p>
            <p className="mt-4 text-muted-foreground font-body leading-relaxed">
              Our approach blends fine-art sensibility with genuine human connection. We don't just take photos — we create experiences that leave you feeling seen, c~brated, and truly yourself.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
            <img src="public/images/Sarath.jpg" alt="A.K.Sarath , founder" className="w-full aspect-[4/5] object-cover" loading="lazy" />
            <p className="mt-3 text-sm text-muted-foreground font-body italic">A.K.Sarath  — Founder & Lead Photographer</p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionHeading subtitle="Our Values" title="What Drives Us" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { Icon: Aperture, title: 'Artistic Excellence', desc: 'Every frame is composed with intention, light, and emotion.' },
              { Icon: Users, title: 'Client First', desc: 'Your comfort and vision guide every decision we make.' },
              { Icon: Clock, title: 'Timeless Quality', desc: 'Images that look just as stunning decades from now.' },
              { Icon: Award, title: 'Integrity', desc: 'Honest pricing, transparent process, and genuine care.' },
            ].map((v) => (
              <div key={v.title} className="text-center lg:text-left">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold/15 text-gold mb-4">
                  <v.Icon size={22} />
                </div>
                <h3 className="font-heading text-lg mb-2 text-foreground">{v.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeading subtitle="The Space" title="Our Studio" description="A sun-drenched, 2,000 sq ft creative haven in the heart of LA's Arts District — designed for comfort and creativity." />
        <img src="/images/about-studio.jpg" alt="HashTag Studio interior" className="w-full aspect-video object-cover" loading="lazy" />
      </section>
    </>
  );
}
