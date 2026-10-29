/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Monitor,
  UserCheck,
  Users,
  Home,
  GraduationCap,
  Globe,
  Plus,
  Minus,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import { ADVISORY_DISCUSSION_IMAGE, TETOUAN_OFFICE_IMAGE, HERO_IMAGE } from '../data/mockData.ts';

interface AccordionItem {
  id: string;
  title: string;
  icon: React.ReactNode;
  contentP1: string;
  contentP2: string;
  linkText: string;
  tag: string;
  image: string;
  imageCaption: string;
}

interface InteractiveAccordionSectionProps {
  onOpenBooking: (serviceName?: string) => void;
  onSelectNav: (sectionId: string) => void;
}

export const InteractiveAccordionSection: React.FC<InteractiveAccordionSectionProps> = ({
  onOpenBooking,
  onSelectNav,
}) => {
  const [activeId, setActiveId] = useState<string>('expertise-comptable');

  const items: AccordionItem[] = [
    {
      id: 'expertise-comptable',
      title: 'Expertise comptable',
      icon: <Monitor className="w-6 h-6" />,
      contentP1:
        "En tant que cabinet d'expertise comptable, inscrit à l'Ordre des experts-comptables, nous accompagnons les dirigeants, TPE et PME avec des conseils sur mesure.",
      contentP2:
        'De la tenue comptable à la gestion financière, nous garantissons la conformité de votre entreprise et l’optimisation de vos performances.',
      linkText: 'En savoir plus',
      tag: 'Ordre des Experts-Comptables Maroc',
      image: '/assets/aistudio/image_381f3c2c.png',
      imageCaption: 'Conseil & Tenue comptable personnalisée à Tanger',
    },
    {
      id: 'conseil-entreprises',
      title: 'Conseil aux entreprises',
      icon: <UserCheck className="w-6 h-6" />,
      contentP1:
        'De la création de société (SARL / SA au CRI en 48h) au développement stratégique, nous vous guidons dans vos choix juridiques, fiscaux et organisationnels.',
      contentP2:
        'Élaboration de business plans bancaires, prévisionnels de trésorerie, restructuration et optimisation des coûts d’exploitation.',
      linkText: 'Découvrir nos missions de conseil',
      tag: 'Accompagnement Dirigeant',
      image: HERO_IMAGE,
      imageCaption: 'Gouvernance & Stratégie d’entreprise',
    },
    {
      id: 'conseil-rh',
      title: 'Conseil RH et en gestion sociale',
      icon: <Users className="w-6 h-6" />,
      contentP1:
        'Externalisation de vos bulletins de paie conformément au Code du Travail marocain et prise en charge intégrale des télédéclarations DAMANCOM CNSS et AMO.',
      contentP2:
        'Rédaction de contrats de travail sécurisés, gestion des déclarations annuelles de salaires (État 9421) et assistance lors des départs de collaborateurs.',
      linkText: 'En savoir plus sur l’offre sociale',
      tag: 'Gestion Sociale DAMANCOM',
      image: TETOUAN_OFFICE_IMAGE,
      imageCaption: 'Gestion RH & Droit du travail',
    },
    {
      id: 'gestion-privee',
      title: 'Gestion privée',
      icon: <Home className="w-6 h-6" />,
      contentP1:
        'Accompagnement patrimonial du chef d’entreprise : arbitrage entre rémunération de gérance et dividendes, fiscalité personnelle et transmission d’actifs.',
      contentP2:
        'Conseil dédié aux investisseurs étrangers et Marocains du Monde (MRE) pour la gestion et le rapatriement des capitaux via l’Office des Changes.',
      linkText: 'Consulter nos solutions patrimoniales',
      tag: 'Patrimoine du Dirigeant',
      image: ADVISORY_DISCUSSION_IMAGE,
      imageCaption: 'Ingénierie financière & Transmission',
    },
    {
      id: 'audit-commissariat',
      title: 'Audit & Commissariat aux comptes',
      icon: <GraduationCap className="w-6 h-6" />,
      contentP1:
        'Certification légale des états de synthèse annuels (Bilan, CPC, ESG) par un Commissaire aux Comptes assermenté inscrit à l’Ordre (OEC Maroc).',
      contentP2:
        'Missions d’audit contractuel, revue des procédures de contrôle interne et audit d’acquisition pour sécuriser vos investissements.',
      linkText: 'En savoir plus sur nos audits',
      tag: 'Certification Légale OEC',
      image: HERO_IMAGE,
      imageCaption: 'Rapports d’audit & Contrôle interne',
    },
    {
      id: 'zone-franche',
      title: 'Zones Franches & International',
      icon: <Globe className="w-6 h-6" />,
      contentP1:
        'Spécialistes de l’écosystème industriel du Nord : Tanger Free Zone (TFZ), Tanger Automotive City (TAC) et Medhub Tanger Med.',
      contentP2:
        'Montage de dossiers d’agrément ZAI auprès de TMSA, exonérations d’IS 5 ans, franchise totale de TVA et gestion des comptes en devises convertibles.',
      linkText: 'Accompagnement Zones Franches',
      tag: 'TFZ · TAC · Tanger Med',
      image: TETOUAN_OFFICE_IMAGE,
      imageCaption: 'Industrie & Export Tanger Med',
    },
  ];

  const currentActiveItem = items.find((i) => i.id === activeId) || items[0];

  return (
    <section className="py-16 sm:py-24 bg-[#050e18] text-white overflow-hidden relative border-t border-b border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#2dd4bf]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column: Interactive Accordion matching 100% the screenshot */}
          <div className="lg:col-span-7 space-y-3">
            {items.map((item) => {
              const isExpanded = item.id === activeId;

              if (isExpanded) {
                // EXPANDED ITEM: Solid soft mint/cyan card matching the screenshot exactly (#bdf1ec)
                return (
                  <div
                    key={item.id}
                    className="bg-[#bdf1ec] text-[#06101e] rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl transition-all duration-300 animate-in fade-in-50"
                  >
                    {/* Header of expanded card */}
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3.5">
                        <div className="text-[#059669] shrink-0">
                          {item.icon}
                        </div>
                        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#06101e]">
                          {item.title}
                        </h2>
                      </div>

                      <button
                        type="button"
                        onClick={() => setActiveId('')}
                        className="p-1 text-[#06101e] hover:opacity-75 transition-opacity focus:outline-none"
                        aria-label="Réduire"
                      >
                        <Minus className="w-5 h-5 stroke-[2.5]" />
                      </button>
                    </div>

                    {/* Body content */}
                    <div className="space-y-3.5 text-xs sm:text-sm text-[#0c2233] leading-relaxed pr-2">
                      <p>
                        {item.contentP1.includes("d'expertise comptable") ? (
                          <>
                            En tant que{' '}
                            <span className="underline font-semibold">cabinet d'expertise comptable</span>, inscrit à{' '}
                            <span className="underline font-semibold">l'Ordre des experts-comptables</span>, nous
                            accompagnons les dirigeants, TPE et PME avec des conseils sur mesure.
                          </>
                        ) : (
                          item.contentP1
                        )}
                      </p>

                      <p>
                        {item.contentP2.includes('tenue comptable') ? (
                          <>
                            De la <span className="underline font-semibold">tenue comptable</span> à la gestion financière,
                            nous garantissons la conformité de votre entreprise et l’optimisation de vos performances.
                          </>
                        ) : (
                          item.contentP2
                        )}
                      </p>
                    </div>

                    {/* Action link with right arrow */}
                    <div className="pt-5 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => onOpenBooking(item.title)}
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#06101e] hover:opacity-80 transition-opacity underline-offset-4 hover:underline"
                      >
                        <span>{item.linkText}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>

                      <span className="text-[11px] font-semibold text-[#047857] bg-white/60 px-2.5 py-1 rounded-md">
                        {item.tag}
                      </span>
                    </div>
                  </div>
                );
              }

              // COLLAPSED ITEM: Clean dark row with teal icon, white text, and plus sign
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveId(item.id)}
                  className="w-full text-left flex items-center justify-between p-4 sm:p-5 rounded-xl hover:bg-white/5 transition-all group border border-transparent hover:border-white/5"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-[#2dd4bf] group-hover:scale-105 transition-transform shrink-0">
                      {item.icon}
                    </div>
                    <span className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-200 transition-colors">
                      {item.title}
                    </span>
                  </div>

                  <div className="text-slate-400 group-hover:text-white transition-colors">
                    <Plus className="w-5 h-5 stroke-[2]" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Confident Executive Portrait matching the screenshot */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-[#091824] group">
              <img
                src={currentActiveItem.image}
                alt={`${currentActiveItem.title} - Cabinet DERDAB COMPTA`}
                className="w-full h-80 sm:h-[480px] lg:h-[540px] object-cover object-top filter brightness-95 contrast-105 group-hover:scale-102 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06101e] via-[#06101e]/20 to-transparent" />

              {/* Floating caption badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#06101e]/90 backdrop-blur-md border border-white/15 text-xs text-white">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold text-[#2dd4bf] uppercase tracking-wider">
                    {currentActiveItem.title}
                  </span>
                  <ShieldCheck className="w-4 h-4 text-[#2dd4bf]" />
                </div>
                <p className="text-slate-300 text-xs">
                  {currentActiveItem.imageCaption} · Accompagnement de proximité par des professionnels certifiés OEC.
                </p>
                <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400">Bureaux : Tanger & Tétouan</span>
                  <button
                    onClick={() => onOpenBooking(currentActiveItem.title)}
                    className="text-[11px] font-bold text-white bg-blue-600 hover:bg-blue-500 px-3 py-1 rounded transition-colors"
                  >
                    Consulter
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
