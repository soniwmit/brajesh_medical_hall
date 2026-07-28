import React, { useState } from 'react';
import { MapPin, Phone, MessageSquare, Clock, Mail, Send, CheckCircle2, Building2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/siteData';

interface ContactPageProps {
  onOpenWhatsAppModal: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenWhatsAppModal }) => {
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Also offer instant WhatsApp prefill
      const text = encodeURIComponent(
        `Hello Brajesh Medical Hall,\nName: ${formName}\nPhone: ${formPhone}\nEmail: ${formEmail}\nMessage: ${formMessage}`
      );
      window.open(`https://wa.me/${BUSINESS_INFO.rawWhatsapp}?text=${text}`, '_blank');
      setFormName('');
      setFormPhone('');
      setFormEmail('');
      setFormMessage('');
      setSubmitted(false);
    }, 1200);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12 py-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 uppercase tracking-wider">
          Get In Touch
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          Contact Brajesh Medical Hall
        </h1>
        <p className="text-xs sm:text-base text-slate-600 dark:text-slate-400">
          Visit us at Devi Sthan Road, Paliganj, call our phone line, or send a quick inquiry on WhatsApp.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Contact Information Cards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-2xs space-y-4">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-3">
              Store Details
            </h2>

            <div className="space-y-4 text-xs">
              <div className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                <div className="p-2.5 bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 rounded-xl shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 dark:text-white">Store Address</p>
                  <p className="text-slate-600 dark:text-slate-400">{BUSINESS_INFO.fullAddress}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                <div className="p-2.5 bg-sky-100 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 rounded-xl shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 dark:text-white">Phone Helpline</p>
                  <a href={`tel:${BUSINESS_INFO.rawPhone}`} className="text-sky-600 dark:text-sky-400 font-semibold hover:underline">
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                <div className="p-2.5 bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 rounded-xl shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 dark:text-white">WhatsApp Order & Inquiry</p>
                  <button onClick={onOpenWhatsAppModal} className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline text-left">
                    {BUSINESS_INFO.whatsapp}
                  </button>
                </div>
              </div>

              <div className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                <div className="p-2.5 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-xl shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 dark:text-white">Email Address</p>
                  <p className="text-slate-600 dark:text-slate-400">{BUSINESS_INFO.email}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="bg-slate-900 text-white p-6 rounded-3xl border border-slate-800 shadow-xl space-y-3">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
              <Clock className="w-4 h-4" /> Store Working Hours
            </div>
            <div className="space-y-1.5 text-xs text-slate-300">
              <div className="flex justify-between py-1 border-b border-slate-800">
                <span>Monday - Saturday</span>
                <span className="font-bold text-white">07:00 AM - 10:00 PM</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800">
                <span>Sunday</span>
                <span className="font-bold text-white">08:00 AM - 09:00 PM</span>
              </div>
              <div className="flex justify-between py-1 text-emerald-400 font-semibold">
                <span>Emergency Support</span>
                <span>24/7 Call Line</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7 bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-2xs space-y-6">
          <div className="space-y-1">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Send Us a Direct Message</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">Fill out this quick form for non-urgent inquiries or medicine stock checks.</p>
          </div>

          {submitted && (
            <div className="p-4 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 rounded-2xl flex items-center gap-3 text-emerald-800 dark:text-emerald-200 text-xs font-medium">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>Thank you! Redirecting your inquiry to WhatsApp...</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                  Your Name <span className="text-emerald-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-800 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-emerald-500/30"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                  Phone Number <span className="text-emerald-600">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 09693110570"
                  value={formPhone}
                  onChange={(e) => setFormPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-800 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-emerald-500/30"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                Email Address (Optional)
              </label>
              <input
                type="email"
                placeholder="e.g. rahul@example.com"
                value={formEmail}
                onChange={(e) => setFormEmail(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-800 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-emerald-500/30"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                Message / Medicine Inquiry <span className="text-emerald-600">*</span>
              </label>
              <textarea
                required
                rows={4}
                placeholder="How can we assist you today? Mention medicine names, dosage, or general inquiry..."
                value={formMessage}
                onChange={(e) => setFormMessage(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-800 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-emerald-500/30"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs transition-all shadow-md shadow-emerald-600/20 flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" /> Submit Inquiry via WhatsApp
            </button>
          </form>
        </div>
      </div>

      {/* Embedded Map Section */}
      <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-lg space-y-4 p-6">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white">Store Map & Navigation</h2>
        <div className="h-80 w-full rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700">
          <iframe
            title="Brajesh Medical Hall Map"
            src={BUSINESS_INFO.googleMapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
};
