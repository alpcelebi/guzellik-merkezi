"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { siteConfig } from "@/lib/constants";

export function ContactCTA() {
  return (
    <section id="konum" className="bg-muted/30 py-20 md:py-28">
      <Container>
        <SectionHeader
          subtitle="İletişim"
          title="Bize Ulaşın"
          description="Sorularınız için iletişime geçin veya hemen randevu alın"
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="aspect-video overflow-hidden rounded-2xl bg-muted lg:aspect-auto lg:h-full lg:min-h-[400px]"
          >
            <iframe
              src={siteConfig.map.embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "100%" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Luna Beauty Studio Konum"
            />
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-6">
              {/* Address */}
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display text-lg font-semibold text-foreground">
                    Adres
                  </h4>
                  <p className="mt-1 text-muted-foreground">
                    {siteConfig.contact.address}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display text-lg font-semibold text-foreground">
                    Telefon
                  </h4>
                  <a
                    href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                    className="mt-1 block text-muted-foreground transition-colors hover:text-primary"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display text-lg font-semibold text-foreground">
                    Çalışma Saatleri
                  </h4>
                  <div className="mt-1 space-y-1 text-muted-foreground">
                    <p>Hafta içi: {siteConfig.workingHours.weekdays}</p>
                    <p>Cumartesi: {siteConfig.workingHours.saturday}</p>
                    <p>Pazar: {siteConfig.workingHours.sunday}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-full">
                <a
                  href={siteConfig.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp ile Yazın
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full"
              >
                <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  Hemen Arayın
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
