import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl mb-4">
              #HashTag <span className="opacity-70 font-light">Studio</span>
            </h3>
            <p className="text-sm leading-relaxed opacity-80 font-body">
              Bringing Love To Life Through Stunning Visuals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg mb-4">Explore</h4>
            <div className="flex flex-col gap-2">
              {[
                { to: '/portfolio', label: 'Portfolio' },
                { to: '/services', label: 'Services' },
                // { to: '/pricing', label: 'Pricing' },
                // { to: '/blog', label: 'Blog' },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm opacity-70 hover:opacity-100 transition-opacity font-body"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg mb-4">Get in Touch</h4>
            <div className="flex flex-col gap-3 text-sm opacity-80 font-body">
              <span className="flex items-center gap-2">
                <Phone size={10} /> 8778724099
              </span>
              <span className="flex items-center gap-2">
                <Mail size={14} /> hashtagtudiopvt@gmail.com
              </span>
              <span className="flex items-center gap-2">
                <MapPin size={14} /> 107,Kanniyamman Kovil St,1st floor, Arcot Road, Cheyyar-604407
              </span>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading text-lg mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/_hashtag_photography_cheyyar/" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity" aria-label="Instagram">
                <Instagram size={22} />
              </a>
              <a href="https://www.facebook.com/HashtagPhotographyCheyyar/" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity" aria-label="Facebook">
                <Facebook size={22} />
              </a>
            </div><br />
            <p className='creations'>Created by <a href="https://harishkumar-r-o2shab6.gamma.site/" className='creation'>Harishkumar</a> </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-xs opacity-60 font-body">
            &copy; {new Date().getFullYear()} Hashtag Studio. All rights reserved. Handcrafted with care.
          </p>
          
        </div>
      </div>
    </footer>
  );
}
