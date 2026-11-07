import { MenuItem, SpecialOffer, Testimonial, GalleryItem, RestaurantConfig } from '../types';

export const restaurantConfig: RestaurantConfig = {
  name: 'Savora Restaurant',
  tagline: 'Exceptional Taste. Unforgettable Moments.',
  phone: '+234 801 234 5678',
  whatsappNumber: '2348012345678',
  email: 'reservations@savorarestaurant.com',
  address: '12 Admiralty Way, Lekki Phase 1',
  city: 'Lagos, Nigeria',
  openingHours: [
    { days: 'Monday – Thursday', hours: '12:00 PM – 10:30 PM' },
    { days: 'Friday – Saturday', hours: '12:00 PM – 11:30 PM' },
    { days: 'Sunday', hours: '1:00 PM – 10:00 PM' }
  ],
  socials: {
    instagram: 'https://instagram.com/savorarestaurant',
    facebook: 'https://facebook.com/savorarestaurant',
    twitter: 'https://twitter.com/savorarestaurant',
    tripadvisor: 'https://tripadvisor.com'
  }
};

export const menuCategories = [
  { id: 'all', label: 'All Dishes' },
  { id: 'starters', label: 'Starters & Wraps' },
  { id: 'mains', label: 'Main Courses' },
  { id: 'local', label: 'Local Specialties' },
  { id: 'platters', label: 'Party Platters' },
  { id: 'drinks', label: 'Drinks & Cocktails' },
];

export const menuItems: MenuItem[] = [
  // Local Specialties & Soups
  {
    id: 'm1',
    name: 'Authentic Egusi Soup with Assorted Meats',
    description: 'Rich, hand-ground melon seed soup simmered with fresh spinach, tender beef, shaki (tripe), pomo, and premium stockfish.',
    price: 9500,
    category: 'local',
    image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=800&q=80',
    dietary: ['Halal', 'Chef Special'],
    popular: true
  },
  {
    id: 'm2',
    name: 'Pounded Yam & Rich Vegetable Soup',
    description: 'Smooth, fluffy freshly pounded yam served alongside an opulent vegetable soup loaded with succulent meats and seafood.',
    price: 10500,
    category: 'local',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
    dietary: ['Halal', 'Chef Special'],
    popular: true
  },

  // Rice & Mains
  {
    id: 'm3',
    name: 'Smoky Party Jollof Rice & Fried Chicken',
    description: 'Traditional wood-smoke flavored party jollof rice served with a golden fried chicken drumstick and fresh coleslaw salad.',
    price: 8500,
    category: 'mains',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    dietary: ['Spicy', 'Halal'],
    popular: true
  },
  {
    id: 'm4',
    name: 'Special Fried Rice & Chicken',
    description: 'Aromatic basmati fried rice tossed with mixed diced vegetables, green peas, sweet corn, and tender spiced chicken.',
    price: 9000,
    category: 'mains',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
    dietary: ['Halal'],
    popular: true
  },
  {
    id: 'm5',
    name: 'Royal Jollof Rice Platter with Chicken Thighs',
    description: 'A grand family-style platter of rich smoky jollof rice crowned with perfectly seasoned and roasted golden chicken thighs.',
    price: 24000,
    category: 'mains',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
    dietary: ['Chef Special'],
    popular: true
  },

  // Platters & Roasts
  {
    id: 'm6',
    name: 'Savora Ultimate Party Platter',
    description: 'Heart-shaped luxury platter featuring smoky jollof rice, fried plantains, crispy french fries, spicy suya beef bites, grilled sausages, and special dipping sauces.',
    price: 35000,
    category: 'platters',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
    dietary: ['Chef Special', 'Spicy'],
    popular: true
  },
  {
    id: 'm7',
    name: 'Herb-Roasted Whole Chicken & Vegetables',
    description: 'Whole succulent chicken roasted with aromatic herbs, garlic, butter, bell peppers, baby potatoes, and fresh parsley garnish.',
    price: 28000,
    category: 'platters',
    image: 'https://images.unsplash.com/photo-1514944298352-f4d732112d18?auto=format&fit=crop&w=800&q=80',
    dietary: ['Halal', 'Gluten-Free']
  },

  // Starters & Wraps
  {
    id: 'm8',
    name: 'Gourmet Grilled Beef Wrap',
    description: 'Warm toasted tortilla wrap stuffed with spiced minced beef, fresh crunchy bell peppers, onions, tomatoes, and creamy house dressing.',
    price: 7500,
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80',
    dietary: ['Halal', 'Spicy']
  },

  // Drinks
  {
    id: 'm9',
    name: 'Signature Hibiscus Zobo Royale',
    description: 'Craft brewed aged hibiscus flowers infused with cloves, ginger, pineapple, and citrus fruits served chilled over artisanal ice.',
    price: 3800,
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
    dietary: ['Vegetarian'],
    popular: true
  },
  {
    id: 'm10',
    name: 'Savora Tropical Sunset Mocktail',
    description: 'A refreshing blend of fresh passion fruit, pomegranate, orange juice, and sparkling soda with mint garnish.',
    price: 4500,
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
    dietary: ['Vegetarian']
  }
];

