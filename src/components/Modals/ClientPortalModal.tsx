/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  X,
  Lock,
  Upload,
  FileText,
  DollarSign,
  TrendingUp,
  Download,
  CheckCircle2,
  Send,
  Building,
  UserCheck,
  Shield,
  FileCheck
} from 'lucide-react';

interface ClientPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ClientPortalModal: React.FC<ClientPortalModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'upload' | 'documents' | 'chat'>('dashboard');
  const [uploadedFiles, setUploadedFiles] = useState<
    Array<{ name: string; size: string; status: string; totalMad: string; tva: string }>
  >([
    {
      name: 'Facture_Fournisseur_AutoPart_Tanger.pdf',
      size: '1.2 Mo',
      status: 'Traité par OCR',
      totalMad: '18 450,00 MAD',
      tva: '3 075,00 MAD (20%)',
    },
    {
      name: 'Quittance_Loyer_CityCenter_Oct2026.pdf',
      size: '640 Ko',
      status: 'Comptabilisé',
      totalMad: '12 000,00 MAD',
      tva: '2 000,00 MAD (20%)',
    },
  ]);

  const [chatMessage, setChatMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<Array<{ sender: 'user' | 'expert'; text: string; time: string }>>([
    {
      sender: 'expert',
      text: 'Bonjour M. le Dirigeant. Votre liasse fiscale DGI pour le trimestre est prête à être télédéclarée. Avez-vous transmis la dernière facture de fret Tanger Med ?',
      time: '10:14',
    },
    {
      sender: 'user',
      text: 'Bonjour Karim, oui elle est déposée dans la section OCR sous la référence AutoPart Tanger.',
      time: '10:28',
    },
    {
      sender: 'expert',
      text: 'Parfait, bien reçu. Tout est conforme, nous procédons au téléversement sur le portail SIMPL-IS de la Direction des Impôts.',
      time: '10:30',
    },
  ]);

  if (!isOpen) return null;

  const handleSimulateUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const newEntry = {
        name: file.name,
        size: `${(file.size / 1024).toFixed(1)} Ko`,
        status: 'Analysé par OCR DERDAB COMPTA',
        totalMad: '8 650,00 MAD',
        tva: '1 441,67 MAD (20%)',
      };
      setUploadedFiles([newEntry, ...uploadedFiles]);
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;

    const userMsg = {
      sender: 'user' as const,
      text: chatMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setChatHistory([...chatHistory, userMsg]);
    setChatMessage('');

    setTimeout(() => {
      setChatHistory((prev) => [
        ...prev,
        {
          sender: 'expert',
          text: 'Message bien reçu par votre expert-comptable AUDITIA à Tanger. Nous vérifions cela immédiatement avec Badr Lahlou.',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Modal Top Bar */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-lg overflow-hidden shrink-0 border border-white/20 bg-white p-1">
              <img
                src="/assets/aistudio/image_9552ab42.png"
                alt="DERDAB COMPTA"
                className="h-10 w-auto object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-black text-base tracking-tight">DERDAB COMPTA CONNECT</span>
                <span className="text-[10px] uppercase font-semibold bg-teal-500/30 text-teal-300 px-2 py-0.5 rounded">
                  Espace Démo Sécurisé
                </span>
              </div>
              <p className="text-xs text-slate-300">
                Portail Collaboratif Dirigeant · Entreprise : TANGER LOGISTICS SERVICES SARL
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-6 gap-2 pt-2 text-xs font-semibold overflow-x-auto">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`pb-3 px-3 transition-colors flex items-center gap-1.5 whitespace-nowrap border-b-2 ${
              activeTab === 'dashboard'
                ? 'border-blue-600 text-blue-700'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Tableau de bord financier</span>
          </button>

          <button
            onClick={() => setActiveTab('upload')}
            className={`pb-3 px-3 transition-colors flex items-center gap-1.5 whitespace-nowrap border-b-2 ${
              activeTab === 'upload'
                ? 'border-blue-600 text-blue-700'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Upload className="w-3.5 h-3.5" />
            <span>Dépôt factures & Scan OCR</span>
          </button>

          <button
            onClick={() => setActiveTab('documents')}
            className={`pb-3 px-3 transition-colors flex items-center gap-1.5 whitespace-nowrap border-b-2 ${
              activeTab === 'documents'
                ? 'border-blue-600 text-blue-700'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>GED & Liasses DGI</span>
          </button>

          <button
            onClick={() => setActiveTab('chat')}
            className={`pb-3 px-3 transition-colors flex items-center gap-1.5 whitespace-nowrap border-b-2 ${
              activeTab === 'chat'
                ? 'border-blue-600 text-blue-700'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <UserCheck className="w-3.5 h-3.5" />
            <span>Messagerie Expert OEC</span>
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 overflow-y-auto flex-1">
          
          {/* TAB 1: DASHBOARD */}
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              
              {/* Financial KPI Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-xs text-slate-500 font-medium">Chiffre d'Affaires Trimestre (MAD)</div>
                  <div className="text-2xl font-bold font-mono text-slate-900 mt-1 tabular-nums">
                    1 428 500 MAD
                  </div>
                  <div className="text-[11px] text-emerald-600 font-semibold mt-1 flex items-center gap-1">
                    <span>↑ +14.2%</span>
                    <span className="text-slate-400 font-normal">vs même période 2025</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-xs text-slate-500 font-medium">Provision TVA Due DGI</div>
                  <div className="text-2xl font-bold font-mono text-blue-700 mt-1 tabular-nums">
                    58 420 MAD
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1">
                    Échéance SIMPL-TVA : 20 Novembre 2026
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-xs text-slate-500 font-medium">Paie & CNSS DAMANCOM</div>
                  <div className="text-2xl font-bold font-mono text-slate-900 mt-1 tabular-nums">
                    8 Salariés
                  </div>
                  <div className="text-[11px] text-emerald-600 font-semibold mt-1">
                    Bordereaux télédéclarés à jour
                  </div>
                </div>
              </div>

              {/* Fiscal Calendar */}
              <div className="p-4 rounded-xl border border-slate-200 bg-white">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
                  Calendrier des Prochaines Échéances Légales (Maroc) :
                </h4>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span className="font-semibold text-slate-800">Télédéclaration SIMPL-TVA</span>
                    </div>
                    <span className="font-mono text-slate-600">20 Novembre 2026</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span className="font-semibold text-slate-800">Paiement 4ème Acompte IS (DGI)</span>
                    </div>
                    <span className="font-mono text-slate-600">31 Décembre 2026</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span className="font-semibold text-slate-800">Déclaration CNSS & Cotisations AMO</span>
                    </div>
                    <span className="font-mono text-slate-600">10 de chaque mois</span>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: UPLOAD & OCR */}
          {activeTab === 'upload' && (
            <div className="space-y-6">
              <div className="border-2 border-dashed border-slate-300 hover:border-blue-500 rounded-xl p-8 text-center bg-slate-50/50 transition-colors cursor-pointer relative">
                <input
                  type="file"
                  onChange={handleSimulateUpload}
                  className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                />
                <Upload className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-sm font-bold text-slate-800">
                  Glissez-déposez vos factures d'achat, de vente ou notes de frais
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  Formats acceptés : PDF, JPG, PNG, Excel (Scan OCR certifié conforme DGI Maroc)
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
                  Dernières pièces analysées par l'intelligence AUDITIA :
                </h4>
                <div className="space-y-2">
                  {uploadedFiles.map((file, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between text-xs"
                    >
                      <div className="flex items-center gap-3">
                        <FileCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                        <div>
                          <div className="font-bold text-slate-900">{file.name}</div>
                          <div className="text-slate-500 text-[11px]">
                            {file.size} · <span className="text-emerald-700 font-semibold">{file.status}</span>
                          </div>
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="font-mono font-bold text-slate-900">{file.totalMad}</div>
                        <div className="text-[11px] text-slate-500 font-mono">{file.tva}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: DOCUMENTS */}
          {activeTab === 'documents' && (
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
                Coffre-Fort Numérique & Téléchargements Officiels :
              </h4>
              {[
                {
                  title: 'Liasse Fiscale & Bilan Officiel 2025 (Format DGI)',
                  desc: 'Attestation de télédéclaration SIMPL-IS signée électroniquement',
                  type: 'PDF · 3.4 Mo',
                },
                {
                  title: 'Bordereau Récapitulatif CNSS & AMO - DAMANCOM',
                  desc: 'Cotisations sociales du personnel de Tanger',
                  type: 'PDF · 820 Ko',
                },
                {
                  title: 'Extrait du Registre de Commerce (Modèle J)',
                  desc: 'Greffe du Tribunal de Commerce de Tanger - Immatriculation active',
                  type: 'PDF · 450 Ko',
                },
                {
                  title: 'Procès-Verbal de l\'Assemblée Générale Ordinaire (AGO)',
                  desc: 'Approbation des comptes annuels et affectation du résultat',
                  type: 'PDF · 1.1 Mo',
                },
              ].map((doc, idx) => (
                <div
                  key={idx}
                  className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between text-xs hover:bg-slate-100/70 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-slate-900">{doc.title}</div>
                      <div className="text-slate-500 text-[11px] mt-0.5">{doc.desc}</div>
                    </div>
                  </div>

                  <button
                    onClick={() => alert(`Téléchargement de : ${doc.title} (Format sécurisé)`)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-blue-700 bg-white border border-slate-200 rounded-lg hover:bg-blue-50 transition-colors shrink-0"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Télécharger</span>
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* TAB 4: CHAT */}
          {activeTab === 'chat' && (
            <div className="flex flex-col h-[350px]">
              <div className="flex-1 overflow-y-auto space-y-3 p-2">
                {chatHistory.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                  >
                    <div
                      className={`max-w-md p-3 rounded-xl text-xs leading-relaxed ${
                        msg.sender === 'user'
                          ? 'bg-blue-600 text-white rounded-br-none'
                          : 'bg-slate-100 text-slate-800 rounded-bl-none'
                      }`}
                    >
                      {msg.text}
                    </div>
                    <span className="text-[10px] text-slate-400 mt-1 px-1">{msg.time}</span>
                  </div>
                ))}
              </div>

              <form onSubmit={handleSendMessage} className="mt-2 pt-2 border-t border-slate-200 flex gap-2">
                <input
                  type="text"
                  placeholder="Posez une question à votre expert-comptable DERDAB COMPTA..."
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  className="flex-1 text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:border-blue-600"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg flex items-center gap-1 transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Envoyer</span>
                </button>
              </form>
            </div>
          )}

        </div>

        {/* Footer info */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 text-center text-xs text-slate-500">
          Plateforme conforme aux exigences de l'Ordre des Experts-Comptables du Maroc et de la DGI.
        </div>

      </div>
    </div>
  );
};
