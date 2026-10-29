/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShieldCheck, Award, Users, CheckCircle2, Building, Scale, ArrowRight, Calendar, Sparkles } from 'lucide-react';
import { SocialLinks } from './SocialLinks.tsx';

interface CabinetSectionProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const CabinetSection: React.FC<CabinetSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="cabinet" className="py-20 sm:py-28 bg-gradient-to-b from-[#06121f] via-[#091b2c] to-[#06111c] text-white relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Kicker */}
        <div className="flex items-center gap-2.5 mb-4">
          <div className="w-3.5 h-6 bg-[#2dd4bf] -skew-x-[20deg] rounded-xs" aria-hidden="true" />
          <span className="text-xs sm:text-sm font-bold tracking-wider text-[#2dd4bf] uppercase">
            Notre Cabinet · Qui sommes-nous ?
          </span>
        </div>

        {/* Section Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center mb-16 sm:mb-20">
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              Maître Mourad Derdab, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5eead4] via-[#2dd4bf] to-cyan-300">
                L’expertise de référence au service des dirigeants
              </span>
            </h2>
            <p className="mt-5 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              Inscrit au tableau de l'<strong>Ordre des Experts-Comptables du Maroc (OEC)</strong>, le cabinet <strong>DERDAB COMPTA</strong> allie rigueur comptable, conformité fiscale absolue et vision stratégique. Nous accompagnons les créateurs, PME, filiales de multinationales et investisseurs à Tanger, Tétouan et dans l'ensemble du Grand Tanger.
            </p>
          </div>

          <div className="lg:col-span-5 bg-white/5 backdrop-blur-md rounded-2xl p-6 sm:p-7 border border-white/10 shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-[#2dd4bf] flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <div className="font-bold text-white text-sm">Garanties & Agréments OEC</div>
                <div className="text-slate-400 text-xs">Secret professionnel & conformité stricte DGI</div>
              </div>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2dd4bf] shrink-0" />
                <span>Membre de l'Ordre des Experts-Comptables du Maroc</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2dd4bf] shrink-0" />
                <span>Commissariat aux comptes & Audit contractuel certifié</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2dd4bf] shrink-0" />
                <span>Interlocuteur direct des administrations (DGI, CNSS, OMPIC, CRI)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Founder Portrait & Vision Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#071726]/90 rounded-3xl p-6 sm:p-10 lg:p-12 border border-white/15 shadow-2xl mb-16">
          
          {/* Photo Maître Derdab */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 bg-slate-900 group">
              <img
                src="/assets/aistudio/image_381f3c2c.png"
                alt="Maître Mourad Derdab - Fondateur et Dirigeant DERDAB COMPTA"
                className="w-full h-96 sm:h-[440px] object-cover object-top group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/10 text-white">
                <div className="font-extrabold text-sm sm:text-base text-white">
                  Maître Mourad Derdab
                </div>
                <div className="text-xs text-[#2dd4bf] font-medium mt-0.5">
                  Fondateur & Dirigeant · Cabinet DERDAB COMPTA
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  « Notre engagement : sécuriser vos bilans et propulser vos projets. »
                </div>
              </div>
            </div>

            <div className="mt-4 flex flex-col items-center gap-2">
              <span className="text-xs text-slate-400">Réseaux officiels de Maître Derdab :</span>
              <SocialLinks variant="header" />
            </div>
          </div>

          {/* Core Values & Commitments */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Nos Valeurs Fondatrices</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                L’alliance unique de la proximité humaine et des technologies comptables de pointe
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Chez DERDAB COMPTA, nous croyons qu'un bon expert-comptable n'est pas seulement un enregistreur d'écritures : c'est un partenaire stratégique joignable, attentif à vos décisions d'investissement et garant de votre tranquillité d'esprit face aux contrôles.
              </p>
            </div>

            {/* 3 Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-300 flex items-center justify-center font-bold mb-2">
                  01
                </div>
                <h4 className="font-bold text-white text-sm mb-1">Rigueur & Déontologie</h4>
                <p className="text-xs text-slate-400 leading-snug">
                  Strict respect des normes comptables marocaines (CGNC) et des directives de l'OEC.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="w-8 h-8 rounded-lg bg-teal-500/20 text-teal-300 flex items-center justify-center font-bold mb-2">
                  02
                </div>
                <h4 className="font-bold text-white text-sm mb-1">100% Connecté</h4>
                <p className="text-xs text-slate-400 leading-snug">
                  Espace client digitalisé, reconnaissance OCR de vos pièces et transmission directe SIMPL/DAMANCOM.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-300 flex items-center justify-center font-bold mb-2">
                  03
                </div>
                <h4 className="font-bold text-white text-sm mb-1">Réactivité 24h</h4>
                <p className="text-xs text-slate-400 leading-snug">
                  Ligne directe, WhatsApp cabinet et réponses rapides à toutes vos interrogations fiscales et sociales.
                </p>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={() => onOpenBooking('Rendez-vous Conseil avec Maître Derdab')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#c5f2f0] hover:bg-[#b0eae7] text-slate-950 font-bold text-sm rounded-xl transition-all shadow-lg hover:shadow-cyan-400/20 active:scale-95"
              >
                <Calendar className="w-4 h-4" />
                <span>Prendre RDV avec Maître Mourad Derdab</span>
              </button>
              <a
                href="tel:+212539345000"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-white/10 hover:bg-white/15 text-white font-semibold text-sm rounded-xl border border-white/15 transition-all"
              >
                <span>Appel direct : +212 (0)5 39 34 50 00</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
