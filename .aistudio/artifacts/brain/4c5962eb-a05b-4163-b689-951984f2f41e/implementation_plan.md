# BAQIRA FOOD — Lamborghini Dark Luxury Culinary Digital Experience

A high-performance, single-page web application for **BAQIRA FOOD** crafted with the uncompromising **Lamborghini Design System** — nocturnal luxury, absolute black (`#000000`) surfaces, surgical Lamborghini Gold (`#FFC000`) accents, zero border-radius angular geometry, commanding all-caps typography, and an interactive WhatsApp commerce engine.

---

## User Review & Critical Decisions

> [!IMPORTANT]
> The following directions have been confirmed and will guide the build:
> - **Visual Identity**: Pure Lamborghini Dark Luxury (`#000000` pitch black, `#FFC000` gold accents, `#202020` charcoal cards, sharp 0px corners, hexagonal motifs, and high-impact all-caps display headings).
> - **Ordering Mechanism**: Interactive shopping cart drawer with live price calculation, customer information capture (Nama, Alamat, Pilihan Pengiriman), and instant WhatsApp message payload formatting directed to `081213040397`.
> - **Interactive Highlights**: Meat ratio visualization ($1.5\text{ kg} : 250\text{ gr}$ tapioka / $85.7\%$ meat purity), official legal verification showcase (HAKI `IDM 001312402`, BPJPH Halal certificates), interactive cooking SOP guides (Kukus 15m, Goreng keemasan, Kuah bakso 3L:1kg), and storage longevity indicators.

---

## 1. Overview & Core Concept

- **What It Does**: Presents BAQIRA FOOD’s premium culinary creations (Tahu Bakso Sapi, Ayam, Ikan & Bakso Daging Kuah) with theatrical luxury aesthetic. Visitors can explore product variants (Kukus, Goreng, Frozen Pack), examine authentic legal credentials and meat purity standards, configure orders in a cart drawer, and dispatch structured orders directly to WhatsApp.
- **Target Audience**: Discerning culinary consumers, families seeking healthy preservative-free food ($100\%$ free of borax & formalin), and resellers/frozen food buyers looking for verified Halal products with genuine high-meat ratio.
- **Key Value**: Merges the adrenaline and precision of the Lamborghini design language with gourmet food craftsmanship, establishing unmatched trust, appetitive desire, and frictionless ordering.

---

## 2. User Experience & Visual Design

### Visual Identity & Color Palette
- **Canvas (`#000000`)**: Absolute black backdrop stretching infinitely.
- **Primary CTA (`#FFC000`)**: Lamborghini Gold — warm, saturated amber-gold reserved exclusively for primary actions (*"PESAN SEKARANG"*, *"TAMBAH KE PESANAN"*, *"KIRIM KE WHATSAPP"*).
- **Secondary CTA**: Transparent ghost buttons with white 1px border at $50\%$ opacity and sharp 0px corners.
- **Structural Surfaces (`#181818` & `#202020`)**: Dark Iron and Charcoal elevated surfaces with hairline borders (`#202020` / `#313131`) and no drop shadows.
- **Typography**: Neo-Grotesk display hierarchy in pure uppercase with dense line-heights ($0.92\text{--}1.15$), crisp tracking, and high-contrast pure white text (`#FFFFFF`) with ash accents (`#7D7D7D`).

### Layout & Page Structure
```
┌─────────────────────────────────────────────────────────────┐
│ TOP TRUST TICKER (HAKI IDM 001312402 · HALAL BPJPH · 100% BEBAS BORAKS)
├─────────────────────────────────────────────────────────────┤
│ NAVBAR: [BAQIRA FOOD] ── [MENU · RASIO · LEGALITAS · CARA MASAK] ── [CART (N)]
├─────────────────────────────────────────────────────────────┤
│ HERO SECTION: Cinematic Dark Stage                          │
│ - 120px Uppercase Display Headline: "GURIH MELEJIT"         │
│ - Tagline: "Di setiap gigitan meninggalkan rasa gurih..."   │
│ - Purity Callout: 1.5 KG DAGING MURNI : 250 GR TAPIOKA     │
│ - CTAs: [EXPLORE MENU (Gold)]  [VERIFIKASI LEGALITAS (Ghost)]│
├─────────────────────────────────────────────────────────────┤
│ PURITY MATRIX: 6:1 Meat Ratio & Clean Label Standards        │
│ - Interactive comparison: Standard vs BAQIRA Food (85.7%)   │
│ - Halal BPJPH (Sapi, Ikan, Ayam) & HAKI Registration Cards  │
├─────────────────────────────────────────────────────────────┤
│ INTERACTIVE CATALOG: 4 Signature Products                   │
│ - Tahu Bakso Sapi, Ayam, Ikan (Kukus / Goreng / Frozen)     │
│ - Bakso Daging Kuah (Frozen / Siap Masak)                   │
│ - Serving selector, quantity stepper, instant add-to-cart   │
├─────────────────────────────────────────────────────────────┤
│ SOP PANDUAN SIMPAN & PENYAJIAN: Interactive Cooking Timer   │
│ - Freezer (6 Bulan) · Chiller (2 Minggu) · Ruang (12 Jam)   │
│ - Interactive 15-Minute Steam Guide & Golden Fry Controls   │
├─────────────────────────────────────────────────────────────┤
│ SOCIAL PROOF & TESTIMONIALS + CIKARANG OUTLET MAP CARD      │
├─────────────────────────────────────────────────────────────┤
│ SLIDE-OVER CART DRAWER & WHATSAPP GENERATOR MODAL           │
└─────────────────────────────────────────────────────────────┘
```

