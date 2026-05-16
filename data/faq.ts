export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export const faqItems: FAQItem[] = [
  {
    id: "randevu-nasil",
    question: "Randevu nasıl alabilirim?",
    answer: "Web sitemiz üzerinden randevu formunu doldurabilir, WhatsApp hattımızdan bize yazabilir veya doğrudan telefonla arayabilirsiniz. Size en uygun tarih ve saati birlikte belirleyelim.",
    category: "genel",
  },
  {
    id: "iptal-politikasi",
    question: "Randevu iptal veya değişiklik yapabilir miyim?",
    answer: "Randevunuzu en az 24 saat öncesinden iptal edebilir veya değiştirebilirsiniz. Son dakika iptalleri için lütfen bizi arayın, elimizden geleni yaparız.",
    category: "genel",
  },
  {
    id: "odeme-yontemleri",
    question: "Hangi ödeme yöntemlerini kabul ediyorsunuz?",
    answer: "Nakit, kredi kartı ve banka kartı ile ödeme yapabilirsiniz. Paket alımlarında taksit seçeneği de sunuyoruz.",
    category: "genel",
  },
  {
    id: "lazer-acir-mi",
    question: "Lazer epilasyon acır mı?",
    answer: "Son teknoloji cihazlarımız sayesinde lazer epilasyon işlemi oldukça konforlu hale geldi. Hafif bir sıcaklık hissi dışında genellikle rahatsızlık yaşanmaz. Hassas bölgelerde soğutma sistemi kullanıyoruz.",
    category: "lazer",
  },
  {
    id: "lazer-seans",
    question: "Lazer epilasyon kaç seans sürer?",
    answer: "Kişinin cilt yapısı, tüy yoğunluğu ve bölgeye göre değişmekle birlikte genellikle 6-8 seans yeterli olmaktadır. Seanslar arası 4-6 hafta beklenmesi gerekir.",
    category: "lazer",
  },
  {
    id: "hydrafacial-kimler",
    question: "HydraFacial her cilt tipine uygun mu?",
    answer: "Evet, HydraFacial her cilt tipine uyarlanabilir. Yağlı, kuru, karma veya hassas ciltler için farklı serumlar kullanılır. Uygulamadan önce cilt analizinizi yapıyoruz.",
    category: "cilt",
  },
  {
    id: "kirpik-lifting-sure",
    question: "Kirpik lifting ne kadar kalıcıdır?",
    answer: "Kirpik lifting etkisi ortalama 6-8 hafta sürer. Bu süre kirpik döngünüze ve bakımınıza göre değişebilir.",
    category: "kirpik",
  },
  {
    id: "paket-gecerlilik",
    question: "Aldığım paketlerin geçerlilik süresi var mı?",
    answer: "Paketlerimiz satın alma tarihinden itibaren 1 yıl geçerlidir. VIP paketlerde bu süre 18 aydır.",
    category: "genel",
  },
  {
    id: "ilk-ziyaret",
    question: "İlk ziyaretimde ne beklemelyim?",
    answer: "İlk ziyaretinizde sizi tanımak ve ihtiyaçlarınızı anlamak için kısa bir danışma yapıyoruz. Cilt analizi veya hizmet öncesi değerlendirme ücretsizdir.",
    category: "genel",
  },
  {
    id: "alerji-hassasiyet",
    question: "Hassas cildim var, işlem yaptırabilir miyim?",
    answer: "Kesinlikle! Hassas ciltler için özel ürünler ve protokollerimiz mevcut. İşlem öncesi alerji testleri yapıyor ve size uygun ürünleri seçiyoruz.",
    category: "cilt",
  },
];
