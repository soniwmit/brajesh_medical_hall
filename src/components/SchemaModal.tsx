import React from 'react';
import { X, Code, Copy, Check } from 'lucide-react';
import { BUSINESS_INFO, FAQS } from '../data/siteData';

interface SchemaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SchemaModal: React.FC<SchemaModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Pharmacy',
    name: BUSINESS_INFO.name,
    image: 'https://brajeshmedicalhall.com/brajesh_store_front.jpg',
    telephone: BUSINESS_INFO.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Devi sthan road',
      addressLocality: 'Paliganj',
      addressRegion: 'Bihar',
      postalCode: '801110',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 25.3952136,
      longitude: 84.8037142,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '07:00',
        closes: '22:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Sunday'],
        opens: '08:00',
        closes: '21:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: BUSINESS_INFO.googleRating,
      reviewCount: BUSINESS_INFO.totalReviews,
    },
  };

  const jsonString = JSON.stringify(schemaData, null, 2);

  const handleCopy = () => {
    navigator.clipboard.writeText(jsonString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-slate-900 text-slate-100 rounded-2xl shadow-2xl border border-slate-800 overflow-hidden my-8">
        <div className="p-5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Code className="w-5 h-5 text-emerald-400" />
            <h3 className="font-bold text-base text-white">JSON-LD LocalBusiness & Pharmacy Schema</h3>
          </div>
          <button onClick={onClose} className="p-1 text-slate-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5">
          <p className="text-xs text-slate-400 mb-3">
            This structured JSON-LD code is embedded in the head tags for Google Search Local Business indexing.
          </p>
          <pre className="p-4 bg-slate-950 rounded-xl text-xs font-mono text-emerald-400 overflow-x-auto max-h-[50vh] border border-slate-800">
            {jsonString}
          </pre>
        </div>

        <div className="p-4 bg-slate-950 border-t border-slate-800 flex justify-between items-center">
          <span className="text-xs text-slate-500">Schema.org Pharmacy Standard Compliant</span>
          <button
            onClick={handleCopy}
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors"
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            {copied ? 'Copied' : 'Copy Schema'}
          </button>
        </div>
      </div>
    </div>
  );
};
