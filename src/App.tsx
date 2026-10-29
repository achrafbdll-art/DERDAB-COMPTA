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
import { CabinetSection } from './components/CabinetSection.tsx';
import { EnjeuxSection } from './components/EnjeuxSection.tsx';
import { SectorsSection } from './components/SectorsSection.tsx';
import { OfficesContactSection } from './components/OfficesContactSection.tsx';
import { QuoteSimulatorSection } from './components/QuoteSimulatorSection.tsx';

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
        {/* 1. Hero Section */}
        <Hero
          onOpenBooking={(service) => handleOpenBooking(service ? { service } : undefined)}
          onOpenArticles={() => handleNavigateSection('evenements-articles')}
          onFindOffice={() => handleNavigateSection('contact')}
        />

        {/* 2. Notre force : Chiffres clés génériques comptabilité */}
        <OurStrengthSection
          onDiscoverOffices={() => handleNavigateSection('cabinet')}
        />

        {/* 3. Notre Cabinet : Maître Mourad Derdab, Histoire & OEC Maroc */}
        <CabinetSection
          onOpenBooking={(serviceName) => handleOpenBooking({ service: serviceName || 'Consultation Cabinet DERDAB COMPTA' })}
        />

        {/* 4. Vos Enjeux : Création CRI 48h, Zone Franche, Changement cabinet */}
        <EnjeuxSection
          onOpenBooking={(serviceName) => handleOpenBooking({ service: serviceName || 'Accompagnement Enjeux Dirigeant' })}
        />

        {/* 5. Facturation Électronique & Normes DGI */}
        <EInvoicingBanner
          onOpenBooking={(serviceName) =>
            handleOpenBooking({ service: serviceName || 'Facturation Électronique & Conformité DGI' })
          }
        />

        {/* 6. Expertise Accordéon avec Portrait de Maître Derdab */}
        <InteractiveAccordionSection
          onOpenBooking={(serviceName) =>
            handleOpenBooking({ service: serviceName || 'Expertise Comptable' })
          }
          onSelectNav={handleNavigateSection}
        />

        {/* 7. Nos Piliers d'Offres & Expertises 360° */}
        <ServicesSection
          onSelectServiceForBooking={(serviceTitle) =>
            handleOpenBooking({ service: serviceTitle })
          }
        />

        {/* 8. Votre Secteur Régional (Auto TAC, Tanger Med, PME, BTP) */}
        <SectorsSection
          onOpenBooking={(serviceName) => handleOpenBooking({ service: serviceName || 'Conseil Sectoriel Régional' })}
        />

        {/* 9. Simulateur de Devis en ligne en Dirhams Marocains (MAD) */}
        <QuoteSimulatorSection
          onOpenBooking={(quoteData) => handleOpenBooking(quoteData)}
        />

        {/* 10. Nos Événements et Articles / Veille fiscale */}
        <ArticlesEventsSection
          onOpenBooking={(subject) => handleOpenBooking({ service: subject })}
        />

        {/* 11. Nos 4 Bureaux (Tanger, Tétouan, TAC, Tanger Med) & Formulaire Contact */}
        <OfficesContactSection
          onOpenBooking={(serviceName, officeName) => handleOpenBooking({ service: serviceName, office: officeName })}
        />

        {/* 12. FAQ Régionale & Fiscale */}
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
          onClick={() => handleNavigateSection('devis')}
          className="flex-1 ml-2 py-2 px-2.5 bg-[#c5f2f0] text-slate-950 font-extrabold text-[11px] rounded-lg shadow-xs text-center border border-teal-300 active:scale-95 transition-all"
        >
          Simuler Devis
        </button>

        <button
          onClick={() => handleOpenBooking()}
          className="ml-2 py-2 px-3 bg-[#0a1724] text-white font-bold text-[11px] rounded-lg shadow-xs text-center active:scale-95 transition-all"
        >
          Prendre RDV
        </button>
      </div>
    </div>
  );
}
