export interface Service {
  id: string;
  name: string;
  description: string;
  duration: string;
  price?: number;
  category: ServiceCategory;
  image?: string;
  featured?: boolean;
}

export type ServiceCategory =
  | "cilt-bakimi"
  | "lazer"
  | "manikur-pedikur"
  | "kas-kirpik"
  | "masaj";

export const categoryLabels: Record<ServiceCategory, string> = {
  "cilt-bakimi": "Cilt Bakımı",
  "lazer": "Lazer Epilasyon",
  "manikur-pedikur": "Manikür & Pedikür",
  "kas-kirpik": "Kaş & Kirpik",
  "masaj": "Masaj & Spa",
};

export const categoryImages: Record<ServiceCategory, string> = {
  "cilt-bakimi": "/images/service-skincare.png",
  "lazer": "/images/service-laser.png",
  "manikur-pedikur": "/images/service-nails.png",
  "kas-kirpik": "/images/service-lashes.png",
  "masaj": "/images/service-massage.png",
};

export const services: Service[] = [
  // Cilt Bakımı
  {
    id: "hydrafacial",
    name: "HydraFacial",
    description: "Derin temizlik, peeling ve nemlendirme işlemlerini tek seansta birleştiren, cildinizi anında canlandıran özel bakım.",
    duration: "60 dk",
    price: 1500,
    category: "cilt-bakimi",
    image: "/images/service-skincare.png",
    featured: true,
  },
  {
    id: "cilt-analizi",
    name: "Profesyonel Cilt Analizi",
    description: "Uzman kadromuz ile cildinizin ihtiyaçlarını belirleyerek size özel bakım planı oluşturuyoruz.",
    duration: "30 dk",
    price: 300,
    category: "cilt-bakimi",
    image: "/images/service-skincare.png",
  },
  {
    id: "anti-aging",
    name: "Anti-Aging Bakım",
    description: "Yaşlanma karşıtı özel serumlar ve masaj teknikleri ile cildinizin elastikiyetini artırın.",
    duration: "75 dk",
    price: 1800,
    category: "cilt-bakimi",
    image: "/images/service-skincare.png",
    featured: true,
  },
  {
    id: "akne-bakimi",
    name: "Akne & Leke Bakımı",
    description: "Akne izleri ve cilt lekelerine yönelik özel tedavi protokolü ile pürüzsüz bir cilde kavuşun.",
    duration: "60 dk",
    price: 1200,
    category: "cilt-bakimi",
    image: "/images/service-skincare.png",
  },
  // Lazer
  {
    id: "lazer-tum-vucut",
    name: "Tüm Vücut Lazer Epilasyon",
    description: "Son teknoloji lazer cihazlarımız ile kalıcı ve ağrısız epilasyon deneyimi.",
    duration: "120 dk",
    price: 3500,
    category: "lazer",
    image: "/images/service-laser.png",
    featured: true,
  },
  {
    id: "lazer-bikini",
    name: "Bikini Bölgesi Lazer",
    description: "Hassas bölgeler için özel başlık teknolojisi ile güvenli ve etkili epilasyon.",
    duration: "30 dk",
    price: 800,
    category: "lazer",
    image: "/images/service-laser.png",
  },
  {
    id: "lazer-koltuk-alti",
    name: "Koltuk Altı Lazer",
    description: "Hızlı ve pratik koltuk altı epilasyonu ile pürüzsüz bir görünüm.",
    duration: "20 dk",
    price: 500,
    category: "lazer",
    image: "/images/service-laser.png",
  },
  {
    id: "lazer-yuz",
    name: "Yüz Bölgesi Lazer",
    description: "Yüz bölgesindeki istenmeyen tüyler için hassas ve etkili lazer uygulaması.",
    duration: "25 dk",
    price: 600,
    category: "lazer",
    image: "/images/service-laser.png",
  },
  // Manikür & Pedikür
  {
    id: "klasik-manikur",
    name: "Klasik Manikür",
    description: "Tırnak şekillendirme, tırnak eti bakımı ve cilalama ile el bakımınızı tamamlayın.",
    duration: "45 dk",
    price: 250,
    category: "manikur-pedikur",
    image: "/images/service-nails.png",
  },
  {
    id: "kalici-oje",
    name: "Kalıcı Oje Uygulaması",
    description: "2-3 hafta dayanıklı, parlak ve çizilmeye karşı dirençli kalıcı oje.",
    duration: "60 dk",
    price: 400,
    category: "manikur-pedikur",
    image: "/images/service-nails.png",
    featured: true,
  },
  {
    id: "spa-pedikur",
    name: "Spa Pedikür",
    description: "Ayak banyosu, peeling, masaj ve bakım ile ayaklarınıza özel ilgi.",
    duration: "60 dk",
    price: 450,
    category: "manikur-pedikur",
    image: "/images/service-nails.png",
  },
  {
    id: "protez-tirnak",
    name: "Protez Tırnak",
    description: "Doğal görünümlü, uzun ömürlü protez tırnak uygulaması.",
    duration: "90 dk",
    price: 700,
    category: "manikur-pedikur",
    image: "/images/service-nails.png",
  },
  // Kaş & Kirpik
  {
    id: "kas-dizayn",
    name: "Kaş Dizayn & Şekillendirme",
    description: "Yüz hatlarınıza uygun profesyonel kaş tasarımı.",
    duration: "30 dk",
    price: 200,
    category: "kas-kirpik",
    image: "/images/service-lashes.png",
  },
  {
    id: "kirpik-lifting",
    name: "Kirpik Lifting",
    description: "Doğal kirpiklerinizi kıvırarak gözlerinize derinlik katın.",
    duration: "45 dk",
    price: 500,
    category: "kas-kirpik",
    image: "/images/service-lashes.png",
    featured: true,
  },
  {
    id: "ipek-kirpik",
    name: "İpek Kirpik Uygulaması",
    description: "Tek tek uygulanan ipek kirpikler ile doğal ve etkileyici bakışlar.",
    duration: "90 dk",
    price: 1200,
    category: "kas-kirpik",
    image: "/images/service-lashes.png",
  },
  {
    id: "kas-laminasyon",
    name: "Kaş Laminasyonu",
    description: "Kaşlarınızı dolgun ve şekilli gösterin, haftalarca kalıcı etki.",
    duration: "45 dk",
    price: 600,
    category: "kas-kirpik",
    image: "/images/service-lashes.png",
  },
  // Masaj & Spa
  {
    id: "aromaterapi-masaj",
    name: "Aromaterapi Masajı",
    description: "Uçucu yağlar eşliğinde rahatlatan ve yenileyen masaj deneyimi.",
    duration: "60 dk",
    price: 900,
    category: "masaj",
    image: "/images/service-massage.png",
    featured: true,
  },
  {
    id: "hot-stone",
    name: "Sıcak Taş Masajı",
    description: "Volkanik taşların ısısı ile derin kas gevşemesi ve stres atma.",
    duration: "75 dk",
    price: 1100,
    category: "masaj",
    image: "/images/service-massage.png",
  },
  {
    id: "anti-selülit",
    name: "Anti-Selülit Masajı",
    description: "Özel teknikler ile selülit görünümünü azaltın ve cildinizi sıkılaştırın.",
    duration: "60 dk",
    price: 800,
    category: "masaj",
    image: "/images/service-massage.png",
  },
  {
    id: "refleksoloji",
    name: "Refleksoloji",
    description: "Ayak refleks noktalarına uygulanan basınç ile tüm vücudunuzu dengeleyin.",
    duration: "45 dk",
    price: 600,
    category: "masaj",
    image: "/images/service-massage.png",
  },
];

export const featuredServices = services.filter((s) => s.featured);

export const getServicesByCategory = (category: ServiceCategory) =>
  services.filter((s) => s.category === category);

export const getServiceById = (id: string) =>
  services.find((s) => s.id === id);
