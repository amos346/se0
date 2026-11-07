export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number; // in Naira (₦)
  category: 'starters' | 'mains' | 'local' | 'seafood' | 'desserts' | 'drinks' | 'platters';
  image: string;
  dietary?: ('Vegetarian' | 'Spicy' | 'Gluten-Free' | 'Chef Special' | 'Halal')[];
  popular?: boolean;
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
  notes?: string;
}

export interface ReservationData {
  fullName: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  guests: number;
  seating: 'Indoor' | 'Outdoor' | 'No Preference';
  occasion?: 'Birthday' | 'Anniversary' | 'Business Meeting' | 'Date Night' | 'Other' | 'None';
  specialRequests?: string;
}

export interface SpecialOffer {
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge: string;
  validUntil: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  comment: string;
  avatar: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Dishes' | 'Interior' | 'Chefs' | 'Events';
  image: string;
}

export interface RestaurantConfig {
  name: string;
  tagline: string;
  phone: string;
  whatsappNumber: string;
  email: string;
  address: string;
  city: string;
  openingHours: {
    days: string;
    hours: string;
  }[];
  socials: {
    instagram: string;
    facebook: string;
    twitter: string;
    tripadvisor: string;
  };
}
