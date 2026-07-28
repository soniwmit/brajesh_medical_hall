import React, { useState } from 'react';
import {
  Phone,
  MessageSquare,
  MapPin,
  ShieldCheck,
  Zap,
  Tag,
  UserCheck,
  FileText,
  HeartPulse,
  Building2,
  CheckCircle2,
  ChevronDown,
  Star,
  Search,
  ArrowRight,
  Clock,
  Sparkles,
  Pill,
  PillBottle,
  FlaskConical,
  Syringe,
  Stethoscope,
  Dumbbell,
  Sun,
  Smile,
  Baby,
  Shield,
  Activity,
  Heart,
  Store,
  UploadCloud,
  CreditCard
} from 'lucide-react';
import {
  BUSINESS_INFO,
  HERO_IMAGES,
  WHY_CHOOSE_US_ITEMS,
  SERVICES_LIST,
  FEATURED_CATEGORIES,
  WORKING_PROCESS,
  TESTIMONIALS,
  FAQS
} from '../data/siteData';
import { PageView } from '../types';

interface HomePageProps {
  onNavigate: (page: PageView) => void;
  onOpenWhatsAppModal: (medicineName?: string) => void;
  onOpenSearchModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenWhatsAppModal,
  onOpenSearchModal,
}) => {
  const [openFaqId, setOpenFaqId] = useState<string>('faq-1');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Pill': return <Pill className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'PillBottle': return <PillBottle className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'FlaskConical': return <FlaskConical className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'Syringe': return <Syringe className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'Stethoscope': return <Stethoscope className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'Dumbbell': return <Dumbbell className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'Sun': return <Sun className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'Smile': return <Smile className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'Baby': return <Baby className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'Shield': return <Shield className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'Activity': return <Activity className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'Heart': return <Heart className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      default: return <Pill className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
    }
  };

  const getWhyIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'UserCheck': return <UserCheck className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'Tag': return <Tag className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'Zap': return <Zap className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'FileText': return <FileText className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'HeartPulse': return <HeartPulse className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'Building2': return <Building2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'MessageSquare': return <MessageSquare className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      default: return <ShieldCheck className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
    }
  };

  return (
    <div className="space-y-16 pb-12">
      {/* 1. HERO SECTION */}
      <section className="relative hero-gradient text-slate-900 dark:text-white overflow-hidden rounded-3xl mx-3 sm:mx-6 mt-4 shadow-soft border border-slate-200/80 dark:border-slate-800/80 transition-colors">
        {/* Decorative background medical emblem */}
        <div className="absolute top-10 left-10 opacity-5 dark:opacity-10 pointer-events-none">
          <svg width="240" height="240" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-block px-3.5 py-1 bg-white dark:bg-slate-900 rounded-full text-xs font-bold accent-text border border-emerald-100 dark:border-emerald-900 shadow-xs uppercase tracking-widest">
              TRUSTED HEALTHCARE PARTNER
            </span>

            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                Your Trusted Pharmacy <br />
                <span className="accent-text italic font-serif">in Paliganj.</span>
              </h1>
            </div>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl font-normal">
              Providing 100% genuine medicines, healthcare products, baby care, surgical supplies, and daily medical essentials at affordable prices since 2010.
            </p>

            {/* Quick Hero Search Input */}
            <div className="pt-1">
              <div
                onClick={onOpenSearchModal}
                className="cursor-pointer bg-white/90 dark:bg-slate-900/90 shadow-soft border border-slate-200 dark:border-slate-700 p-2.5 sm:p-3 rounded-2xl flex items-center justify-between gap-3 max-w-xl transition-all group hover:border-emerald-500"
              >
                <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400 text-xs sm:text-sm">
                  <Search className="w-5 h-5 accent-text group-hover:scale-110 transition-transform" />
                  <span>Search over 50+ medicines, BP monitors, supplements...</span>
                </div>
                <span className="px-3.5 py-1.5 accent-bg text-white rounded-full text-xs font-bold shrink-0 shadow-xs">
                  Search
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onOpenWhatsAppModal()}
                className="py-3.5 px-6 accent-bg accent-bg-hover text-white font-bold rounded-full shadow-lg shadow-emerald-200/60 dark:shadow-none transition-all flex items-center gap-2 text-sm"
              >
                <MessageSquare className="w-4 h-4" /> Order WhatsApp
              </button>

              <a
                href={`tel:${BUSINESS_INFO.rawPhone}`}
                className="py-3.5 px-6 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 font-bold rounded-full shadow-soft border border-slate-200 dark:border-slate-700 transition-all flex items-center gap-2 text-sm"
              >
                <Phone className="w-4 h-4 text-sky-600" /> {BUSINESS_INFO.phone}
              </a>

              <a
                href={BUSINESS_INFO.googleMapDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-200 font-bold rounded-full border border-slate-200 dark:border-slate-700 text-xs transition-all flex items-center gap-2"
              >
                <MapPin className="w-4 h-4 accent-text" /> Get Directions
              </a>
            </div>

            {/* Stat Counters Bar */}
            <div className="pt-6 border-t border-slate-200/80 dark:border-slate-800 flex items-center gap-6">
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-black medical-blue">100%</span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-bold tracking-wider">Genuine Meds</span>
              </div>
              <div className="w-[1px] h-8 bg-slate-200 dark:bg-slate-800"></div>
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-black medical-blue">24/7</span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-bold tracking-wider">WhatsApp Support</span>
              </div>
              <div className="w-[1px] h-8 bg-slate-200 dark:bg-slate-800"></div>
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-black medical-blue">5k+</span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-bold tracking-wider">Happy Patients</span>
              </div>
            </div>

            {/* Feature Mini Cards */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl shadow-soft border border-slate-100 dark:border-slate-800">
                <h3 className="font-bold text-sm mb-1 flex items-center gap-2 text-slate-900 dark:text-white">
                  <span className="p-1 bg-blue-50 dark:bg-blue-950/60 rounded text-sky-500">💊</span> Prescription Meds
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">Fast verification and availability of chronic medicines.</p>
              </div>
              <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl shadow-soft border border-slate-100 dark:border-slate-800">
                <h3 className="font-bold text-sm mb-1 flex items-center gap-2 text-slate-900 dark:text-white">
                  <span className="p-1 bg-emerald-50 dark:bg-emerald-950/60 rounded accent-text">👶</span> Baby Care
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">Diapers, formula, and skincare from top global brands.</p>
              </div>
            </div>
          </div>

          {/* Quick WhatsApp Sidebar Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-soft space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Quick WhatsApp Order</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Send prescription or medicine list</p>
                </div>
                <span className="text-[10px] accent-bg text-white font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                  ONLINE
                </span>
              </div>

              <div className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                    Medicine / Requirement
                  </label>
                  <input
                    type="text"
                    onClick={() => onOpenWhatsAppModal()}
                    readOnly
                    placeholder="Click to select or enter medicine names..."
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-3 text-xs text-slate-800 dark:text-white cursor-pointer hover:border-emerald-500 transition-colors"
                  />
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => onOpenWhatsAppModal()}
                    className="flex-1 accent-bg accent-bg-hover text-white font-bold py-3.5 rounded-xl shadow-md shadow-emerald-200/50 dark:shadow-none flex items-center justify-center gap-2 text-xs transition-all"
                  >
                    <MessageSquare className="w-4 h-4" /> Open Order Form
                  </button>
                  <button
                    onClick={() => onOpenWhatsAppModal()}
                    className="w-12 h-12 border border-slate-200 dark:border-slate-700 rounded-xl flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                    title="Attach prescription"
                  >
                    📎
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="border border-slate-100 dark:border-slate-800 rounded-2xl p-3.5 bg-slate-50/50 dark:bg-slate-800/40">
                  <span className="text-[10px] text-slate-400 uppercase font-bold block mb-0.5">Opening Hours</span>
                  <p className="text-xs font-bold text-slate-900 dark:text-white">07:00 AM - 10:00 PM</p>
                </div>
                <div className="border border-slate-100 dark:border-slate-800 rounded-2xl p-3.5 bg-slate-50/50 dark:bg-slate-800/40">
                  <span className="text-[10px] text-slate-400 uppercase font-bold block mb-0.5">Store Location</span>
                  <p className="text-xs font-bold text-slate-900 dark:text-white">Devi Sthan, Paliganj</p>
                </div>
              </div>

              {/* Customer Quote Snippet */}
              <div className="p-4 bg-emerald-50/80 dark:bg-emerald-950/40 rounded-2xl border border-emerald-100 dark:border-emerald-900/60 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-200 dark:bg-emerald-900 flex items-center justify-center text-emerald-800 dark:text-emerald-200 text-lg shrink-0 font-bold">
                  ★
                </div>
                <div>
                  <p className="text-xs text-slate-700 dark:text-slate-300 font-medium italic">
                    "Most reliable pharmacy in Paliganj. Genuine medicines and very helpful staff!"
                  </p>
                  <p className="text-[10px] font-bold accent-text mt-1 uppercase tracking-wider">
                    - Ramesh Kumar, Local Resident
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHY CHOOSE US */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 uppercase tracking-wider">
            Our Commitments
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Why Choose Brajesh Medical Hall?
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            We prioritize patient safety, genuine stock, fair prices, and personal healthcare assistance for every customer in Paliganj.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US_ITEMS.map((item) => (
            <div
              key={item.title}
              className="p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700/80 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all hover:shadow-lg group space-y-3"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/60 dark:border-emerald-800/60 flex items-center justify-center group-hover:scale-110 transition-transform">
                {getWhyIcon(item.icon)}
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. OUR SERVICES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-slate-100 dark:bg-slate-800/50 rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-700 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-sky-100 dark:bg-sky-950/80 text-sky-800 dark:text-sky-300 uppercase tracking-wider">
                Comprehensive Healthcare
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                Our Pharmacy & Medical Services
              </h2>
            </div>
            <button
              onClick={() => onNavigate('services')}
              className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1 shrink-0"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_LIST.map((service) => (
              <div
                key={service.id}
                className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xs hover:shadow-md transition-all space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                    {service.category}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">{service.title}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400">{service.description}</p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 dark:text-slate-400">Available in store & WhatsApp</span>
                  <button
                    onClick={() => onOpenWhatsAppModal(service.title)}
                    className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
                  >
                    Inquire Now →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FEATURED CATEGORIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-teal-100 dark:bg-teal-950/80 text-teal-800 dark:text-teal-300 uppercase tracking-wider">
            Explore Inventory
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Featured Medicine Categories
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            Browse through our wide spectrum of genuine medical products stocked at Brajesh Medical Hall.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {FEATURED_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={onOpenSearchModal}
              className="p-5 bg-white dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700/80 hover:border-emerald-500 dark:hover:border-emerald-500 cursor-pointer transition-all hover:-translate-y-1 hover:shadow-md space-y-3 group"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-700 flex items-center justify-center group-hover:bg-emerald-500/10 transition-colors">
                {getCategoryIcon(cat.iconName)}
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {cat.name}
                </h3>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">{cat.description}</p>
              </div>
              <div className="flex items-center justify-between text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold pt-1 border-t border-slate-100 dark:border-slate-700/50">
                <span>{cat.itemCount}+ Items</span>
                <span>Search →</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. WHY CUSTOMERS TRUST US */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-teal-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-6 space-y-4">
              <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                Local Pharmacy Legacy
              </span>
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white">
                Why Local Customers Trust Brajesh Medical Hall
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                For over a decade, families in Paliganj, Devi Sthan Road, and neighboring villages have relied on us for genuine prescriptions, honest pricing, and friendly pharmacist guidance.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                {[
                  { title: 'Experienced Pharmacy', desc: 'Qualified & attentive staff' },
                  { title: 'Quality Medicines', desc: '100% batch verified' },
                  { title: 'Quick Service', desc: 'Zero waiting time' },
                  { title: 'Reasonable Pricing', desc: 'Fair genuine MRP' },
                ].map((item) => (
                  <div key={item.title} className="p-3 bg-white/5 border border-white/10 rounded-xl space-y-1">
                    <h3 className="text-xs font-bold text-emerald-400">{item.title}</h3>
                    <p className="text-[11px] text-slate-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl">
                <img
                  src={HERO_IMAGES.pharmacist}
                  alt="Pharmacist advice at Brajesh Medical Hall"
                  className="w-full h-72 object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. WORKING PROCESS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-sky-100 dark:bg-sky-950/80 text-sky-800 dark:text-sky-300 uppercase tracking-wider">
            Simple 4 Steps
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            How Our Medicine Ordering Works
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            Whether visiting in person or ordering via WhatsApp, experience hassle-free medicine fulfillment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WORKING_PROCESS.map((proc) => (
            <div
              key={proc.step}
              className="p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700/80 shadow-2xs relative space-y-3 group"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl font-black text-emerald-600/30 dark:text-emerald-400/30 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {proc.step}
                </span>
                <div className="p-2.5 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-xl">
                  {proc.step === '01' && <Store className="w-5 h-5 text-emerald-600" />}
                  {proc.step === '02' && <UploadCloud className="w-5 h-5 text-sky-600" />}
                  {proc.step === '03' && <CheckCircle2 className="w-5 h-5 text-emerald-600" />}
                  {proc.step === '04' && <CreditCard className="w-5 h-5 text-teal-600" />}
                </div>
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">{proc.title}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{proc.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. CUSTOMER TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>4.9 / 5 Rating from 180+ Google Reviews</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            What Our Customers Say
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            Real feedback from local residents, doctors, and families in Paliganj.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="p-6 bg-white dark:bg-slate-800/90 rounded-2xl border border-slate-200 dark:border-slate-700/80 shadow-2xs space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] text-slate-400">{review.date}</span>
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed italic">
                  "{review.comment}"
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between">
                <div>
                  <h3 className="text-xs font-bold text-slate-900 dark:text-white">{review.author}</h3>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">{review.location}</p>
                </div>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Verified Customer
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. FAQ ACCORDION SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 space-y-3">
          <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 uppercase tracking-wider">
            Got Questions?
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            Clear answers regarding prescriptions, WhatsApp ordering, store hours & medicine authenticity.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq) => (
            <div
              key={faq.id}
              className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenFaqId(openFaqId === faq.id ? '' : faq.id)}
                className="w-full p-5 text-left font-bold text-sm text-slate-900 dark:text-white flex items-center justify-between gap-4 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 shrink-0 transition-transform ${
                    openFaqId === faq.id ? 'rotate-180 text-emerald-600' : ''
                  }`}
                />
              </button>
              {openFaqId === faq.id && (
                <div className="p-5 pt-0 text-xs text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-700/50 bg-slate-50/50 dark:bg-slate-800/50">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 9. GOOGLE MAP SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-lg grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-5 p-8 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 uppercase tracking-wider">
                Visit Us Today
              </span>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white">Location & Google Map</h2>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                We are situated right at Devi Sthan Road, Paliganj, Bihar 801110. Nearby landmark: Devi Sthan Temple.
              </p>

              <div className="space-y-2 pt-2 text-xs text-slate-700 dark:text-slate-300">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Devi sthan road, Paliganj, Bihar 801110</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>09693110570</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-700">
              <a
                href={BUSINESS_INFO.googleMapDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2 transition-colors shadow-xs"
              >
                <MapPin className="w-4 h-4" /> Open Live Google Map Directions
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 h-80 lg:h-auto min-h-[320px]">
            <iframe
              title="Brajesh Medical Hall Google Map"
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
      </section>

      {/* 10. CONTACT CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-sky-700 text-white rounded-3xl p-8 sm:p-12 shadow-2xl text-center space-y-6">
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight">Need Medicines Urgently in Paliganj?</h2>
          <p className="text-xs sm:text-base text-emerald-100 max-w-xl mx-auto">
            Call us directly or send your doctor prescription on WhatsApp. We confirm stock & prices immediately.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={`tel:${BUSINESS_INFO.rawPhone}`}
              className="py-3.5 px-8 bg-white text-slate-900 hover:bg-emerald-50 font-extrabold rounded-2xl shadow-lg transition-all text-sm flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-sky-600" /> Call {BUSINESS_INFO.phone}
            </a>

            <button
              onClick={() => onOpenWhatsAppModal()}
              className="py-3.5 px-8 bg-slate-900 hover:bg-slate-950 text-white font-extrabold rounded-2xl shadow-lg transition-all text-sm flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" /> Order via WhatsApp
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
