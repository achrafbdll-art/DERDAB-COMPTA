/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Check, X, ShieldCheck, FileText, ArrowRight, Calendar } from 'lucide-react';

interface EInvoicingBannerProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const EInvoicingBanner: React.FC<EInvoicingBannerProps> = ({ onOpenBooking }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="py-10 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Container matching 100% the screenshot */}
        <div className="bg-[#bdf1ec] rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-14 shadow-sm border border-[#a3e8e1]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Kicker, Title & Dark Parallelogram Button */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Kicker with Cyan Slash */}
              <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-900 tracking-tight">
                <span className="text-[#059669] font-black text-lg">/</span>
                <span>DERDAB COMPTA vous accompagne !</span>
              </div>

              {/* Main Banner Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-slate-950 leading-[1.12] tracking-tight text-balance">
                Facturation électronique : votre entreprise est–elle aux normes ?
              </h2>

              {/* Inverted Dark Parallelogram CTA Button */}
              <div>
                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="relative inline-flex items-center justify-center px-7 sm:px-9 py-3.5 text-xs sm:text-sm font-bold text-white bg-[#0a1724] hover:bg-[#132334] active:scale-95 transition-all shadow-md group"
                  style={{
                    transform: 'skewX(-15deg)',
                  }}
                >
                  <span
                    className="tracking-wide"
                    style={{
                      transform: 'skewX(15deg)',
                    }}
                  >
                    En savoir plus
                  </span>
                </button>
              </div>

            </div>

            {/* Right Column: Explanatory text & Checkmarks */}
            <div className="lg:col-span-6 lg:border-l lg:border-slate-800/10 lg:pl-10 space-y-4 text-slate-900">
              
              <p className="text-xs sm:text-sm text-slate-900 leading-relaxed font-normal">
                Dans le cadre de la modernisation fiscale menée par la <strong>DGI</strong> (Direction Générale des Impôts) et des dispositions de la <strong>Loi de Finances 2026</strong>, la{' '}
                <button
                  onClick={() => setModalOpen(true)}
                  className="underline font-semibold hover:text-emerald-800 transition-colors"
                >
                  facturation électronique
                </button>{' '}
                et la dématérialisation comptable deviennent <strong>obligatoires</strong> pour les entreprises assujetties à la TVA au Maroc.
              </p>

              <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal">
                Cette réforme modifie en profondeur la gestion comptable et fiscale des organisations à Tanger, Tétouan et dans le Grand Tanger.
              </p>

              {/* 3 Green Checkmark Bullet Points matching screenshot */}
              <div className="space-y-3 pt-2 text-xs sm:text-sm font-medium text-slate-950">
                <div className="flex items-start gap-2.5">
                  <Check className="w-5 h-5 text-[#059669] shrink-0 mt-0.5 stroke-[3]" />
                  <span>
                    <strong>Mettez en conformité vos processus et vos outils</strong>, dès aujourd'hui.
                  </span>
                </div>

                <div className="flex items-start gap-2.5">
                  <Check className="w-5 h-5 text-[#059669] shrink-0 mt-0.5 stroke-[3]" />
                  <span>
                    <strong>Sécurisez la transition</strong> vers une{' '}
                    <button
                      onClick={() => setModalOpen(true)}
                      className="underline font-semibold hover:text-emerald-800"
                    >
                      plateforme agréée et connectée à la DGI
                    </button>{' '}
                    adaptée à votre organisation.
                  </span>
                </div>

                <div className="flex items-start gap-2.5">
                  <Check className="w-5 h-5 text-[#059669] shrink-0 mt-0.5 stroke-[3]" />
                  <span>
                    <strong>Faites-vous accompagner par DERDAB COMPTA</strong> pour piloter cette transformation sans risque fiscal.
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>

      {/* Modal with In-depth Facturation Électronique Guide */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-slate-200">
            
            <div className="flex items-start justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-[#bdf1ec] text-[#047857] rounded-xl">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#059669]">
                    Conformité DGI Maroc · Loi de Finances 2026
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mt-0.5">
                    Facturation Électronique & Télédéclarations
                  </h3>
                </div>
              </div>

              <button
                onClick={() => setModalOpen(false)}
                className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-5 space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <p>
                La transition vers la <strong>facturation électronique</strong> au Maroc a pour but de fluidifier les échanges inter-entreprises, d'automatiser les rapprochements de TVA et de sécuriser la conformité fiscale face aux contrôles de la Direction Générale des Impôts (DGI).
              </p>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
                <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
                  Les 4 exigences clés pour votre entreprise :
                </h4>
                <ul className="space-y-2 text-xs text-slate-600">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Mentions légales obligatoires :</strong> Numéro ICE (Identifiant Commun de l'Entreprise), Identifiant Fiscal (IF), Taxe Professionnelle (TP) et RC.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Format numérique structuré :</strong> Émission de factures au format XML/PDF certifié avec signature électronique et horodatage légal.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Télétransmission automatique :</strong> Intégration directe avec les portails SIMPL-TVA et archivage à valeur probante pendant 10 ans.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Zones Franches (TFZ / TAC / Tanger Med) :</strong> Traitement spécifique des factures en devises et exonérations d'exportation.</span>
                  </li>
                </ul>
              </div>

              <p>
                <strong>Le cabinet DERDAB COMPTA</strong> met à votre disposition l'outil collaboratif <em>DERDAB COMPTA Connect</em> qui intègre nativement la facturation conforme DGI et l'extraction automatique par OCR pour ne plus perdre aucun justificatif.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => {
                  setModalOpen(false);
                  onOpenBooking('Diagnostic Facturation Électronique & Conformité DGI');
                }}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors"
              >
                <Calendar className="w-4 h-4" />
                <span>Demander un diagnostic de conformité gratuit</span>
              </button>

              <button
                type="button"
                onClick={() => setModalOpen(false)}
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
