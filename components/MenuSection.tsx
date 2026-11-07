import React, { useState, useMemo } from 'react';
import { Search, Plus, Check, Sparkles, ShoppingBag } from 'lucide-react';
import { menuCategories } from '../data/restaurantData';
import { MenuItem } from '../types';

interface MenuSectionProps {
  menuItems: MenuItem[];
  onAddToCart: (item: MenuItem) => void;
  cartItemsCount: number;
  onOpenCart: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ menuItems, onAddToCart, cartItemsCount, onOpenCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [addedItemId, setAddedItemId] = useState<string | null>(null);

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [menuItems, selectedCategory, searchQuery]);

  const handleAddWithFeedback = (item: MenuItem) => {
    onAddToCart(item);
    setAddedItemId(item.id);
    setTimeout(() => {
      setAddedItemId(null);
    }, 1200);
  };

  return (
    <section id="menu" className="py-24 bg-[#1A2E22] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#D4AF37]/30 text-xs font-semibold text-[#D4AF37] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Exquisite Offerings</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Explore Our Curated Menu
          </h2>
          <p className="text-gray-300 text-base sm:text-lg font-light">
            Featuring authentic Nigerian local specialties, party platters, and continental masterpieces made fresh to order.
          </p>
        </div>

        {/* Search and Filters Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          {/* Category Filter Buttons */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {menuCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all shrink-0 ${
                  selectedCategory === cat.id
                    ? 'bg-[#D4AF37] text-[#1A2E22] font-semibold shadow-lg'
                    : 'bg-white/10 hover:bg-white/20 text-gray-200 border border-white/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search dishes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
            />
          </div>
        </div>

        {/* Menu Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-20 bg-white/5 rounded-3xl border border-white/10">
            <p className="text-gray-400 text-lg">No dishes found matching your search.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-4 px-6 py-2.5 rounded-full bg-[#D4AF37] text-[#1A2E22] font-semibold text-sm"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((dish) => (
              <div
                key={dish.id}
                className="group bg-white/5 rounded-3xl overflow-hidden border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col justify-between shadow-xl hover:-translate-y-1"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden bg-black/50">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A2E22] via-transparent to-transparent opacity-80" />

                    {/* Price Tag */}
                    <div className="absolute top-4 right-4 bg-[#1A2E22]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-[#D4AF37] font-serif font-bold text-base shadow-lg">
                      ₦{dish.price.toLocaleString()}
                    </div>

                    {/* Dietary Tags */}
                    <div className="absolute bottom-3 left-4 flex flex-wrap gap-1.5">
                      {dish.dietary?.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-0.5 rounded-md bg-[#D4AF37]/90 text-[#1A2E22] font-semibold text-[10px] uppercase tracking-wider shadow"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-3">
                    <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                      {dish.name}
                    </h3>
                    <p className="text-gray-300 text-xs sm:text-sm line-clamp-2 leading-relaxed font-light">
                      {dish.description}
                    </p>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="px-6 pb-6 pt-0 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest text-gray-400 font-medium">
                    {dish.category}
                  </span>
                  <button
                    onClick={() => handleAddWithFeedback(dish)}
                    className={`px-4 py-2.5 rounded-full text-xs font-semibold flex items-center gap-2 transition-all shadow-md ${
                      addedItemId === dish.id
                        ? 'bg-emerald-600 text-white'
                        : 'bg-[#D4AF37] hover:bg-[#c29d30] text-[#1A2E22]'
                    }`}
                  >
                    {addedItemId === dish.id ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Added to Order</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add to Order</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Cart Prompt */}
        {cartItemsCount > 0 && (
          <div className="fixed bottom-6 right-6 z-30 animate-bounce">
            <button
              onClick={onOpenCart}
              className="px-6 py-3.5 rounded-full bg-[#D4AF37] text-[#1A2E22] font-bold text-sm shadow-2xl flex items-center gap-3 border-2 border-white/20"
            >
              <ShoppingBag className="w-5 h-5" />
              <span>View Order ({cartItemsCount} items)</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
