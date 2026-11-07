import React, { useState } from 'react';
import { Sparkles, Maximize2, X } from 'lucide-react';
import { galleryItems } from '../data/restaurantData';
import { GalleryItem } from '../types';

export const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', 'Interior', 'Dishes', 'Chefs', 'Events'];

  const filteredGallery = galleryItems.filter(
    (item) => activeFilter === 'All' || item.category === activeFilter
  );

  return (
    <section id="gallery" className="py-24 bg-[#1A2E22] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#D4AF37]/30 text-xs font-semibold text-[#D4AF37] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Visual Journey</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Captured Moments at Savora
          </h2>
          <p className="text-gray-300 text-base sm:text-lg font-light">
            Take a glimpse into our vibrant ambiance, masterclass culinary creations, and unforgettable dining experiences.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === cat
                    ? 'bg-[#D4AF37] text-[#1A2E22] font-semibold'
                    : 'bg-white/10 hover:bg-white/20 text-gray-200 border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer shadow-xl border border-white/10 bg-black/40"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A2E22] via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-white mt-1">
                    {item.title}
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#1A2E22] rounded-3xl overflow-hidden border border-white/25 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full h-[60vh] sm:h-[70vh] object-cover"
            />

            <div className="p-6 bg-[#1A2E22] flex items-center justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                  {selectedImage.category}
                </span>
                <h3 className="font-serif text-2xl font-bold text-white mt-1">
                  {selectedImage.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="px-6 py-2.5 rounded-full bg-[#D4AF37] text-[#1A2E22] font-bold text-sm"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
