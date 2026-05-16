export interface Testimonial {
  id: string;
  name: string;
  avatar?: string;
  rating: number;
  text: string;
  service: string;
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Müşteri A.",
    rating: 5,
    text: "HydraFacial sonrası cildim o kadar parlak ve canlı görünüyor ki, makyaja bile ihtiyaç duymuyorum. Uzmanlar gerçekten işinin ehli!",
    service: "HydraFacial",
    date: "2026-01-15",
  },
  {
    id: "2",
    name: "Müşteri B.",
    rating: 5,
    text: "Lazer epilasyonda en iyi sonuçları burada aldım. Uzmanlar çok bilgili ve uygulamalar hiç acıtmıyor. Kesinlikle tavsiye ederim.",
    service: "Lazer Epilasyon",
    date: "2026-01-10",
  },
  {
    id: "3",
    name: "Müşteri C.",
    rating: 5,
    text: "Kirpik lifting yaptırdım ve sonuç muhteşem! Doğal ama çok etkileyici. Ellerine sağlık.",
    service: "Kirpik Lifting",
    date: "2026-01-08",
  },
  {
    id: "4",
    name: "Müşteri D.",
    rating: 5,
    text: "Aromaterapi masajı sonrası kendimi yeniden doğmuş gibi hissettim. Stresim tamamen gitti, ortam da çok huzurlu.",
    service: "Aromaterapi Masajı",
    date: "2025-12-28",
  },
  {
    id: "5",
    name: "Müşteri E.",
    rating: 4,
    text: "Premium paketi aldım ve çok memnunum. Fiyat-performans açısından harika. Tek söyleyeceğim hafta sonları biraz yoğun olabiliyor.",
    service: "Premium Paket",
    date: "2025-12-20",
  },
  {
    id: "6",
    name: "Müşteri F.",
    rating: 5,
    text: "Kalıcı oje uygulaması 3 haftadır sapasağlam duruyor. Renk seçiminde çok yardımcı oldular, tam istediğim tonu bulduk.",
    service: "Kalıcı Oje",
    date: "2025-12-15",
  },
  {
    id: "7",
    name: "Müşteri G.",
    rating: 5,
    text: "Kaş laminasyonu yaptırdım, kaşlarım hiç bu kadar dolgun ve şekilli görünmemişti. Her sabah 10 dakika kazanıyorum!",
    service: "Kaş Laminasyonu",
    date: "2025-12-10",
  },
  {
    id: "8",
    name: "Müşteri H.",
    rating: 5,
    text: "Anti-aging bakımından sonra kırışıklıklarım gözle görülür şekilde azaldı. Düzenli olarak devam edeceğim.",
    service: "Anti-Aging Bakım",
    date: "2025-12-05",
  },
];
