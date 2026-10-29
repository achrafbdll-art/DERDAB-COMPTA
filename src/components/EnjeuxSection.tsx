/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Rocket, Building2, RefreshCw, FileCode, ShieldAlert, Sparkles } from 'lucide-react';

interface EnjeuxSectionProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const EnjeuxSection: React.FC<EnjeuxSectionProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<string>('creation');

  const enjeuxList = [
    {
      id: 'creation',
      icon: <Rocket className="w-5 h-5" />,
      badge: 'Création d’Entreprise',
      title: 'Créer votre société SARL / SA à Tanger en 48h',
      description:
        'Lancement clé en main de votre structure juridique auprès du Centre Régional d’Investissement (CRI) et du Tribunal de Commerce.',
      steps: [
        'Obtention du Certificat Négatif (OMPIC)',
        'Rédaction des statuts sur mesure et procès-verbaux constitutifs',
        'Domiciliation commerciale de prestige à Tanger City Center',
        'Enregistrement, immatriculation au Registre du Commerce (Modèle J) et déclaration DGI/CNSS',
      ],
      ctaText: 'Créer ma société avec DERDAB COMPTA',
    },
    {
      id: 'zone-franche',
      icon: <Building2 className="w-5 h-5" />,
      badge: 'Zones d’Accélération Industrielle',
      title: 'S’implanter en Zone Franche (TFZ, TAC & Tanger Med)',
      description:
        'Bénéficiez du régime d’exonération de l’IS pendant 5 ans, de l’exemption totale de TVA et des formalités douanières simplifiées.',
      steps: [
        'Constitution du dossier d’agrément auprès de TMSA / MEDZ',
        'Paramétrage de la comptabilité analytique pour exportateurs',
        'Gestion des exonérations de TVA sur les biens d’équipement et matières premières',
        'Déclarations Office des Changes et convertibilité des flux',
      ],
      ctaText: 'Diagnostic d’implantation en Zone Franche',
    },
    {
      id: 'reprise',
      icon: <RefreshCw className="w-5 h-5" />,
      badge: 'Changement de Cabinet',
      title: 'Transférer votre dossier comptable sans rupture de service',
      description:
        'Vous cherchez plus de réactivité, de digitalisation ou un meilleur conseil fiscal ? Le changement d’expert-comptable est simple et strictement encadré.',
      steps: [
        'Envoi du courrier de confraternité selon le Code de Déontologie OEC',
        'Récupération complète des balances, grands livres et déclarations antérieures',
        'Audit de reprise et régularisation des éventuelles anomalies constatées',
        'Mise en place immédiate de votre accès Espace Client DERDAB COMPTA Connect',
      ],
      ctaText: 'Transférer ma comptabilité en toute sérénité',
    },
    {
      id: 'dematerialisation',
      icon: <FileCode className="w-5 h-5" />,
      badge: 'Transition Numérique',
      title: 'Digitaliser votre gestion & préparer la facture électronique',
      description:
        'Fini les classeurs papier et la perte de tickets de caisse. Passez au 100% digital avec télétransmission automatique vers les portails de l’État.',
      steps: [
        'Application mobile pour photographier et téléverser vos factures',
        'Reconnaissance automatique par OCR (Montant HT, TVA, Fournisseur)',
        'Télétransmission directe sur SIMPL-IS, SIMPL-TVA et DAMANCOM CNSS',
        'Archivage électronique à valeur probante légale',
      ],
      ctaText: 'Découvrir nos outils digitaux',
    },
  ];

  const currentEnjeu = enjeuxList.find((e) => e.id === activeTab) || enjeuxList[0];

  return (
    <section id="enjeux" className="py-20 sm:py-28 bg-[#f8fafc] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Vos Enjeux Prioritaires</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Chaque étape de votre entreprise a son défi. <br className="hidden sm:inline" />
            <span className="text-blue-700">Nous apportons la solution juridique et comptable.</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Sélectionnez votre situation actuelle pour découvrir notre démarche d’accompagnement sur mesure.
          </p>
        </div>

        {/* Tabs Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {enjeuxList.map((item) => {
            const isActive = item.id === activeTab;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`p-4 sm:p-5 rounded-2xl text-left transition-all border flex flex-col justify-between ${
                  isActive
                    ? 'bg-[#0a1724] text-white border-[#0a1724] shadow-lg scale-[1.02]'
                    : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center mb-3 ${
                    isActive ? 'bg-[#2dd4bf] text-slate-950' : 'bg-slate-100 text-slate-700'
                  }`}
                >
                  {item.icon}
                </div>
                <div>
                  <div
                    className={`text-[11px] font-bold uppercase tracking-wider mb-1 ${
                      isActive ? 'text-[#2dd4bf]' : 'text-blue-600'
                    }`}
                  >
                    {item.badge}
                  </div>
                  <div className="font-bold text-sm leading-snug line-clamp-2">
                    {item.title}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Tab Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold">
              {currentEnjeu.badge}
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
              {currentEnjeu.title}
            </h3>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {currentEnjeu.description}
            </p>

            <div className="space-y-3 pt-2">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Plan d'action & étapes clés DERDAB COMPTA :
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentEnjeu.steps.map((step, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-800 font-medium"
                  >
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-gradient-to-br from-[#071320] to-[#0d2238] text-white p-6 sm:p-8 rounded-2xl shadow-xl border border-white/10 flex flex-col justify-between h-full">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#2dd4bf] mb-2">
                Accompagnement Garanti
              </div>
              <h4 className="text-xl font-bold text-white mb-3">
                Besoin d'un devis ou d'une consultation gratuite ?
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                Maître Mourad Derdab et nos équipes étudient votre dossier sous 24 heures et vous proposent la stratégie la plus adaptée à votre statut.
              </p>
            </div>

            <div className="space-y-3">
              <button
                onClick={() => onOpenBooking(currentEnjeu.title)}
                className="w-full py-3 px-5 bg-[#c5f2f0] hover:bg-[#b0eae7] text-slate-950 font-bold text-sm rounded-xl transition-all shadow-md active:scale-95 flex items-center justify-center gap-2"
              >
                <span>{currentEnjeu.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="text-center text-[11px] text-slate-400">
                Sans engagement · Entretien confidentiel
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
