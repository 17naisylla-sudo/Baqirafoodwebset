import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, MessageCircle, Copy, Check, ShoppingBag, AlertCircle } from 'lucide-react';
import { BRAND_DATA, Product } from '../data/products';

export interface CartItem {
  id: string; // combination of productId and variant
  product: Product;
  variant: 'Kukus' | 'Goreng' | 'Frozen';
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) => {
  const [customerName, setCustomerName] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [deliveryMethod, setDeliveryMethod] = useState<'Instan' | 'Sameday' | 'Ambil di Tempat'>('Instan');
  const [copied, setCopied] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

  // Generate exact WhatsApp formatted string according to specification
  const generateWhatsAppMessage = () => {
    const orderLines = items.map(
      item => `  * ${item.product.name} (${item.variant}) x ${item.quantity}`
    ).join('\n');

    return `Halo Admin BAQIRA FOOD, saya ingin memesan produk:\n\n` +
      `- Nama: ${customerName.trim() || '[Belum diisi]'}\n` +
      `- Alamat Pengiriman: ${customerAddress.trim() || '[Belum diisi]'}\n` +
      `- Daftar Pesanan:\n${orderLines || '  * (Belum ada pesanan)'}\n` +
      `- Pilihan Pengiriman: ${deliveryMethod}\n\n` +
      `Estimasi Subtotal: Rp ${subtotal.toLocaleString('id-ID')}\n` +
      `Mohon info total biaya beserta ongkos kirimnya. Terima kasih!`;
  };

  const handleCheckoutWhatsApp = () => {
    if (items.length === 0) {
      setValidationError('Keranjang belanja Anda masih kosong.');
      return;
    }
    if (!customerName.trim()) {
      setValidationError('Silakan masukkan Nama Lengkap Anda.');
      return;
    }
    if (!customerAddress.trim() && deliveryMethod !== 'Ambil di Tempat') {
      setValidationError('Silakan masukkan Alamat Pengiriman lengkap Anda.');
      return;
    }

    setValidationError(null);
    const message = generateWhatsAppMessage();
    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${BRAND_DATA.whatsappInternational}?text=${encoded}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCopyMessage = () => {
    const message = generateWhatsAppMessage();
    navigator.clipboard.writeText(message);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer Container (Sharp 0px Corners) */}
      <div className="relative w-full max-w-xl bg-[#000000] border-l border-[#202020] h-full flex flex-col z-10 overflow-hidden shadow-2xl">
        {/* Drawer Header */}
        <div className="p-6 bg-[#141414] border-b border-[#202020] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-[#FFC000]" />
            <div>
              <h3 className="font-display text-2xl font-bold uppercase text-white tracking-tight">
                KERANJANG PESANAN
              </h3>
              <span className="text-[10px] font-mono text-[#7D7D7D] uppercase tracking-wider block">
                DIRECT WHATSAPP COMMERCE · {BRAND_DATA.whatsappNumber}
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#969696] hover:text-white hover:bg-[#202020] transition-colors cursor-pointer"
            aria-label="Tutup Keranjang"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Body Scroll Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Validation Alert */}
          {validationError && (
            <div className="p-3 bg-[#E63946]/10 border border-[#E63946] text-[#E63946] text-xs font-mono flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{validationError}</span>
            </div>
          )}

          {/* Cart Items List */}
          {items.length === 0 ? (
            <div className="py-16 text-center space-y-4 font-mono">
              <div className="w-16 h-16 mx-auto bg-[#141414] border border-[#202020] flex items-center justify-center">
                <ShoppingBag className="w-6 h-6 text-[#7D7D7D]" />
              </div>
              <p className="text-sm text-[#969696]">Keranjang belanja masih kosong.</p>
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-[#FFC000] text-black text-xs font-bold uppercase tracking-wider hover:bg-[#917300] transition-colors cursor-pointer"
              >
                PILIH MENU SEKARANG
              </button>
            </div>
          ) : (
            <div className="space-y-3 font-mono">
              <div className="flex justify-between items-center text-xs text-[#7D7D7D] pb-1 border-b border-[#181818]">
                <span>DAFTAR PRODUK</span>
                <button
                  onClick={onClearCart}
                  className="hover:text-white transition-colors cursor-pointer text-[10px] uppercase"
                >
                  KOSONGKAN
                </button>
              </div>

              {items.map(item => (
                <div 
                  key={item.id}
                  className="p-4 bg-[#141414] border border-[#202020] flex items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-white uppercase font-sans">
                      {item.product.name}
                    </h4>
                    <div className="text-xs text-[#FFC000]">
                      <span className="bg-[#202020] px-1.5 py-0.5 text-[10px] text-white mr-2">
                        {item.variant.toUpperCase()}
                      </span>
                      <span>Rp {(item.product.price * item.quantity).toLocaleString('id-ID')}</span>
                    </div>
                  </div>

                  {/* Quantity Stepper */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center bg-[#0A0A0A] border border-[#262626]">
                      <button
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="w-7 h-7 flex items-center justify-center text-[#969696] hover:text-white cursor-pointer"
                        aria-label="Kurang"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-8 text-center text-xs font-bold text-white tabular-nums">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="w-7 h-7 flex items-center justify-center text-[#969696] hover:text-white cursor-pointer"
                        aria-label="Tambah"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="p-2 text-[#7D7D7D] hover:text-[#E63946] transition-colors cursor-pointer"
                      title="Hapus"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}

              {/* Subtotal strip */}
              <div className="p-4 bg-[#181818] border border-[#262626] flex justify-between items-center text-sm">
                <span className="text-[#969696] uppercase">ESTIMASI SUBTOTAL:</span>
                <span className="font-bold text-white text-base text-[#FFC000] tabular-nums">
                  Rp {subtotal.toLocaleString('id-ID')}
                </span>
              </div>
            </div>
          )}

          {/* Form Checkout Data WhatsApp */}
          {items.length > 0 && (
            <div className="space-y-4 pt-4 border-t border-[#202020] font-mono">
              <span className="text-xs font-bold text-[#FFC000] uppercase tracking-wider block">
                INFORMASI PENGIRIMAN:
              </span>

              {/* Nama Input */}
              <div className="space-y-1">
                <label className="text-[11px] text-[#969696] uppercase block">
                  Nama Pemesan *
                </label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Contoh: Ibu Amanda"
                  className="w-full bg-[#141414] border border-[#262626] px-3 py-2.5 text-xs text-white placeholder-[#555555] focus:outline-none focus:border-[#FFC000]"
                />
              </div>

              {/* Alamat Input */}
              <div className="space-y-1">
                <label className="text-[11px] text-[#969696] uppercase block">
                  Alamat Lengkap Pengiriman *
                </label>
                <textarea
                  rows={2}
                  value={customerAddress}
                  onChange={(e) => setCustomerAddress(e.target.value)}
                  placeholder="Nama jalan, nomor rumah, RT/RW, kelurahan, patokan lokasi..."
                  className="w-full bg-[#141414] border border-[#262626] px-3 py-2.5 text-xs text-white placeholder-[#555555] focus:outline-none focus:border-[#FFC000]"
                />
              </div>

              {/* Pilihan Pengiriman */}
              <div className="space-y-1">
                <label className="text-[11px] text-[#969696] uppercase block">
                  Pilihan Pengiriman *
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['Instan', 'Sameday', 'Ambil di Tempat'] as const).map(method => (
                    <button
                      key={method}
                      type="button"
                      onClick={() => setDeliveryMethod(method)}
                      className={`py-2 px-1 text-[11px] text-center uppercase tracking-wider border cursor-pointer transition-colors ${
                        deliveryMethod === method
                          ? 'bg-[#202020] text-[#FFC000] border-[#FFC000] font-bold'
                          : 'bg-[#101010] text-[#7D7D7D] border-[#202020] hover:text-white'
                      }`}
                    >
                      {method}
                    </button>
                  ))}
                </div>
              </div>

              {/* Live Preview Box of WhatsApp Message */}
              <div className="space-y-1.5 pt-2">
                <div className="flex justify-between items-center text-[10px] text-[#7D7D7D] uppercase">
                  <span>PREVIEW PESAN WHATSAPP:</span>
                  <button
                    onClick={handleCopyMessage}
                    className="hover:text-white flex items-center gap-1 cursor-pointer"
                  >
                    {copied ? <Check className="w-3 h-3 text-[#29ABE2]" /> : <Copy className="w-3 h-3" />}
                    <span>{copied ? 'TERSALIN' : 'SALIN'}</span>
                  </button>
                </div>
                <pre className="p-3 bg-[#0A0A0A] border border-[#202020] text-[10px] text-[#969696] whitespace-pre-wrap font-mono leading-tight max-h-36 overflow-y-auto">
                  {generateWhatsAppMessage()}
                </pre>
              </div>
            </div>
          )}
        </div>

        {/* Drawer Footer Actions */}
        {items.length > 0 && (
          <div className="p-6 bg-[#141414] border-t border-[#202020] space-y-3 font-mono">
            <button
              onClick={handleCheckoutWhatsApp}
              className="w-full py-4 bg-[#FFC000] hover:bg-[#917300] text-black font-bold text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              <span>KIRIM VIA WHATSAPP (081213040397)</span>
            </button>

            <button
              onClick={handleCopyMessage}
              className="w-full py-3 bg-[#202020] hover:bg-[#2A2A2A] text-white border border-[#313131] text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <Copy className="w-3.5 h-3.5 text-[#FFC000]" />
              <span>{copied ? 'FORMAT PESAN TERSALIN!' : 'SALIN TEKS FORMAT PEMESANAN'}</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
