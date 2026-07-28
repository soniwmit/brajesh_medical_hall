import React from 'react';
import { ShieldCheck, Heart, UserCheck, Award, Clock, MapPin, Building2, MessageSquare, Phone, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO, HERO_IMAGES, STORE_TIMELINE } from '../data/siteData';

interface AboutPageProps {
  onOpenWhatsAppModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenWhatsAppModal }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16 py-8">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 uppercase tracking-wider">
          About Our Store
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          Brajesh Medical Hall, Paliganj
        </h1>
        <p className="text-xs sm:text-base text-slate-600 dark:text-slate-400">
          Serving Paliganj & surrounding Bihar communities with authentic medicines, healthcare supplies, and trusted advice since establishment.
        </p>
      </div>

      {/* Business Story & Main Image Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 space-y-5">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            Our Heritage & Commitment
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white leading-tight">
            A Decade of Health, Integrity & Local Service in Paliganj
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Brajesh Medical Hall was established with a singular objective: to ensure every patient in Paliganj and surrounding rural communities gets access to 100% genuine, fresh, and properly stored doctor-prescribed medicines without inflated costs or travel to Patna.
          </p>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Located conveniently on Devi Sthan Road near Devi Sthan Temple, our pharmacy houses thousands of pharmaceutical formulations, cold-stored insulin vaccines, baby food supplements, diabetic care kits, surgical dressings, and orthopedic braces.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-black text-emerald-600 dark:text-emerald-400">100%</h3>
              <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">Genuine Medicines</p>
              <p className="text-[11px] text-slate-500">Verified manufacturer batching</p>
            </div>
            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-black text-sky-600 dark:text-sky-400">180+</h3>
              <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">5-Star Customer Reviews</p>
              <p className="text-[11px] text-slate-500">Google local business verified</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <img
              src={HERO_IMAGES.storeFront}
              alt="Brajesh Medical Hall Store Exterior"
              className="rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 h-64 w-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="p-4 bg-emerald-600 text-white rounded-2xl text-xs space-y-1">
              <p className="font-bold text-sm">Temperature Controlled</p>
              <p className="text-emerald-100 text-[11px]">Air conditioned store with dedicated vaccine refrigeration.</p>
            </div>
          </div>

          <div className="space-y-4 pt-6">
            <div className="p-4 bg-sky-600 text-white rounded-2xl text-xs space-y-1">
              <p className="font-bold text-sm">Qualified Pharmacists</p>
              <p className="text-sky-100 text-[11px]">Clear guidance on medicine intake, dosage & storage.</p>
            </div>
            <img
              src={HERO_IMAGES.pharmacist}
              alt="Brajesh Medical Hall Pharmacist Counter"
              className="rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 h-64 w-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>

      {/* Mission, Vision & Values */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-8 bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-soft space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 accent-text flex items-center justify-center font-bold">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Our Mission</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            To provide genuine, unadulterated medicines and essential healthcare supplies at standardized MRP prices to every individual in Paliganj and Bihar.
          </p>
        </div>

        <div className="p-8 bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-soft space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-sky-50 dark:bg-sky-950/60 medical-blue flex items-center justify-center font-bold">
            <Heart className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Our Vision</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            To be the most modern, reliable, and accessible healthcare hub in the sub-division, seamlessly combining local in-store care with instant WhatsApp order support.
          </p>
        </div>

        <div className="p-8 bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-soft space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold">
            <Award className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Our Values</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Transparency, drug safety, patient confidentiality, continuous availability during medical emergencies, and warm local hospital-standard care.
          </p>
        </div>
      </div>

      {/* Owner Message Card */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-emerald-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-slate-800">
        <div className="max-w-3xl space-y-4">
          <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
            Owner Message
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            "Your health and trust are our highest responsibility."
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
            "When someone visits Brajesh Medical Hall with a doctor prescription, they are seeking relief and genuine care for their family members. We take immense pride in verifying every strip, explaining dosage instructions clearly, and treating every resident of Paliganj like family."
          </p>

          <div className="pt-2 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center font-black text-lg">
              B
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Brajesh Kumar</h3>
              <p className="text-xs text-emerald-400 font-medium">Founder & Managing Pharmacist, Brajesh Medical Hall</p>
            </div>
          </div>
        </div>
      </div>

      {/* Business Timeline */}
      <div className="space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">Our Journey in Paliganj</h2>
          <p className="text-xs text-slate-600 dark:text-slate-400">Milestones of continuous improvement and community trust.</p>
        </div>

        <div className="relative border-l-2 border-emerald-500/40 ml-4 sm:ml-32 space-y-8">
          {STORE_TIMELINE.map((item) => (
            <div key={item.year} className="relative pl-6 sm:pl-8 group">
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-emerald-600 border-4 border-white dark:border-slate-900" />
              <div className="p-5 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-1">
                <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300">
                  {item.year}
                </span>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white pt-1">{item.title}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Contact CTA */}
      <div className="text-center bg-slate-100 dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 space-y-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">Have a question or prescription query?</h3>
        <p className="text-xs text-slate-600 dark:text-slate-400">Connect with our Paliganj store team directly on WhatsApp or Call.</p>
        <div className="flex justify-center gap-3">
          <button
            onClick={onOpenWhatsAppModal}
            className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-all shadow-xs flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4" /> Message on WhatsApp
          </button>
          <a
            href={`tel:${BUSINESS_INFO.rawPhone}`}
            className="px-6 py-3 bg-slate-900 hover:bg-slate-950 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-2"
          >
            <Phone className="w-4 h-4 text-sky-400" /> Call {BUSINESS_INFO.phone}
          </a>
        </div>
      </div>
    </div>
  );
};
