"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { packages } from "@/data/pricing";
import { formatPrice } from "@/lib/formatters";
import { cn } from "@/lib/utils";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export function Pricing() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeader
          subtitle="Paketlerimiz"
          title="Size Özel Fiyatlar"
          description="İhtiyaçlarınıza uygun paketi seçin, avantajlı fiyatlarla güzelliğinize yatırım yapın"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 lg:grid-cols-3"
        >
          {packages.map((pkg) => (
            <motion.div key={pkg.id} variants={itemVariants}>
              <Card
                className={cn(
                  "relative h-full overflow-hidden border-2 transition-all duration-300",
                  pkg.popular
                    ? "border-primary shadow-lg shadow-primary/10"
                    : "border-transparent hover:border-primary/20"
                )}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute -right-12 top-6 rotate-45 bg-primary px-12 py-1 text-xs font-medium text-primary-foreground">
                    Popüler
                  </div>
                )}

                <CardHeader className="pb-4">
                  {pkg.savings && (
                    <span className="mb-2 inline-flex w-fit items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                      <Sparkles className="h-3 w-3" />
                      {pkg.savings}
                    </span>
                  )}
                  <h3 className="font-display text-2xl font-semibold text-foreground">
                    {pkg.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {pkg.description}
                  </p>
                </CardHeader>

                <CardContent className="flex flex-col">
                  <div className="mb-6">
                    <span className="font-display text-4xl font-bold text-foreground">
                      {formatPrice(pkg.price)}
                    </span>
                  </div>

                  <ul className="mb-8 flex-1 space-y-3">
                    {pkg.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-sm"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    variant={pkg.popular ? "default" : "outline"}
                    className="w-full rounded-full"
                  >
                    <Link href="/iletisim">Bilgi Al</Link>
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
          <p className="mb-4 text-sm text-muted-foreground">
            Tekil hizmet fiyatlarımızı görmek için
          </p>
          <Button asChild variant="link" className="text-primary">
            <Link href="/fiyatlar">Fiyat Listesine Göz Atın →</Link>
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
