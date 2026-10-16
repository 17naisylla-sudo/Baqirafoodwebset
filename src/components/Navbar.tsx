import React, { useState } from 'react';
import { ShoppingBag, Menu, X, Shield } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#000000]/95 backdrop-blur-md border-b border-[#202020]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a 
          href="#" 
          className="flex items-center gap-3 text-white group whitespace-nowrap shrink-0 focus-visible:outline focus-visible:outline-[#FFC000]"
        >
          <div className="w-10 h-10 bg-[#181818] border border-[#202020] flex items-center justify-center relative">
            <div className="w-6 h-6 border border-[#FFC000] rotate-45 flex items-center justify-center">
              <span className="text-[#FFC000] font-black text-xs font-mono -rotate-45">BF</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-display text-2xl sm:text-3xl font-extrabold tracking-widest text-white uppercase group-hover:text-[#FFC000] transition-colors">
              BAQIRA FOOD
            </span>
          </div>
        </a>

        {/* Zone 2: 4-5 Single-line Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-widest text-[#969696]">
          <a href="#katalog" className="hover:text-white hover:text-[#FFC000] transition-colors whitespace-nowrap shrink-0">
            Katalog Menu
          </a>
          <a href="#rasio" className="hover:text-white hover:text-[#FFC000] transition-colors whitespace-nowrap shrink-0">
            Rasio 6:1 Daging
          </a>
          <a href="#legalitas" className="hover:text-white hover:text-[#FFC000] transition-colors whitespace-nowrap shrink-0">
            Legalitas & Halal
          </a>
          <a href="#sop-penyajian" className="hover:text-white hover:text-[#FFC000] transition-colors whitespace-nowrap shrink-0">
            Panduan Masak
          </a>
          <a href="#lokasi" className="hover:text-white hover:text-[#FFC000] transition-colors whitespace-nowrap shrink-0">
            Lokasi Gerai
          </a>
        </nav>

        {/* Zone 3: 1 Primary Action (Cart Drawer Trigger) */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenCart}
            className="flex items-center gap-2.5 bg-[#FFC000] hover:bg-[#917300] text-black px-5 py-3 font-mono text-xs font-bold uppercase tracking-wider transition-colors duration-150 cursor-pointer focus-visible:outline focus-visible:outline-white whitespace-nowrap shrink-0"
            aria-label="Buka Keranjang Pesanan"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden sm:inline">PESANAN</span>
            <span className="bg-black text-[#FFC000] px-1.5 py-0.5 text-[11px] font-bold">
              {cartCount}
            </span>
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 bg-[#181818] border border-[#202020] text-white hover:text-[#FFC000] transition-colors focus-visible:outline focus-visible:outline-[#FFC000]"
            aria-label="Toggle Mobile Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#000000] border-b border-[#202020] px-6 py-6 space-y-4 font-mono text-xs uppercase tracking-widest">
          <a
            href="#katalog"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-white hover:text-[#FFC000] border-b border-[#181818]"
          >
            Katalog Menu
          </a>
          <a
            href="#rasio"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-white hover:text-[#FFC000] border-b border-[#181818]"
          >
            Rasio 6:1 Daging
          </a>
          <a
            href="#legalitas"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-white hover:text-[#FFC000] border-b border-[#181818]"
          >
            Legalitas & Halal
          </a>
          <a
            href="#sop-penyajian"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-white hover:text-[#FFC000] border-b border-[#181818]"
          >
            Panduan Masak
          </a>
          <a
            href="#lokasi"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-white hover:text-[#FFC000]"
          >
            Lokasi Gerai
          </a>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCart();
              }}
              className="w-full bg-[#FFC000] text-black py-3 font-bold uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              BUKA KERANJANG ({cartCount})
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
