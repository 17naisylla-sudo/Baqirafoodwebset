import React, { useState } from 'react';
import { Award, ShieldCheck, Copy, Check, ExternalLink, FileCheck2 } from 'lucide-react';
import { BRAND_DATA } from '../data/products';

export const LegalCertifications: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section id="legalitas" className="w-full bg-[#000000] py-20 border-b border-[#202020]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#202020] pb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#FFC000] uppercase mb-2">
              <span className="w-2 h-2 bg-[#FFC000]"></span>
              PERLINDUNGAN KONSUMEN & KEPERCAYAAN RESMI
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-black uppercase text-white tracking-tight leading-[0.95]">
              LEGALITAS & SERTIFIKASI
            </h2>
          </div>
          <p className="text-sm font-mono text-[#969696] max-w-md">
            Setiap produk BAQIRA FOOD telah melewati pengujian mutu, terdaftar resmi di DJKI Kemenkumham dan bersertifikasi Halal BPJPH.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BRAND_DATA.legalities.map((item, idx) => {
            const isCopied = copiedIndex === idx;

            return (
              <div 
                key={idx}
                className="bg-[#181818] border border-[#202020] hover:border-[#FFC000]/60 p-6 space-y-4 transition-colors flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#7D7D7D]">
                      {item.issuer}
                    </span>
                    <ShieldCheck className="w-4 h-4 text-[#FFC000]" />
                  </div>

                  <h3 className="font-display text-2xl font-bold uppercase text-white tracking-tight">
                    {item.label}
                  </h3>

                  <p className="text-xs text-[#969696] leading-relaxed">
                    {item.coverage}
                  </p>
                </div>

                {/* Certificate Number & Copy Action */}
                <div className="pt-3 border-t border-[#202020] flex items-center justify-between gap-2 font-mono">
                  <div className="bg-[#0F0F0F] px-3 py-2 border border-[#262626] flex-1 overflow-hidden">
                    <span className="text-[10px] text-[#7D7D7D] block">NO. REGISTRASI:</span>
                    <span className="text-xs font-bold text-white tracking-wider truncate block">
                      {item.number}
                    </span>
                  </div>

                  <button
                    onClick={() => handleCopy(item.number, idx)}
                    className="p-3 bg-[#202020] hover:bg-[#FFC000] text-[#969696] hover:text-black transition-colors cursor-pointer"
                    title="Salin Nomor Sertifikat"
                    aria-label="Salin Nomor Sertifikat"
                  >
                    {isCopied ? (
                      <Check className="w-4 h-4 text-black stroke-[3]" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Clean Label Guarantee Banner */}
        <div className="bg-[#141414] border border-[#202020] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-display text-2xl font-bold uppercase text-white">
              KOMITMEN 100% BEBAS BAHAN KIMIA BERBAHAYA
            </h4>
            <p className="text-xs font-mono text-[#969696]">
              Seluruh lini produksi dijamin bebas boraks, bebas formalin, dan tanpa pengawet sintesis.
            </p>
          </div>
          <div className="flex items-center gap-4 text-xs font-mono">
            <div className="px-4 py-2 bg-[#0A0A0A] border border-[#313131] text-[#29ABE2]">
              TANPA BORAKS
            </div>
            <div className="px-4 py-2 bg-[#0A0A0A] border border-[#313131] text-[#29ABE2]">
              TANPA FORMALIN
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
