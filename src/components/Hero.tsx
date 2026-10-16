import React from 'react';
import { ArrowDownRight, Award, ShieldCheck, Flame } from 'lucide-react';
import { BRAND_DATA } from '../data/products';
import { CulinaryVisual } from './CulinaryVisual';

interface HeroProps {
  onExploreMenu: () => void;
  onOpenLegalitas: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu, onOpenLegalitas }) => {
  return (
    <section className="relative w-full min-h-[92vh] bg-[#000000] border-b border-[#202020] flex flex-col justify-center overflow-hidden">
      {/* Absolute Dark Stage Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(255,192,0,0.06),transparent_80%)] pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-12 sm:py-16 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Extreme Display Typography & Callouts */}
        <div className="lg:col-span-7 space-y-6 sm:space-y-8 z-10">
          {/* Hexagonal Micro Tag */}
          <div className="inline-flex items-center gap-3 bg-[#181818] border border-[#313131] px-4 py-1.5 text-xs font-mono tracking-widest text-[#969696] uppercase">
            <div className="w-2.5 h-2.5 bg-[#FFC000] clip-hexagon"></div>
            <span>HAKI IDM 001312402 · SERTIFIKASI HALAL RESMI</span>
          </div>

          {/* Extreme Scale Headline (LamboType Aesthetic) */}
          <div className="space-y-2">
            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight uppercase leading-[0.92] text-white">
              GURIH MELEJIT
              <span className="block text-[#FFC000] drop-shadow-[0_4px_24px_rgba(255,192,0,0.2)]">
                ISI BERLIMPAH.
              </span>
            </h1>
            <p className="text-base sm:text-xl font-light text-[#969696] max-w-xl pt-2 leading-relaxed">
              "{BRAND_DATA.tagline}"
            </p>
          </div>

          {/* Ratio 6:1 Purity Spec Box (Sharp Zero-Radius Architecture) */}
          <div className="p-4 sm:p-6 bg-[#181818] border border-[#202020] grid grid-cols-2 sm:grid-cols-3 gap-4 font-mono">
            <div className="border-r border-[#202020] pr-4">
              <span className="text-[11px] uppercase text-[#7D7D7D] block tracking-wider">RASIO DAGING</span>
              <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">6 : 1</span>
              <span className="text-[10px] text-[#FFC000] block mt-0.5">85.7% Daging Murni</span>
            </div>
            <div className="border-r border-[#202020] pr-4">
              <span className="text-[11px] uppercase text-[#7D7D7D] block tracking-wider">KOMPOSISI FORMULA</span>
              <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">1.5 KG</span>
              <span className="text-[10px] text-[#969696] block mt-0.5">Hanya 250g Tapioka</span>
            </div>
            <div className="col-span-2 sm:col-span-1 pt-2 sm:pt-0">
              <span className="text-[11px] uppercase text-[#7D7D7D] block tracking-wider">STANDAR HIGIENIS</span>
              <span className="text-xl sm:text-2xl font-extrabold text-[#29ABE2] tracking-tight">100% CLEAN</span>
              <span className="text-[10px] text-[#969696] block mt-0.5">Bebas Boraks/Formalin</span>
            </div>
          </div>

          {/* Action CTAs: Lamborghini Gold Button & Ghost Button */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <button
              onClick={onExploreMenu}
              className="bg-[#FFC000] hover:bg-[#917300] text-black font-mono text-sm font-bold uppercase tracking-widest px-8 py-5 transition-colors duration-150 flex items-center justify-center gap-3 cursor-pointer focus-visible:outline focus-visible:outline-white"
            >
              <span>JELAJAHI MENU</span>
              <ArrowDownRight className="w-4 h-4 text-black stroke-[3]" />
            </button>

            <button
              onClick={onOpenLegalitas}
              className="bg-transparent hover:bg-white/10 text-white font-mono text-sm tracking-widest uppercase px-6 py-5 border border-white/50 hover:border-white transition-colors duration-150 flex items-center justify-center gap-2 cursor-pointer focus-visible:outline focus-visible:outline-[#FFC000]"
            >
              <ShieldCheck className="w-4 h-4 text-[#FFC000]" />
              <span>VERIFIKASI LEGALITAS</span>
            </button>
          </div>
        </div>

        {/* Right Column: Masterpiece Visual Showcase */}
        <div className="lg:col-span-5 relative w-full flex items-center justify-center">
          <div className="w-full relative border border-[#202020]">
            <CulinaryVisual type="hero" className="w-full" />
            
            {/* Hexagonal Interactive Badge / Control Accent */}
            <div className="absolute top-4 right-4 z-20 flex items-center gap-2 bg-[#000000]/80 border border-[#313131] px-3 py-1.5 font-mono text-[11px] text-white">
              <span className="w-2 h-2 bg-[#FFC000] rotate-45"></span>
              <span className="tracking-widest">KUKUS & GORENG PRIMA</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Progress Bar Line (Echoing Lamborghini Design System Hero Accent) */}
      <div className="w-full h-1 bg-[#181818] relative">
        <div className="absolute top-0 left-0 h-full bg-[#FFC000] w-1/4"></div>
      </div>
    </section>
  );
};