---

## 3. Key Product Decisions & Trade-Offs

- **Design System Fidelity vs Conventional Food Palettes**:
  - *Chosen Approach*: Strictly honor the Lamborghini Design System (Absolute black, surgical gold `#FFC000`, 0px border-radius, all-caps display).
  - *Why*: Gives BAQIRA FOOD an iconic, unforgettable, ultra-premium persona that stands out drastically from generic warm-orange food templates.
- **Direct WhatsApp Commerce Engine**:
  - *Chosen Approach*: Built-in interactive cart calculating total pricing, shipping method picker, and generating exact WhatsApp messages targeting `081213040397`.
  - *Why*: Seamless mobile UX for Indonesian commerce where 95%+ transactions close directly over WhatsApp.
- **Zero-Pill & Anti-AI Discipline**:
  - *Chosen Approach*: Unboxed metadata with typographic mid-dots (`·`), hairline borders, and functional segmented buttons with sharp angles.

---

## 4. Technical Architecture & Data Strategy

```
┌─────────────────────────────────────────────────────────────┐
│                         App.tsx                             │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ Global State:                                           │ │
│ │ - cart: Array<{product, variant, qty, price}>           │ │
│ │ - activeFilter: 'all' | 'sapi' | 'ayam' | 'ikan' | 'kuah'│
│ │ - customer: {name, address, deliveryMethod}             │ │
│ │ - isCartOpen: boolean                                   │ │
│ │ - cookingTimer: {mode, active, timeLeft}                │ │
│ └─────────────────────────────────────────────────────────┘ │
│           │                          │                      │
│     Catalog View              Cart Drawer & WA Generator   │
│  ┌───────────────────┐       ┌────────────────────────────┐ │
│  │ Product Cards     │──────>│ Line items, subtotals,     │ │
│  │ Serving Toggle    │       │ Input fields for checkout, │ │
│  │ Quantity Stepper  │       │ Instant WA URL builder     │ │
│  └───────────────────┘       └────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

### Data Specifications
- **Catalog Items**:
  1. **Tahu Bakso Sapi**: $100\%$ Daging Sapi murni, gurih pekat kaldu sapi, serat mantap (Rp 45.000 / pack 10 pcs).
  2. **Tahu Bakso Ayam**: $100\%$ Daging Ayam murni, gurih lembut, tekstur halus padat (Rp 40.000 / pack 10 pcs).
  3. **Tahu Bakso Ikan**: $100\%$ Daging Ikan olahan laut segar, kenyal alami bebas amis (Rp 40.000 / pack 10 pcs).
  4. **Bakso Daging Kuah**: Bulatan bakso padat daging, kenyal alami saat direbus (Rp 50.000 / pack 500g).
- **Variants per Product**: *Kukus Hangat*, *Goreng Renyah*, *Frozen Pack Kedap Udara*.
- **WhatsApp Integration**: Generates URL encoded string for `https://wa.me/6281213040397?text=...` adhering to BAQIRA FOOD’s mandatory template.

---

## 5. Implementation Steps (Post-Approval)

1. **Step 1 — Asset Generation**: Generate rich, domain-authentic photographic assets via `generate_image` matching high-contrast dark studio lighting (hero background, tahu bakso sapi, ayam, ikan, and bakso kuah).
2. **Step 2 — Core Layout & Design Tokens**: Configure index.html, metadata, Tailwind theme tokens, typography, and Lamborghini navigation bar.
3. **Step 3 — Interactive Sections**: Implement Hero Section with purity ratio callout, Interactive Product Catalog with serving switcher and cart state, Storage & Cooking Interactive SOP, and Certification Showcase.
4. **Step 4 — Checkout Drawer & WhatsApp Engine**: Implement the slide-over cart with live order compiler, delivery selector, and direct WhatsApp redirect.
5. **Step 5 — Verification & Polish**: Ensure strict 0px border-radius, WCAG contrast, responsive mobile touch targets, and full compilation verification.
