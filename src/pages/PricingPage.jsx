import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading.jsx';
import { Check, ArrowRight } from 'lucide-react';

const plans = [
  {
    name: 'Essential',
    price: '$350',
    desc: 'Perfect for headshots & personal branding',
    features: ['1-hour session', '1 location', '15 edited images', 'Online gallery', 'Print-ready downloads'],
  },
  {
    name: 'Signature',
    price: '$850',
    popular: true,
    desc: 'Ideal for families, couples & creative portraits',
    features: ['2-hour session', '2 locations or outfit changes', '40 edited images', 'Online gallery with sharing', 'Print-ready downloads', '5 complimentary prints (8×10)'],
  },
  {
    name: 'Wedding',
    price: '$3,200',
    desc: 'Complete wedding day documentation',
    features: ['Up to 10 hours coverage', 'Engagement session included', 'Second photographer', '300+ edited images', 'Heirloom photo album', 'Online gallery for 12 months', 'Rehearsal dinner coverage'],
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeading
          subtitle="Investment"
          title="Simple, Transparent Pricing"
          description="Every package includes a pre-session consultation, professional editing, and a personal online gallery. Custom packages available upon request."
        />

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`relative border p-8 lg:p-10 flex flex-col ${
                plan.popular ? 'border-gold bg-card shadow-xl' : 'border-border bg-card'
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-gold-foreground text-[10px] tracking-widest uppercase font-body font-semibold px-4 py-1">
                  Most Popular
                </span>
              )}
              <h3 className="font-heading text-2xl text-foreground">{plan.name}</h3>
              <p className="text-muted-foreground font-body text-sm mt-2">{plan.desc}</p>
              <p className="font-heading text-4xl text-foreground mt-6">{plan.price}</p>
              <p className="text-xs text-muted-foreground font-body mt-1">starting from</p>
              <ul className="mt-8 space-y-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm font-body text-foreground">
                    <Check size={16} className="text-gold mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`mt-8 inline-flex items-center justify-center gap-2 py-3.5 text-sm tracking-widest uppercase font-body font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-gold text-gold-foreground hover:opacity-90'
                    : 'bg-primary text-primary-foreground hover:bg-primary/90'
                }`}
              >
                Book Now <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-secondary text-center max-w-3xl mx-auto px-6">
        <p className="font-heading text-xl text-foreground">Need something custom?</p>
        <p className="text-muted-foreground font-body text-sm mt-2 leading-relaxed">
          We're happy to create a bespoke package tailored to your event or project. Reach out and let's discuss what works best for you.
        </p>
        <Link
          to="/contact"
          className="mt-6 inline-flex items-center gap-2 text-sm tracking-widest uppercase font-body text-gold hover:text-accent transition-colors"
        >
          Request Custom Quote <ArrowRight size={14} />
        </Link>
      </section>
    </>
  );
}
