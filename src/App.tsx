/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { TopTicker } from './components/TopTicker';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PurityRatioSection } from './components/PurityRatioSection';
import { ProductCatalog } from './components/ProductCatalog';
import { LegalCertifications } from './components/LegalCertifications';
import { StorageAndCookingGuide } from './components/StorageAndCookingGuide';
import { TestimonialsAndLocation } from './components/TestimonialsAndLocation';
import { CartDrawer, CartItem } from './components/CartDrawer';
import { Footer } from './components/Footer';
import { Product } from './data/products';
import { ShoppingBag } from 'lucide-react';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('baqira_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('baqira_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.error(e);
    }
  }, [cartItems]);

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleAddToCart = (product: Product, variant: 'Kukus' | 'Goreng' | 'Frozen', quantity: number) => {
    const itemId = `${product.id}-${variant}`;
    setCartItems(prev => {
      const existing = prev.find(i => i.id === itemId);
      if (existing) {
        return prev.map(i => i.id === itemId ? { ...i, quantity: i.quantity + quantity } : i);
      }
      return [...prev, { id: itemId, product, variant, quantity }];
    });
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems(prev => {
      return prev.map(item => {
        if (item.id === id) {
          const next = item.quantity + delta;
          return next > 0 ? { ...item, quantity: next } : null;
        }
        return item;
      }).filter(Boolean) as CartItem[];
    });
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#000000] text-white flex flex-col selection:bg-[#FFC000] selection:text-black">
      {/* Top Announcement Bar */}
      <TopTicker />

      {/* Navigation */}
      <Navbar 
        cartCount={totalCartCount} 
        onOpenCart={() => setIsCartOpen(true)} 
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero 
          onExploreMenu={() => handleScrollToSection('katalog')}
          onOpenLegalitas={() => handleScrollToSection('legalitas')}
        />

        {/* 6:1 Purity Meat Ratio Section */}
        <PurityRatioSection />

        {/* Interactive Product Catalog */}
        <ProductCatalog 
          onAddToCart={handleAddToCart}
        />

        {/* Official Legal Credentials & Halal Verification */}
        <LegalCertifications />

        {/* Storage Longevity & Cooking Stopwatch SOP */}
        <StorageAndCookingGuide />

        {/* Customer Proof & Cikarang Location */}
        <TestimonialsAndLocation />
      </main>

      {/* Footer */}
      <Footer />

      {/* Slide-over Cart & WhatsApp Checkout Drawer */}
      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Floating Quick Cart CTA for Mobile (When Cart has items and Drawer is closed) */}
      {!isCartOpen && totalCartCount > 0 && (
        <div className="md:hidden fixed bottom-6 right-6 z-40">
          <button
            onClick={() => setIsCartOpen(true)}
            className="flex items-center gap-2 bg-[#FFC000] text-black px-5 py-3.5 font-mono text-xs font-bold uppercase tracking-wider shadow-2xl cursor-pointer"
            aria-label="Lihat Keranjang Belanja"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>KERANJANG ({totalCartCount})</span>
          </button>
        </div>
      )}
    </div>
  );
}
