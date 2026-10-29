/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CheckCircle2, ShieldCheck, X } from 'lucide-react';

export const NewsletterBanner: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showRightsModal, setShowRightsModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 5000);
    }
  };

  return (
    <>
      <section className="bg-[#bdf1ec] py-10 sm:py-12 px-4 sm:px-6 lg:px-8 border-t border-teal-200/50">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          
          {/* Left Block: Slanted slash + Headlines */}
          <div className="flex items-start sm:items-center gap-5 sm:gap-6 w-full lg:w-auto">
            {/* Prominent teal slanted slash matching Rydge identity */}
            <div 
              className="w-4 sm:w-5 h-14 sm:h-16 bg-[#009688] -skew-x-[20deg] shrink-0 rounded-xs shadow-xs"
              aria-hidden="true"
            />

            <div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0a1724]">
                Notre newsletter
              </h3>
              <p className="text-sm sm:text-base text-[#0a1724] font-normal mt-0.5">
                Pour suivre nos dernières actualités, abonnez-vous :
              </p>
              <p className="text-[11px] sm:text-xs text-[#0a1724]/80 italic mt-1 leading-snug">
                Vous pouvez vous désinscrire à tout moment à l'aide des liens de désinscription ou en cliquant sur ce lien :{' '}
                <button
                  type="button"
                  onClick={() => setShowRightsModal(true)}
                  className="underline hover:text-[#009688] font-medium transition-colors cursor-pointer not-italic text-[#0a1724]"
                >
                  j'exerce mes droits
                </button>
                .
              </p>
            </div>
          </div>

          {/* Right Block: Minimalist underline input + Parallelogram button */}
          <div className="w-full lg:w-auto flex-1 max-w-md lg:ml-auto">
            {isSubmitted ? (
              <div className="flex items-center gap-2.5 bg-[#0a1724] text-[#bdf1ec] px-4 py-3 rounded-none shadow-md">
                <CheckCircle2 className="w-5 h-5 text-[#2dd4bf] shrink-0" />
                <span className="text-xs font-semibold">
                  Merci ! Votre inscription à notre newsletter est validée.
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch sm:items-end gap-4 sm:gap-6">
                <div className="flex-1 min-w-[220px]">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Votre adresse email professionnelle..."
                    aria-label="Adresse email pour la newsletter"
                    className="w-full bg-transparent border-0 border-b border-slate-900/60 focus:border-slate-950 pb-2 px-1 text-sm text-[#0a1724] placeholder-[#0a1724]/50 focus:outline-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="relative group inline-flex items-center justify-center px-8 py-3 bg-[#0a1724] text-white font-bold text-xs sm:text-sm tracking-wide -skew-x-12 hover:bg-[#142336] active:scale-95 transition-all shadow-md shrink-0 cursor-pointer"
                >
                  <span className="skew-x-12 inline-block">S'abonner</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* Rights modal for "j'exerce mes droits" */}
      {showRightsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
          <div className="bg-white max-w-md w-full p-6 shadow-2xl relative text-left">
            <button
              onClick={() => setShowRightsModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <ShieldCheck className="w-5 h-5 text-teal-600" />
              <h4 className="text-base font-bold text-slate-900">
                Protection des Données & Vos Droits
              </h4>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed space-y-2">
              Conformément à la loi marocaine n° 09-08 relative à la protection des personnes physiques à l'égard du traitement des données à caractère personnel (déclaré auprès de la CNDP) ainsi qu'aux réglementations internationales RGPD :
            </p>

            <ul className="my-3 space-y-1.5 text-xs text-slate-700 list-disc list-inside">
              <li>Droit d'accès et de rectification de votre email</li>
              <li>Droit d'opposition et de désinscription immédiate</li>
              <li>Non-cession à des tiers ou des partenaires publicitaires</li>
            </ul>

            <p className="text-xs text-slate-500 mb-4">
              Pour toute demande spécifique ou suppression immédiate de votre adresse : <strong>dpo@derdabcompta.ma</strong> ou par courrier au cabinet.
            </p>

            <button
              onClick={() => setShowRightsModal(false)}
              className="w-full py-2 bg-[#0a1724] text-white text-xs font-semibold -skew-x-6 hover:bg-[#142336]"
            >
              <span className="skew-x-6 inline-block">Fermer</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
