import React from 'react';
import { ShieldCheck, Award, Sparkles } from 'lucide-react';

export const TopTicker: React.FC = () => {
  return (
    <div className="w-full bg-[#000000] border-b border-[#202020] text-xs font-mono tracking-wider py-2 px-4 select-none">
      <div className="max-w-[1440px] mx-auto flex flex-wrap items-center justify-between gap-y-2 gap-x-6 text-[#969696]">
        <div className="flex items-center gap-2">
          <Award className="w-3.5 h-3.5 text-[#FFC000]" />
          <span className="text-white font-medium">HAKI RESMI</span>
          <span>·</span>
          <span>DJKI IDM 001312402</span>
        </div>

        <div className="hidden sm:flex items-center gap-2">
          <ShieldCheck className="w-3.5 h-3.5 text-[#FFC000]" />
          <span className="text-white font-medium">SERTIFIKASI HALAL</span>
          <span>·</span>
          <span>BPJPH KEMENAG RI</span>
        </div>

        <div className="flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-[#29ABE2]" />
          <span className="text-white font-medium">100% CLEAN LABEL</span>
          <span>·</span>
          <span>BEBAS BORAKS & FORMALIN</span>
        </div>

        <div className="hidden lg:flex items-center gap-2 text-[#FFC000]">
          <span>RASIO 6:1 (85.7% DAGING MURNI)</span>
        </div>
      </div>
    </div>
  );
};
