import React, { useState } from 'react';
import { Pill, FileText, Sparkles, Baby, Activity, Heart, Cross, Syringe, Apple, Stethoscope, Home, CheckCircle2, MessageSquare, Search } from 'lucide-react';
import { SERVICES_LIST } from '../data/siteData';
import { ServiceItem } from '../types';

interface ServicesPageProps {
  onOpenWhatsAppModal: (medicineName?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenWhatsAppModal }) => {
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Core Pharmacy', 'Prescription', 'General Care', 'Maternal & Child Care', 'Chronic Care', 'Diagnostics', 'Emergency Care', 'Surgical Care', 'Nutrition', 'Equipment', 'Elderly Care'];

  const filteredServices = SERVICES_LIST.filter((srv) => {
    const matchesCat = selectedCategoryFilter === 'All' || srv.category === selectedCategoryFilter;
    const matchesSearch = srv.title.toLowerCase().includes(searchQuery.toLowerCase()) || srv.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Pill': return <Pill className="w-6 h-6 text-emerald-600" />;
      case 'FileText': return <FileText className="w-6 h-6 text-sky-600" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-teal-600" />;
      case 'Baby': return <Baby className="w-6 h-6 text-pink-600" />;
      case 'Activity': return <Activity className="w-6 h-6 text-indigo-600" />;
      case 'Heart': return <Heart className="w-6 h-6 text-rose-600" />;
      case 'Cross': return <Cross className="w-6 h-6 text-red-600" />;
      case 'Syringe': return <Syringe className="w-6 h-6 text-purple-600" />;
      case 'Apple': return <Apple className="w-6 h-6 text-emerald-600" />;
      case 'Stethoscope': return <Stethoscope className="w-6 h-6 text-cyan-600" />;
      case 'Home': return <Home className="w-6 h-6 text-amber-600" />;
      default: return <Pill className="w-6 h-6 text-emerald-600" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12 py-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 uppercase tracking-wider">
          Complete Medical Store Offerings
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          Pharmacy & Healthcare Services
        </h1>
        <p className="text-xs sm:text-base text-slate-600 dark:text-slate-400">
          Dedicated, authentic healthcare products & services available at Brajesh Medical Hall, Paliganj.
        </p>
      </div>

      {/* Filter Tabs & Search Bar */}
      <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-2xs space-y-4">
        <div className="relative max-w-md">
          <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
          <input
            type="text"
            placeholder="Search service e.g. Diabetic, Baby Care, Surgical..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-800 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-emerald-500/30"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategoryFilter(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-colors ${
                selectedCategoryFilter === cat
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service: ServiceItem) => (
          <div
            key={service.id}
            className="bg-white dark:bg-slate-800 rounded-3xl p-6 border border-slate-200 dark:border-slate-700/80 shadow-2xs hover:shadow-lg hover:border-emerald-500 dark:hover:border-emerald-500 transition-all flex flex-col justify-between space-y-4 group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="p-3 bg-slate-100 dark:bg-slate-700 rounded-2xl group-hover:scale-105 transition-transform">
                  {getServiceIcon(service.iconName)}
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                  {service.category}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mt-1">
                  {service.description}
                </p>
              </div>

              {/* Key Features List */}
              <div className="pt-2 space-y-1.5 border-t border-slate-100 dark:border-slate-700/60">
                {service.features.map((feat) => (
                  <div key={feat} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-700/60">
              <button
                onClick={() => onOpenWhatsAppModal(service.title)}
                className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs transition-all flex items-center justify-center gap-2 shadow-xs"
              >
                <MessageSquare className="w-4 h-4" /> Inquire "{service.title}" on WhatsApp
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
