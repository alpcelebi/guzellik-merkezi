"use client";

import Link from "next/link";
import { Instagram, Facebook, Twitter, Youtube, MapPin, Phone, Mail, Clock } from "lucide-react";
import { Container } from "./Container";
import { siteConfig, footerLinks } from "@/lib/constants";

const socialLinks = [
  { name: "Instagram", href: siteConfig.social.instagram, icon: Instagram },
  { name: "Facebook", href: siteConfig.social.facebook, icon: Facebook },
  { name: "Twitter", href: siteConfig.social.twitter, icon: Twitter },
  { name: "YouTube", href: siteConfig.social.youtube, icon: Youtube },
];

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <Container className="py-12 md:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand & Contact */}
          <div className="space-y-4">
            <Link
              href="/"
              className="font-display text-xl font-bold tracking-tight text-foreground"
            >
              {siteConfig.name}
            </Link>
            <p className="text-sm text-muted-foreground">
              Şehrinizin kalbinde premium güzellik deneyimi.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <a
                href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <Phone className="h-4 w-4" />
                {siteConfig.contact.phone}
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <Mail className="h-4 w-4" />
                {siteConfig.contact.email}
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>{siteConfig.contact.address}</span>
              </div>
            </div>
          </div>

          {/* Hizmetler */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Hizmetler</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.hizmetler.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kurumsal */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Kurumsal</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.kurumsal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Çalışma Saatleri */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Çalışma Saatleri</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Hafta içi: {siteConfig.workingHours.weekdays}</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Cumartesi: {siteConfig.workingHours.saturday}</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Pazar: {siteConfig.workingHours.sunday}</span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center text-sm text-muted-foreground sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} {siteConfig.name}. Tüm hakları saklıdır.</p>
          <div className="flex gap-4">
            <Link href="/gizlilik" className="hover:text-foreground">
              Gizlilik Politikası
            </Link>
            <Link href="/kullanim-sartlari" className="hover:text-foreground">
              Kullanım Şartları
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
