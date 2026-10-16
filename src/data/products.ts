export interface Product {
  id: string;
  name: string;
  proteinType: 'sapi' | 'ayam' | 'ikan' | 'kuah';
  proteinTitle: string;
  description: string;
  meatRatio: string;
  price: number;
  unit: string;
  defaultVariant: 'Kukus' | 'Goreng' | 'Frozen';
  availableVariants: ('Kukus' | 'Goreng' | 'Frozen')[];
  halalCert: string;
  accentBadge: string;
  tastingNotes: string[];
}

export const BRAND_DATA = {
  name: 'BAQIRA FOOD',
  registeredTag: 'Merek Terdaftar Resmi DJKI',
  tagline: 'Di setiap gigitan meninggalkan rasa gurih dengan isi yang berlimpah',
  whatsappNumber: '081213040397',
  whatsappInternational: '6281213040397',
  address: {
    line1: 'Perumahan Telaga Harapan Blok E2/24 RT 002/012',
    line2: 'Desa/Kel. Telaga Murni, Kec. Cikarang Barat',
    city: 'Kab. Bekasi, Jawa Barat',
    mapsQuery: 'Perumahan Telaga Harapan Blok E2/24 Telaga Murni Cikarang Barat'
  },
  ratioStats: {
    meatWeight: '1.5 kg',
    flourWeight: '250 gram',
    meatPercentage: '85.7%',
    flourPercentage: '14.3%',
    ratioTitle: 'Rasio Mutu 6 : 1',
  },
  legalities: [
    {
      label: 'HAKI Merek Dagang',
      number: 'IDM 001312402',
      issuer: 'DJKI Kemenkumham RI',
      coverage: 'Perlindungan Hak Cipta & Merek BAQIRA FOOD'
    },
    {
      label: 'Sertifikat Halal Sapi',
      number: 'ID32110000643770922',
      issuer: 'BPJPH Kementerian Agama RI',
      coverage: 'Olahan Daging Sapi (Tahu Bakso & Bakso)'
    },
    {
      label: 'Sertifikat Halal Ikan',
      number: 'ID32110017894630542',
      issuer: 'BPJPH Kementerian Agama RI',
      coverage: 'Olahan Daging Ikan Segar'
    },
    {
      label: 'Sertifikat Halal Ayam',
      number: 'Resmi Terverifikasi',
      issuer: 'BPJPH Kementerian Agama RI',
      coverage: 'Olahan Daging Ayam Pilihan'
    },
    {
      label: 'Keamanan Pangan',
      number: '100% Clean Label',
      issuer: 'Standar Internal Produksi',
      coverage: 'Bebas Boraks, Bebas Formalin & Tanpa Pengawet Buatan'
    }
  ]
};

export const PRODUCTS: Product[] = [
  {
    id: 'tahu-bakso-sapi',
    name: 'Tahu Bakso Sapi',
    proteinType: 'sapi',
    proteinTitle: '100% Daging Sapi Murni',
    description: 'Gurih pekat khas kaldu sapi murni pilihan, serat daging terasa mantap, isian penuh melimpah sampai ke setiap sudut tahu.',
    meatRatio: '85.7% Daging Sapi Murni',
    price: 45000,
    unit: 'Pack isi 10 pcs',
    defaultVariant: 'Kukus',
    availableVariants: ['Kukus', 'Goreng', 'Frozen'],
    halalCert: 'ID32110000643770922',
    accentBadge: 'SIGNATURE BEEF',
    tastingNotes: ['Kaldu Pekat', 'Padat Serat', 'Isian Melimpah']
  },
  {
    id: 'tahu-bakso-ayam',
    name: 'Tahu Bakso Ayam',
    proteinType: 'ayam',
    proteinTitle: '100% Daging Ayam Segar',
    description: 'Gurih lembut dan kaya protein, tekstur halus berpadu kulit tahu gurih. Ringan di lidah dan favorit seluruh anggota keluarga.',
    meatRatio: '85.7% Daging Ayam Pilihan',
    price: 40000,
    unit: 'Pack isi 10 pcs',
    defaultVariant: 'Goreng',
    availableVariants: ['Kukus', 'Goreng', 'Frozen'],
    halalCert: 'Halal Terverifikasi',
    accentBadge: 'FAMILY FAVORITE',
    tastingNotes: ['Gurih Lembut', 'Tekstur Halus', 'Kulit Keemasan']
  },
  {
    id: 'tahu-bakso-ikan',
    name: 'Tahu Bakso Ikan',
    proteinType: 'ikan',
    proteinTitle: '100% Olahan Ikan Segar',
    description: 'Sensasi olahan laut yang segar dengan kekenyalan daging alami, aroma sedap dan dijamin 100% bebas amis.',
    meatRatio: '85.7% Daging Ikan Segar',
    price: 40000,
    unit: 'Pack isi 10 pcs',
    defaultVariant: 'Frozen',
    availableVariants: ['Kukus', 'Goreng', 'Frozen'],
    halalCert: 'ID32110017894630542',
    accentBadge: 'OCEAN FRESH',
    tastingNotes: ['Kenyal Alami', 'Segar Bebas Amis', 'Kaya Nutrisi']
  },
  {
    id: 'bakso-daging-kuah',
    name: 'Bakso Daging Kuah',
    proteinType: 'kuah',
    proteinTitle: 'Daging Sapi Pilihan',
    description: 'Bulatan bakso padat daging bertekstur membal kenyal alami saat direbus. Kuah kaldu bening gurih dengan aroma khas menggugah selera.',
    meatRatio: 'Rasio Tepung Minimal',
    price: 50000,
    unit: 'Pack 500 gr (~25 butir)',
    defaultVariant: 'Frozen',
    availableVariants: ['Frozen'],
    halalCert: 'ID32110000643770922',
    accentBadge: 'CHEF CHOICE',
    tastingNotes: ['Membal Alami', 'Kaldu Bening', 'Padat Daging']
  }
];

