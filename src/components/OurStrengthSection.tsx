/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface OurStrengthSectionProps {
  onDiscoverOffices: () => void;
}

export const OurStrengthSection: React.FC<OurStrengthSectionProps> = ({
  onDiscoverOffices,
}) => {
  return (
    <section className="bg-[#f5fbf9] py-16 sm:py-20 lg:py-24 border-b border-teal-100/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block: Kicker + Heading + Subtitle + Action link */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-20">
          
          {/* Slanted teal slash + "Notre force" */}
          <div className="inline-flex items-center gap-2.5 mb-4">
            <div 
              className="w-3.5 h-6 bg-[#009688] -skew-x-[20deg] rounded-xs shadow-xs" 
              aria-hidden="true" 
            />
            <span className="text-sm sm:text-base font-bold tracking-tight text-[#0a1724]">
              Notre force
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0a1724] leading-tight mb-4">
            Le partenaire de référence des entrepreneurs
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto mb-6">
            Un accompagnement rigoureux et de proximité pour sécuriser vos comptes, optimiser votre fiscalité et piloter votre entreprise en toute sérénité.
          </p>

          {/* Action Link with Chevron */}
          <div>
            <button
              onClick={onDiscoverOffices}
              className="inline-flex items-center gap-1.5 text-sm sm:text-base font-bold text-[#0a1724] hover:text-[#009688] transition-colors cursor-pointer group"
            >
              <span className="group-hover:underline underline-offset-4">
                Découvrir nos solutions d'accompagnement comptable & conseil
              </span>
              <span className="text-base font-bold transition-transform group-hover:translate-x-0.5">
                ›
              </span>
            </button>
          </div>

        </div>

        {/* 3 Key Stats Grid with Distinctive Angled Mint Ribbon */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 lg:gap-16 max-w-5xl mx-auto pt-2">
          
          {/* Stat 1: +15 */}
          <div className="flex flex-col items-center md:items-start pl-0 md:pl-10">
            <div className="relative inline-flex items-center isolate">
              {/* Slanted mint ribbon background */}
              <div
                className="absolute -left-5 sm:-left-6 top-1/2 -translate-y-1/2 w-9 sm:w-11 h-16 sm:h-20 bg-[#c0f2ec] -skew-x-[22deg] z-0 pointer-events-none rounded-xs"
                aria-hidden="true"
              />
              <span className="relative z-10 text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#009688] leading-none select-none font-sans">
                +15
              </span>
            </div>
            <p className="mt-3 text-sm sm:text-base text-slate-700 font-normal leading-snug text-center md:text-left">
              années d'expertise en comptabilité & conseil
            </p>
          </div>

          {/* Stat 2: +500 */}
          <div className="flex flex-col items-center md:items-start pl-0 md:pl-10">
            <div className="relative inline-flex items-center isolate">
              {/* Slanted mint ribbon background */}
              <div
                className="absolute -left-5 sm:-left-6 top-1/2 -translate-y-1/2 w-9 sm:w-11 h-16 sm:h-20 bg-[#c0f2ec] -skew-x-[22deg] z-0 pointer-events-none rounded-xs"
                aria-hidden="true"
              />
              <span className="relative z-10 text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#009688] leading-none select-none font-sans">
                +500
              </span>
            </div>
            <p className="mt-3 text-sm sm:text-base text-slate-700 font-normal leading-snug text-center md:text-left">
              entreprises & dirigeants accompagnés
            </p>
          </div>

          {/* Stat 3: 100% */}
          <div className="flex flex-col items-center md:items-start pl-0 md:pl-10">
            <div className="relative inline-flex items-center isolate">
              {/* Slanted mint ribbon background */}
              <div
                className="absolute -left-5 sm:-left-6 top-1/2 -translate-y-1/2 w-9 sm:w-11 h-16 sm:h-20 bg-[#c0f2ec] -skew-x-[22deg] z-0 pointer-events-none rounded-xs"
                aria-hidden="true"
              />
              <span className="relative z-10 text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#009688] leading-none select-none font-sans">
                100%
              </span>
            </div>
            <p className="mt-3 text-sm sm:text-base text-slate-700 font-normal leading-snug text-center md:text-left">
              conformité fiscale, sociale & comptable
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
