import React, { useState, useEffect } from 'react';
import { PageView } from './types';
import { useTracker } from './hooks/useTracker';
import { SEOHead } from './components/SEOHead';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingControls } from './components/FloatingControls';
import { WhatsAppOrderModal } from './components/WhatsAppOrderModal';
import { MedicineSearchModal } from './components/MedicineSearchModal';
import { SchemaModal } from './components/SchemaModal';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState<boolean>(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState<boolean>(false);
  const [isSchemaModalOpen, setIsSchemaModalOpen] = useState<boolean>(false);
  const [prefilledMedicine, setPrefilledMedicine] = useState<string>('');

  // Global SPA Tracking Hook
  useTracker(currentPage);

  // Handle Dark Mode Persistence
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      return next;
    });
  };

  const handleNavigate = (page: PageView) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenWhatsAppModal = (medicineName: string = '') => {
    setPrefilledMedicine(medicineName);
    setIsWhatsAppModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300 flex flex-col justify-between selection:bg-emerald-500 selection:text-white">
      {/* SEO Head & JSON-LD Schemas */}
      <SEOHead currentPage={currentPage} />

      {/* Main Sticky Header */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenWhatsAppModal={() => handleOpenWhatsAppModal()}
        onOpenSearchModal={() => setIsSearchModalOpen(true)}
        isDarkMode={isDarkMode}
        onToggleDarkMode={toggleDarkMode}
      />

      {/* Page Content Render */}
      <main className="flex-1 w-full transition-all duration-300">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenWhatsAppModal={handleOpenWhatsAppModal}
            onOpenSearchModal={() => setIsSearchModalOpen(true)}
          />
        )}
        {currentPage === 'about' && (
          <AboutPage onOpenWhatsAppModal={() => handleOpenWhatsAppModal()} />
        )}
        {currentPage === 'services' && (
          <ServicesPage onOpenWhatsAppModal={handleOpenWhatsAppModal} />
        )}
        {currentPage === 'gallery' && <GalleryPage />}
        {currentPage === 'contact' && (
          <ContactPage onOpenWhatsAppModal={() => handleOpenWhatsAppModal()} />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenWhatsAppModal={() => handleOpenWhatsAppModal()}
        onOpenSchemaModal={() => setIsSchemaModalOpen(true)}
      />

      {/* Floating Buttons */}
      <FloatingControls onOpenWhatsAppModal={() => handleOpenWhatsAppModal()} />

      {/* WhatsApp Order Form Modal */}
      <WhatsAppOrderModal
        isOpen={isWhatsAppModalOpen}
        onClose={() => setIsWhatsAppModalOpen(false)}
        prefilledMedicine={prefilledMedicine}
      />

      {/* Interactive Medicine Search Modal */}
      <MedicineSearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        onOrderOnWhatsApp={(med) => handleOpenWhatsAppModal(med)}
      />

      {/* SEO Schema Viewer Modal */}
      <SchemaModal
        isOpen={isSchemaModalOpen}
        onClose={() => setIsSchemaModalOpen(false)}
      />
    </div>
  );
}
