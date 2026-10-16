import React from 'react';
import { ArrowUp, Award, ShieldCheck, MapPin, Phone } from 'lucide-react';
import { BRAND_DATA } from '../data/products';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#000000] border-t border-[#202020] text-xs font-mono text-[#7D7D7D] py-16">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 justify-between">
          {/* Brand & Mission */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#181818] border border-[#313131] flex items-center justify-center">
                <div className="w-4 h-4 border border-[#FFC000] rotate-45 flex items-center justify-center">
                  <span className="text-[#FFC000] text-[8px] font-black -rotate-45">BF</span>
                </div>
              </div>
              <span className="font-display text-2xl font-black tracking-widest text-white uppercase">
                {BRAND_DATA.name}
              </span>
            </div>

            <p className="text-sm font-light text-[#969696] font-sans max-w-sm leading-relaxed">
              "{BRAND_DATA.tagline}"
            </p>

            <div className="text-[11px] text-[#FFC000] tracking-wider uppercase">
              KOMPOSISI 1.5 KG DAGING MURNI : 250 GRAM TAPIOKA (RASIO 6 : 1)
            </div>
          </div>

          {/* Legal Credentials Summary */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-white uppercase tracking-wider block font-bold">
              SERTIFIKASI & LEGALITAS RESMI
            </span>
            <div className="space-y-1.5 text-[11px] text-[#969696]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#FFC000]"></span>
                <span>HAKI Kemenkumham RI: <strong>IDM 001312402</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#FFC000]"></span>
                <span>Halal BPJPH Sapi: <strong>ID32110000643770922</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#FFC000]"></span>
                <span>Halal BPJPH Ikan: <strong>ID32110017894630542</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#29ABE2]"></span>
                <span>100% Bebas Boraks & Bebas Formalin</span>
              </div>
            </div>
          </div>

          {/* Outlet Contact & Navigation */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-white uppercase tracking-wider block font-bold">
              HUBUNGI KAMI
            </span>
            <div className="space-y-2 text-[11px] text-[#969696]">
              <p>{BRAND_DATA.address.line1}</p>
              <p>{BRAND_DATA.address.line2}, {BRAND_DATA.address.city}</p>
              <p className="text-white pt-1">
                WhatsApp: <a href={`https://wa.me/${BRAND_DATA.whatsappInternational}`} className="text-[#FFC000] hover:underline">{BRAND_DATA.whatsappNumber}</a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#181818] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <div>
            © {new Date().getFullYear()} {BRAND_DATA.name}. Merek Terdaftar Resmi di DJKI Kemenkumham RI. Hak Cipta Dilindungi.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-white hover:text-[#FFC000] transition-colors uppercase tracking-widest cursor-pointer"
          >
            <span>KEMBALI KE ATAS</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
