import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  MessageSquare,
  Clock,
  Mail,
  ShieldCheck,
  ChevronRight,
  Code,
  Globe,
  Heart,
  Cross
} from 'lucide-react';
import { BUSINESS_INFO, SERVICES_LIST } from '../data/siteData';
import { PageView } from '../types';

interface FooterProps {
  onNavigate: (page: PageView) => void;
  onOpenWhatsAppModal: () => void;
  onOpenSchemaModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenWhatsAppModal,
  onOpenSchemaModal,
}) => {
  const [legalModalTitle, setLegalModalTitle] = useState<string | null>(null);

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Column 1: Business Overview */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-500 flex items-center justify-center text-white shadow-md">
                <Cross className="w-5 h-5 fill-current" />
              </div>
              <div>
                <h3 className="text-lg font-black text-white tracking-tight">{BUSINESS_INFO.name}</h3>
                <p className="text-xs text-emerald-400 font-medium">{BUSINESS_INFO.category}</p>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {BUSINESS_INFO.tagline}. Serving Paliganj & surrounding Bihar communities with 100% genuine medicines, surgical goods, and baby care essentials.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={BUSINESS_INFO.googleMapDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors border border-slate-700"
              >
                <MapPin className="w-3.5 h-3.5 text-emerald-400" /> Google Map Directions
              </a>
              <button
                onClick={onOpenSchemaModal}
                className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors border border-slate-700"
                title="View JSON-LD Schema Markup"
              >
                <Code className="w-3.5 h-3.5 text-sky-400" /> SEO Schema
              </button>
            </div>
          </div>

          {/* Column 2: Quick Links & Pages */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-emerald-500 pl-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              {[
                { name: 'Home Page', page: 'home' as PageView },
                { name: 'About Business & Story', page: 'about' as PageView },
                { name: 'Our Pharmacy Services', page: 'services' as PageView },
                { name: 'Store Photo Gallery', page: 'gallery' as PageView },
                { name: 'Contact & Location Map', page: 'contact' as PageView },
              ].map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => onNavigate(link.page)}
                    className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-emerald-400" />
                    <span>{link.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Key Pharmacy Services */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-emerald-500 pl-2">
              Popular Services
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              {SERVICES_LIST.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => onNavigate('services')}
                    className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 group text-left"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-emerald-400" />
                    <span>{service.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Store Hours */}
          <div className="space-y-3 text-xs">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-emerald-500 pl-2">
              Contact & Hours
            </h4>

            <div className="flex items-start gap-2.5 text-slate-300">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>{BUSINESS_INFO.fullAddress}</span>
            </div>

            <div className="flex items-center gap-2.5 text-slate-300">
              <Phone className="w-4 h-4 text-sky-400 shrink-0" />
              <a href={`tel:${BUSINESS_INFO.rawPhone}`} className="hover:text-white font-medium">
                {BUSINESS_INFO.phone}
              </a>
            </div>

            <div className="flex items-center gap-2.5 text-slate-300">
              <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
              <button onClick={onOpenWhatsAppModal} className="hover:text-emerald-400 font-medium text-left">
                WhatsApp Order: {BUSINESS_INFO.whatsapp}
              </button>
            </div>

            <div className="pt-2 space-y-1 text-slate-400 border-t border-slate-800">
              <div className="flex items-center gap-2 text-slate-300 font-medium">
                <Clock className="w-3.5 h-3.5 text-emerald-400" /> Working Hours
              </div>
              <p>Mon - Sat: 07:00 AM - 10:00 PM</p>
              <p>Sunday: 08:00 AM - 09:00 PM</p>
              <p className="text-emerald-400 font-semibold text-[11px] pt-1">Emergency 24/7 Phone Support</p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 border-t border-slate-800/80">
          <div className="flex flex-wrap items-center gap-4 text-[11px] uppercase tracking-wider font-medium text-slate-400">
            <span>© {new Date().getFullYear()} {BUSINESS_INFO.name}</span>
            <span>•</span>
            <a
              href="https://main.webmakerit.com"
              target="_blank"
              rel="noopener noreferrer"
              className="accent-text hover:underline font-semibold transition-colors"
            >
              Developed by WMIT
            </a>
            <span>•</span>
            <button
              onClick={() => setLegalModalTitle('Privacy Policy')}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => setLegalModalTitle('Terms & Conditions')}
              className="hover:text-white transition-colors"
            >
              Terms & Conditions
            </button>
            <span>•</span>
            <button
              onClick={() => setLegalModalTitle('Medical Disclaimer')}
              className="hover:text-white transition-colors"
            >
              Disclaimer
            </button>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span className="flex items-center gap-1.5 text-slate-300">
              <span className="w-2 h-2 rounded-full accent-bg animate-pulse"></span> Home Delivery & WhatsApp Assistance Available
            </span>
            <span className="text-slate-500 hidden md:inline">Paliganj, Bihar</span>
          </div>
        </div>
      </div>

      {/* Legal Modal Popup */}
      {legalModalTitle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="bg-slate-900 border border-slate-800 text-slate-200 rounded-2xl p-6 max-w-lg w-full space-y-4">
            <h3 className="text-lg font-bold text-white border-b border-slate-800 pb-2">{legalModalTitle}</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              {legalModalTitle === 'Medical Disclaimer'
                ? 'All content and medicine information on this website are provided for general educational and ordering inquiry purposes only. Always consult a qualified registered medical practitioner before taking any prescription medicines.'
                : legalModalTitle === 'Privacy Policy'
                ? 'Brajesh Medical Hall respects customer privacy. We do not sell or share customer contact details or uploaded prescriptions with third parties. Data provided via WhatsApp forms is strictly used for order processing.'
                : 'By using this website, you agree to submit genuine prescription details when ordering Schedule H medicines. Returns are subject to Indian Pharmacy Council & drug storage guidelines.'}
            </p>
            <button
              onClick={() => setLegalModalTitle(null)}
              className="w-full py-2 bg-emerald-600 text-white font-semibold rounded-xl text-xs hover:bg-emerald-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};
