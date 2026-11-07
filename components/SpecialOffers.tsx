import React from 'react';
import { Sparkles, Calendar, Tag, ArrowRight } from 'lucide-react';
import { specialOffers } from '../data/restaurantData';

interface SpecialOffersProps {
  onNavigateReservation: () => void;
}

export const SpecialOffers: React.FC<SpecialOffersProps> = ({ onNavigateReservation }) => {
  return (
    <section id="offers" className="py-24 bg-[#FAF7F2] text-[#1A2E22] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A2E22]/5 border border-[#1A2E22]/10 text-xs font-semibold text-[#1A2E22] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Limited Time Experiences</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#1A2E22]">
            Special Offers & Packages
          </h2>
          <p className="text-gray-600 text-base sm:text-lg font-light">
            Indulge in our masterfully crafted tasting experiences and family feasts designed to make your dining moments truly exceptional.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specialOffers.map((offer) => (
            <div
              key={offer.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-xl border border-stone-200 hover:border-[#D4AF37] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image & Badge */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4 bg-[#D4AF37] text-[#1A2E22] px-3.5 py-1.5 rounded-full font-bold text-xs uppercase tracking-wider shadow">
                    {offer.badge}
                  </div>

                  {/* Validity */}
                  <div className="absolute bottom-4 left-4 text-white text-xs font-medium flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full">
                    <Tag className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>{offer.validUntil}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="font-serif text-2xl font-bold text-[#1A2E22] group-hover:text-[#D4AF37] transition-colors">
                    {offer.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-light">
                    {offer.description}
                  </p>

                  <div className="flex items-baseline gap-3 pt-2">
                    <span className="font-serif text-2xl font-bold text-[#1A2E22]">
                      ₦{offer.price.toLocaleString()}
                    </span>
                    {offer.originalPrice && (
                      <span className="text-sm text-gray-400 line-through">
                        ₦{offer.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={onNavigateReservation}
                  className="w-full py-3.5 rounded-2xl bg-[#1A2E22] hover:bg-[#284433] text-white font-medium text-sm transition-all shadow-md flex items-center justify-center gap-2 group/btn"
                >
                  <Calendar className="w-4 h-4 text-[#D4AF37]" />
                  <span>Reserve This Package</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
