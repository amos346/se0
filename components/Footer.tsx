import React from 'react';
import { UtensilsCrossed, Phone, Mail, MapPin, MessageSquare, Instagram, Facebook, Twitter, Image as ImageIcon } from 'lucide-react';
import { restaurantConfig } from '../data/restaurantData';

interface FooterProps {
  onOpenPrivacy: (type: 'privacy' | 'terms') => void;
  onNavigateReservation: () => void;
  onOpenImageManager: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onNavigateReservation, onOpenImageManager }) => {
  const scrollToSection = (id: string) => {
    if (id === 'reservation') {
      onNavigateReservation();
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${restaurantConfig.whatsappNumber}?text=Hello%20Savora%20Restaurant`, '_blank');
  };

  return (
    <footer className="bg-[#111f17] text-white pt-20 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/10">
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center text-[#1A2E22]">
                <UtensilsCrossed className="w-5 h-5" />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-wide text-white">
                  {restaurantConfig.name}
                </span>
                <span className="block text-[10px] tracking-[0.25em] text-[#D4AF37] uppercase font-medium">
                  Restaurant & Bar
                </span>
              </div>
            </div>

            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-light">
              {restaurantConfig.tagline}. Delivering exceptional culinary artistry, warm hospitality, and unforgettable moments in Lagos.
            </p>

            <div className="flex items-center space-x-3">
              <a
                href={restaurantConfig.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#D4AF37] hover:text-[#1A2E22] flex items-center justify-center text-white transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={restaurantConfig.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#D4AF37] hover:text-[#1A2E22] flex items-center justify-center text-white transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={restaurantConfig.socials.twitter}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#D4AF37] hover:text-[#1A2E22] flex items-center justify-center text-white transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <button
                onClick={handleWhatsApp}
                className="w-9 h-9 rounded-full bg-[#25D366] hover:bg-[#20ba59] flex items-center justify-center text-white transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-bold text-white tracking-wide">Quick Navigation</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About Us' },
                { id: 'menu', label: 'Our Menu' },
                { id: 'offers', label: 'Special Offers' },
                { id: 'gallery', label: 'Gallery' },
                { id: 'reservation', label: 'Table Reservations' },
                { id: 'contact', label: 'Contact & Location' }
              ].map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.id);
                    }}
                    className="text-gray-300 hover:text-[#D4AF37] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-bold text-white tracking-wide">Opening Hours</h4>
            <div className="space-y-3 text-xs sm:text-sm text-gray-300">
              {restaurantConfig.openingHours.map((o, idx) => (
                <div key={idx}>
                  <p className="font-medium text-white">{o.days}</p>
                  <p className="text-[#D4AF37]">{o.hours}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-bold text-white tracking-wide">Contact & Owner</h4>
            <div className="space-y-3 text-xs sm:text-sm text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>{restaurantConfig.address}, {restaurantConfig.city}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>{restaurantConfig.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>{restaurantConfig.email}</span>
              </div>
            </div>

            <div className="pt-2 space-y-2">
              <button
                onClick={onOpenImageManager}
                className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs flex items-center justify-center gap-2 border border-white/20 transition-colors"
              >
                <ImageIcon className="w-4 h-4 text-[#D4AF37]" />
                <span>Owner Photo Studio</span>
              </button>

              <button
                onClick={handleWhatsApp}
                className="w-full py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs flex items-center justify-center gap-2 shadow"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat with Concierge</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© {new Date().getFullYear()} {restaurantConfig.name}. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <button
              onClick={() => onOpenPrivacy('privacy')}
              className="hover:text-[#D4AF37] transition-colors"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenPrivacy('terms')}
              className="hover:text-[#D4AF37] transition-colors"
            >
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
