/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Calculator,
  ShieldCheck,
  Users,
  Building2,
  FileCheck,
  Globe,
  ArrowRight,
  Check,
  X,
  Calendar,
} from 'lucide-react';
import { SERVICE_OFFERS } from '../data/mockData.ts';
import { ServiceOffer } from '../types.ts';

interface ServicesSectionProps {
  onSelectServiceForBooking: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForBooking,
}) => {
  const [activeModalService, setActiveModalService] = useState<ServiceOffer | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Calculator':
        return <Calculator className="w-5 h-5 text-blue-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-blue-600" />;
      case 'Users':
        return <Users className="w-5 h-5 text-blue-600" />;
      case 'Building2':
        return <Building2 className="w-5 h-5 text-blue-600" />;
      case 'FileCheck':
        return <FileCheck className="w-5 h-5 text-blue-600" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-blue-600" />;
      default:
        return <Calculator className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="offres" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-700 mb-2">
              Solutions d'Accompagnement 360°
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Une gamme complète de services pour chaque cycle de votre entreprise.
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-md leading-relaxed">
            De la création de société jusqu'à l'audit légal et l'implantation en Zone Franche, nos équipes pluridisciplinaires sécurisent votre conformité et accélèrent vos ambitions.
          </p>
        </div>

        {/* 6-Pillar Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICE_OFFERS.map((offer) => (
            <div
              key={offer.id}
              className="group flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all duration-200 relative"
            >
              <div>
                {/* Top index and icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-semibold text-slate-400 group-hover:text-blue-600 transition-colors">
                    {offer.number}
                  </span>
                  <div className="p-2.5 rounded-lg bg-blue-50 group-hover:bg-blue-100 transition-colors">
                    {getIcon(offer.iconName)}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-900 transition-colors mb-2 leading-snug">
                  {offer.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {offer.shortDesc}
                </p>

                {/* Benefits Bullet Points */}
                <div className="space-y-2 mb-6 text-xs text-slate-600">
                  {offer.benefits.slice(0, 2).map((benefit, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom CTA to open detailed modal */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => setActiveModalService(offer)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 hover:text-blue-800 transition-colors"
                >
                  <span>Détails & livrables</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => onSelectServiceForBooking(offer.title)}
                  className="px-2.5 py-1 text-[11px] font-semibold text-slate-700 hover:text-blue-700 hover:bg-slate-100 rounded transition-colors"
                >
                  Demander un devis
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal Detailed View */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-slate-200">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-blue-50 rounded-xl text-blue-700">
                  {getIcon(activeModalService.iconName)}
                </div>
                <div>
                  <div className="text-xs font-mono font-semibold text-slate-400">
                    {activeModalService.number} · Pôle Spécialisé
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {activeModalService.title}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setActiveModalService(null)}
                className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              {activeModalService.fullDesc}
            </p>

            {/* Target Audience */}
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 mb-6 text-xs text-slate-700">
              <span className="font-semibold text-slate-900">Pour qui : </span>
              {activeModalService.targetAudience}
            </div>

            {/* Benefits */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
                Avantages opérationnels & conformité :
              </h4>
              <ul className="space-y-2 text-xs text-slate-600">
                {activeModalService.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Deliverables */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
                Livrables officiels garantis :
              </h4>
              <ul className="space-y-2 text-xs text-slate-600">
                {activeModalService.deliverables.map((deliv, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>{deliv}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  const title = activeModalService.title;
                  setActiveModalService(null);
                  onSelectServiceForBooking(title);
                }}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors"
              >
                <Calendar className="w-4 h-4" />
                <span>Prendre rendez-vous pour cette mission</span>
              </button>
              <button
                onClick={() => setActiveModalService(null)}
                className="py-3 px-4 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
