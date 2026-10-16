import React, { useState } from 'react';
import { Check, X, ShieldAlert, Zap, Layers } from 'lucide-react';
import { BRAND_DATA } from '../data/products';

export const PurityRatioSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'perbandingan' | 'komposisi'>('perbandingan');

  return (
    <section id="rasio" className="w-full bg-[#000000] py-20 border-b border-[#202020]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#202020] pb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#FFC000] uppercase mb-2">
              <span className="w-2 h-2 bg-[#FFC000]"></span>
              STANDAR MUTU & FORMULASI RESEP
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-black uppercase text-white tracking-tight leading-[0.95]">
              RASIO 6 : 1 EKSTRA PADAT
            </h2>
          </div>
          <p className="text-sm font-mono text-[#969696] max-w-md">
            Komposisi 1.5 kg daging murni berbanding 250 gram tepung tapioka. Isian padat, mantap, dan tidak didominasi tepung.
          </p>
        </div>

        {/* Tab Controls (Segmented with 0px radius) */}
        <div className="flex items-center gap-1 bg-[#181818] p-1 border border-[#202020] w-fit font-mono text-xs uppercase tracking-wider">
          <button
            onClick={() => setActiveTab('perbandingan')}
            className={`px-5 py-2.5 transition-colors cursor-pointer ${
              activeTab === 'perbandingan'
                ? 'bg-[#FFC000] text-black font-bold'
                : 'text-[#969696] hover:text-white'
            }`}
          >
            PERBANDINGAN KUALITAS
          </button>
          <button
            onClick={() => setActiveTab('komposisi')}
            className={`px-5 py-2.5 transition-colors cursor-pointer ${
              activeTab === 'komposisi'
                ? 'bg-[#FFC000] text-black font-bold'
                : 'text-[#969696] hover:text-white'
            }`}
          >
            RINCIAN FORMULA 85.7%
          </button>
        </div>

        {activeTab === 'perbandingan' ? (
          /* Comparison Matrix: BAQIRA FOOD vs Pasaran */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* BAQIRA FOOD (Gold Standard) */}
            <div className="bg-[#181818] border-2 border-[#FFC000] p-6 sm:p-8 space-y-6 relative">
              <div className="absolute top-0 right-0 bg-[#FFC000] text-black font-mono font-bold text-[10px] tracking-widest uppercase px-3 py-1">
                STANDAR MUTU TERBAIK
              </div>

              <div>
                <span className="text-xs font-mono text-[#FFC000] uppercase tracking-widest block">FORMULA EKSKLUSIF</span>
                <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-white uppercase mt-1">
                  BAQIRA FOOD
                </h3>
              </div>

              {/* Meat Percentage Meter */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono text-white">
                  <span>KANDUNGAN DAGING MURNI</span>
                  <span className="text-[#FFC000] font-bold">85.7% (1.500 GRAM)</span>
                </div>
                <div className="w-full h-3 bg-[#0A0A0A] border border-[#313131] overflow-hidden flex">
                  <div className="h-full bg-[#FFC000] w-[85.7%]"></div>
                  <div className="h-full bg-[#494949] w-[14.3%]"></div>
                </div>
                <div className="flex justify-between text-[11px] font-mono text-[#7D7D7D]">
                  <span>Daging Murni (85.7%)</span>
                  <span>Tepung Pengikat (14.3%)</span>
                </div>
              </div>

              <div className="space-y-3.5 pt-2 font-mono text-xs">
                <div className="flex items-start gap-3 text-white">
                  <div className="p-1 bg-[#FFC000] text-black shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <strong className="text-white block">Tekstur Padat Daging & Juicy</strong>
                    <span className="text-[#969696]">Serat daging nyata terasa di setiap gigitan, tidak kopong dan kenyal alami.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-white">
                  <div className="p-1 bg-[#FFC000] text-black shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <strong className="text-white block">100% Kemurnian Protein</strong>
                    <span className="text-[#969696]">Varian Sapi 100% daging sapi, Ayam 100% daging ayam, Ikan 100% ikan segar tanpa campur aduk.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-white">
                  <div className="p-1 bg-[#FFC000] text-black shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <strong className="text-white block">100% Bebas Boraks & Formalin</strong>
                    <span className="text-[#969696]">Aman dikonsumsi harian oleh balita hingga lansia, bebas bahan kimia keras pengawet.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pasaran Umum (Ordinary Market Products) */}
            <div className="bg-[#141414] border border-[#202020] p-6 sm:p-8 space-y-6 opacity-80">
              <div>
                <span className="text-xs font-mono text-[#7D7D7D] uppercase tracking-widest block">KOMPARASI PRODUK LAIN</span>
                <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-[#969696] uppercase mt-1">
                  TAHU BAKSO PASARAN
                </h3>
              </div>

              {/* Typical Percentage Meter */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono text-[#969696]">
                  <span>KANDUNGAN DAGING ASLI</span>
                  <span>HANYA ~30% - 40%</span>
                </div>
                <div className="w-full h-3 bg-[#0A0A0A] border border-[#202020] overflow-hidden flex">
                  <div className="h-full bg-[#494949] w-[35%]"></div>
                  <div className="h-full bg-[#2A2A2A] w-[65%]"></div>
                </div>
                <div className="flex justify-between text-[11px] font-mono text-[#555555]">
                  <span>Daging Minim (35%)</span>
                  <span>Dominan Tepung & Air (65%)</span>
                </div>
              </div>

              <div className="space-y-3.5 pt-2 font-mono text-xs">
                <div className="flex items-start gap-3 text-[#7D7D7D]">
                  <div className="p-1 bg-[#202020] text-[#7D7D7D] shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-[#969696] block">Dominan Rasa Tepung Kenyal</strong>
                    <span>Tekstur licin liat karena tepung tapioka berlebih, isian tahu sering kopong atau kempes.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-[#7D7D7D]">
                  <div className="p-1 bg-[#202020] text-[#7D7D7D] shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-[#969696] block">Pencampuran Protein Tidak Jelas</strong>
                    <span>Kerap dicampur jeroan, lemak berlebih, atau filler agar biaya murah.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-[#7D7D7D]">
                  <div className="p-1 bg-[#202020] text-[#7D7D7D] shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-[#969696] block">Resiko Pengawet Berbahaya</strong>
                    <span>Banyak beredar tanpa izin edar resmi, rentan boraks atau formalin untuk keawetan semu.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Detailed Breakdown of 85.7% Formula */
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono">
            <div className="bg-[#181818] border border-[#202020] p-6 space-y-3">
              <span className="text-3xl font-extrabold text-[#FFC000]">01.</span>
              <h4 className="text-base font-bold text-white uppercase">1.500 GRAM DAGING PILIHAN</h4>
              <p className="text-xs text-[#969696] leading-relaxed">
                Setiap adonan menggunakan 1,5 kg potongan daging murni segar tanpa lemak berlebih untuk memastikan serat daging padat dan kaldu alami yang kuat.
              </p>
            </div>

            <div className="bg-[#181818] border border-[#202020] p-6 space-y-3">
              <span className="text-3xl font-extrabold text-white">02.</span>
              <h4 className="text-base font-bold text-white uppercase">250 GRAM TEPEUNG PENGIKAT</h4>
              <p className="text-xs text-[#969696] leading-relaxed">
                Tepung tapioka hanya difungsikan minimalis sebagai pengikat adonan (14.3%), bukan sebagai pengisi volume atau penambah berat murah.
              </p>
            </div>

            <div className="bg-[#181818] border border-[#202020] p-6 space-y-3">
              <span className="text-3xl font-extrabold text-[#29ABE2]">03.</span>
              <h4 className="text-base font-bold text-white uppercase">KULIT TAHU KUNING PREMIUM</h4>
              <p className="text-xs text-[#969696] leading-relaxed">
                Tahu pilihan dengan pori-pori rapat dan gurih yang mampu menampung isian bakso secara penuh melimpah hingga sudut segitiga terluar.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
