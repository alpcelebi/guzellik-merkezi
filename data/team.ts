export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image?: string;
  specialties: string[];
}

export const team: TeamMember[] = [
  {
    id: "personel-1",
    name: "Personel Adı 1",
    role: "Kurucu & Baş Estetisyen",
    bio: "XX yıllık deneyimi ile cilt bakımı ve anti-aging tedavilerinde uzmanlaşmış. Uluslararası eğitimler almıştır.",
    image: "/images/team-1.png",
    specialties: ["HydraFacial", "Anti-Aging", "Cilt Analizi"],
  },
  {
    id: "personel-2",
    name: "Personel Adı 2",
    role: "Lazer Uzmanı",
    bio: "Lazer epilasyon ve cilt yenileme konusunda sertifikalı uzman. X yıldır binlerce müşteriye güvenli ve etkili uygulamalar sunuyor.",
    image: "/images/team-2.png",
    specialties: ["Lazer Epilasyon", "Cilt Yenileme", "IPL"],
  },
  {
    id: "personel-3",
    name: "Personel Adı 3",
    role: "Kaş & Kirpik Uzmanı",
    bio: "Microblading ve kirpik uygulamalarında X yıllık tecrübe. Her yüz şekline özel tasarımlar oluşturuyor.",
    image: "/images/team-3.png",
    specialties: ["Kirpik Lifting", "İpek Kirpik", "Kaş Laminasyonu"],
  },
  {
    id: "personel-4",
    name: "Personel Adı 4",
    role: "Masaj Terapisti",
    bio: "Aromaterapi ve refleksoloji sertifikalı masaj uzmanı. Geleneksel ve modern teknikleri birleştirmektedir.",
    image: "/images/team-4.png",
    specialties: ["Aromaterapi", "Hot Stone", "Refleksoloji"],
  },
  {
    id: "personel-5",
    name: "Personel Adı 5",
    role: "Nail Art Uzmanı",
    bio: "Tırnak tasarımı ve protez tırnak konusunda ödüllü sanatçı. Yaratıcı tasarımları ile fark yaratıyor.",
    image: "/images/team-5.png",
    specialties: ["Nail Art", "Protez Tırnak", "Kalıcı Oje"],
  },
  {
    id: "personel-6",
    name: "Personel Adı 6",
    role: "Müşteri İlişkileri",
    bio: "Randevu planlaması ve müşteri memnuniyeti konusunda deneyimli. Her müşterinin kendini özel hissetmesini sağlıyor.",
    image: "/images/team-6.png",
    specialties: ["Danışmanlık", "Randevu Yönetimi"],
  },
];
