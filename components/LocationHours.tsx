import React from 'react';
import { MapPin, Clock, Phone, Mail, MessageSquare, ExternalLink, Sparkles } from 'lucide-react';
import { restaurantConfig } from '../data/restaurantData';

export const LocationHours: React.FC = () => {
  const handleGetDirections = () => {
    window.open('https://maps.google.com/?q=12+Admiralty+Way+Lekki+Phase+1+Lagos', '_blank');
  };

  const handleWhatsAppChat = () => {
    window.open(`https://wa.me/${restaurantConfig.whatsappNumber}?text=Hello%20Savora%20Restaurant,%20I%20would%20like%20to%20inquire%20about%20your%20location%20and%20opening%20hours.`, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-[#1A2E22] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Info Column */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#D4AF37]/30 text-xs font-semibold text-[#D4AF37] uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Visit & Connect</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white">
                Location & Opening Hours
              </h2>
              <p className="text-gray-300 text-base font-light">
                Conveniently situated in the vibrant heart of Lekki Phase 1, Lagos. Join us for lunch, dinner, or private gatherings.
              </p>
            </div>

            {/* Details Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Address */}
              <div className="p-6 rounded-3xl bg-white/5 border border-white/10 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-white text-base">Our Location</h3>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  {restaurantConfig.address}<br />
                  {restaurantConfig.city}
                </p>
                <button
                  onClick={handleGetDirections}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#D4AF37] hover:underline pt-1"
                >
                  <span>Get Directions</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Contact */}
              <div className="p-6 rounded-3xl bg-white/5 border border-white/10 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
                  <Phone className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-white text-base">Direct Contact</h3>
                <p className="text-gray-300 text-xs sm:text-sm">
                  Phone: {restaurantConfig.phone}<br />
                  Email: {restaurantConfig.email}
                </p>
                <button
                  onClick={handleWhatsAppChat}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#25D366] hover:underline pt-1"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Chat on WhatsApp</span>
                </button>
              </div>
            </div>

            {/* Opening Hours Box */}
            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-white text-base">Operating Hours</h3>
                  <p className="text-xs text-gray-400">We welcome walk-ins and reservations</p>
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-white/10">
                {restaurantConfig.openingHours.map((oh, i) => (
                  <div key={i} className="flex justify-between text-xs sm:text-sm">
                    <span className="text-gray-300 font-medium">{oh.days}</span>
                    <span className="text-[#D4AF37] font-semibold">{oh.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Map Visual / iframe */}
          <div className="lg:col-span-6">
            <div className="relative h-[480px] sm:h-[540px] rounded-3xl overflow-hidden shadow-2xl border-2 border-white/10 bg-[#1A2E22]">
              <iframe
                title="Savora Restaurant Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.606275817812!2d3.4721!3d6.4474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjYnNTAuNiJOIDPCsDI4JzE5LjYiE!5e0!3m2!1sen!2sng!4v1620000000000!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                className="w-full h-full opacity-85 hover:opacity-100 transition-opacity"
              />

              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#1A2E22]/90 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-white text-sm">Savora Restaurant</h4>
                  <p className="text-xs text-gray-300">12 Admiralty Way, Lekki Phase 1, Lagos</p>
                </div>
                <button
                  onClick={handleGetDirections}
                  className="px-4 py-2 rounded-full bg-[#D4AF37] text-[#1A2E22] font-semibold text-xs shrink-0 shadow"
                >
                  Get Directions
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
