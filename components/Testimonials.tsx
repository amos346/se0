import React from 'react';
import { Star, Sparkles, Quote } from 'lucide-react';
import { testimonials } from '../data/restaurantData';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-[#FAF7F2] text-[#1A2E22] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A2E22]/5 border border-[#1A2E22]/10 text-xs font-semibold text-[#1A2E22] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Guest Experiences</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#1A2E22]">
            Loved by Our Guests
          </h2>
          <p className="text-gray-600 text-base sm:text-lg font-light">
            Read what our esteemed patrons have to say about their dining journeys at {testimonials.length ? 'Savora Restaurant' : ''}.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-3xl p-8 shadow-xl border border-stone-200 flex flex-col justify-between relative group hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="absolute top-6 right-8 text-stone-200 group-hover:text-[#D4AF37]/35 transition-colors">
                <Quote className="w-12 h-12" />
              </div>

              <div className="space-y-6 relative z-10">
                {/* Rating */}
                <div className="flex items-center text-[#D4AF37] gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-gray-700 text-base leading-relaxed font-light italic">
                  "{t.comment}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-6 mt-6 border-t border-stone-100 relative z-10">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#D4AF37]"
                />
                <div>
                  <h4 className="font-serif font-bold text-[#1A2E22] text-base">
                    {t.name}
                  </h4>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
