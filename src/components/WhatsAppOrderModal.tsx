import React, { useState } from 'react';
import { X, Send, Phone, Upload, CheckCircle2, FileText, Clock, MapPin, User, AlertCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/siteData';

interface WhatsAppOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledMedicine?: string;
}

export const WhatsAppOrderModal: React.FC<WhatsAppOrderModalProps> = ({
  isOpen,
  onClose,
  prefilledMedicine = '',
}) => {
  const [customerName, setCustomerName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [medicineName, setMedicineName] = useState(prefilledMedicine || '');
  const [hasPrescription, setHasPrescription] = useState<boolean>(true);
  const [prescriptionFileName, setPrescriptionFileName] = useState<string>('');
  const [message, setMessage] = useState('');
  const [preferredDeliveryTime, setPreferredDeliveryTime] = useState('Immediate / Urgent');
  const [isSuccessMessage, setIsSuccessMessage] = useState(false);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPrescriptionFileName(e.target.files[0].name);
    }
  };

  const generateWhatsAppMessage = () => {
    const formattedText = `*Brajesh Medical Hall - New Order Inquiry*

*Customer Name:* ${customerName || 'Not specified'}
*Phone:* ${mobileNumber || 'Not specified'}
*Email:* ${email || 'N/A'}
*Address:* ${address || 'Paliganj Local Pickup/Delivery'}

*Medicine Required:*
${medicineName || 'Please contact me regarding medicines'}

*Prescription Available:* ${hasPrescription ? 'Yes (Will send photo attachment)' : 'No / OTC Medicine'}
${prescriptionFileName ? `*Selected File:* ${prescriptionFileName}` : ''}

*Preferred Delivery/Pickup Time:* ${preferredDeliveryTime}

*Message / Notes:*
${message || 'Please check stock and send price estimate.'}

---
_Sent via Brajesh Medical Hall Official Website_`;

    return encodeURIComponent(formattedText);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const encodedMsg = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.rawWhatsapp}?text=${encodedMsg}`;
    
    setIsSuccessMessage(true);
    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      setIsSuccessMessage(false);
      onClose();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-8 animate-fadeIn">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-sky-700 p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-3">
            <div className="p-3 bg-white/10 backdrop-blur-md rounded-xl">
              <Send className="w-6 h-6 text-emerald-200" />
            </div>
            <div>
              <h2 className="text-xl font-bold tracking-tight">WhatsApp Quick Medicine Order</h2>
              <p className="text-xs text-emerald-100 mt-0.5">
                Send prescription & medicine list directly to Brajesh Medical Hall
              </p>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
          {isSuccessMessage && (
            <div className="p-4 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 rounded-xl flex items-center gap-3 text-emerald-800 dark:text-emerald-200 text-sm">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>Opening WhatsApp with your formatted order details...</span>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Customer Name */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                Customer Name <span className="text-emerald-600">*</span>
              </label>
              <div className="relative">
                <User className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Kumar"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 dark:text-white"
                />
              </div>
            </div>

            {/* Mobile Number */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                Mobile Number <span className="text-emerald-600">*</span>
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                <input
                  type="tel"
                  required
                  placeholder="e.g. 09693110570"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 dark:text-white"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Email (Optional) */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                Email Address (Optional)
              </label>
              <input
                type="email"
                placeholder="e.g. name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 dark:text-white"
              />
            </div>

            {/* Preferred Delivery Time */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                Preferred Time
              </label>
              <div className="relative">
                <Clock className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                <select
                  value={preferredDeliveryTime}
                  onChange={(e) => setPreferredDeliveryTime(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 dark:text-white"
                >
                  <option value="Immediate / Urgent">Immediate / Urgent</option>
                  <option value="Within 1-2 Hours">Within 1-2 Hours</option>
                  <option value="Evening (5 PM - 8 PM)">Evening (5 PM - 8 PM)</option>
                  <option value="Tomorrow Morning">Tomorrow Morning</option>
                  <option value="Store Pickup Later Today">Store Pickup Later Today</option>
                </select>
              </div>
            </div>
          </div>

          {/* Delivery / Pickup Address */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
              Address / Landmark in Paliganj
            </label>
            <div className="relative">
              <MapPin className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
              <input
                type="text"
                placeholder="e.g. Near Devi Sthan Temple, Devi sthan road, Paliganj"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full pl-9 pr-3 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 dark:text-white"
              />
            </div>
          </div>

          {/* Medicine Name */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
              Medicine Name(s) & Quantity <span className="text-emerald-600">*</span>
            </label>
            <textarea
              required
              rows={3}
              placeholder="e.g. Paracetamol 650mg (1 strip), Pantocid DSR (2 strips), Dettol Antiseptic 100ml"
              value={medicineName}
              onChange={(e) => setMedicineName(e.target.value)}
              className="w-full px-3 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 dark:text-white"
            />
          </div>

          {/* Prescription Radio Options & File Upload */}
          <div className="p-4 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-emerald-600" /> Doctor Prescription Available?
              </span>
              <div className="flex items-center gap-4 text-sm font-medium">
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input
                    type="radio"
                    name="prescription"
                    checked={hasPrescription}
                    onChange={() => setHasPrescription(true)}
                    className="text-emerald-600 focus:ring-emerald-500"
                  />
                  <span>Yes</span>
                </label>
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input
                    type="radio"
                    name="prescription"
                    checked={!hasPrescription}
                    onChange={() => setHasPrescription(false)}
                    className="text-emerald-600 focus:ring-emerald-500"
                  />
                  <span>No (OTC Item)</span>
                </label>
              </div>
            </div>

            {hasPrescription && (
              <div className="pt-2 border-t border-slate-200 dark:border-slate-700">
                <label className="block text-xs text-slate-600 dark:text-slate-400 mb-2">
                  Upload Prescription Photo / Document (PNG, JPG, PDF)
                </label>
                <div className="flex items-center gap-3">
                  <label className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 bg-white dark:bg-slate-900 border border-dashed border-slate-300 dark:border-slate-600 rounded-xl cursor-pointer hover:border-emerald-500 transition-colors text-sm text-slate-600 dark:text-slate-300">
                    <Upload className="w-4 h-4 text-emerald-600" />
                    <span className="truncate">{prescriptionFileName || 'Choose Prescription Image'}</span>
                    <input type="file" accept="image/*,.pdf" onChange={handleFileChange} className="hidden" />
                  </label>
                  {prescriptionFileName && (
                    <button
                      type="button"
                      onClick={() => setPrescriptionFileName('')}
                      className="p-2 text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40 rounded-lg text-xs font-semibold"
                    >
                      Remove
                    </button>
                  )}
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 text-amber-500" /> You will attach this image in WhatsApp chat after clicking Send.
                </p>
              </div>
            )}
          </div>

          {/* Additional Message */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
              Additional Notes / Instruction
            </label>
            <input
              type="text"
              placeholder="e.g. Please send generic option price if available"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 dark:text-white"
            />
          </div>

          {/* Modal Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="submit"
              className="flex-1 py-3 px-5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/30 transition-all flex items-center justify-center gap-2 text-sm"
            >
              <Send className="w-4 h-4" /> Send Order via WhatsApp
            </button>
            <a
              href={`tel:${BUSINESS_INFO.rawPhone}`}
              className="py-3 px-5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold rounded-xl transition-all flex items-center justify-center gap-2 text-sm"
            >
              <Phone className="w-4 h-4 text-sky-600" /> Call Directly ({BUSINESS_INFO.phone})
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
