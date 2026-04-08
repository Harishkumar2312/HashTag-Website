import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading.jsx';
import { Clock } from 'lucide-react';

const posts = [
  { title: '10 Tips for Looking Natural in Photos', excerpt: 'Feeling stiff in front of the camera? Here are our top tips for relaxing and letting your authentic self shine through during any photo session.', date: 'March 15, 2026', readTime: '5 min read', category: 'Tips & Tricks' },
  { title: 'What to Wear: A Guide to Session Outfits', excerpt: 'Choosing the right outfit can make or break your photos. Our detailed guide covers colors, patterns, textures, and layering for every type of session.', date: 'February 28, 2026', readTime: '7 min read', category: 'Style Guide' },
  { title: 'Behind the Scenes: A Rustic Barn Wedding', excerpt: "Take a peek behind the curtain as we share the story of capturing Sarah & Michael's dreamy autumn wedding at Willow Creek Farm.", date: 'February 10, 2026', readTime: '4 min read', category: 'Behind the Scenes' },
  { title: 'The Golden Hour: Why Timing Matters', excerpt: 'Discover why photographers are obsessed with golden hour and how the right timing can transform ordinary scenes into extraordinary photographs.', date: 'January 22, 2026', readTime: '6 min read', category: 'Education' },
  { title: 'Preparing for Your Newborn Session', excerpt: "A new baby is exciting and overwhelming. Here's everything you need to know to prepare for a stress-free, beautiful newborn photography session.", date: 'January 8, 2026', readTime: '5 min read', category: 'Tips & Tricks' },
  { title: 'Why Print Still Matters in a Digital World', excerpt: 'In an age of cloud storage and social media, we make the case for tangible, printed photographs you can hold, frame, and pass down.', date: 'December 18, 2025', readTime: '4 min read', category: 'Inspiration' },
];

export default function BlogPage() {
  return (
    <section className="py-20 lg:py-28 max-w-7xl mx-auto px-6 lg:px-10">
      <SectionHeading
        subtitle="Journal"
        title="Stories, Tips & Inspiration"
        description="Insights from behind the lens — practical advice, behind-the-scenes stories, and creative inspiration for your next session."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, i) => (
          <motion.article
            key={post.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="border border-border bg-card p-8 flex flex-col hover:shadow-lg transition-shadow duration-300 group"
          >
            <span className="text-[10px] tracking-widest uppercase font-body text-gold font-semibold">
              {post.category}
            </span>
            <h3 className="font-heading text-xl mt-3 text-foreground group-hover:text-gold transition-colors leading-snug">
              {post.title}
            </h3>
            <p className="text-muted-foreground font-body text-sm leading-relaxed mt-3 flex-1">
              {post.excerpt}
            </p>
            <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
              <span className="text-xs text-muted-foreground font-body">{post.date}</span>
              <span className="text-xs text-muted-foreground font-body flex items-center gap-1">
                <Clock size={12} /> {post.readTime}
              </span>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
