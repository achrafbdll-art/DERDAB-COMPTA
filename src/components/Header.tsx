/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Phone, Lock, Calendar, MapPin, ExternalLink, Calculator } from 'lucide-react';
import { SocialLinks } from './SocialLinks.tsx';

interface HeaderProps {
  onOpenBooking: () => void;
  onOpenClientPortal: () => void;
  onSelectNav: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenBooking,
  onOpenClientPortal,
  onSelectNav,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    onSelectNav(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#06111c]/95 backdrop-blur-md border-b border-white/10 shadow-lg py-3'
          : 'bg-gradient-to-b from-[#06111c]/90 via-[#06111c]/60 to-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 lg:gap-8">
          
          {/* Logo 100% IDENTIQUE PHOTO DERDAB COMPTA */}
          <a
            href="#accueil"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('accueil');
            }}
            className="flex items-center gap-3 group whitespace-nowrap shrink-0 focus-visible:outline-none"
            title="DERDAB COMPTA"
          >
            <div className="rounded-xl overflow-hidden shadow-lg border border-white/20 transition-transform duration-200 group-hover:scale-105 flex items-center justify-center bg-white p-1">
              <img
                src="/assets/aistudio/image_9552ab42.png"
                alt="DERDAB COMPTA Logo"
                className="h-11 sm:h-14 w-auto object-contain"
              />
            </div>
          </a>

          {/* Navigation Links with ChevronDown identical to the screenshot */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-slate-200">
            
            {/* 1. Notre cabinet */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('cabinet')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => handleLinkClick('cabinet')}
                className="flex items-center gap-1 hover:text-white transition-colors py-2 whitespace-nowrap"
              >
                <span>Notre cabinet</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-white" />
              </button>

              {activeDropdown === 'cabinet' && (
                <div className="absolute top-full left-0 w-72 bg-[#0a1724]/95 backdrop-blur-md rounded-xl shadow-2xl border border-white/10 p-3 py-2 text-xs z-50">
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider px-3 py-1">
                    Présentation & Réseau
                  </div>
                  <a
                    href="#cabinet"
                    onClick={() => handleLinkClick('cabinet')}
                    className="block px-3 py-2 rounded-lg hover:bg-white/10 transition-colors text-slate-200 hover:text-white"
                  >
                    <div className="font-semibold">Le cabinet DERDAB COMPTA</div>
                    <div className="text-slate-400 text-[11px]">Ordre des Experts-Comptables (OEC)</div>
                  </a>
                  <a
                    href="#cabinet"
                    onClick={() => handleLinkClick('cabinet')}
                    className="block px-3 py-2 rounded-lg hover:bg-white/10 transition-colors text-slate-200 hover:text-white"
                  >
                    <div className="font-semibold">Maître Mourad Derdab</div>
                    <div className="text-slate-400 text-[11px]">Fondateur & Vision stratégique</div>
                  </a>
                  <a
                    href="#contact"
                    onClick={() => handleLinkClick('contact')}
                    className="block px-3 py-2 rounded-lg hover:bg-white/10 transition-colors text-slate-200 hover:text-white"
                  >
                    <div className="font-semibold">Bureaux Tanger & Tétouan</div>
                    <div className="text-slate-400 text-[11px]">Grand Tanger · ZAI · Tanger Med</div>
                  </a>
                </div>
              )}
            </div>

            {/* 2. Vos enjeux */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('enjeux')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => handleLinkClick('enjeux')}
                className="flex items-center gap-1 hover:text-white transition-colors py-2 whitespace-nowrap"
              >
                <span>Vos enjeux</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {activeDropdown === 'enjeux' && (
                <div className="absolute top-full left-0 w-80 bg-[#0a1724]/95 backdrop-blur-md rounded-xl shadow-2xl border border-white/10 p-3 py-2 text-xs z-50">
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider px-3 py-1">
                    Défis dirigeants
                  </div>
                  <a
                    href="#enjeux"
                    onClick={() => handleLinkClick('enjeux')}
                    className="block px-3 py-2 rounded-lg hover:bg-white/10 transition-colors text-slate-200 hover:text-white"
                  >
                    <div className="font-semibold">Créer une entreprise au Maroc</div>
                    <div className="text-slate-400 text-[11px]">SARL / SA via le CRI en 48h</div>
                  </a>
                  <a
                    href="#enjeux"
                    onClick={() => handleLinkClick('enjeux')}
                    className="block px-3 py-2 rounded-lg hover:bg-white/10 transition-colors text-slate-200 hover:text-white"
                  >
                    <div className="font-semibold">S'implanter en Zone Franche</div>
                    <div className="text-slate-400 text-[11px]">TFZ, Tanger Automotive City & Medhub</div>
                  </a>
                  <a
                    href="#enjeux"
                    onClick={() => handleLinkClick('enjeux')}
                    className="block px-3 py-2 rounded-lg hover:bg-white/10 transition-colors text-slate-200 hover:text-white"
                  >
                    <div className="font-semibold">Changer d'expert-comptable</div>
                    <div className="text-slate-400 text-[11px]">Reprise fluide de votre dossier sans rupture</div>
                  </a>
                </div>
              )}
            </div>

            {/* 3. Nos expertises */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('expertises')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => handleLinkClick('offres')}
                className="flex items-center gap-1 hover:text-white transition-colors py-2 whitespace-nowrap"
              >
                <span>Nos expertises</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {activeDropdown === 'expertises' && (
                <div className="absolute top-full -left-12 w-80 bg-[#0a1724]/95 backdrop-blur-md rounded-xl shadow-2xl border border-white/10 p-3 py-2 text-xs z-50">
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider px-3 py-1">
                    Missions & Prestations
                  </div>
                  <a
                    href="#offres"
                    onClick={() => handleLinkClick('offres')}
                    className="block px-3 py-2 rounded-lg hover:bg-white/10 transition-colors text-slate-200 hover:text-white"
                  >
                    <div className="font-semibold">01. Expertise comptable & digitale</div>
                    <div className="text-slate-400 text-[11px]">Tenue de comptes & bilans certifiés DGI</div>
                  </a>
                  <a
                    href="#offres"
                    onClick={() => handleLinkClick('offres')}
                    className="block px-3 py-2 rounded-lg hover:bg-white/10 transition-colors text-slate-200 hover:text-white"
                  >
                    <div className="font-semibold">02. Fiscalité marocaine & conseil</div>
                    <div className="text-slate-400 text-[11px]">IS, TVA, déclarations & contrôles fiscaux</div>
                  </a>
                  <a
                    href="#offres"
                    onClick={() => handleLinkClick('offres')}
                    className="block px-3 py-2 rounded-lg hover:bg-white/10 transition-colors text-slate-200 hover:text-white"
                  >
                    <div className="font-semibold">03. Gestion sociale & paie (DAMANCOM)</div>
                    <div className="text-slate-400 text-[11px]">Fiches de paie & déclarations CNSS</div>
                  </a>
                  <a
                    href="#offres"
                    onClick={() => handleLinkClick('offres')}
                    className="block px-3 py-2 rounded-lg hover:bg-white/10 transition-colors text-slate-200 hover:text-white"
                  >
                    <div className="font-semibold">04. Audit légal & Commissariat aux comptes</div>
                    <div className="text-slate-400 text-[11px]">Certification des comptes annuels</div>
                  </a>
                </div>
              )}
            </div>

            {/* 4. Votre secteur */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('secteur')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => handleLinkClick('secteurs')}
                className="flex items-center gap-1 hover:text-white transition-colors py-2 whitespace-nowrap"
              >
                <span>Votre secteur</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {activeDropdown === 'secteur' && (
                <div className="absolute top-full -left-12 w-72 bg-[#0a1724]/95 backdrop-blur-md rounded-xl shadow-2xl border border-white/10 p-3 py-2 text-xs z-50">
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider px-3 py-1">
                    Écosystèmes industriels & PME
                  </div>
                  <a href="#secteurs" onClick={() => handleLinkClick('secteurs')} className="block px-3 py-2 rounded-lg hover:bg-white/10 text-slate-300">
                    <span className="font-semibold text-white">Automobile & Industrie : </span>
                    <span className="text-slate-400">Tanger Auto City (TAC)</span>
                  </a>
                  <a href="#secteurs" onClick={() => handleLinkClick('secteurs')} className="block px-3 py-2 rounded-lg hover:bg-white/10 text-slate-300">
                    <span className="font-semibold text-white">Logistique & Transit : </span>
                    <span className="text-slate-400">Tanger Med Port & Hub</span>
                  </a>
                  <a href="#secteurs" onClick={() => handleLinkClick('secteurs')} className="block px-3 py-2 rounded-lg hover:bg-white/10 text-slate-300">
                    <span className="font-semibold text-white">Commerce & PME : </span>
                    <span className="text-slate-400">Tanger Centre & Tétouan</span>
                  </a>
                </div>
              )}
            </div>

            {/* 5. Simulateur de Devis */}
            <button
              onClick={() => handleLinkClick('devis')}
              className="flex items-center gap-1 text-[#2dd4bf] hover:text-white font-semibold transition-colors py-2 whitespace-nowrap"
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>Devis en ligne</span>
            </button>

            {/* 6. Ressources */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('ressources')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => handleLinkClick('evenements-articles')}
                className="flex items-center gap-1 hover:text-white transition-colors py-2 whitespace-nowrap"
              >
                <span>Ressources</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {activeDropdown === 'ressources' && (
                <div className="absolute top-full right-0 w-72 bg-[#0a1724]/95 backdrop-blur-md rounded-xl shadow-2xl border border-white/10 p-3 py-2 text-xs z-50">
                  <a
                    href="#evenements-articles"
                    onClick={() => handleLinkClick('evenements-articles')}
                    className="block px-3 py-2 rounded-lg hover:bg-white/10 transition-colors text-slate-200 hover:text-white"
                  >
                    <div className="font-semibold text-[#2dd4bf]">Événements & Articles</div>
                    <div className="text-slate-400 text-[11px]">Nos publications, ateliers & veille</div>
                  </a>
                  <a
                    href="#contact"
                    onClick={() => handleLinkClick('contact')}
                    className="block px-3 py-2 rounded-lg hover:bg-white/10 transition-colors text-slate-200 hover:text-white"
                  >
                    <div className="font-semibold">Nos 4 Bureaux & Contact</div>
                    <div className="text-slate-400 text-[11px]">Tanger, Tétouan & Tanger Med</div>
                  </a>
                  <a
                    href="#faq"
                    onClick={() => handleLinkClick('faq')}
                    className="block px-3 py-2 rounded-lg hover:bg-white/10 transition-colors text-slate-200 hover:text-white"
                  >
                    <div className="font-semibold">Foire aux questions (FAQ)</div>
                    <div className="text-slate-400 text-[11px]">Comptabilité, tarifs & obligations</div>
                  </a>
                </div>
              )}
            </div>

          </nav>

          {/* Right Action: Parallelogram "Contact" Button identical to the screenshot */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Discreet Espace Client button */}
            <button
              onClick={onOpenClientPortal}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-200 hover:text-white hover:bg-white/10 rounded-md transition-colors whitespace-nowrap"
            >
              <Lock className="w-3.5 h-3.5 text-[#2dd4bf]" />
              <span>Espace client</span>
            </button>

            {/* THE PARALLELOGRAM BUTTON: Soft Mint / Aquamarine color #c5f2f0 with skewed edges */}
            <button
              onClick={onOpenBooking}
              className="relative inline-flex items-center justify-center px-6 sm:px-8 py-2.5 text-sm font-bold text-slate-950 bg-[#c5f2f0] hover:bg-[#b0eae7] active:scale-95 transition-all shadow-md group whitespace-nowrap"
              style={{
                transform: 'skewX(-15deg)',
              }}
            >
              <span
                className="font-extrabold tracking-wide"
                style={{
                  transform: 'skewX(15deg)',
                }}
              >
                Contact
              </span>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-200 hover:text-white focus:outline-none"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#06111c]/98 backdrop-blur-xl border-b border-white/10 px-5 pt-4 pb-6 space-y-4 text-white shadow-2xl max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col space-y-1.5 text-sm font-semibold">
            <button
              onClick={() => handleLinkClick('cabinet')}
              className="text-left py-2.5 border-b border-white/10 flex items-center justify-between hover:text-[#2dd4bf] transition-colors"
            >
              <span>Notre Cabinet (Maître Mourad Derdab)</span>
              <span className="text-xs text-slate-400">›</span>
            </button>
            <button
              onClick={() => handleLinkClick('enjeux')}
              className="text-left py-2.5 border-b border-white/10 flex items-center justify-between hover:text-[#2dd4bf] transition-colors"
            >
              <span>Vos Enjeux & Création de société (CRI)</span>
              <span className="text-xs text-slate-400">›</span>
            </button>
            <button
              onClick={() => handleLinkClick('offres')}
              className="text-left py-2.5 border-b border-white/10 flex items-center justify-between hover:text-[#2dd4bf] transition-colors"
            >
              <span>Nos Expertises Comptables & Fiscales</span>
              <span className="text-xs text-slate-400">›</span>
            </button>
            <button
              onClick={() => handleLinkClick('secteurs')}
              className="text-left py-2.5 border-b border-white/10 flex items-center justify-between hover:text-[#2dd4bf] transition-colors"
            >
              <span>Votre Secteur (Auto, Fret, PME, BTP)</span>
              <span className="text-xs text-slate-400">›</span>
            </button>
            <button
              onClick={() => handleLinkClick('devis')}
              className="text-left py-2.5 border-b border-white/10 flex items-center justify-between text-[#2dd4bf] font-bold"
            >
              <span>Simulateur de Devis en ligne</span>
              <span className="text-xs font-bold">›</span>
            </button>
            <button
              onClick={() => handleLinkClick('evenements-articles')}
              className="text-left py-2.5 border-b border-white/10 flex items-center justify-between hover:text-[#2dd4bf] transition-colors"
            >
              <span>Événements & Articles / Veille fiscale</span>
              <span className="text-xs text-slate-400">›</span>
            </button>
            <button
              onClick={() => handleLinkClick('contact')}
              className="text-left py-2.5 border-b border-white/10 flex items-center justify-between hover:text-[#2dd4bf] transition-colors"
            >
              <span>Nos 4 Bureaux & Contact Direct</span>
              <span className="text-xs text-slate-400">›</span>
            </button>
            <button
              onClick={() => handleLinkClick('faq')}
              className="text-left py-2 text-slate-300 hover:text-white transition-colors"
            >
              <span>Foire aux questions (FAQ)</span>
            </button>
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenClientPortal();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-semibold border border-white/15"
            >
              <Lock className="w-3.5 h-3.5 text-[#2dd4bf]" />
              <span>Accéder à l'Espace Client Connect</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleLinkClick('devis');
              }}
              className="w-full py-3 px-4 bg-[#c5f2f0] text-slate-950 font-black text-sm rounded-xl shadow-md text-center active:scale-95 transition-all"
            >
              Simuler mon tarif comptable en 1 min
            </button>

            <div className="flex items-center gap-2 pt-1">
              <a
                href="tel:+212539345000"
                className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 bg-white/5 border border-white/10 rounded-lg text-xs text-slate-300 font-semibold"
              >
                <Phone className="w-3.5 h-3.5 text-[#2dd4bf]" />
                <span>+212 (0)5 39 34 50 00</span>
              </a>
              <a
                href="https://wa.me/212661000000?text=Bonjour,%20je%20souhaite%20un%20renseignement%20comptable."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 bg-emerald-600 hover:bg-emerald-500 rounded-lg text-xs text-white font-semibold"
              >
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Social media icons on mobile */}
            <div className="pt-3 border-t border-white/10 flex flex-col items-center gap-2">
              <span className="text-[11px] text-slate-400">Suivez Maître Derdab sur les réseaux :</span>
              <SocialLinks variant="header" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
