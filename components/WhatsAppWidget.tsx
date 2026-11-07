import React, { useState, useEffect } from 'react';
import { MessageSquare, X, Calendar, Compass, Clock, Send, Sparkles } from 'lucide-react';
import { restaurantConfig } from '../data/restaurantData';

interface WhatsAppWidgetProps {
  onNavigateReservation: () => void;
  onNavigateMenu: () => void;
}

export const WhatsAppWidget: React.FC<WhatsAppWidgetProps> = ({ onNavigateReservation, onNavigateMenu }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [showHoursInfo, setShowHoursInfo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  const openWhatsAppDirect = (customText: string) => {
    const url = `https://wa.me/${restaurantConfig.whatsappNumber}?text=${encodeURIComponent(customText)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Tooltip */}
      {showTooltip && !isOpen && (
        <div className="mb-3 mr-2 bg-white text-[#1A2E22] px-4 py-2.5 rounded-2xl shadow-xl border border-stone-200 text-xs font-semibold flex items-center gap-2 animate-bounce">
          <span>Need a table? Chat with us! 👋</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-stone-400 hover:text-stone-700 ml-1"
          >
            ✕
          </button>
        </div>
      )}

      {/* Chat Popup Window */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col animate-fade-in text-[#1A2E22]">
          {/* Header */}
          <div className="bg-[#075E54] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-serif font-bold text-white">
                  SR
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 rounded-full border-2 border-[#075E54]" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-sm">Savora Concierge</h4>
                <p className="text-[10px] text-emerald-200">Online | Typically replies instantly</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full hover:bg-white/10 text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-[#E5DDD5]/30 flex-1 space-y-4 max-h-[360px] overflow-y-auto">
            <div className="bg-white p-3.5 rounded-2xl rounded-tl-none shadow-sm text-xs leading-relaxed text-stone-800 max-w-[85%] space-y-1">
              <p className="font-semibold text-[#075E54]">Savora Restaurant 👋</p>
              <p>Welcome! How can we make your dining experience extraordinary today?</p>
              <span className="block text-[9px] text-stone-400 text-right mt-1">Just now</span>
            </div>

            {showHoursInfo && (
              <div className="bg-[#DCF8C6] p-3.5 rounded-2xl rounded-tr-none shadow-sm text-xs leading-relaxed text-stone-800 ml-auto max-w-[85%] space-y-1">
                <p className="font-semibold text-stone-900">Opening Hours:</p>
                {restaurantConfig.openingHours.map((o, idx) => (
                  <p key={idx}>• {o.days}: {o.hours}</p>
                ))}
              </div>
            )}
          </div>

          {/* Quick Actions */}
          <div className="p-3 bg-white border-t border-stone-200 space-y-2">
            <p className="text-[10px] uppercase tracking-wider text-stone-500 font-bold px-1">
              Quick Actions
            </p>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onNavigateReservation();
                }}
                className="px-3 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-medium flex items-center gap-1.5 transition-colors"
              >
                <Calendar className="w-3.5 h-3.5 text-[#075E54]" />
                <span>Book a Table</span>
              </button>

              <button
                onClick={() => {
                  setIsOpen(false);
                  onNavigateMenu();
                }}
                className="px-3 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-medium flex items-center gap-1.5 transition-colors"
              >
                <Compass className="w-3.5 h-3.5 text-[#075E54]" />
                <span>Our Menu</span>
              </button>

              <button
                onClick={() => setShowHoursInfo(true)}
                className="px-3 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-medium flex items-center gap-1.5 transition-colors"
              >
                <Clock className="w-3.5 h-3.5 text-[#075E54]" />
                <span>Opening Hours</span>
              </button>

              <button
                onClick={() => openWhatsAppDirect('Hello Savora Restaurant, I would like to speak with a concierge.')}
                className="px-3 py-2 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#075E54] text-xs font-semibold flex items-center gap-1.5 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                <span>Talk to Us</span>
              </button>
            </div>

            {/* Direct WhatsApp input trigger */}
            <div className="pt-2 flex items-center gap-2">
              <button
                onClick={() => openWhatsAppDirect('Hello Savora Restaurant, I have an inquiry.')}
                className="w-full py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs flex items-center justify-center gap-2 shadow"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Open WhatsApp Chat</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button with Pulse */}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          setShowTooltip(false);
        }}
        aria-label="Chat on WhatsApp"
        className="relative group w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-2xl transition-transform hover:scale-110 active:scale-95"
      >
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none" />
        <MessageSquare className="w-7 h-7 relative z-10" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white text-[9px] font-bold flex items-center justify-center text-white">
          1
        </span>
      </button>
    </div>
  );
};
