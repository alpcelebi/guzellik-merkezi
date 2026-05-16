"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { featuredServices } from "@/data/services";
import { assetPath } from "@/lib/assets";
import { formatPrice } from "@/lib/formatters";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function FeaturedServices() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeader
          subtitle="Hizmetlerimiz"
          title="Öne Çıkan Hizmetler"
          description="En çok tercih edilen bakım ve güzellik hizmetlerimizi keşfedin"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {featuredServices.slice(0, 6).map((service) => (
            <motion.div key={service.id} variants={itemVariants}>
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
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </div>

                <CardContent className="p-6">
                  <div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{service.duration}</span>
                    {service.price && (
                      <>
                        <span className="text-muted-foreground/50">•</span>
                        <span className="font-medium text-primary">
                          {formatPrice(service.price)}
                        </span>
                      </>
                    )}
                  </div>

                  <h3 className="mb-2 font-display text-xl font-semibold text-foreground">
                    {service.name}
                  </h3>

                  <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
                    {service.description}
                  </p>

                  <Button
                    asChild
                    variant="ghost"
                    size="sm"
                    className="group/btn -ml-2 text-primary hover:text-primary"
                  >
                    <Link href="/hizmetler">
                      Detayları Gör
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Button asChild variant="outline" size="lg" className="rounded-full">
            <Link href="/hizmetler">
              Tüm Hizmetleri Gör
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
