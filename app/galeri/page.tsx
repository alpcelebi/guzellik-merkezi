"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { galleryImages, galleryCategories } from "@/data/gallery";
import { assetPath } from "@/lib/assets";
import { cn } from "@/lib/utils";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

export default function GaleriPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredImages =
    selectedCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const goToPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        selectedIndex === 0 ? filteredImages.length - 1 : selectedIndex - 1
      );
    }
  };

  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        selectedIndex === filteredImages.length - 1 ? 0 : selectedIndex + 1
      );
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-rose-50/50 to-background py-16 md:py-24">
        <Container>
          <SectionHeader
            subtitle="Galeri"
            title="Çalışmalarımızdan Kareler"
            description="Mekanımızı, ekibimizi ve başarılı uygulama örneklerimizi keşfedin"
          />
        </Container>
      </section>

      {/* Gallery Section */}
      <section className="py-12 md:py-20">
        <Container>
          {/* Category Filters */}
          <div className="mb-12 flex flex-wrap justify-center gap-2">
            {galleryCategories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className="rounded-full"
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* Gallery Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4"
            >
              {filteredImages.map((image, index) => (
                <motion.button
                  key={image.id}
                  variants={itemVariants}
                  layout
                  onClick={() => openLightbox(index)}
                  className={cn(
                    "group relative overflow-hidden rounded-xl bg-gradient-to-br from-rose-50 to-amber-50",
                    "aspect-square"
                  )}
                >
                  {/* Gallery Image */}
                  <Image
                    src={assetPath(image.src)}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/40">
                    <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                      <span className="rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-foreground">
                        Görüntüle
                      </span>
                      <span className="mt-2 text-xs text-white/80">
                        {image.alt}
                      </span>
                    </div>
                  </div>
                </motion.button>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredImages.length === 0 && (
            <div className="py-20 text-center text-muted-foreground">
              Bu kategoride henüz görsel bulunmuyor.
            </div>
          )}
        </Container>
      </section>

      {/* Lightbox Modal */}
      <Dialog open={selectedIndex !== null} onOpenChange={closeLightbox}>
        <DialogContent className="max-w-4xl border-0 bg-black/95 p-0">
          <AnimatePresence mode="wait">
            {selectedIndex !== null && (
              <motion.div
                key={selectedIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="relative aspect-square w-full"
              >
                {/* Lightbox Image */}
                <Image
                  src={assetPath(filteredImages[selectedIndex].src)}
                  alt={filteredImages[selectedIndex].alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />

                {/* Navigation */}
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                  aria-label="Önceki"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                  aria-label="Sonraki"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>

                {/* Close button */}
                <button
                  onClick={closeLightbox}
                  className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                  aria-label="Kapat"
                >
                  <X className="h-5 w-5" />
                </button>

                {/* Counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm">
                  {selectedIndex + 1} / {filteredImages.length}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </div>
  );
}
