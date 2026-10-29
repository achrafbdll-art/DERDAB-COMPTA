/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { OurStrengthSection } from './components/OurStrengthSection.tsx';
import { ServicesSection } from './components/ServicesSection.tsx';
import { ArticlesEventsSection } from './components/ArticlesEventsSection.tsx';
import { FaqSection } from './components/FaqSection.tsx';
import { Footer } from './components/Footer.tsx';
import { BookingModal } from './components/Modals/BookingModal.tsx';
import { ClientPortalModal } from './components/Modals/ClientPortalModal.tsx';
import { Phone, Calendar, MessageSquare } from 'lucide-react';

import { EInvoicingBanner } from './components/EInvoicingBanner.tsx';
import { InteractiveAccordionSection } from './components/InteractiveAccordionSection.tsx';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isClientPortalOpen, setIsClientPortalOpen] = useState(false);

  // Prefill values for the booking modal
  const [bookingPrefill, setBookingPrefill] = useState<{
    office?: string;
    service?: string;
    quoteSummary?: string;
    estimatedFee?: number;
  }>({});

  const handleOpenBooking = (prefillData?: {
    office?: string;
    service?: string;
    quoteSummary?: string;
    estimatedFee?: number;
  }) => {
    if (prefillData) {
      setBookingPrefill(prefillData);
    } else {
      setBookingPrefill({});
    }
    setIsBookingOpen(true);
  };

  const handleNavigateSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      {/* Sticky Header */}
      <Header
        onOpenBooking={() => handleOpenBooking()}
        onOpenClientPortal={() => setIsClientPortalOpen(true)}
        onSelectNav={handleNavigateSection}
      />

      <main className="flex-1">
        {/* 1. Hero Section (Identical to Rydge structure) */}
        <Hero
          onOpenBooking={(service) => handleOpenBooking(service ? { service } : undefined)}
          onOpenArticles={() => handleNavigateSection('evenements-articles')}
          onFindOffice={() => handleNavigateSection('offres')}
        />

        {/* 2. Notre force : Le partenaire de référence des entrepreneurs (100% identical to screenshot image_4de21bf7.png) */}
        <OurStrengthSection
          onDiscoverOffices={() => handleNavigateSection('offres')}
        />

        {/* 3. Facturation Électronique Banner (100% identical to Rydge reference screenshot) */}
        <EInvoicingBanner
          onOpenBooking={(serviceName) =>
            handleOpenBooking({ service: serviceName || 'Facturation Électronique & Conformité DGI' })
          }
        />

        {/* 3. Expertise Accordion with Portrait (100% identical to Rydge screenshot image_d2cf2663.png) */}
        <InteractiveAccordionSection
          onOpenBooking={(serviceName) =>
            handleOpenBooking({ service: serviceName || 'Expertise Comptable' })
          }
          onSelectNav={handleNavigateSection}
        />

        {/* 4. Nos Piliers d'Offres (Rydge standard) */}
        <ServicesSection
          onSelectServiceForBooking={(serviceTitle) =>
            handleOpenBooking({ service: serviceTitle })
          }
        />

        {/* 5. Nos Événements et Articles (100% identical to Rydge reference screenshot image_3cf415f2.png) */}
        <ArticlesEventsSection
          onOpenBooking={(subject) => handleOpenBooking({ service: subject })}
        />

        {/* 7. FAQ Régionale & Comptable */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer
        onSelectNav={handleNavigateSection}
        onOpenBooking={() => handleOpenBooking()}
        onOpenClientPortal={() => setIsClientPortalOpen(true)}
      />

      {/* Modals */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialOffice={bookingPrefill.office}
        initialService={bookingPrefill.service}
        initialQuoteSummary={bookingPrefill.quoteSummary}
        initialEstimatedFee={bookingPrefill.estimatedFee}
      />

      <ClientPortalModal
        isOpen={isClientPortalOpen}
        onClose={() => setIsClientPortalOpen(false)}
      />

      {/* Mobile Floating Action Bar (respecting <= 15% sticky budget) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 py-2.5 px-4 flex items-center justify-between sm:hidden shadow-lg">
        <a
          href="tel:+212539345000"
          className="flex flex-col items-center justify-center text-[10px] text-slate-700 font-semibold px-2"
        >
          <Phone className="w-4 h-4 text-blue-700 mb-0.5" />
          <span>Appeler</span>
        </a>

        <a
          href="https://wa.me/212661000000?text=Bonjour,%20je%20souhaite%20un%20renseignement%20comptable%20pour%20mon%20entreprise%20%C3%A0%20Tanger."
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center text-[10px] text-emerald-700 font-semibold px-2"
        >
          <MessageSquare className="w-4 h-4 text-emerald-600 mb-0.5" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={() => handleOpenBooking()}
          className="flex-1 ml-3 py-2 px-3 bg-blue-700 text-white font-bold text-xs rounded-lg shadow-sm text-center"
        >
          Prendre RDV Gratuit
        </button>
      </div>
    </div>
  );
}
