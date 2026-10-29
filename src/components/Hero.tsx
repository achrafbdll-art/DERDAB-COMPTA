/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { HERO_AERIAL_IMAGE, HERO_IMAGE, TETOUAN_OFFICE_IMAGE } from '../data/mockData.ts';
import { FileText, Users, ArrowRight, Star, ShieldCheck, BookOpen } from 'lucide-react';

interface HeroProps {
  onOpenBooking: (service?: string) => void;
  onOpenArticles: () => void;
  onFindOffice: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenBooking,
  onOpenArticles,
  onFindOffice,
}) => {
  return (
    <section
      id="accueil"
      className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-28 sm:pt-36 pb-12 sm:pb-16 bg-[#040e17] text-white overflow-hidden"
    >
      {/* Background Image: Cabinet DERDAB COMPTA - Bureaux et accueil officiel */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/aistudio/image_4cefbb9c.png"
          alt="Cabinet Derdab Compta - Bureaux et accueil officiel Tanger & Tétouan"
          className="w-full h-full object-cover object-[center_22%] lg:object-[center_26%] filter brightness-[0.72] contrast-[1.08]"
          referrerPolicy="no-referrer"
          loading="eager"
        />
        {/* Cinematic gradient overlays allowing the illuminated Derdab Compta wall sign and warm office interior to show while preserving legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#040e17]/92 via-[#040e17]/75 to-[#040e17]/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#040e17] via-transparent to-[#040e17]/80" />
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col justify-center">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column: Laurel wreath 2026, Headline & Parallelogram CTA */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
            {/* Laurel Wreath with 2026 exactly as shown in screenshot */}
            <div className="flex items-center gap-2">
              {/* Left Laurel Branch */}
              <svg className="w-5 h-7 text-white/90" viewBox="0 0 24 32" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 28 C9 22 5 18 3 12 C1 8 3 3 5 2" />
                <path d="M9 24 C6 20 4 15 4 10" />
                <path d="M11 18 C8 15 6 12 7 8" />
                <path d="M11 12 C9 10 8 7 9 4" />
              </svg>

              <span className="font-mono text-sm sm:text-base font-extrabold tracking-widest text-white">
                2026
              </span>

              {/* Right Laurel Branch (Mirrored) */}
              <svg className="w-5 h-7 text-white/90 scale-x-[-1]" viewBox="0 0 24 32" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 28 C9 22 5 18 3 12 C1 8 3 3 5 2" />
                <path d="M9 24 C6 20 4 15 4 10" />
                <path d="M11 18 C8 15 6 12 7 8" />
                <path d="M11 12 C9 10 8 7 9 4" />
              </svg>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-extrabold tracking-tight text-white leading-[1.12] text-balance">
              Maitre Derdab<br />
              votre partenaire en comptabilité et gestion d’entreprise
            </h1>

            {/* Skewed Parallelogram Main CTA button */}
            <div className="pt-2">
              <button
                onClick={() => onOpenBooking()}
                className="relative inline-flex items-center justify-center px-7 sm:px-10 py-4 text-sm sm:text-base font-bold text-slate-950 bg-[#c5f2f0] hover:bg-[#b0eae7] active:scale-95 transition-all shadow-xl hover:shadow-cyan-400/20 group"
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
                  RDV & Devis sans engagement
                </span>
              </button>
            </div>

          </div>

          {/* Right Column: Rating, Experience Paragraph & Highlighted Specializations */}
          <div className="lg:col-span-5 space-y-5 text-slate-200">
            
            {/* Google Rating with Cyan Slash */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold">
              <span className="text-[#2dd4bf] font-black text-base sm:text-lg">/</span>
              <span className="text-white font-bold">4,8/5 sur Google *</span>
              <div className="flex text-amber-400 text-xs">
                {'★★★★★'}
              </div>
            </div>

            {/* Experience Paragraph */}
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
              Fort de son expertise reconnue auprès des entrepreneurs partout au Maroc, notamment à <strong className="text-white">Tanger, Tétouan et dans le Grand Tanger</strong>, nous devenons le cabinet de conseil de référence pour les dirigeants.
            </p>

            {/* Highlighted text block */}
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              <strong className="text-white font-bold">
                Expertise comptable, conseil aux entreprises, gestion sociale et RH, conseil juridique, fiscalité
              </strong>
              , nous concevons des accompagnements sur mesure pour vous aider à relever vos défis et concrétiser vos ambitions.
            </p>

            {/* Footnote */}
            <p className="text-[11px] text-slate-400 font-light italic">
              *Moyenne des avis Google déposés sur l'ensemble de nos bureaux au Maroc (Tanger City Center, Tétouan Wilaya, TFZ).
            </p>

          </div>

        </div>

      </div>

      {/* Pied Header (Bottom of Hero): 100% Identical to screenshot image_18db23de.png */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-white/15">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Card 1: Expertise & Tenue comptable */}
          <div
            onClick={() => onOpenBooking('Expertise & Tenue comptable')}
            className="group cursor-pointer p-6 sm:p-7 bg-[#0b1724]/80 hover:bg-[#0e1e2f]/90 backdrop-blur-md border border-white/10 hover:border-white/25 transition-all flex items-center gap-5 sm:gap-6 shadow-xl"
          >
            {/* Square Icon 1 */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 shrink-0 overflow-hidden shadow-md border border-white/10 bg-[#040910]">
              <img
                src="/assets/aistudio/hero_footer_facturation_icon.png"
                alt="Expertise et Tenue Comptable"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-1.5 leading-snug group-hover:text-cyan-200 transition-colors">
                Expertise & Tenue comptable
              </h2>
              <p className="text-sm sm:text-[15px] text-slate-200 leading-snug mb-1">
                <strong className="text-white font-bold">Tenue rigoureuse de vos comptes</strong>, bilans et liasses fiscales
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-snug mb-3">
                Conformité totale et optimisation fiscale sur mesure
              </p>
              <div className="inline-flex items-center gap-1.5 text-sm sm:text-base font-semibold text-[#2dd4bf] group-hover:text-[#5eead4] transition-colors">
                <span>En savoir plus</span>
                <span className="font-bold transition-transform group-hover:translate-x-1">›</span>
              </div>
            </div>
          </div>

          {/* Card 2: Conseil & Gestion d'entreprise */}
          <div
            onClick={() => onOpenBooking('Conseil & Gestion d’entreprise')}
            className="group cursor-pointer p-6 sm:p-7 bg-[#0b1724]/80 hover:bg-[#0e1e2f]/90 backdrop-blur-md border border-white/10 hover:border-white/25 transition-all flex items-center gap-5 sm:gap-6 shadow-xl"
          >
            {/* Square Icon 2 */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 shrink-0 overflow-hidden shadow-md border border-white/10 bg-[#040910]">
              <img
                src="/assets/aistudio/hero_footer_coeur_icon.png"
                alt="Conseil de gestion et Stratégie d’entreprise"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-snug group-hover:text-cyan-200 transition-colors">
                Conseil & Gestion d’entreprise
              </h2>
              <p className="text-sm sm:text-[15px] text-slate-200 leading-snug mb-4">
                Tableaux de bord, budgets prévisionnels et <strong className="text-white font-bold">décisions stratégiques</strong> pour votre croissance.
              </p>
              <div className="inline-flex items-center gap-1.5 text-sm sm:text-base font-semibold text-[#2dd4bf] group-hover:text-[#5eead4] transition-colors">
                <span>Découvrir</span>
                <span className="font-bold transition-transform group-hover:translate-x-1">›</span>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
