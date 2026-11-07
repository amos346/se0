import React from 'react';
import { ShieldCheck, X } from 'lucide-react';
import { restaurantConfig } from '../data/restaurantData';

interface PrivacyModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#FAF7F2] text-[#1A2E22] rounded-3xl max-w-2xl w-full p-8 shadow-2xl border border-stone-300 relative animate-fade-in max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-stone-200 hover:bg-stone-300 flex items-center justify-center text-stone-800 font-bold transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-[#1A2E22] text-[#D4AF37] flex items-center justify-center">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">Legal Information</span>
            <h3 className="font-serif text-2xl font-bold">
              {type === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
            </h3>
          </div>
        </div>

        {type === 'privacy' ? (
          <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed font-light">
            <p>
              At <span className="font-semibold">{restaurantConfig.name}</span>, we respect your privacy and are committed to protecting your personal information.
            </p>
            <h4 className="font-serif font-bold text-stone-900 text-base pt-2">1. Information We Collect</h4>
            <p>
              When you make a table reservation or place an online order, we collect your name, phone number, email address, and booking preferences solely for the purpose of confirming your reservation and providing exceptional hospitality.
            </p>
            <h4 className="font-serif font-bold text-stone-900 text-base pt-2">2. Use of Information</h4>
            <p>
              Your contact details are never sold or shared with third-party advertisers. They are used exclusively for restaurant notifications, reservation confirmations, and optional promotional updates if subscribed.
            </p>
            <h4 className="font-serif font-bold text-stone-900 text-base pt-2">3. Security</h4>
            <p>
              We implement industry-standard security protocols to safeguard your personal data across our secure servers and communication channels.
            </p>
          </div>
        ) : (
          <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed font-light">
            <p>
              Welcome to <span className="font-semibold">{restaurantConfig.name}</span>. By accessing our website and services, you agree to comply with the following terms.
            </p>
            <h4 className="font-serif font-bold text-stone-900 text-base pt-2">1. Table Reservations</h4>
            <p>
              Reservations are held for up to 15 minutes past the scheduled booking time. Please notify us via phone or WhatsApp if you are running late.
            </p>
            <h4 className="font-serif font-bold text-stone-900 text-base pt-2">2. Pricing & Orders</h4>
            <p>
              All menu prices are listed in Nigerian Naira (₦) and include applicable statutory taxes. Online orders submitted via WhatsApp are subject to availability confirmation by our front desk.
            </p>
            <h4 className="font-serif font-bold text-stone-900 text-base pt-2">3. Conduct</h4>
            <p>
              We reserve the right to refuse service to anyone violating our code of conduct or disrupting the dining atmosphere of our guests.
            </p>
          </div>
        )}

        <div className="mt-8 pt-6 border-t border-stone-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-7 py-2.5 rounded-full bg-[#1A2E22] text-white font-medium text-sm"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
