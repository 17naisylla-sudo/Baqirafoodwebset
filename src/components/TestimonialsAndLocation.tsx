import React from 'react';
import { Star, MapPin, ExternalLink, MessageCircle, Phone, Navigation } from 'lucide-react';
import { CUSTOMER_REVIEWS, BRAND_DATA } from '../data/products';

export const TestimonialsAndLocation: React.FC = () => {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${BRAND_DATA.address.line1}, ${BRAND_DATA.address.line2}, ${BRAND_DATA.address.city}`
  )}`;

  return (
    <section id="lokasi" className="w-full bg-[#000000] py-20 border-b border-[#202020]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 space-y-16">
        {/* Section 1: Customer Testimonials */}
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#202020] pb-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#FFC000] uppercase mb-2">
                <span className="w-2 h-2 bg-[#FFC000]"></span>
                TESTIMONI & KEPUASAN KONSUMEN
              </div>
              <h2 className="font-display text-4xl sm:text-6xl font-black uppercase text-white tracking-tight leading-[0.95]">
                REPUTASI RASA GURIH
              </h2>
            </div>
            <p className="text-sm font-mono text-[#969696] max-w-md">
              Dua daya tarik utama yang terbukti membuat pelanggan puas: bentuk tahu yang montok padat dan rasa gurih daging asli tanpa pengawet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CUSTOMER_REVIEWS.map((review, idx) => (
              <div
                key={idx}
                className="bg-[#181818] border border-[#202020] p-6 sm:p-8 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-[#FFC000]">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#FFC000]" />
                      ))}
                    </div>
                    <span className="text-[10px] font-mono text-[#7D7D7D] uppercase tracking-wider">
                      {review.tag}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-white/90 leading-relaxed italic">
                    "{review.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-[#202020]">
                  <strong className="font-display text-lg uppercase text-white block">
                    {review.name}
                  </strong>
                  <span className="text-[11px] font-mono text-[#7D7D7D] block">
                    {review.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Physical Store & Contact Location */}
        <div className="bg-[#141414] border border-[#202020] p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-mono text-[#FFC000] uppercase tracking-widest block mb-1">
                ALAMAT PRODUKSI & GERAI RESMI
              </span>
              <h3 className="font-display text-3xl sm:text-5xl font-black uppercase text-white tracking-tight">
                KUNJUNGI KAMI DI CIKARANG
              </h3>
            </div>

            <div className="space-y-2 font-mono text-xs sm:text-sm text-[#969696] leading-relaxed">
              <div className="flex items-start gap-3 text-white">
                <MapPin className="w-4 h-4 text-[#FFC000] shrink-0 mt-1" />
                <div>
                  <strong className="text-white block">{BRAND_DATA.address.line1}</strong>
                  <span>{BRAND_DATA.address.line2}</span>
                  <span className="block text-[#7D7D7D]">{BRAND_DATA.address.city}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#202020] hover:bg-[#313131] text-white border border-[#383838] px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2 cursor-pointer"
              >
                <Navigation className="w-4 h-4 text-[#FFC000]" />
                <span>RUTE GOOGLE MAPS</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#7D7D7D]" />
              </a>

              <a
                href={`https://wa.me/${BRAND_DATA.whatsappInternational}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FFC000] hover:bg-[#917300] text-black px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>CHAT WHATSAPP ({BRAND_DATA.whatsappNumber})</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#0A0A0A] border border-[#202020] p-6 space-y-4 font-mono text-xs">
            <span className="text-[#FFC000] uppercase tracking-wider block font-bold">
              OPSI PENGIRIMAN & PEMBELIAN:
            </span>
            <div className="space-y-2.5 text-[#969696]">
              <div className="flex items-center justify-between border-b border-[#181818] pb-2">
                <span>INSTAN & SAMEDAY</span>
                <span className="text-white">GoSend / GrabExpress</span>
              </div>
              <div className="flex items-center justify-between border-b border-[#181818] pb-2">
                <span>AMBIL DI TEMPAT</span>
                <span className="text-white">Gerai Telaga Harapan</span>
              </div>
              <div className="flex items-center justify-between">
                <span>KEMASAN FROZEN</span>
                <span className="text-white">Vakum Kedap Udara Aman</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
