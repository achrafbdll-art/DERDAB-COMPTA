/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, CheckCircle, ShieldCheck, Phone, Mail, User } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialOffice?: string;
  initialService?: string;
  initialQuoteSummary?: string;
  initialEstimatedFee?: number;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialOffice = 'DERDAB COMPTA Tanger – City Center',
  initialService = 'Expertise Comptable & Tenue Digitale',
  initialQuoteSummary,
  initialEstimatedFee,
}) => {
  const [office, setOffice] = useState(initialOffice);
  const [service, setService] = useState(initialService);
  const [meetingType, setMeetingType] = useState<'cabinet' | 'visio'>('cabinet');
  const [selectedDate, setSelectedDate] = useState('2026-11-02');
  const [selectedTime, setSelectedTime] = useState('10:00');
  
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('+212 ');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="bg-white rounded-2xl max-w-xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-slate-200">
        
        {/* Modal Header */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="rounded-lg overflow-hidden border border-slate-200 bg-white p-1 shadow-xs shrink-0">
              <img
                src="/assets/aistudio/image_9552ab42.png"
                alt="DERDAB COMPTA"
                className="h-12 w-auto object-contain"
              />
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-teal-700">
                Prise de Rendez-vous Gratuit
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-0.5">
                Échangez avec un Expert DERDAB COMPTA
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSubmitted ? (
          /* Confirmation State */
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>

            <h4 className="text-xl font-bold text-slate-900">
              Rendez-vous confirmé avec succès !
            </h4>

            <p className="text-sm text-slate-600 max-w-md mx-auto">
              Merci <span className="font-semibold text-slate-900">{fullName}</span>. Votre demande d'entretien avec notre cabinet a bien été enregistrée pour le{' '}
              <span className="font-semibold text-slate-900">{selectedDate}</span> à{' '}
              <span className="font-semibold text-slate-900">{selectedTime}</span>.
            </p>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-left text-xs text-slate-700 space-y-1.5 max-w-md mx-auto">
              <div>
                <span className="font-semibold text-slate-900">Format : </span>
                {meetingType === 'cabinet' ? `Au cabinet (${office})` : 'Visioconférence Google Meet'}
              </div>
              <div>
                <span className="font-semibold text-slate-900">Objet : </span>
                {service}
              </div>
              {initialEstimatedFee && (
                <div>
                  <span className="font-semibold text-slate-900">Estimation préalable : </span>
                  <span className="font-mono text-blue-700 font-bold">{initialEstimatedFee} MAD HT/mois</span>
                </div>
              )}
              <div>
                <span className="font-semibold text-slate-900">Contact direct Tanger : </span>
                <span className="font-mono">+212 (0)5 39 34 50 00</span>
              </div>
            </div>

            <p className="text-xs text-slate-500">
              Un email de confirmation contenant l'ordre du jour et le lien de visioconférence vous a été envoyé à {email}.
            </p>

            <div className="pt-4">
              <button
                type="button"
                onClick={handleReset}
                className="w-full py-3 px-4 text-xs font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors"
              >
                Retourner sur le site
              </button>
            </div>
          </div>
        ) : (
          /* Form State */
          <form onSubmit={handleSubmit} className="mt-5 space-y-4">
            
            {/* If initial quote was calculated */}
            {initialEstimatedFee && (
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl text-xs text-blue-900 flex items-center justify-between">
                <div>
                  <div className="font-semibold">Estimation simulée : {initialQuoteSummary}</div>
                  <div className="text-[11px] text-blue-700">Forfait estimé : {initialEstimatedFee} MAD HT/mois</div>
                </div>
                <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0" />
              </div>
            )}

            {/* Meeting Type Selection */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Format de l'échange
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setMeetingType('cabinet')}
                  className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-all text-center ${
                    meetingType === 'cabinet'
                      ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  Rendez-vous physique au cabinet
                </button>
                <button
                  type="button"
                  onClick={() => setMeetingType('visio')}
                  className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-all text-center ${
                    meetingType === 'visio'
                      ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  Visioconférence (À distance)
                </button>
              </div>
            </div>

            {/* Office Selection */}
            {meetingType === 'cabinet' && (
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Choisir l'agence d'accueil
                </label>
                <select
                  value={office}
                  onChange={(e) => setOffice(e.target.value)}
                  className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-slate-900 focus:outline-none focus:border-blue-600"
                >
                  <option value="DERDAB COMPTA Tanger – City Center">Tanger City Center (Bd Mohammed VI)</option>
                  <option value="DERDAB COMPTA Tanger Automotive & Free Zone">Tanger Free Zone & Auto City (TAC)</option>
                  <option value="DERDAB COMPTA Tétouan – Wilaya Center">Tétouan – Wilaya Center (Avenue des FAR)</option>
                  <option value="DERDAB COMPTA Tanger Med Port & Logistics">Tanger Med Port & Hub Tertiaire</option>
                </select>
              </div>
            )}

            {/* Mission Type */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Objet principal de la consultation
              </label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-slate-900 focus:outline-none focus:border-blue-600"
              >
                <option value="Expertise Comptable & Tenue Digitale">Expertise Comptable & Tenue de comptes</option>
                <option value="Création de Société (SARL/SA) à Tanger/Tétouan">Création de Société (SARL/SA)</option>
                <option value="Changement d'expert-comptable & reprise de dossier">Changement d'expert-comptable & reprise</option>
                <option value="Audit légal & Commissariat aux Comptes">Audit légal & Commissariat aux Comptes</option>
                <option value="Implantation en Zone Franche (TFZ / TAC)">Implantation en Zone Franche (TFZ / TAC)</option>
                <option value="Gestion Sociale, Paie & Télédéclarations CNSS">Gestion Sociale & Paie (DAMANCOM)</option>
                <option value="Conseil Fiscal & Contrôle DGI">Conseil Fiscal & Audit DGI</option>
              </select>
            </div>

            {/* Date & Time selection */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Date souhaitée
                </label>
                <input
                  type="date"
                  required
                  value={selectedDate}
                  min="2026-10-29"
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg p-2 text-slate-900 focus:outline-none focus:border-blue-600"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Créneau horaire
                </label>
                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-slate-900 focus:outline-none focus:border-blue-600"
                >
                  <option value="09:00">09:00</option>
                  <option value="10:00">10:00</option>
                  <option value="11:30">11:30</option>
                  <option value="14:30">14:30</option>
                  <option value="16:00">16:00</option>
                  <option value="17:30">17:30</option>
                </select>
              </div>
            </div>

            {/* Personal Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Nom et Prénom *
                </label>
                <div className="relative">
                  <User className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="M. ou Mme Nom"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg py-2.5 pl-8 pr-3 text-slate-900 focus:outline-none focus:border-blue-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Nom de l'entreprise ou projet
                </label>
                <input
                  type="text"
                  placeholder="Ex: Société SARL ou en création"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg py-2.5 px-3 text-slate-900 focus:outline-none focus:border-blue-600"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Adresse e-mail professionnelle *
                </label>
                <div className="relative">
                  <Mail className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="email"
                    required
                    placeholder="dirigeant@societe.ma"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg py-2.5 pl-8 pr-3 text-slate-900 focus:outline-none focus:border-blue-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Numéro de téléphone / WhatsApp *
                </label>
                <div className="relative">
                  <Phone className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="tel"
                    required
                    placeholder="+212 6 XX XX XX XX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg py-2.5 pl-8 pr-3 text-slate-900 focus:outline-none focus:border-blue-600"
                  />
                </div>
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Précisions sur votre situation (optionnel)
              </label>
              <textarea
                rows={2}
                placeholder="Ex: Nombre de salariés actuels, date souhaitée de création..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-slate-900 focus:outline-none focus:border-blue-600"
              />
            </div>

            {/* Confidentiality Notice */}
            <div className="flex items-start gap-2 text-[11px] text-slate-500 pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                Secret professionnel garanti. Vos données sont traitées dans le strict respect du Code de Déontologie de l'Ordre des Experts-Comptables du Maroc.
              </span>
            </div>

            {/* Submit CTA */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 px-4 text-xs font-bold text-white bg-blue-700 hover:bg-blue-800 rounded-lg shadow-sm transition-all active:scale-98"
              >
                Confirmer mon rendez-vous gratuit
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
