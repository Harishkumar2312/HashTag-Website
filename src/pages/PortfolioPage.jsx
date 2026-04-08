import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../components/SectionHeading.jsx';

const categories = ['All', 'Weddings', 'Portraits', 'Family'];

const photos = [
  { src: 'public/images/wedding1.png', cat: 'Weddings', title: 'Couples' },
  { src: 'public/images/pot10.png', cat: 'Portraits', title: 'Executive Portrait' },
  { src: 'public/images/wed2.png', cat: 'Family', title: 'The Andersons' },
  { src: 'public/images/wed3.png', cat: 'Weddings', title: 'Couples' },
  { src: 'public/images/pot2.png', cat: 'Portraits', title: 'Executive Portrait' },
  { src: 'public/images/pot9.png', cat: 'Portraits', title: 'Executive Portrait' },
  { src: 'public/images/pot7.png', cat: 'Portraits', title: 'Executive Portrait' },
  { src: 'public/images/pot4.png', cat: 'Portraits', title: 'Executive Portrait' },
  { src: 'public/images/pot8.png', cat: 'Portraits', title: 'Executive Portrait' },

];

export default function PortfolioPage() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? photos : photos.filter((p) => p.cat === active);

  return (
    <section className="py-20 lg:py-28 max-w-7xl mx-auto px-6 lg:px-10">
      <SectionHeading
        subtitle="Portfolio"
        title="Our Work Speaks for Itself"
        description="Browse through our curated collections from years of passionate photography."
      />

      {/* Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-5 py-2 text-xs tracking-widest uppercase font-body transition-colors border ${
              active === cat
                ? 'bg-primary text-primary-foreground border-primary'
                : 'bg-transparent text-muted-foreground border-border hover:text-foreground hover:border-foreground'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {filtered.map((photo) => (
            <div key={photo.title} className="group relative overflow-hidden">
              <img
                src={photo.src}
                alt={photo.title}
                loading="lazy"
                className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-5">
                <div>
                  <p className="font-heading text-lg text-primary-foreground">{photo.title}</p>
                  <p className="text-primary-foreground/70 text-xs font-body tracking-wide uppercase">{photo.cat}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
