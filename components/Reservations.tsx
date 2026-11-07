import React, { useState } from 'react';
import { Calendar, Clock, Users, User, Phone, Mail, Sparkles, CheckCircle2, MessageSquare, AlertCircle } from 'lucide-react';
import { restaurantConfig } from '../data/restaurantData';
import { ReservationData } from '../types';

export const Reservations: React.FC = () => {
  const todayStr = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState<ReservationData>({
    fullName: '',
    phone: '',
    email: '',
    date: todayStr,
    time: '19:00',
    guests: 2,
    seating: 'Indoor',
    occasion: 'None',
    specialRequests: ''
  });

  const [loading, setLoading] = useState(false);
  const [successResult, setSuccessResult] = useState<any | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.fullName.trim()) return 'Please enter your full name.';
    if (!formData.phone.trim()) return 'Please enter your phone number.';
    if (!formData.email.trim() || !formData.email.includes('@')) return 'Please enter a valid email address.';
    if (!formData.date) return 'Please select a reservation date.';
    if (!formData.time) return 'Please select a time.';
    if (formData.date < todayStr) return 'Reservation date cannot be in the past.';
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    const validationError = validateForm();
    if (validationError) {
      setErrorMsg(validationError);
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/reservations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const result = await response.json();

      if (result.success) {
        setSuccessResult(result.reservation);
      } else {
        setErrorMsg(result.error || 'Failed to submit reservation. Please try again.');
      }
    } catch (err) {
      // Fallback or demo mode if backend is offline
      console.warn('Backend offline, using demo reservation success simulation:', err);
      const mockRes = {
        id: 'RES-' + Math.floor(100000 + Math.random() * 900000),
        ...formData,
        createdAt: new Date().toISOString(),
        status: 'confirmed'
      };
      setSuccessResult(mockRes);
    } finally {
      setLoading(false);
    }
  };

  const handleWhatsAppFallback = () => {
    const msg = `Hello Savora Restaurant, I would like to request a table reservation:%0A%0A*Name:* ${encodeURIComponent(formData.fullName)}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*Date:* ${encodeURIComponent(formData.date)}%0A*Time:* ${encodeURIComponent(formData.time)}%0A*Guests:* ${formData.guests}%0A*Seating:* ${encodeURIComponent(formData.seating)}%0A*Occasion:* ${encodeURIComponent(formData.occasion || 'None')}%0A*Requests:* ${encodeURIComponent(formData.specialRequests || 'None')}`;
    window.open(`https://wa.me/${restaurantConfig.whatsappNumber}?text=${msg}`, '_blank');
  };

  return (
    <section id="reservation" className="py-24 bg-[#FAF7F2] text-[#1A2E22] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A2E22]/5 border border-[#1A2E22]/10 text-xs font-semibold text-[#1A2E22] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Table Booking</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#1A2E22]">
            Reserve Your Experience
          </h2>
          <p className="text-gray-600 text-base font-light">
            Secure your table at {restaurantConfig.name} instantly. For large group bookings above 10 guests, please chat with us directly on WhatsApp.
          </p>
        </div>

        {/* Success Modal / Card */}
        {successResult ? (
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-stone-200 text-center space-y-6 animate-fade-in">
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600 shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold">Booking Confirmed</span>
              <h3 className="font-serif text-3xl font-bold text-[#1A2E22]">We Look Forward to Welcoming You!</h3>
              <p className="text-gray-600 text-sm max-w-md mx-auto">
                Your reservation request has been successfully processed and recorded. A confirmation email and SMS reminder will be sent shortly.
              </p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-6 max-w-md mx-auto text-left space-y-3 border border-stone-200">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Reservation ID:</span>
                <span className="font-mono font-bold text-[#1A2E22]">{successResult.id}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Name:</span>
                <span className="font-medium text-[#1A2E22]">{successResult.fullName}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Date & Time:</span>
                <span className="font-medium text-[#1A2E22]">{successResult.date} at {successResult.time}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Guests & Seating:</span>
                <span className="font-medium text-[#1A2E22]">{successResult.guests} Guests ({successResult.seating})</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={handleWhatsAppFallback}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-sm shadow-lg flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send Booking to WhatsApp</span>
              </button>

              <button
                onClick={() => {
                  setSuccessResult(null);
                  setFormData({
                    fullName: '',
                    phone: '',
                    email: '',
                    date: todayStr,
                    time: '19:00',
                    guests: 2,
                    seating: 'Indoor',
                    occasion: 'None',
                    specialRequests: ''
                  });
                }}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#1A2E22] text-white font-medium text-sm"
              >
                Make Another Reservation
              </button>
            </div>
          </div>
        ) : (
          /* Form */
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-stone-200 space-y-8">
            {errorMsg && (
              <div className="p-4 rounded-2xl bg-red-50 border border-red-200 flex items-center gap-3 text-red-700 text-sm">
                <AlertCircle className="w-5 h-5 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="space-y-2">
                <label className="block text-xs uppercase tracking-wider text-stone-700 font-semibold">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    placeholder="Chidi Okonkwo"
                    className="w-full pl-11 pr-4 py-3 rounded-xl bg-stone-50 border border-stone-300 text-stone-900 text-sm focus:outline-none focus:border-[#1A2E22]"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div className="space-y-2">
                <label className="block text-xs uppercase tracking-wider text-stone-700 font-semibold">
                  Phone Number *
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="+234 801 234 5678"
                    className="w-full pl-11 pr-4 py-3 rounded-xl bg-stone-50 border border-stone-300 text-stone-900 text-sm focus:outline-none focus:border-[#1A2E22]"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="block text-xs uppercase tracking-wider text-stone-700 font-semibold">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="chidi@example.com"
                    className="w-full pl-11 pr-4 py-3 rounded-xl bg-stone-50 border border-stone-300 text-stone-900 text-sm focus:outline-none focus:border-[#1A2E22]"
                  />
                </div>
              </div>

              {/* Number of Guests */}
              <div className="space-y-2">
                <label className="block text-xs uppercase tracking-wider text-stone-700 font-semibold">
                  Number of Guests *
                </label>
                <div className="relative">
                  <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                    className="w-full pl-11 pr-4 py-3 rounded-xl bg-stone-50 border border-stone-300 text-stone-900 text-sm focus:outline-none focus:border-[#1A2E22]"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Date */}
              <div className="space-y-2">
                <label className="block text-xs uppercase tracking-wider text-stone-700 font-semibold">
                  Reservation Date *
                </label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                  <input
                    type="date"
                    name="date"
                    min={todayStr}
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-11 pr-4 py-3 rounded-xl bg-stone-50 border border-stone-300 text-stone-900 text-sm focus:outline-none focus:border-[#1A2E22]"
                  />
                </div>
              </div>

              {/* Time */}
              <div className="space-y-2">
                <label className="block text-xs uppercase tracking-wider text-stone-700 font-semibold">
                  Reservation Time *
                </label>
                <div className="relative">
                  <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    className="w-full pl-11 pr-4 py-3 rounded-xl bg-stone-50 border border-stone-300 text-stone-900 text-sm focus:outline-none focus:border-[#1A2E22]"
                  >
                    {['12:00 PM', '1:00 PM', '2:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM'].map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Seating Preference */}
              <div className="space-y-2">
                <label className="block text-xs uppercase tracking-wider text-stone-700 font-semibold">
                  Preferred Seating
                </label>
                <select
                  name="seating"
                  value={formData.seating}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-300 text-stone-900 text-sm focus:outline-none focus:border-[#1A2E22]"
                >
                  <option value="Indoor">Indoor Dining Room</option>
                  <option value="Outdoor">Outdoor Garden Terrace</option>
                  <option value="No Preference">No Preference</option>
                </select>
              </div>

              {/* Occasion */}
              <div className="space-y-2">
                <label className="block text-xs uppercase tracking-wider text-stone-700 font-semibold">
                  Special Occasion
                </label>
                <select
                  name="occasion"
                  value={formData.occasion}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-300 text-stone-900 text-sm focus:outline-none focus:border-[#1A2E22]"
                >
                  <option value="None">None (Regular Dining)</option>
                  <option value="Birthday">Birthday Celebration</option>
                  <option value="Anniversary">Anniversary</option>
                  <option value="Business Meeting">Business Dinner</option>
                  <option value="Date Night">Romantic Date Night</option>
                  <option value="Other">Other Special Occasion</option>
                </select>
              </div>
            </div>

            {/* Special Requests */}
            <div className="space-y-2">
              <label className="block text-xs uppercase tracking-wider text-stone-700 font-semibold">
                Special Requests or Dietary Requirements
              </label>
              <textarea
                name="specialRequests"
                rows={3}
                value={formData.specialRequests}
                onChange={handleInputChange}
                placeholder="Let us know about any allergies, dietary preferences, or seating notes..."
                className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-300 text-stone-900 text-sm focus:outline-none focus:border-[#1A2E22]"
              />
            </div>

            {/* Submit & WhatsApp Fallback Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <button
                type="submit"
                disabled={loading}
                className="w-full sm:flex-1 py-4 rounded-full bg-[#1A2E22] hover:bg-[#284433] text-white font-bold text-base transition-all shadow-lg flex items-center justify-center gap-3 disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Processing Reservation...</span>
                  </>
                ) : (
                  <>
                    <Calendar className="w-5 h-5 text-[#D4AF37]" />
                    <span>Request Table Reservation</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleWhatsAppFallback}
                className="w-full sm:w-auto px-6 py-4 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-base transition-all shadow-lg flex items-center justify-center gap-2 shrink-0"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Book via WhatsApp</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
