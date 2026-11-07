import React from 'react';
import { Calendar, Compass, Star, Award, Clock } from 'lucide-react';
import { restaurantConfig } from '../data/restaurantData';

interface HeroProps {
  onNavigateReservation: () => void;
  onNavigateMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigateReservation, onNavigateMenu }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-[#1A2E22] text-white overflow-hidden pt-20">
      {/* Background Image with Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=85"
          alt="Savora Restaurant Luxury Dining Interior"
          className="w-full h-full object-cover object-center opacity-35 scale-105 animate-pulse duration-[10000ms]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A2E22] via-[#1A2E22]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A2E22] via-transparent to-black/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Content */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Rating Indicator */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-[#D4AF37]/30 text-xs sm:text-sm font-medium text-gray-200">
              <div className="flex items-center text-[#D4AF37]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-white font-semibold">4.9 / 5.0</span>
              <span className="text-gray-400">| 1,200+ Verified Reviews</span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
              Exceptional Taste. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#f3d373] to-[#D4AF37]">
                Unforgettable Moments.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
              Immerse your senses in a culinary symphony of artisanal local delicacies and exquisite continental masterpieces, crafted with passion by award-winning chefs at {restaurantConfig.name}.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onNavigateReservation}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#D4AF37] hover:bg-[#c29d30] text-[#1A2E22] font-bold text-base transition-all shadow-xl hover:shadow-[#D4AF37]/20 flex items-center justify-center gap-3 group transform hover:-translate-y-0.5"
              >
                <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Reserve a Table</span>
              </button>

              <button
                onClick={onNavigateMenu}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-base transition-all border border-white/20 backdrop-blur-md flex items-center justify-center gap-3 group"
              >
                <Compass className="w-5 h-5 text-[#D4AF37] group-hover:rotate-45 transition-transform" />
                <span>Explore Our Menu</span>
              </button>
            </div>

            {/* Feature Badges */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10 text-center lg:text-left">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-white">Award Winning</h4>
                  <p className="text-[11px] text-gray-400">Culinary Excellence</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] shrink-0">
                  <Star className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-white">Fresh Produce</h4>
                  <p className="text-[11px] text-gray-400">Locally Sourced Daily</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-white">Open Daily</h4>
                  <p className="text-[11px] text-gray-400">12:00 PM – Late</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Visual Card */}
          <div className="lg:col-span-5 hidden lg:block">
            <div className="relative mx-auto max-w-md">
              {/* Outer decorative ring */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#D4AF37]/40 to-transparent blur-xl opacity-70" />
              
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/10 bg-[#1A2E22]">
                <img
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
                  alt="Signature Dish - Pan-Seared Ribeye"
                  className="w-full h-[480px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A2E22] via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-[#1A2E22]/90 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold">Chef's Recommendation</span>
                    <h3 className="font-serif text-lg font-bold text-white">Pan-Seared Ribeye Steak</h3>
                    <p className="text-xs text-gray-300">Served with truffle potato mash & red wine jus</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-gray-400 block">Price</span>
                    <span className="font-serif text-lg font-bold text-[#D4AF37]">₦24,500</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
