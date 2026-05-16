"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle, Phone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { siteConfig } from "@/lib/constants";
import { assetPath } from "@/lib/assets";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-rose-50 via-background to-amber-50/30">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{ backgroundImage: `url('${assetPath("/images/pattern.svg")}')` }}
      />

      {/* Decorative Elements */}
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -right-20 bottom-20 h-96 w-96 rounded-full bg-rose-200/20 blur-3xl" />

      <Container className="relative flex min-h-screen items-center pb-20 pt-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="mb-6 inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
            >
              <Sparkles className="h-4 w-4" />
              <span>Şehrinizin Premium Güzellik Merkezi</span>
            </motion.div>

            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              Güzelliğinize
              <span className="relative">
                <span className="relative z-10 text-primary"> Değer </span>
                <svg
                  className="absolute -bottom-2 left-0 h-3 w-full text-primary/30"
                  viewBox="0 0 200 12"
                  fill="currentColor"
                  preserveAspectRatio="none"
                >
                  <path d="M0 12C50 0 150 0 200 12H0Z" />
                </svg>
              </span>
              Katan Dokunuş
            </h1>

            <p className="mt-6 max-w-lg text-lg text-muted-foreground sm:text-xl">
              Uzman kadromuz ve son teknoloji ekipmanlarımızla, kendinizi özel hissedeceğiniz bir deneyim sunuyoruz.
              Cilt bakımından lazer epilasyona, manikürden masaja kadar tüm güzellik ihtiyaçlarınız için buradayız.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-full px-8 text-base"
              >
                <a
                  href={siteConfig.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp ile Ulaşın
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 rounded-full px-8 text-base"
              >
                <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  Hemen Arayın
                </a>
              </Button>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-12 flex flex-wrap gap-8 border-t pt-8"
            >
              {[
                { value: "10+", label: "Yıllık Deneyim" },
                { value: "5000+", label: "Mutlu Müşteri" },
                { value: "20+", label: "Uzman Hizmet" },
              ].map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <div className="font-display text-3xl font-bold text-primary sm:text-4xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-gradient-to-br from-rose-100 to-amber-50">
              {/* Hero Image */}
              <Image
                src={assetPath("/images/hero.png")}
                alt="Premium Güzellik Merkezi"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute -left-8 bottom-8 rounded-2xl bg-background/90 p-4 shadow-xl backdrop-blur-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <MessageCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">
                      Hızlı İletişim
                    </div>
                    <div className="text-xs text-muted-foreground">
                      WhatsApp ile anında ulaşın
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground">Keşfet</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="h-10 w-6 rounded-full border-2 border-muted-foreground/30"
          >
            <div className="mx-auto mt-2 h-2 w-1 rounded-full bg-muted-foreground/50" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
