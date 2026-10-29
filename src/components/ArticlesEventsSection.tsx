/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ArrowRight, X, Calendar, Clock, BookOpen, Tag } from 'lucide-react';

interface ArticleItem {
  id: string;
  type: 'Articles' | 'Événements';
  readTime: string;
  title: string;
  excerpt: string;
  image: string;
  fullContent: string[];
  date: string;
  tags: string[];
}

interface ArticlesEventsSectionProps {
  onOpenBooking?: (subject?: string) => void;
}

export const ArticlesEventsSection: React.FC<ArticlesEventsSectionProps> = ({ onOpenBooking }) => {
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);
  const [showAllModal, setShowAllModal] = useState(false);
  const [activeFilter, setActiveFilter] = useState<'Tous' | 'Articles' | 'Événements'>('Tous');

  const articles: ArticleItem[] = [
    {
      id: 'transparence-salaires',
      type: 'Articles',
      readTime: '6 min',
      date: 'Octobre 2026',
      image: '/src/assets/images/articles_abstract_blue_waves_1793223724475.jpg',
      title: 'Transparence des salaires : 6 réflexes RH à anticiper',
      excerpt:
        "Projet de loi sur la transparence salariale : catégorisation, droit à l'information, index, recrutement... découvrez les 6 réflexes RH à anticiper pour vos équipes.",
      tags: ['Droit Social', 'RH', 'Grille des Salaires', 'Conformité'],
      fullContent: [
        "L'obligation de transparence salariale et de publication des grilles de rémunération s'impose progressivement aux entreprises. Face à ces nouvelles exigences, les dirigeants et directeurs des ressources humaines doivent faire évoluer leurs processus de fixation des salaires.",
        "1. Cartographier l'ensemble des postes et des rémunérations effectives pour identifier les écarts injustifiés.",
        '2. Structurer des fourchettes salariales transparentes et objectives dès la publication des offres d’embauche.',
        '3. Mettre en place un droit d’information clair permettant aux collaborateurs de situer leur niveau de salaire.',
        '4. Ajuster les fiches de paie et les variables avec un reporting social trimestriel conforme aux recommandations des inspecteurs du travail.',
        '5. Anticiper les questions des délégués du personnel et des instances représentatives.',
        '6. Se faire accompagner par un cabinet d’expertise comptable pour sécuriser le volet paie et DAMANCOM CNSS.',
      ],
    },
    {
      id: 'abandon-creance',
      type: 'Articles',
      readTime: '2 min',
      date: 'Octobre 2026',
      image: '/src/assets/images/articles_business_conversation_1793223725277.jpg',
      title: 'Abandon de créance : retour à meilleure fortune et imposition',
      excerpt:
        "Le Conseil d'État précise que le retour à meilleure fortune n'est pas imposable si l'abandon de créance initial n'a pas été déduit du résultat fiscal de la société.",
      tags: ['Fiscalité', 'DGI', 'Contentieux', 'IS & Restructuration'],
      fullContent: [
        "L'abandon de créance consenti par une société mère ou un partenaire financier est un levier classique de redressement de trésorerie pour les filiales en difficulté.",
        'Dans une décision récente confirmée par les juridictions fiscales, il est rappelé le traitement des clauses de retour à meilleure fortune :',
        'Lorsque la filiale renoue avec les bénéfices et rembourse la créance initialement abandonnée, ce remboursement ne donne pas lieu à une double imposition si la déduction préalable avait fait l’objet d’un traitement fiscal neutralisé.',
        'Les experts fiscaux de DERDAB COMPTA vous aident à auditer vos conventions intra-groupe et à rédiger des clauses de retour à meilleure fortune conformes aux exigences du Code Général des Impôts.',
      ],
    },
    {
      id: 'violences-urbaines',
      type: 'Articles',
      readTime: '4 min',
      date: 'Septembre 2026',
      image: '/src/assets/images/hero_aerial_road_nature_1793216694983.jpg',
      title: 'Violences urbaines : activité partielle et zéro reste à charge',
      excerpt:
        "Bénéficiez du zéro reste à charge suite aux aléas d'activité : cas d'éligibilité, démarches administratives et mesures de soutien financier d'urgence pour les entreprises.",
      tags: ['Activité Partielle', 'Aide Dirigeant', 'Trésorerie', 'Assurance'],
      fullContent: [
        'En cas de sinistre, de fermeture involontaire ou de perturbations d’exploitation affectant l’activité économique, plusieurs dispositifs de sauvegarde sont activables.',
        'Le mécanisme d’activité partielle permet d’alléger immédiatement la charge salariale tout en garantissant un maintien d’indemnité pour les employés.',
        'Nos équipes assistent les directeurs d’établissement pour constituer les dossiers de prise en charge auprès des caisses et compagnies d’assurance partenaires, afin d’atteindre un objectif de zéro reste à charge pour l’entreprise.',
      ],
    },
  ];

  const allItems: ArticleItem[] = [
    ...articles,
    {
      id: 'webinar-loi-finances-2026',
      type: 'Événements',
      readTime: 'Webinar 45 min',
      date: '12 Novembre 2026',
      image: '/src/assets/images/comptabilite_concept_rydge_1793223600063.jpg',
      title: 'Webinar Dirigeants : Loi de Finances & Nouveaux seuils fiscaux',
      excerpt:
        "Session interactive en direct animée par nos experts-comptables certifiés OEC. Analyse des mesures d'incitation industrielle et des contrôles DGI.",
      tags: ['Webinar', 'Loi de Finances', 'IS & TVA', 'Direct Live'],
      fullContent: [
        'Rejoignez notre webconférence trimestrielle réservée aux dirigeants et directeurs financiers.',
        'Au programme : décryptage des réformes fiscales, simulation d’impact sur votre résultat net et session de questions/réponses en direct.',
      ],
    },
    {
      id: 'atelier-facturation-electronique',
      type: 'Événements',
      readTime: 'Atelier Tanger City',
      date: '26 Novembre 2026',
      image: '/src/assets/images/tangier_business_district_1793215126124.jpg',
      title: 'Atelier Pratique : Passer à la facturation électronique sans stress',
      excerpt:
        "Rencontre en présentiel à nos bureaux de Tanger City Center. Démonstration de l'outil DERDAB COMPTA Connect et validation des formats conformes.",
      tags: ['Atelier', 'Tanger City Center', 'Facturation', 'Dématérialisation'],
      fullContent: [
        'Atelier technique en petit comité (12 participants maximum) dans nos locaux de Tanger City Center.',
        'Accompagnement pas-à-pas pour paramétrer votre chaîne de facturation dématérialisée et sécuriser vos déclarations de TVA.',
      ],
    },
  ];

  const filteredItems =
    activeFilter === 'Tous' ? allItems : allItems.filter((i) => i.type === activeFilter);

  return (
    <section id="evenements-articles" className="py-16 sm:py-24 bg-[#eefaf8] border-b border-[#d8f2ed]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header matching 100% the screenshot image_3cf415f2.png */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-14 gap-6">
          
          <div className="space-y-2.5">
            {/* Kicker with Cyan slash */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#06101e] tracking-tight">
              <span className="text-[#2dd4bf] font-black text-lg">/</span>
              <span>Nos événements et nos articles</span>
            </div>

            {/* Main Headline with colored accents */}
            <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold tracking-tight text-[#06101e] leading-[1.12]">
              Découvrez nos <span className="text-[#2dd4bf]">événements</span> et <span className="text-[#2dd4bf]">articles</span>
            </h2>
          </div>

          {/* Right Parallelogram Button matching screenshot */}
          <div className="shrink-0">
            <button
              type="button"
              onClick={() => setShowAllModal(true)}
              className="relative inline-flex items-center justify-center px-8 sm:px-10 py-3.5 text-xs sm:text-sm font-bold text-white bg-[#0a1724] hover:bg-[#132334] active:scale-95 transition-all shadow-md group"
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
                Voir plus
              </span>
            </button>
          </div>

        </div>

        {/* 3 Column Cards Grid matching 100% the screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {articles.map((item) => (
            <article
              key={item.id}
              onClick={() => setSelectedArticle(item)}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/80 hover:border-[#2dd4bf]/60 flex flex-col justify-between"
            >
              <div>
                {/* Card Top Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors" />
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 space-y-3.5">
                  {/* Meta Row: Soft mint badge + read time */}
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold text-[#040e17] bg-[#bdf1ec] px-3 py-1 rounded-md">
                      {item.type}
                    </span>
                    <span className="text-xs font-medium text-slate-700">
                      {item.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#06101e] leading-snug group-hover:text-[#0d9488] transition-colors">
                    {item.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {item.excerpt}
                  </p>
                </div>
              </div>

              {/* Bottom Subtle Bar */}
              <div className="px-6 sm:px-7 pb-6 pt-2 flex items-center justify-between text-xs font-bold text-[#0d9488] group-hover:translate-x-0.5 transition-transform">
                <span>Lire la suite</span>
                <ArrowRight className="w-4 h-4 text-[#2dd4bf]" />
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-slate-200">
            
            <div className="flex items-start justify-between pb-4 border-b border-slate-100 gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-[#040e17] bg-[#bdf1ec] px-2.5 py-0.5 rounded">
                    {selectedArticle.type}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    · {selectedArticle.readTime} de lecture · {selectedArticle.date}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                  {selectedArticle.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setSelectedArticle(null)}
                className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Article Image Banner */}
            <div className="my-5 rounded-xl overflow-hidden aspect-[16/9] max-h-60 bg-slate-100">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Body */}
            <div className="space-y-3.5 text-xs sm:text-sm text-slate-700 leading-relaxed py-2">
              {selectedArticle.fullContent.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Tags */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-1.5 items-center">
              <Tag className="w-3.5 h-3.5 text-slate-400 mr-1" />
              {selectedArticle.tags.map((t, idx) => (
                <span key={idx} className="text-[11px] font-medium text-slate-600 bg-slate-100 px-2.5 py-1 rounded">
                  {t}
                </span>
              ))}
            </div>

            {/* Modal Actions */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
              {onOpenBooking && (
                <button
                  type="button"
                  onClick={() => {
                    const title = selectedArticle.title;
                    setSelectedArticle(null);
                    onOpenBooking(`Conseil & Échange : ${title}`);
                  }}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold text-white bg-[#0a1724] hover:bg-[#132334] rounded-lg transition-colors"
                >
                  <span>Échanger avec un expert sur ce sujet</span>
                  <ArrowRight className="w-4 h-4 text-[#2dd4bf]" />
                </button>
              )}

              <button
                type="button"
                onClick={() => setSelectedArticle(null)}
                className="py-3 px-5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              >
                Fermer
              </button>
            </div>

          </div>
        </div>
      )}

      {/* "Voir plus" Modal with Filterable List */}
      {showAllModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-slate-200">
            
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div>
                <div className="text-xs font-bold text-[#0d9488] uppercase tracking-wider">
                  Centre de Ressources & Veille
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">
                  Tous nos événements et articles
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setShowAllModal(false)}
                className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-2 py-4 border-b border-slate-100">
              {(['Tous', 'Articles', 'Événements'] as const).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveFilter(tab)}
                  className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-colors ${
                    activeFilter === tab
                      ? 'bg-[#0a1724] text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* List */}
            <div className="divide-y divide-slate-100">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    setShowAllModal(false);
                    setSelectedArticle(item);
                  }}
                  className="py-4 hover:bg-slate-50 px-2 rounded-xl cursor-pointer flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between transition-colors"
                >
                  <div className="flex items-start gap-3.5">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 rounded-lg object-cover shrink-0"
                    />
                    <div>
                      <div className="flex items-center gap-2 text-xs mb-1">
                        <span className="font-bold text-[#040e17] bg-[#bdf1ec] px-2 py-0.5 rounded text-[10px]">
                          {item.type}
                        </span>
                        <span className="text-slate-500">{item.readTime}</span>
                        <span className="text-slate-400">· {item.date}</span>
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                        {item.excerpt}
                      </p>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1 text-xs font-bold text-[#0d9488] whitespace-nowrap shrink-0">
                    <span>Consulter</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
              <button
                type="button"
                onClick={() => setShowAllModal(false)}
                className="py-2.5 px-5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
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
