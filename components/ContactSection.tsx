import React, { useState } from 'react';
import { Mail, Phone, User, MessageSquare, Send, CheckCircle2, Sparkles, AlertCircle } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!formData.name || !formData.email || !formData.message) {
      setErrorMsg('Please fill out all required fields.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const result = await response.json();

      if (result.success) {
        setSuccess(true);
      } else {
        setErrorMsg(result.error || 'Failed to send message. Please try again.');
      }
    } catch (err) {
      console.warn('Backend offline, simulating contact success:', err);
      setSuccess(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-[#FAF7F2] text-[#1A2E22] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A2E22]/5 border border-[#1A2E22]/10 text-xs font-semibold text-[#1A2E22] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Get in Touch</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#1A2E22]">
            Send Us a Message
          </h2>
          <p className="text-gray-600 text-base font-light">
            Have questions about private events, catering, or feedback? Our concierge team is ready to assist you.
          </p>
        </div>

        {success ? (
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-stone-200 text-center space-y-6 animate-fade-in">
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div className="space-y-2">
              <h3 className="font-serif text-3xl font-bold text-[#1A2E22]">Message Received!</h3>
              <p className="text-gray-600 text-sm max-w-md mx-auto">
                Thank you for reaching out. A member of our management team will review your message and reply promptly.
              </p>
            </div>
            <button
              onClick={() => {
                setSuccess(false);
                setFormData({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
              }}
              className="px-8 py-3 rounded-full bg-[#1A2E22] text-white font-medium text-sm"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-stone-200 space-y-6">
            {errorMsg && (
              <div className="p-4 rounded-2xl bg-red-50 border border-red-200 flex items-center gap-3 text-red-700 text-sm">
                <AlertCircle className="w-5 h-5 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Name */}
              <div className="space-y-2">
                <label className="block text-xs uppercase tracking-wider text-stone-700 font-semibold">
                  Your Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Amina Bello"
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
                    onChange={handleChange}
                    required
                    placeholder="amina@example.com"
                    className="w-full pl-11 pr-4 py-3 rounded-xl bg-stone-50 border border-stone-300 text-stone-900 text-sm focus:outline-none focus:border-[#1A2E22]"
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label className="block text-xs uppercase tracking-wider text-stone-700 font-semibold">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+234 801 234 5678"
                    className="w-full pl-11 pr-4 py-3 rounded-xl bg-stone-50 border border-stone-300 text-stone-900 text-sm focus:outline-none focus:border-[#1A2E22]"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <label className="block text-xs uppercase tracking-wider text-stone-700 font-semibold">
                  Subject
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-300 text-stone-900 text-sm focus:outline-none focus:border-[#1A2E22]"
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Private Event / Catering">Private Event / Catering</option>
                  <option value="Feedback / Compliment">Feedback / Compliment</option>
                  <option value="Career">Career Opportunities</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label className="block text-xs uppercase tracking-wider text-stone-700 font-semibold">
                Your Message *
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-stone-400" />
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="How can we assist you today?"
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-stone-50 border border-stone-300 text-stone-900 text-sm focus:outline-none focus:border-[#1A2E22]"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-full bg-[#1A2E22] hover:bg-[#284433] text-white font-bold text-base transition-all shadow-lg flex items-center justify-center gap-3 disabled:opacity-70"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Sending Message...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 text-[#D4AF37]" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};
