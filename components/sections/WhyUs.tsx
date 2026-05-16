"use client";

import { motion } from "framer-motion";
import {
  Award,
  Users,
  Clock,
  ShieldCheck,
  Sparkles,
  Heart,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";

const reasons = [
  {
    icon: Award,
    title: "Uzman Kadro",
    description:
      "Alanında sertifikalı, deneyimli ve sürekli kendini geliştiren profesyonel ekibimiz.",
  },
  {
    icon: Sparkles,
    title: "Son Teknoloji",
    description:
      "En güncel cihazlar ve FDA onaylı ürünlerle güvenli, etkili uygulamalar.",
  },
  {
    icon: ShieldCheck,
    title: "Hijyen Öncelikli",
    description:
      "Tek kullanımlık malzemeler ve sterilizasyon protokolleri ile maksimum hijyen.",
  },
  {
    icon: Clock,
    title: "Esnek Randevu",
    description:
      "Size uygun gün ve saatte, bekleme olmadan hizmet alma imkanı.",
  },
  {
    icon: Heart,
    title: "Kişiye Özel Bakım",
    description:
      "Her müşterimiz için özel analiz ve kişiselleştirilmiş bakım planları.",
  },
  {
    icon: Users,
    title: "Müşteri Memnuniyeti",
    description:
      "5000+ mutlu müşteri ve %98 memnuniyet oranı ile güvenilir hizmet.",
  },
];

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

export function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-muted/30 to-background py-20 md:py-28">
      {/* Background decoration */}
      <div className="absolute right-0 top-0 h-96 w-96 -translate-y-1/2 translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />

      <Container className="relative">
        <SectionHeader
          subtitle="Neden Biz?"
          title="Farkımızı Keşfedin"
          description="Güzellik yolculuğunuzda neden Luna Beauty Studio'yu tercih etmelisiniz?"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group rounded-2xl bg-background p-6 shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <reason.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-display text-lg font-semibold text-foreground">
                {reason.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