export const STORAGE_GUIDE = [
  {
    name: 'Freezer (Beku)',
    duration: 'Hingga 6 Bulan',
    condition: 'Suhu beku stabil (< -18°C), kemasan vakum tertutup rapat kedap udara.',
    highlight: '6 BULAN'
  },
  {
    name: 'Chiller (Kulkas Bawah)',
    duration: 'Hingga 2 Minggu',
    condition: 'Simpan dalam wadah kedap tertutup agar kelembapan dan tekstur tahu terjaga prima.',
    highlight: '2 MINGGU'
  },
  {
    name: 'Suhu Ruang',
    duration: 'Maksimal 12 Jam',
    condition: 'Aman untuk durasi pengiriman kurir instan atau sameday delivery.',
    highlight: '12 JAM'
  }
];

export const COOKING_SOP = [
  {
    id: 'kukus',
    title: 'Penyajian Tahu Bakso Kukus',
    durationSec: 900, // 15 minutes
    durationDisplay: '15 Menit',
    instruction: 'Panaskan kukusan hingga air mendidih. Masukkan tahu bakso dan kukus kembali selama 15 menit hingga bagian dalam hangat merata, juicy, dan aroma kaldunya merekah.',
    tips: 'Sajikan selagi hangat bersama saus sambal atau cabai rawit hijau.'
  },
  {
    id: 'goreng',
    title: 'Penyajian Tahu Bakso Goreng',
    durationSec: 420, // 7 minutes
    durationDisplay: 'Api Sedang Hingga Keemasan',
    instruction: 'Panaskan minyak goreng secukupnya dengan api sedang agar matang merata hingga ke bagian inti. Goreng dan angkat setelah permukaan berwarna kuning keemasan renyah.',
    tips: 'Tiriskan minyak sesaat sebelum disajikan agar kulit tetap renyah crispy.'
  },
  {
    id: 'kuah',
    title: 'Penyajian Bakso Kuah Gurih',
    durationSec: 600, // 10 minutes
    durationDisplay: '3 Liter Air / 1 Kg Bakso',
    instruction: 'Rebus 3 liter air mendidih untuk takaran 1 kg bakso. Masukkan bakso daging hingga mengapung sempurna dan kaldu sapi mengunci kelezatannya.',
    tips: 'Tambahkan irisan seledri, daun bawang, dan taburan bawang merah goreng.'
  }
];

export const CUSTOMER_REVIEWS = [
  {
    name: 'Hj. Ratna Wulandari',
    role: 'Pelanggan Rumah Tangga, Grand Wisata Bekasi',
    quote: 'Bentuk tahunya sangat rapi dan montok, pas digigit langsung terasa padatnya daging asli. Tidak seperti tahu bakso biasa yang kenyal tepung, ini benar-benar dagingnya berlimpah!',
    rating: 5,
    tag: 'Daging 85.7% Asli'
  },
  {
    name: 'Bambang Prasetyo',
    role: 'Pecinta Kuliner & Reseller Frozen Food, Cikarang',
    quote: 'Rasa gurihnya nendang banget dan bersih tanpa aroma kimia. Digoreng garing luarnya, dalamnya tetap empuk berair. Legalitas HAKI dan sertifikasi Halalnya bikin makin yakin repeat order.',
    rating: 5,
    tag: 'Halal BPJPH Terpercaya'
  },
  {
    name: 'dr. Indah Permata',
    role: 'Konsumen Bebas Pengawet, Tambun Selatan',
    quote: 'Sangat tenang menyajikan BAQIRA FOOD untuk anak-anak karena terjamin bebas boraks dan formalin. Rasio 1,5 kg dagingnya sangat nyata di tekstur seratnya!',
    rating: 5,
    tag: '100% Clean Label'
  }
];
