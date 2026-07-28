import React, { useState, useEffect } from 'react';
import {
  Phone,
  MessageSquare,
  Search,
  Moon,
  Sun,
  Menu,
  X,
  MapPin,
  Clock,
  ShieldCheck,
  ChevronRight,
  Cross
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/siteData';
import { PageView } from '../types';

interface HeaderProps {
  currentPage: PageView;
  onNavigate: (page: PageView) => void;
  onOpenWhatsAppModal: () => void;
  onOpenSearchModal: () => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenWhatsAppModal,
  onOpenSearchModal,
  isDarkMode,
  onToggleDarkMode,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; page: PageView }[] = [
    { label: 'Home', page: 'home' },
    { label: 'About', page: 'about' },
    { label: 'Services', page: 'services' },
    { label: 'Gallery', page: 'gallery' },
    { label: 'Contact', page: 'contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Banner Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <MapPin className="w-3.5 h-3.5" />
              <span>{BUSINESS_INFO.location}</span>
            </span>
            <span className="flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-sky-400" />
              <span>Open: Mon-Sat 7:00 AM - 10:00 PM</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> 100% Genuine Medicines & Verified Stock
            </span>
            <a
              href={`tel:${BUSINESS_INFO.rawPhone}`}
              className="text-white hover:text-emerald-400 font-semibold flex items-center gap-1 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" /> Call: {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation Bar */}
      <nav
        className={`w-full transition-all duration-200 border-b ${
          isScrolled
            ? 'glass shadow-soft border-slate-200 dark:border-slate-800 py-2.5'
            : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
          {/* Logo & Branding */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 text-left group focus:outline-hidden"
          >
            <div className="w-10 h-10 rounded-xl accent-bg flex items-center justify-center text-white font-black text-xl shadow-md group-hover:scale-105 transition-transform">
              B
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg sm:text-xl font-bold medical-blue tracking-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {BUSINESS_INFO.name}
                </span>
                <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-50 dark:bg-emerald-950/70 accent-text uppercase tracking-widest border border-emerald-100 dark:border-emerald-900">
                  Paliganj
                </span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 hidden sm:block font-medium">
                {BUSINESS_INFO.category} • Bihar
              </p>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 bg-slate-100/90 dark:bg-slate-800/90 p-1.5 rounded-full border border-slate-200/70 dark:border-slate-700/70">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => onNavigate(item.page)}
                className={`px-5 py-1.5 rounded-full text-xs font-bold transition-all ${
                  currentPage === item.page
                    ? 'bg-white dark:bg-slate-900 accent-text shadow-xs'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-800/60'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Medicine Button */}
            <button
              onClick={onOpenSearchModal}
              className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-emerald-50 dark:hover:bg-emerald-950/50 hover:accent-text transition-colors flex items-center gap-2 text-xs font-semibold"
              title="Search Medicines"
            >
              <Search className="w-4 h-4 accent-text" />
              <span className="hidden xl:inline">Search Medicine</span>
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={onToggleDarkMode}
              className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              aria-label="Toggle dark mode"
              title="Toggle Theme"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
            </button>

            {/* Call Now Header Button */}
            <a
              href={`tel:${BUSINESS_INFO.rawPhone}`}
              className="hidden sm:flex py-2 px-4 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-full text-xs font-semibold items-center gap-2 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-slate-600 dark:text-slate-300" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>

            {/* WhatsApp Order Header Button */}
            <button
              onClick={onOpenWhatsAppModal}
              className="py-2 px-5 accent-bg accent-bg-hover text-white rounded-full text-xs font-semibold shadow-md shadow-emerald-200/50 dark:shadow-none transition-all flex items-center gap-2"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span className="hidden xs:inline">Order WhatsApp</span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700"
              aria-label="Open navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Drawer Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 py-4 space-y-3 animate-fadeIn">
            <div className="grid grid-cols-1 gap-1">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => {
                    onNavigate(item.page);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full px-4 py-3 rounded-xl text-left text-sm font-semibold flex items-center justify-between ${
                    currentPage === item.page
                      ? 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 gap-2">
              <a
                href={`tel:${BUSINESS_INFO.rawPhone}`}
                className="py-3 px-3 bg-sky-50 dark:bg-sky-950/50 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5"
              >
                <Phone className="w-4 h-4" /> Call Store
              </a>
              <button
                onClick={() => {
                  onOpenWhatsAppModal();
                  setMobileMenuOpen(false);
                }}
                className="py-3 px-3 bg-emerald-600 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5"
              >
                <MessageSquare className="w-4 h-4" /> WhatsApp
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
