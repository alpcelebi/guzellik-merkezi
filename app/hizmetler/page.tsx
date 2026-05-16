"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { siteConfig } from "@/lib/constants";
import { assetPath } from "@/lib/assets";
import {
  services,
  categoryLabels,
  ServiceCategory,
} from "@/data/services";
import { formatPrice } from "@/lib/formatters";

const categories: { id: ServiceCategory | "all"; label: string }[] = [
  { id: "all", label: "Tümü" },
  { id: "cilt-bakimi", label: "Cilt Bakımı" },
  { id: "lazer", label: "Lazer Epilasyon" },
  { id: "manikur-pedikur", label: "Manikür & Pedikür" },
  { id: "kas-kirpik", label: "Kaş & Kirpik" },
  { id: "masaj", label: "Masaj & Spa" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function HizmetlerPage() {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | "all">("all");

  const filteredServices =
    selectedCategory === "all"
      ? services
      : services.filter((s) => s.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-rose-50/50 to-background py-16 md:py-24">
        <Container>
          <SectionHeader
            subtitle="Hizmetlerimiz"
            title="Profesyonel Güzellik Hizmetleri"
            description="Uzman kadromuz ve son teknoloji ekipmanlarımızla size en iyi hizmeti sunuyoruz"
          />
        </Container>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-20">
        <Container>
          {/* Category Filters */}
          <div className="mb-12 flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
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

          {/* Services Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filteredServices.map((service) => (
                <motion.div key={service.id} variants={itemVariants} layout>
                  <Card className="group h-full overflow-hidden border-0 bg-gradient-to-br from-background to-muted/30 shadow-sm transition-all duration-300 hover:shadow-lg">
                    {/* Service Image */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-rose-50 to-amber-50">
                      {service.image && (
                        <Image
                          src={assetPath(service.image)}
                          alt={service.name}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      )}
                      {/* Category Badge */}
                      <div className="absolute left-4 top-4">
                        <span className="rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
                          {categoryLabels[service.category]}
                        </span>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <div className="mb-3 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>{service.duration}</span>
                        </div>
                        {service.price && (
                          <span className="text-lg font-semibold text-primary">
                            {formatPrice(service.price)}
                          </span>
                        )}
                      </div>

                      <h3 className="mb-2 font-display text-xl font-semibold text-foreground">
                        {service.name}
                      </h3>

                      <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                        {service.description}
                      </p>

                      <Button
                        asChild
                        variant="ghost"
                        size="sm"
                        className="group/btn -ml-2 text-primary hover:text-primary"
                      >
                        <a
                          href={`https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(`Merhaba, ${service.name} hizmeti hakkında bilgi almak istiyorum.`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Bilgi Al
                          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="mb-4 text-muted-foreground">
              Aradığınız hizmeti bulamadınız mı?
            </p>
            <Button asChild size="lg" className="rounded-full">
              <Link href="/iletisim">Bize Sorun</Link>
            </Button>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
