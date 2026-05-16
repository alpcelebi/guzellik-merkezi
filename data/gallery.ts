export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  width: number;
  height: number;
}

export const galleryImages: GalleryImage[] = [
  {
    id: "1",
    src: "/images/gallery-1.png",
    alt: "Resepsiyon alanı",
    category: "mekan",
    width: 800,
    height: 800,
  },
  {
    id: "2",
    src: "/images/gallery-2.png",
    alt: "Premium cilt bakım ürünleri",
    category: "cilt-bakimi",
    width: 800,
    height: 800,
  },
  {
    id: "3",
    src: "/images/gallery-3.png",
    alt: "Modern salon iç mekanı",
    category: "mekan",
    width: 800,
    height: 800,
  },
  {
    id: "4",
    src: "/images/gallery-4.png",
    alt: "Profesyonel güzellik ekipmanları",
    category: "manikur",
    width: 800,
    height: 800,
  },
  {
    id: "5",
    src: "/images/gallery-5.png",
    alt: "Spa ve dinlenme alanı",
    category: "masaj",
    width: 800,
    height: 800,
  },
  {
    id: "6",
    src: "/images/gallery-6.png",
    alt: "VIP tedavi odası",
    category: "mekan",
    width: 800,
    height: 800,
  },
  {
    id: "7",
    src: "/images/service-skincare.png",
    alt: "HydraFacial ve cilt bakım ekipmanları",
    category: "cilt-bakimi",
    width: 800,
    height: 800,
  },
  {
    id: "8",
    src: "/images/service-laser.png",
    alt: "Modern lazer odası",
    category: "lazer",
    width: 800,
    height: 800,
  },
  {
    id: "9",
    src: "/images/service-nails.png",
    alt: "Manikür ve pedikür alanı",
    category: "manikur",
    width: 800,
    height: 800,
  },
  {
    id: "10",
    src: "/images/service-lashes.png",
    alt: "Kaş ve kirpik stüdyosu",
    category: "kirpik",
    width: 800,
    height: 800,
  },
  {
    id: "11",
    src: "/images/service-massage.png",
    alt: "Masaj ve terapi odası",
    category: "masaj",
    width: 800,
    height: 800,
  },
  {
    id: "12",
    src: "/images/hero.png",
    alt: "Premium tedavi odası",
    category: "mekan",
    width: 800,
    height: 800,
  },
];

export const galleryCategories = [
  { id: "all", label: "Tümü" },
  { id: "cilt-bakimi", label: "Cilt Bakımı" },
  { id: "manikur", label: "Manikür" },
  { id: "kirpik", label: "Kaş & Kirpik" },
  { id: "masaj", label: "Masaj" },
  { id: "lazer", label: "Lazer" },
  { id: "mekan", label: "Mekanımız" },
];
