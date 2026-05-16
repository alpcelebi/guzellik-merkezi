import { Metadata } from "next";
import Link from "next/link";
import { Check, Sparkles, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { packages, pricingList } from "@/data/pricing";
import { formatPrice } from "@/lib/formatters";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Fiyatlar",
  description: "Luna Beauty Studio hizmet fiyatları ve avantajlı paketler. Cilt bakımı, lazer epilasyon, manikür, kirpik ve masaj fiyatları.",
};

export default function FiyatlarPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-rose-50/50 to-background py-16 md:py-24">
        <Container>
          <SectionHeader
            subtitle="Fiyatlarımız"
            title="Şeffaf ve Uygun Fiyatlar"
            description="Kaliteli hizmeti uygun fiyatlarla sunuyoruz. Paketlerimizle daha fazla tasarruf edin."
          />
        </Container>
      </section>

      {/* Packages Section */}
      <section className="py-12 md:py-20">
        <Container>
          <h2 className="mb-8 text-center font-display text-2xl font-semibold text-foreground md:text-3xl">
            Avantajlı Paketler
          </h2>

          <div className="grid gap-8 lg:grid-cols-3">
            {packages.map((pkg) => (
              <Card
                key={pkg.id}
                className={cn(
                  "relative h-full overflow-hidden border-2 transition-all duration-300",
                  pkg.popular
                    ? "border-primary shadow-lg shadow-primary/10"
                    : "border-transparent hover:border-primary/20"
                )}
              >
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
                      <li key={index} className="flex items-start gap-3 text-sm">
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
            ))}
          </div>
        </Container>
      </section>

      {/* Price List Section */}
      <section className="bg-muted/30 py-12 md:py-20">
        <Container>
          <h2 className="mb-8 text-center font-display text-2xl font-semibold text-foreground md:text-3xl">
            Tekil Hizmet Fiyatları
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {pricingList.map((category) => (
              <Card key={category.category} className="border-0 shadow-sm">
                <CardHeader className="pb-4">
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {category.category}
                  </h3>
                </CardHeader>
                <CardContent>
                  <ul className="divide-y divide-border">
                    {category.items.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center justify-between py-3"
                      >
                        <div>
                          <span className="text-sm font-medium text-foreground">
                            {item.name}
                          </span>
                          {item.duration && (
                            <span className="ml-2 text-xs text-muted-foreground">
                              ({item.duration})
                            </span>
                          )}
                          {item.note && (
                            <span className="ml-2 text-xs text-primary">
                              {item.note}
                            </span>
                          )}
                        </div>
                        <span className="font-semibold text-primary">
                          {formatPrice(item.price)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Disclaimer */}
          <div className="mt-12 flex items-start gap-3 rounded-xl bg-amber-50 p-4 text-sm text-amber-800">
            <Info className="mt-0.5 h-5 w-5 shrink-0" />
            <div>
              <p className="font-medium">Önemli Bilgi</p>
              <p className="mt-1 text-amber-700">
                Fiyatlarımız güncel olmakla birlikte, kampanya dönemlerinde
                değişiklik gösterebilir. Güncel fiyatlar için lütfen bizimle
                iletişime geçin veya stüdyomuzu ziyaret edin.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <Button asChild size="lg" className="rounded-full">
              <Link href="/iletisim">Bize Ulaşın</Link>
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
