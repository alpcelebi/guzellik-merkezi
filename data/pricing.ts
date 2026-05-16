export interface PricingPackage {
  id: string;
  name: string;
  description: string;
  price: number;
  features: string[];
  popular?: boolean;
  savings?: string;
}

export interface PricingItem {
  category: string;
  items: {
    name: string;
    price: number;
    duration?: string;
    note?: string;
  }[];
}

export const packages: PricingPackage[] = [
  {
    id: "baslangic",
    name: "Başlangıç Paketi",
    description: "Güzellik rutininize başlamak için ideal paket",
    price: 2500,
    features: [
      "HydraFacial (1 seans)",
      "Klasik Manikür (2 seans)",
      "Kaş Dizayn (2 seans)",
      "Profesyonel Cilt Analizi",
      "%10 sonraki işlemlerde indirim",
    ],
    savings: "400₺ tasarruf",
  },
  {
    id: "premium",
    name: "Premium Paket",
    description: "En çok tercih edilen kapsamlı bakım paketi",
    price: 5500,
    features: [
      "HydraFacial (3 seans)",
      "Tüm Vücut Lazer (1 seans)",
      "Kalıcı Oje (2 seans)",
      "Kirpik Lifting (1 seans)",
      "Aromaterapi Masajı (1 seans)",
      "%15 sonraki işlemlerde indirim",
      "Öncelikli randevu hakkı",
    ],
    popular: true,
    savings: "1200₺ tasarruf",
  },
  {
    id: "vip",
    name: "VIP Paket",
    description: "Kendinize özel tüm yıl ayrıcalıklı bakım",
    price: 12000,
    features: [
      "Tüm hizmetlerden %25 indirim",
      "HydraFacial (6 seans)",
      "Tüm Vücut Lazer (4 seans)",
      "Aylık ücretsiz manikür",
      "Her ay 1 masaj seansı",
      "VIP bekleme salonu erişimi",
      "Kişiye özel bakım danışmanlığı",
      "Hediye ürün paketi",
    ],
    savings: "3500₺+ tasarruf",
  },
];

export const pricingList: PricingItem[] = [
  {
    category: "Cilt Bakımı",
    items: [
      { name: "Profesyonel Cilt Analizi", price: 300, duration: "30 dk" },
      { name: "HydraFacial", price: 1500, duration: "60 dk" },
      { name: "Anti-Aging Bakım", price: 1800, duration: "75 dk" },
      { name: "Akne & Leke Bakımı", price: 1200, duration: "60 dk" },
      { name: "Cilt Yenileme (Peeling)", price: 800, duration: "45 dk" },
    ],
  },
  {
    category: "Lazer Epilasyon",
    items: [
      { name: "Tüm Vücut", price: 3500, duration: "120 dk" },
      { name: "Yarım Vücut", price: 2000, duration: "60 dk" },
      { name: "Bikini Bölgesi", price: 800, duration: "30 dk" },
      { name: "Koltuk Altı", price: 500, duration: "20 dk" },
      { name: "Yüz Bölgesi", price: 600, duration: "25 dk" },
      { name: "Bacak (Tek)", price: 900, duration: "45 dk" },
    ],
  },
  {
    category: "Manikür & Pedikür",
    items: [
      { name: "Klasik Manikür", price: 250, duration: "45 dk" },
      { name: "Klasik Pedikür", price: 300, duration: "45 dk" },
      { name: "Kalıcı Oje", price: 400, duration: "60 dk" },
      { name: "Spa Pedikür", price: 450, duration: "60 dk" },
      { name: "Protez Tırnak", price: 700, duration: "90 dk" },
      { name: "Tırnak Sanatı (nail art)", price: 150, note: "ek ücret" },
    ],
  },
  {
    category: "Kaş & Kirpik",
    items: [
      { name: "Kaş Dizayn", price: 200, duration: "30 dk" },
      { name: "Kaş Laminasyonu", price: 600, duration: "45 dk" },
      { name: "Kirpik Lifting", price: 500, duration: "45 dk" },
      { name: "İpek Kirpik", price: 1200, duration: "90 dk" },
      { name: "Kirpik Dolgusu", price: 400, duration: "45 dk", note: "dolgu" },
    ],
  },
  {
    category: "Masaj & Spa",
    items: [
      { name: "Aromaterapi Masajı", price: 900, duration: "60 dk" },
      { name: "Sıcak Taş Masajı", price: 1100, duration: "75 dk" },
      { name: "Anti-Selülit Masajı", price: 800, duration: "60 dk" },
      { name: "Refleksoloji", price: 600, duration: "45 dk" },
      { name: "Sırt & Boyun Masajı", price: 500, duration: "30 dk" },
    ],
  },
];
