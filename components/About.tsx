import React, { useState } from 'react';
import { CheckCircle2, Sparkles, Utensils, Award, BookOpen } from 'lucide-react';
import { restaurantConfig } from '../data/restaurantData';

export const About: React.FC = () => {
  const [storyModalOpen, setStoryModalOpen] = useState(false);

  return (
    <section id="about" className="py-24 bg-[#FAF7F2] text-[#1A2E22] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Visual Collage */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80"
                alt="Savora Restaurant Dining Atmosphere"
                className="w-full h-[460px] sm:h-[520px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-6 -right-6 sm:bottom-8 sm:-right-8 z-20 bg-[#1A2E22] text-white p-6 rounded-2xl shadow-xl border border-[#D4AF37]/30 max-w-xs">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#D4AF37] flex items-center justify-center text-[#1A2E22] font-bold text-xl">
                  12+
                </div>
                <div>
                  <h4 className="font-serif font-bold text-white text-base">Years of Excellence</h4>
                  <p className="text-xs text-gray-300">Crafting legendary dining memories</p>
                </div>
              </div>
            </div>

            {/* Decorative background element */}
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-[#D4AF37]/10 rounded-full blur-2xl -z-0" />
          </div>

          {/* Right Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A2E22]/5 border border-[#1A2E22]/10 text-xs font-semibold text-[#1A2E22] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Our Heritage & Philosophy</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A2E22] tracking-tight leading-tight">
              Where Culinary Passion Meets Timeless Elegance
            </h2>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-light">
              Founded in the heart of Lekki, <span className="font-semibold text-[#1A2E22]">{restaurantConfig.name}</span> was born out of a desire to elevate dining into an art form. We blend rich African heritage recipes with contemporary continental culinary techniques, creating dishes that awaken every palate.
            </p>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Every ingredient we use is meticulously handpicked from trusted local farmers and sustainable fisheries. From our signature wood-fired grills to handcrafted artisanal pasta, we promise an uncompromising commitment to quality, freshness, and hospitality.
            </p>

            {/* Three Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white shadow-sm border border-stone-200">
                <div className="w-9 h-9 rounded-lg bg-[#1A2E22]/5 flex items-center justify-center text-[#1A2E22] mb-3">
                  <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <h3 className="font-serif font-bold text-[#1A2E22] text-sm mb-1">Fresh Ingredients</h3>
                <p className="text-xs text-gray-600">Locally sourced daily without compromise.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white shadow-sm border border-stone-200">
                <div className="w-9 h-9 rounded-lg bg-[#1A2E22]/5 flex items-center justify-center text-[#1A2E22] mb-3">
                  <Award className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <h3 className="font-serif font-bold text-[#1A2E22] text-sm mb-1">Expert Chefs</h3>
                <p className="text-xs text-gray-600">World-class culinary artists and masters.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white shadow-sm border border-stone-200">
                <div className="w-9 h-9 rounded-lg bg-[#1A2E22]/5 flex items-center justify-center text-[#1A2E22] mb-3">
                  <Utensils className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <h3 className="font-serif font-bold text-[#1A2E22] text-sm mb-1">Memorable Dining</h3>
                <p className="text-xs text-gray-600">Sophisticated ambiance for every occasion.</p>
              </div>
            </div>

            {/* Discover Story Button */}
            <div className="pt-4">
              <button
                onClick={() => setStoryModalOpen(true)}
                className="px-7 py-3.5 rounded-full bg-[#1A2E22] hover:bg-[#284433] text-white font-medium text-sm transition-all shadow-md flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4 text-[#D4AF37]" />
                <span>Discover Our Full Story</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Story Modal */}
      {storyModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#FAF7F2] rounded-3xl max-w-2xl w-full p-8 shadow-2xl border border-stone-300 relative animate-fade-in max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setStoryModalOpen(false)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-stone-200 hover:bg-stone-300 flex items-center justify-center text-stone-800 font-bold transition-colors"
            >
              ✕
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center text-[#1A2E22]">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">Our Journey</span>
                <h3 className="font-serif text-2xl font-bold text-[#1A2E22]">The Savora Story</h3>
              </div>
            </div>

            <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
              <p>
                Established in 2014, {restaurantConfig.name} began as a small boutique dining room with a grand vision: to redefine how guests experience flavor, culture, and community.
              </p>
              <p>
                Our founder, Executive Chef Marcus, traveled across West Africa and Europe, mastering traditional spice blending as well as refined French culinary arts. When he returned to Lagos, he wanted to create a sanctuary where local roots meet international sophistication.
              </p>
              <p>
                Today, {restaurantConfig.name} stands as a culinary beacon on Admiralty Way, welcoming families, business leaders, and travelers from around the globe to share in our passion for extraordinary food and warm hospitality.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-stone-200 flex justify-end">
              <button
                onClick={() => setStoryModalOpen(false)}
                className="px-6 py-2.5 rounded-full bg-[#1A2E22] text-white font-medium text-sm"
              >
                Close Story
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
