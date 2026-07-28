import React, { useState } from 'react';
import { Search, X, Pill, AlertTriangle, CheckCircle2, MessageSquare, Tag, ShieldCheck, Filter } from 'lucide-react';
import { MEDICINES_DATABASE } from '../data/medicineData';
import { MedicineItem } from '../types';

interface MedicineSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOrderOnWhatsApp: (medicineName: string) => void;
}

export const MedicineSearchModal: React.FC<MedicineSearchModalProps> = ({
  isOpen,
  onClose,
  onOrderOnWhatsApp,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  if (!isOpen) return null;

  const categories = ['All', 'Tablets', 'Capsules', 'Syrups', 'Medical Equipment', 'Protein Supplements', 'Vitamins', 'Baby Products', 'Skin Care', 'Orthopedic Support', 'Diabetic Care'];

  const filteredMedicines = MEDICINES_DATABASE.filter((med) => {
    const matchesSearch =
      med.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      med.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      med.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCat = selectedCategory === 'All' || med.category === selectedCategory || med.type === selectedCategory;

    return matchesSearch && matchesCat;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-8 animate-fadeIn">
        {/* Header */}
        <div className="bg-slate-900 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 bg-emerald-500/20 text-emerald-400 rounded-xl">
              <Search className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold tracking-tight">Medicine & Healthcare Search</h2>
              <p className="text-xs text-slate-400">Search genuine medicines, health equipment & check price estimates</p>
            </div>
          </div>

          {/* Search Input Box */}
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3.5 top-3.5 text-slate-400" />
            <input
              type="text"
              autoFocus
              placeholder="Search by medicine name, brand e.g. Dolo, Omron, Becosules, Pantocid..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-10 py-3 bg-slate-800 border border-slate-700 rounded-xl text-sm text-white placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-emerald-500/50"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-3.5 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Chips */}
        <div className="p-4 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800 flex items-center gap-2 overflow-x-auto no-scrollbar">
          <Filter className="w-4 h-4 text-slate-400 shrink-0 ml-1" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                selectedCategory === cat
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-emerald-500'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Medicine Results List */}
        <div className="p-6 max-h-[55vh] overflow-y-auto space-y-3">
          {filteredMedicines.length === 0 ? (
            <div className="text-center py-12">
              <Pill className="w-12 h-12 text-slate-300 dark:text-slate-700 mx-auto mb-3" />
              <h3 className="text-base font-semibold text-slate-700 dark:text-slate-300">No matching medicines found</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-sm mx-auto">
                Don't worry! We carry thousands of medicines in our Paliganj store. Send us your requirement on WhatsApp.
              </p>
              <button
                onClick={() => {
                  onOrderOnWhatsApp(searchTerm || 'Medicine Inquiry');
                  onClose();
                }}
                className="mt-4 px-4 py-2 bg-emerald-600 text-white rounded-xl text-xs font-semibold hover:bg-emerald-700 transition-colors inline-flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" /> Inquire "{searchTerm || 'Medicine'}" on WhatsApp
              </button>
            </div>
          ) : (
            filteredMedicines.map((item: MedicineItem) => (
              <div
                key={item.id}
                className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700/80 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group shadow-2xs"
              >
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {item.name}
                    </h3>
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-sky-100 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300">
                      {item.brand}
                    </span>
                    {item.prescriptionRequired ? (
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3" /> Prescription Req.
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> OTC Available
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-1">{item.description}</p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-500 flex items-center gap-1">
                    <Tag className="w-3 h-3 text-emerald-500" /> Usage: {item.dosageOrUsage}
                  </p>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100 dark:border-slate-700">
                  <div className="text-left sm:text-right">
                    <span className="text-xs text-slate-400">MRP Approx</span>
                    <p className="text-base font-bold text-emerald-600 dark:text-emerald-400">₹{item.price}</p>
                  </div>
                  <button
                    onClick={() => {
                      onOrderOnWhatsApp(`${item.name} (${item.brand}) - Approx ₹${item.price}`);
                      onClose();
                    }}
                    className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold transition-all shadow-xs flex items-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5" /> Order via WhatsApp
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-100 dark:bg-slate-800/80 border-t border-slate-200 dark:border-slate-800 text-center text-xs text-slate-500 dark:text-slate-400 flex flex-wrap items-center justify-between gap-2">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-4 h-4 text-emerald-600" /> All prices are subject to GST & manufacturer MRP updates.
          </span>
          <button onClick={onClose} className="text-slate-600 dark:text-slate-300 font-medium hover:underline">
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};
