import React, { useState } from 'react';
import { X, ZoomIn, ZoomOut, ChevronLeft, ChevronRight, Image as ImageIcon, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/siteData';
import { GalleryItem } from '../types';

export const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  const categories = ['All', 'Store Front', 'Medicine Shelves', 'Products', 'Medical Equipment', 'Customers', 'Surgical'];

  const filteredItems = GALLERY_ITEMS.filter(
    (item) => selectedCategory === 'All' || item.category === selectedCategory
  );

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
    setZoomLevel(1);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
    setZoomLevel(1);
  };

  const handleNext = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % filteredItems.length);
      setZoomLevel(1);
    }
  };

  const handlePrev = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex - 1 + filteredItems.length) % filteredItems.length);
      setZoomLevel(1);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12 py-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 uppercase tracking-wider">
          Store & Inventory Gallery
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          Brajesh Medical Hall Photos
        </h1>
        <p className="text-xs sm:text-base text-slate-600 dark:text-slate-400">
          Visual tour of our pharmacy store front, organized medicine shelves, cold storage & medical equipment display in Paliganj.
        </p>
      </div>

      {/* Category Filter Chips */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto no-scrollbar py-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
              selectedCategory === cat
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-emerald-500'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item: GalleryItem, index: number) => (
          <div
            key={item.id}
            onClick={() => openLightbox(index)}
            className="group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-2xs hover:shadow-xl cursor-pointer transition-all duration-300 hover:-translate-y-1"
          >
            <div className="relative h-64 overflow-hidden bg-slate-100 dark:bg-slate-900">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-xs font-semibold text-white flex items-center gap-1">
                  <ZoomIn className="w-4 h-4 text-emerald-400" /> Click to enlarge & zoom
                </span>
              </div>
              <span className="absolute top-3 left-3 px-2.5 py-1 bg-slate-900/80 backdrop-blur-xs text-white text-[10px] font-bold rounded-md">
                {item.category}
              </span>
            </div>

            <div className="p-4 space-y-1">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">{item.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {/* POPUP LIGHTBOX WITH ZOOM */}
      {activeLightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 z-10 p-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white transition-colors"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Controls */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-800/80 hover:bg-slate-700 text-white transition-colors"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-800/80 hover:bg-slate-700 text-white transition-colors"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Zoom Controls */}
          <div className="absolute top-5 left-5 z-10 flex items-center gap-2 bg-slate-800/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-700">
            <button
              onClick={() => setZoomLevel((z) => Math.max(0.8, z - 0.25))}
              className="p-1 text-slate-300 hover:text-white"
              title="Zoom Out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono text-white font-bold">{Math.round(zoomLevel * 100)}%</span>
            <button
              onClick={() => setZoomLevel((z) => Math.min(2.5, z + 0.25))}
              className="p-1 text-slate-300 hover:text-white"
              title="Zoom In"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
          </div>

          {/* Image & Caption */}
          <div className="max-w-4xl max-h-[85vh] flex flex-col items-center justify-center space-y-4">
            <div className="overflow-hidden rounded-2xl max-h-[70vh] border border-slate-700 shadow-2xl flex items-center justify-center bg-slate-950">
              <img
                src={filteredItems[activeLightboxIndex].imageUrl}
                alt={filteredItems[activeLightboxIndex].title}
                style={{ transform: `scale(${zoomLevel})`, transition: 'transform 0.2s ease-out' }}
                className="max-h-[70vh] object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="text-center text-white space-y-1">
              <h3 className="text-lg font-bold">{filteredItems[activeLightboxIndex].title}</h3>
              <p className="text-xs text-slate-300">{filteredItems[activeLightboxIndex].caption}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
