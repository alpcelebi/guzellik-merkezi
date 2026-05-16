export const siteConfig = {
  name: "İşletme Adı",
  description: "Şehrinizin kalbinde premium güzellik deneyimi. Cilt bakımı, lazer epilasyon, manikür, kirpik ve masaj hizmetleri.",
  url: "https://alpcelebi.github.io/guzellik-merkezi",
  ogImage: "https://alpcelebi.github.io/guzellik-merkezi/images/hero.png",
  
  contact: {
    phone: "+90 5XX XXX XX XX",
    phoneRaw: "905XXXXXXXXX",
    email: "info@isletmeadiniz.com",
    address: "Cadde/Sokak Adı No: XX, İlçe, Şehir",
    city: "Şehir Adı",
  },
  
  social: {
    instagram: "https://instagram.com/isletmehesabiniz",
    facebook: "https://facebook.com/isletmehesabiniz",
    twitter: "https://twitter.com/isletmehesabiniz",
    youtube: "https://youtube.com/@isletmehesabiniz",
  },
  
  whatsapp: {
    number: "905XXXXXXXXX",
    message: "Merhaba, randevu almak istiyorum.",
    get url() {
      return `https://wa.me/${this.number}?text=${encodeURIComponent(this.message)}`;
    },
  },
  
  workingHours: {
    weekdays: "09:00 - 20:00",
    saturday: "10:00 - 18:00",
    sunday: "Kapalı",
  },
  
  map: {
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.6504296700287!2d29.052847315415856!3d40.98916297930202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab86a1edb5c3d%3A0x7768ad2d27ddda0c!2sBa%C4%9Fdat%20Cd.%2C%20Kad%C4%B1k%C3%B6y%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1640000000000!5m2!1str!2str",
    lat: 40.989163,
    lng: 29.055036,
  },
};

export const navigation = [
  { name: "Ana Sayfa", href: "/" },
  { name: "Hizmetler", href: "/hizmetler" },
  { name: "Fiyatlar", href: "/fiyatlar" },
  { name: "Hakkımızda", href: "/hakkimizda" },
  { name: "Galeri", href: "/galeri" },
  { name: "İletişim", href: "/iletisim" },
];

export const footerLinks = {
  hizmetler: [
    { name: "Cilt Bakımı", href: "/hizmetler?category=cilt-bakimi" },
    { name: "Lazer Epilasyon", href: "/hizmetler?category=lazer" },
    { name: "Manikür & Pedikür", href: "/hizmetler?category=manikur-pedikur" },
    { name: "Kaş & Kirpik", href: "/hizmetler?category=kas-kirpik" },
    { name: "Masaj & Spa", href: "/hizmetler?category=masaj" },
  ],
  kurumsal: [
    { name: "Hakkımızda", href: "/hakkimizda" },
    { name: "Ekibimiz", href: "/hakkimizda#ekip" },
    { name: "Galeri", href: "/galeri" },
    { name: "SSS", href: "/#sss" },
  ],
  iletisim: [
    { name: "İletişim", href: "/iletisim" },
    { name: "Konum", href: "/iletisim#konum" },
  ],
};
