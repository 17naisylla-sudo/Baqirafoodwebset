import React, { useState } from 'react';
import { Plus, Minus, ShoppingBag, Check, ShieldCheck, Info } from 'lucide-react';
import { PRODUCTS, Product } from '../data/products';
import { CulinaryVisual } from './CulinaryVisual';

interface ProductCatalogProps {
  onAddToCart: (product: Product, variant: 'Kukus' | 'Goreng' | 'Frozen', quantity: number) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({ onAddToCart }) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'sapi' | 'ayam' | 'ikan' | 'kuah'>('all');
  
  // Per-product local selection state for variant and quantity
  const [productSelections, setProductSelections] = useState<Record<string, { variant: 'Kukus' | 'Goreng' | 'Frozen'; qty: number }>>({
    'tahu-bakso-sapi': { variant: 'Kukus', qty: 1 },
    'tahu-bakso-ayam': { variant: 'Goreng', qty: 1 },
    'tahu-bakso-ikan': { variant: 'Frozen', qty: 1 },
    'bakso-daging-kuah': { variant: 'Frozen', qty: 1 },
  });

  const [addedNotice, setAddedNotice] = useState<string | null>(null);

  const filteredProducts = selectedFilter === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.proteinType === selectedFilter);

  const handleVariantChange = (productId: string, variant: 'Kukus' | 'Goreng' | 'Frozen') => {
    setProductSelections(prev => ({
      ...prev,
      [productId]: { ...prev[productId], variant }
    }));
  };

  const handleQtyChange = (productId: string, delta: number) => {
    setProductSelections(prev => {
      const current = prev[productId]?.qty || 1;
      const next = Math.max(1, current + delta);
      return {
        ...prev,
        [productId]: { ...prev[productId], qty: next }
      };
    });
  };

  const handleAdd = (product: Product) => {
    const selection = productSelections[product.id] || { variant: product.defaultVariant, qty: 1 };
    onAddToCart(product, selection.variant, selection.qty);
    setAddedNotice(product.id);
    setTimeout(() => setAddedNotice(null), 1800);
  };

  return (
    <section id="katalog" className="w-full bg-[#000000] py-20 border-b border-[#202020]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#202020] pb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#FFC000] uppercase mb-2">
              <span className="w-2 h-2 bg-[#FFC000]"></span>
              KATALOG PRODUK SIAP SANTAP & FROZEN
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-black uppercase text-white tracking-tight leading-[0.95]">
              MENU SIGNATURE
            </h2>
          </div>
          <p className="text-sm font-mono text-[#969696] max-w-md">
            Pilih varian protein daging murni Anda. Tersedia pilihan penyajian hangat siap santap (Kukus/Goreng) dan kemasan kedap udara Frozen Pack.
          </p>
        </div>

        {/* Category Filters (Segmented with 0px radius) */}
        <div className="flex flex-wrap items-center gap-2 font-mono text-xs uppercase tracking-wider">
          {[
            { id: 'all', label: 'SEMUA MENU' },
            { id: 'sapi', label: '100% SAPI MURNI' },
            { id: 'ayam', label: '100% AYAM SEGAR' },
            { id: 'ikan', label: '100% IKAN OLAHAN' },
            { id: 'kuah', label: 'BAKSO DAGING KUAH' },
          ].map(filter => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id as any)}
              className={`px-4 py-2 border transition-colors cursor-pointer ${
                selectedFilter === filter.id
                  ? 'bg-[#FFC000] text-black border-[#FFC000] font-bold'
                  : 'bg-[#141414] text-[#969696] border-[#202020] hover:text-white hover:border-[#313131]'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => {
            const currentSelection = productSelections[product.id] || { variant: product.defaultVariant, qty: 1 };
            const isJustAdded = addedNotice === product.id;

            return (
              <div 
                key={product.id}
                className="bg-[#181818] border border-[#202020] hover:border-[#383838] transition-colors flex flex-col justify-between group"
              >
                <div>
                  {/* Visual Render Container */}
                  <CulinaryVisual type={product.proteinType} />

                  {/* Card Content Body */}
                  <div className="p-6 space-y-4">
                    {/* Header info & Price */}
                    <div>
                      <div className="flex items-center justify-between text-xs font-mono text-[#FFC000] tracking-wider uppercase mb-1">
                        <span>{product.proteinTitle}</span>
                        <span className="text-[#7D7D7D]">{product.unit}</span>
                      </div>
                      <h3 className="font-display text-2xl font-bold uppercase text-white tracking-tight">
                        {product.name}
                      </h3>
                      <div className="mt-2 text-2xl font-mono font-bold text-white tabular-nums tracking-tight">
                        Rp {product.price.toLocaleString('id-ID')}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-[#969696] leading-relaxed line-clamp-3">
                      {product.description}
                    </p>

                    {/* Tasting notes */}
                    <div className="flex flex-wrap gap-x-2 gap-y-1 text-[11px] font-mono text-[#7D7D7D] pt-1 border-t border-[#202020]">
                      {product.tastingNotes.map((note, idx) => (
                        <span key={idx} className="flex items-center gap-1.5">
                          <span className="text-[#FFC000]">▪</span>
                          <span>{note}</span>
                        </span>
                      ))}
                    </div>

                    {/* Variant Selector (Kukus / Goreng / Frozen) */}
                    <div className="space-y-1.5 pt-2">
                      <label className="text-[10px] font-mono uppercase tracking-widest text-[#7D7D7D] block">
                        PILIHAN PENYAJIAN:
                      </label>
                      <div className="grid grid-cols-3 gap-1 font-mono text-[11px]">
                        {product.availableVariants.map(variant => {
                          const isSelected = currentSelection.variant === variant;
                          return (
                            <button
                              key={variant}
                              type="button"
                              onClick={() => handleVariantChange(product.id, variant)}
                              className={`py-2 px-1 text-center uppercase tracking-wider transition-colors cursor-pointer border ${
                                isSelected
                                  ? 'bg-[#282828] text-[#FFC000] border-[#FFC000] font-bold'
                                  : 'bg-[#101010] text-[#7D7D7D] border-[#202020] hover:text-white'
                              }`}
                            >
                              {variant}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer: Quantity Stepper & Add Action */}
                <div className="p-6 pt-0 space-y-3">
                  <div className="flex items-center gap-2">
                    {/* Stepper */}
                    <div className="flex items-center bg-[#101010] border border-[#202020] font-mono">
                      <button
                        type="button"
                        onClick={() => handleQtyChange(product.id, -1)}
                        className="w-9 h-9 flex items-center justify-center text-[#969696] hover:text-white hover:bg-[#202020] transition-colors cursor-pointer"
                        aria-label="Kurang Jumlah"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="w-10 text-center text-xs font-bold text-white tabular-nums">
                        {currentSelection.qty}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleQtyChange(product.id, 1)}
                        className="w-9 h-9 flex items-center justify-center text-[#969696] hover:text-white hover:bg-[#202020] transition-colors cursor-pointer"
                        aria-label="Tambah Jumlah"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Add to Cart CTA */}
                    <button
                      type="button"
                      onClick={() => handleAdd(product)}
                      className={`flex-1 py-2.5 px-3 font-mono text-xs font-bold uppercase tracking-wider transition-colors duration-150 flex items-center justify-center gap-2 cursor-pointer ${
                        isJustAdded
                          ? 'bg-[#29ABE2] text-black'
                          : 'bg-[#FFC000] hover:bg-[#917300] text-black'
                      }`}
                    >
                      {isJustAdded ? (
                        <>
                          <Check className="w-4 h-4 stroke-[3]" />
                          <span>TERSIMPAN!</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-4 h-4" />
                          <span>PESAN</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
