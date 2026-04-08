import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Camera, Heart, Star } from 'lucide-react';
import SectionHeading from '../components/SectionHeading.jsx';

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img src="/images/hero-portrait.jpg" alt="Portrait in natural light" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-xl"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-gold font-body font-semibold" id='homes'>
              Fine Art Photography
            </span>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-primary-foreground mt-4 leading-[1.1]">
              Every moment deserves to be <em className="italic">remembered</em>
            </h1>
            <p className="mt-6 text-primary-foreground/80 font-body text-lg leading-relaxed max-w-md" id='home'>
              We capture the raw beauty of life's most precious moments — from intimate portraits to grand celebrations.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gold text-gold-foreground px-8 py-3.5 text-sm tracking-widest uppercase font-body font-semibold hover:opacity-90 transition-opacity"
              >
                Book a Session <ArrowRight size={16} />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 border border-primary-foreground/40 text-primary-foreground px-8 py-3.5 text-sm tracking-widest uppercase font-body hover:bg-primary-foreground/10 transition-colors"
              >
                View Portfolio
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-warm py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { num: '09+', label: 'Years Experience' },
            { num: '1700+', label: 'Sessions Shot' },
            { num: '98%', label: 'Happy Clients' },
            { num: '07+', label: 'Awards Won' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-heading text-3xl lg:text-4xl text-foreground">{stat.num}</p>
              <p className="text-sm text-muted-foreground font-body mt-1 tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeading
          subtitle="Our Work"
          title="Featured Collections"
          description="A glimpse into our most cherished photography sessions, each telling a unique story."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { img: 'public/images/wedding1.png', title: 'Weddings', desc: 'Capturing love stories' },
            { img: 'public/images/pot9.png', title: 'Portraits', desc: 'Professional & personal' },
            { img: 'public/images/wed2.png', title: 'Families', desc: 'Moments that matter' },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="group relative overflow-hidden"
            >
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <div>
                  <h3 className="font-heading text-xl text-primary-foreground">{item.title}</h3>
                  <p className="text-primary-foreground/70 font-body text-sm">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/portfolio" className="text-sm tracking-widest uppercase font-body text-gold hover:text-accent transition-colors inline-flex items-center gap-2">
            View Some Work <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* Why us */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionHeading subtitle="Why Choose Us" title="The #HashTag Difference" />
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { Icon: Camera, title: 'Artful Vision', desc: 'Every shoot is approached as a creative collaboration, resulting in images that feel authentic and timeless.' },
              { Icon: Heart, title: 'Personal Touch', desc: 'We take the time to understand your story, ensuring each photograph reflects who you truly are.' },
              { Icon: Star, title: 'Award-Winning', desc: 'Recognized by industry peers for our distinctive style and commitment to photographic excellence.' },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold/15 text-gold mb-5">
                  <item.Icon size={24} />
                </div>
                <h3 className="font-heading text-xl mb-3 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 text-center max-w-3xl mx-auto px-6">
        <SectionHeading
          subtitle="Ready?"
          title="Let's Create Something Beautiful Together"
          description="Whether it's a wedding, a family session, or a personal portrait — we'd love to hear your story."
        />
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-10 py-4 text-sm tracking-widest uppercase font-body font-semibold hover:bg-primary/90 transition-colors"
        >
          Get in Touch <ArrowRight size={16} />
        </Link>
      </section>
    </>
  );
}
