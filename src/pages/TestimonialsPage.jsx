import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading.jsx';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Sarah & Michael',
    role: 'Wedding Clients',
    text: 'Elena and her team made our wedding day absolutely magical. The photos are breathtaking — every time we look at them, we\'re transported right back to that moment. She has an incredible eye for the candid, emotional shots that matter most.',
    rating: 5,
  },
  {
    name: 'James Porter',
    role: 'CEO, Porter & Associates',
    text: 'The corporate headshots HashTag Studio delivered for our entire leadership team were outstanding. Professional, polished, and each one captured the individual\'s personality. Turnaround was incredibly fast.',
    rating: 5,
  },
  {
    name: 'The Garcia Family',
    role: 'Family Session',
    text: 'We\'ve done family photos every year for six years now, and no one has come close to what HashTag delivered. The kids were comfortable, the photos were natural, and we couldn\'t be happier. We\'ve already booked next year!',
    rating: 5,
  },
  {
    name: 'Rachel Kim',
    role: 'Newborn Session',
    text: 'I was so nervous about our newborn shoot, but Elena made everything feel easy and safe. She was so patient and gentle. The images are absolutely precious — we\'ll treasure them forever.',
    rating: 5,
  },
  {
    name: 'David Chen',
    role: 'Personal Branding',
    text: 'I needed photos that felt authentic for my coaching business — not stock-photo stiff. HashTag nailed it. The session was fun, and the results have transformed how clients see me online.',
    rating: 5,
  },
  {
    name: 'Olivia Barnes',
    role: 'Engagement Session',
    text: 'We got so many compliments on our engagement photos. They felt romantic, relaxed, and uniquely us. Can\'t wait for Elena to photograph our wedding!',
    rating: 5,
  },
];

export default function TestimonialsPage() {
  return (
    <section className="py-20 lg:py-28 max-w-7xl mx-auto px-6 lg:px-10">
      <SectionHeading
        subtitle="Kind Words"
        title="What Our Clients Say"
        description="We're honored by the trust our clients place in us. Here are some of their stories."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((r, i) => (
          <motion.div
            key={r.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="bg-card border border-border p-8 flex flex-col"
          >
            <Quote size={24} className="text-gold/40 mb-4" />
            <p className="text-foreground font-body text-sm leading-relaxed flex-1 italic">
              "{r.text}"
            </p>
            <div className="mt-6 pt-4 border-t border-border">
              <div className="flex gap-1 mb-2">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <Star key={j} size={14} className="text-gold fill-gold" />
                ))}
              </div>
              <p className="font-heading text-base text-foreground">{r.name}</p>
              <p className="text-xs text-muted-foreground font-body">{r.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
