"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { siteConfig } from "@/lib/constants";

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export default function IletisimPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast.error("Lütfen adınızı girin");
      return false;
    }
    if (!formData.phone.trim()) {
      toast.error("Lütfen telefon numaranızı girin");
      return false;
    }
    if (formData.phone.replace(/\D/g, "").length < 10) {
      toast.error("Geçerli bir telefon numarası girin");
      return false;
    }
    if (!formData.message.trim()) {
      toast.error("Lütfen mesajınızı yazın");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success("Mesajınız başarıyla gönderildi!", {
      description: "En kısa sürede sizinle iletişime geçeceğiz.",
    });

    setFormData({ name: "", phone: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-rose-50/50 to-background py-16 md:py-24">
        <Container>
          <SectionHeader
            subtitle="İletişim"
            title="Bizimle İletişime Geçin"
            description="Sorularınız, önerileriniz veya randevu talepleriniz için bize ulaşın"
          />
        </Container>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <h2 className="mb-6 font-display text-2xl font-semibold text-foreground">
                    Mesaj Gönderin
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Adınız Soyadınız *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Adınızı girin"
                        className="rounded-lg"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefon Numarası *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="05XX XXX XX XX"
                        className="rounded-lg"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">E-posta (Opsiyonel)</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="ornek@email.com"
                        className="rounded-lg"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Mesajınız *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Mesajınızı buraya yazın..."
                        rows={5}
                        className="rounded-lg resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full rounded-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Gönderiliyor..."
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Gönder
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              {/* Info Cards */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <Card className="border-0 bg-gradient-to-br from-rose-50 to-amber-50 shadow-sm">
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-foreground">
                        Adres
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {siteConfig.contact.address}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 bg-gradient-to-br from-amber-50 to-rose-50 shadow-sm">
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-foreground">
                        Telefon
                      </h3>
                      <a
                        href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                        className="mt-1 block text-sm text-muted-foreground hover:text-primary"
                      >
                        {siteConfig.contact.phone}
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 bg-gradient-to-br from-rose-50 to-amber-50 shadow-sm">
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-foreground">
                        E-posta
                      </h3>
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="mt-1 block text-sm text-muted-foreground hover:text-primary"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 bg-gradient-to-br from-amber-50 to-rose-50 shadow-sm">
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-foreground">
                        Çalışma Saatleri
                      </h3>
                      <div className="mt-1 space-y-1 text-sm text-muted-foreground">
                        <p>Hafta içi: {siteConfig.workingHours.weekdays}</p>
                        <p>Cumartesi: {siteConfig.workingHours.saturday}</p>
                        <p>Pazar: {siteConfig.workingHours.sunday}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* WhatsApp CTA */}
              <Card className="border-2 border-green-200 bg-green-50 shadow-sm">
                <CardContent className="p-6 text-center">
                  <MessageCircle className="mx-auto mb-4 h-12 w-12 text-green-600" />
                  <h3 className="mb-2 font-display text-lg font-semibold text-foreground">
                    Hızlı İletişim
                  </h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    WhatsApp üzerinden anında yanıt alın
                  </p>
                  <Button asChild className="rounded-full bg-green-600 hover:bg-green-700">
                    <a
                      href={siteConfig.whatsapp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      WhatsApp ile Yazın
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Map Section */}
      <section id="konum" className="bg-muted/30 py-12 md:py-20">
        <Container>
          <h2 className="mb-8 text-center font-display text-2xl font-semibold text-foreground md:text-3xl">
            Konumumuz
          </h2>
          <div className="aspect-video overflow-hidden rounded-2xl shadow-lg">
            <iframe
              src={siteConfig.map.embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Luna Beauty Studio Konum"
            />
          </div>
        </Container>
      </section>
    </div>
  );
}
