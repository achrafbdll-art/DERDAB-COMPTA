/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageSquare, ExternalLink, ShieldCheck } from 'lucide-react';
import { LOCATIONS } from '../data/mockData.ts';
import { SocialLinks } from './SocialLinks.tsx';

interface OfficesContactSectionProps {
  onOpenBooking: (serviceName?: string, officeName?: string) => void;
}

export const OfficesContactSection: React.FC<OfficesContactSectionProps> = ({
  onOpenBooking,
}) => {
  const [selectedOffice, setSelectedOffice] = useState<string>('tanger-centre');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    office: 'DERDAB COMPTA Tanger – City Center',
    service: 'Expertise comptable & fiscale',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const activeOffice = LOCATIONS.find((l) => l.id === selectedOffice) || LOCATIONS[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#0a1622] text-white border-b border-white/10 relative overflow-hidden">
      
      {/* Decorative gradient overlay */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-[#2dd4bf] text-xs font-bold uppercase tracking-wider mb-3">
            <span>Implantations & Contact Direct</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Nos Bureaux à Tanger, Tétouan & Grand Tanger
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Une équipe accessible, présente physiquement au cœur des pôles d’affaires de la région nord du Maroc.
          </p>
        </div>

        {/* 4 Office Cards Selector */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {LOCATIONS.map((loc) => {
            const isSelected = loc.id === selectedOffice;
            return (
              <button
                key={loc.id}
                onClick={() => {
                  setSelectedOffice(loc.id);
                  setFormData({ ...formData, office: loc.name });
                }}
                className={`p-5 rounded-2xl text-left transition-all border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white/15 border-[#2dd4bf] shadow-xl shadow-teal-500/10 scale-[1.02]'
                    : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-teal-400/20 text-[#2dd4bf]">
                      {loc.city}
                    </span>
                    <MapPin className={`w-4 h-4 ${isSelected ? 'text-[#2dd4bf]' : 'text-slate-400'}`} />
                  </div>
                  <div className="font-bold text-sm text-white leading-snug mb-1">
                    {loc.name}
                  </div>
                  <div className="text-xs text-slate-300 line-clamp-2">
                    {loc.address}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-semibold">
                  <span className={isSelected ? 'text-[#2dd4bf]' : 'text-slate-400'}>
                    {isSelected ? 'Bureau sélectionné' : 'Voir détails'}
                  </span>
                  <span>›</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Office Panel + Contact Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 bg-white/5 rounded-3xl p-6 sm:p-10 border border-white/15 backdrop-blur-md shadow-2xl">
          
          {/* Left Column: Selected Office Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl overflow-hidden border border-white/15 shadow-lg relative h-48 sm:h-56 bg-slate-900">
              <img
                src={activeOffice.image}
                alt={activeOffice.name}
                className="w-full h-full object-cover filter brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06111c] via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 right-4">
                <span className="text-xs font-bold text-[#2dd4bf] uppercase">
                  {activeOffice.city}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  {activeOffice.name}
                </h3>
              </div>
            </div>

            <div className="space-y-3.5 text-xs sm:text-sm text-slate-200">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#2dd4bf] shrink-0 mt-0.5" />
                <span>{activeOffice.address} ({activeOffice.postalCode})</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#2dd4bf] shrink-0" />
                <a href={`tel:${activeOffice.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-white transition-colors underline">
                  {activeOffice.phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#2dd4bf] shrink-0" />
                <a href={`mailto:${activeOffice.email}`} className="hover:text-white transition-colors underline">
                  {activeOffice.email}
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#2dd4bf] shrink-0 mt-0.5" />
                <span>{activeOffice.workingHours}</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-2.5">
              <a
                href={activeOffice.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-xs text-white font-medium border border-white/15 transition-all"
              >
                <span>Ouvrir dans Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://wa.me/212661000000?text=Bonjour,%20je%20souhaite%20contacter%20le%20cabinet%20DERDAB%20COMPTA."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-xs text-white font-medium transition-all"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Cabinet</span>
              </a>
            </div>

            <div className="pt-4 border-t border-white/10">
              <div className="text-xs text-slate-400 mb-2">Suivez le cabinet DERDAB COMPTA :</div>
              <SocialLinks variant="footer" />
            </div>
          </div>

          {/* Right Column: Direct Contact Form */}
          <div className="lg:col-span-7 bg-[#06101c]/90 rounded-2xl p-6 sm:p-8 border border-white/15 shadow-xl">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  Envoyer un message à nos experts
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Réponse garantie sous 24h ouvrées par un conseiller dédié.
                </p>
              </div>
              <ShieldCheck className="w-6 h-6 text-[#2dd4bf]" />
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-white">Message bien envoyé !</h4>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  Merci {formData.name}. Votre demande concernant le bureau de <strong>{formData.office}</strong> a été transmise à Maître Mourad Derdab. Nous vous contacterons au {formData.phone || formData.email}.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 bg-[#c5f2f0] text-slate-950 font-bold text-xs rounded-xl"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Nom & Prénom *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="M. ou Mme ..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-[#2dd4bf]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Téléphone (Mobile ou WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+212 6..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-[#2dd4bf]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Email professionnel *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="contact@votre-entreprise.ma"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-[#2dd4bf]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Nom de la société (ou Projet)
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="SARL / SA / Auto-entrepreneur"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-[#2dd4bf]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Bureau de rattachement
                    </label>
                    <select
                      value={formData.office}
                      onChange={(e) => setFormData({ ...formData, office: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/15 text-white focus:outline-none focus:border-[#2dd4bf]"
                    >
                      {LOCATIONS.map((loc) => (
                        <option key={loc.id} value={loc.name}>
                          {loc.name} ({loc.city})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Prestation souhaitée
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/15 text-white focus:outline-none focus:border-[#2dd4bf]"
                    >
                      <option value="Expertise comptable & fiscale">Expertise comptable & fiscale</option>
                      <option value="Création de société (CRI)">Création de société (CRI en 48h)</option>
                      <option value="Implantation Zone Franche (TFZ/TAC)">Implantation Zone Franche (TFZ/TAC)</option>
                      <option value="Paie & Gestion sociale (DAMANCOM)">Paie & Gestion sociale (DAMANCOM)</option>
                      <option value="Audit légal & CAC">Audit légal & Commissariat aux comptes</option>
                      <option value="Changement d'expert-comptable">Changement d'expert-comptable</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Votre message ou détails de votre activité
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Précisez votre activité, volume approximatif de factures ou toute question particulière..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-[#2dd4bf]"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="text-[11px] text-slate-400">
                    Vos données sont confidentielles et protégées.
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-7 py-3 bg-[#c5f2f0] hover:bg-[#b0eae7] text-slate-950 font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md active:scale-95 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Envoyer ma demande</span>
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
