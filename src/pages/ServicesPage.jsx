import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading.jsx';
import { Camera, Heart, Users, Baby, Briefcase, Image, ArrowRight } from 'lucide-react';

const services = [
  {
    Icon: Heart,
    title: 'Wedding Photography',
    desc: 'From intimate elopements to grand celebrations, we document every tear, laugh, and stolen glance. Full-day coverage with a second photographer available.',
    features: ['8-12 hours coverage', 'Engagement session included', 'Online gallery', 'Print-ready files'],
  },
  {
    Icon: Camera,
    title: 'Portrait Sessions',
    desc: 'Professional headshots, creative editorials, or personal branding — tailored lighting and direction to bring out your best self.',
    features: ['1-2 hour sessions', 'Wardrobe consultation', '3 outfit changes', 'Retouched images'],
  },
  {
    Icon: Users,
    title: 'Family Photography',
    desc: 'Natural, candid moments with your loved ones. We make sessions fun for kids and comfortable for everyone.',
    features: ['Outdoor or studio', 'Extended family welcome', 'Holiday mini sessions', 'Gallery prints'],
  },
  {
    Icon: Baby,
    title: 'Newborn & Maternity',
    desc: 'Gentle, safe sessions celebrating new life. We bring props, wraps, and endless patience to capture those fleeting first days.',
    features: ['In-home available', 'Baby-safe studio', 'Props provided', 'Sibling photos'],
  },
  {
    Icon: Briefcase,
    title: 'Corporate & Events',
    desc: 'Brand photography, team headshots, conferences, and galas — professional imagery that elevates your business presence.',
    features: ['On-location', 'Same-day previews', 'Brand alignment', 'Volume packages'],
  },
  {
    Icon: Image,
    title: 'Product & Commercial',
    desc: 'Clean, compelling product photography for e-commerce, catalogs, and advertising campaigns.',
    features: ['Styled flat lays', 'White background', 'Lifestyle shots', 'Fast turnaround'],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeading
          subtitle="What We Offer"
          title="Photography Services"
          description="From milestone celebrations to everyday beauty, we offer a range of professional photography services tailored to your needs."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-card border border-border p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold/15 text-gold mb-5">
                <svc.Icon size={22} />
              </div>
              <h3 className="font-heading text-xl mb-3 text-foreground">{svc.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed mb-5">{svc.desc}</p>
              <ul className="space-y-2">
                {svc.features.map((f) => (
                  <li key={f} className="text-xs font-body text-muted-foreground flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-gold inline-block" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-warm text-center">
        <p className="font-heading text-2xl text-foreground mb-4">Not sure which service is right for you?</p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 text-sm tracking-widest uppercase font-body font-semibold hover:bg-primary/90 transition-colors"
        >
          Let's Chat <ArrowRight size={16} />
        </Link>
      </section>
    </>
  );
}
