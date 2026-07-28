import React, { useState, useEffect } from 'react';
import { MessageSquare, Phone, ArrowUp, AlertCircle, X } from 'lucide-react';
import { BUSINESS_INFO } from '../data/siteData';

interface FloatingControlsProps {
  onOpenWhatsAppModal: () => void;
}

export const FloatingControls: React.FC<FloatingControlsProps> = ({ onOpenWhatsAppModal }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showEmergencyBanner, setShowEmergencyBanner] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Emergency Contact Toast / Banner at Bottom Center */}
      {showEmergencyBanner && (
        <div className="fixed bottom-20 left-4 right-4 sm:left-auto sm:right-24 z-30 sm:max-w-md bg-slate-900/95 text-white p-3.5 rounded-2xl shadow-2xl border border-slate-700/80 backdrop-blur-md flex items-center justify-between gap-3 animate-slideUp">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-500/20 text-amber-400 rounded-xl shrink-0">
              <AlertCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">Need Urgent Medicine in Paliganj?</p>
              <p className="text-[11px] text-slate-300">Call or WhatsApp us directly for 24/7 emergency stock inquiry.</p>
            </div>
          </div>
          <button
            onClick={() => setShowEmergencyBanner(false)}
            className="p-1 text-slate-400 hover:text-white"
            aria-label="Dismiss banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Floating Action Buttons */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3 items-end">
        {/* Back To Top Button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="p-3 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-full shadow-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-all group"
            aria-label="Back to top"
            title="Back to Top"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        )}

        {/* Floating Call Button (Mobile) */}
        <a
          href={`tel:${BUSINESS_INFO.rawPhone}`}
          className="sm:hidden p-3.5 bg-sky-600 text-white rounded-full shadow-xl hover:bg-sky-700 transition-all flex items-center justify-center"
          aria-label="Call Store"
          title="Call Store Now"
        >
          <Phone className="w-5 h-5" />
        </a>

        {/* Floating WhatsApp Button with pulse ring */}
        <button
          onClick={onOpenWhatsAppModal}
          className="group relative flex items-center gap-2.5 p-3.5 sm:px-5 sm:py-3.5 accent-bg accent-bg-hover text-white font-bold rounded-full shadow-xl shadow-emerald-200/50 dark:shadow-none transition-all"
          aria-label="WhatsApp Order"
        >
          <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping opacity-75 pointer-events-none" />
          <MessageSquare className="w-5 h-5 fill-current relative z-10" />
          <span className="hidden sm:inline text-xs tracking-tight relative z-10 font-bold">Order WhatsApp</span>
        </button>
      </div>
    </>
  );
};
