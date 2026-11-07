import React, { useState, useEffect } from 'react';
import { UtensilsCrossed, ShoppingBag, Menu, X, Calendar, Phone, Image as ImageIcon } from 'lucide-react';
import { restaurantConfig } from '../data/restaurantData';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onNavigateReservation: () => void;
  onOpenImageManager: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart, onNavigateReservation, onOpenImageManager }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['home', 'about', 'menu', 'offers', 'gallery', 'reservation', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    if (id === 'reservation') {
      onNavigateReservation();
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#1A2E22]/95 backdrop-blur-md shadow-lg py-3 text-white'
            : 'bg-gradient-to-b from-[#1A2E22]/90 to-transparent py-5 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
          >
            <div className="w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center text-[#1A2E22] shadow-md group-hover:scale-105 transition-transform">
              <UtensilsCrossed className="w-5 h-5" />
            </div>
            <div>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-wide text-white">
                Savora
              </span>
              <span className="block text-[10px] tracking-[0.25em] text-[#D4AF37] uppercase font-medium">
                Restaurant & Bar
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7 text-sm font-medium">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About Us' },
              { id: 'menu', label: 'Our Menu' },
              { id: 'offers', label: 'Offers' },
              { id: 'gallery', label: 'Gallery' },
              { id: 'contact', label: 'Contact' },
            ].map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.id);
                }}
                className={`transition-colors hover:text-[#D4AF37] relative py-1 ${
                  activeSection === link.id ? 'text-[#D4AF37] font-semibold' : 'text-gray-200'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D4AF37] rounded-full" />
                )}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Owner Photo Studio Button */}
            <button
              onClick={onOpenImageManager}
              title="Restaurant Owner: Manage Photos"
              className="px-3.5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-200 hover:text-white transition-colors text-xs font-medium flex items-center gap-1.5 border border-white/10"
            >
              <ImageIcon className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Owner Photos</span>
            </button>

            {/* Cart Button */}
            <button
              onClick={onOpenCart}
              aria-label="View Cart"
              className="relative p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center justify-center border border-white/10"
            >
              <ShoppingBag className="w-5 h-5 text-[#D4AF37]" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#D4AF37] text-[#1A2E22] font-bold text-xs w-5 h-5 rounded-full flex items-center justify-center shadow">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Book Table CTA */}
            <button
              onClick={onNavigateReservation}
              className="px-5 py-2.5 rounded-full bg-[#D4AF37] hover:bg-[#c29d30] text-[#1A2E22] font-semibold text-sm transition-all shadow-md hover:shadow-lg flex items-center gap-2 transform hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Table</span>
            </button>
          </div>

          {/* Mobile Menu & Cart Toggle */}
          <div className="flex items-center space-x-3 lg:hidden">
            <button
              onClick={onOpenCart}
              aria-label="View Cart"
              className="relative p-2 rounded-full bg-white/10 text-white"
            >
              <ShoppingBag className="w-5 h-5 text-[#D4AF37]" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#D4AF37] text-[#1A2E22] font-bold text-xs w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#1A2E22]/98 backdrop-blur-xl flex flex-col pt-24 px-6 pb-12 lg:hidden text-white overflow-y-auto animate-fade-in">
          <div className="flex flex-col space-y-6 text-center">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About Us' },
              { id: 'menu', label: 'Our Menu' },
              { id: 'offers', label: 'Special Offers' },
              { id: 'gallery', label: 'Gallery' },
              { id: 'reservation', label: 'Reservations' },
              { id: 'contact', label: 'Contact Us' },
            ].map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.id);
                }}
                className="font-serif text-2xl font-medium py-2 hover:text-[#D4AF37] transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenImageManager();
                }}
                className="w-full py-3.5 rounded-xl bg-white/10 text-white font-medium text-sm flex items-center justify-center gap-2 border border-white/20"
              >
                <ImageIcon className="w-4 h-4 text-[#D4AF37]" />
                <span>Manage Photos (Owner Studio)</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigateReservation();
                }}
                className="w-full py-3.5 rounded-xl bg-[#D4AF37] text-[#1A2E22] font-bold text-base flex items-center justify-center gap-2 shadow-lg"
              >
                <Calendar className="w-5 h-5" />
                <span>Reserve a Table</span>
              </button>

              <a
                href={`tel:${restaurantConfig.phone}`}
                className="w-full py-3.5 rounded-xl bg-white/10 text-white font-medium text-sm flex items-center justify-center gap-2 border border-white/20"
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span>Call Us: {restaurantConfig.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