export const specialOffers: SpecialOffer[] = [
  {
    id: 'o1',
    title: 'Savora Ultimate Party Platter Special',
    description: 'Our famous heart-shaped platter loaded with Jollof rice, suya beef, plantains, fries, and sausages. Perfect for sharing with loved ones.',
    price: 32000,
    originalPrice: 35000,
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
    badge: 'Bestseller',
    validUntil: 'Available All Weekend'
  },
  {
    id: 'o2',
    title: 'Royal Family Jollof Feast',
    description: 'Large family platter of smoky jollof rice topped with golden roasted chicken thighs, coleslaw, and fried plantains.',
    price: 22000,
    originalPrice: 26000,
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
    badge: 'Family Deal',
    validUntil: 'Valid Saturdays & Sundays'
  },
  {
    id: 'o3',
    title: 'Traditional Egusi & Pounded Yam Combo',
    description: 'Authentic rich Egusi soup with assorted meats and stockfish, served with freshly pounded yam.',
    price: 18500,
    originalPrice: 21000,
    image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=800&q=80',
    badge: 'Local Favorite',
    validUntil: 'Every Day'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Dr. Chidi Okonkwo',
    role: 'Lagos Resident & Food Critic',
    rating: 5,
    comment: 'The authentic Egusi soup and pounded yam here tastes exactly like home-cooked perfection. Savora has mastered traditional Nigerian cuisine with a fine-dining touch!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 't2',
    name: 'Amina Bello',
    role: 'Corporate Executive',
    rating: 5,
    comment: 'We ordered the Ultimate Party Platter for our office gathering. The presentation in the heart-shaped dish and the taste of the suya and jollof rice blew everyone away!',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 't3',
    name: 'Michael & Sarah Jenkins',
    role: 'Dining Enthusiasts',
    rating: 5,
    comment: 'The smoky party jollof rice with fried chicken is unmatched in Lekki. Truly exceptional taste and wonderful ambiance.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
  }
];

export const galleryItems: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Authentic Egusi Soup with Assorted Meats',
    category: 'Dishes',
    image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'g2',
    title: 'Pounded Yam & Rich Soup',
    category: 'Dishes',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'g3',
    title: 'Smoky Party Jollof & Chicken',
    category: 'Dishes',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'g4',
    title: 'Ultimate Party Platter',
    category: 'Events',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'g5',
    title: 'Herb-Roasted Whole Chicken',
    category: 'Dishes',
    image: 'https://images.unsplash.com/photo-1514944298352-f4d732112d18?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'g6',
    title: 'Royal Jollof Platter with Chicken Thighs',
    category: 'Interior',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80'
  }
];
