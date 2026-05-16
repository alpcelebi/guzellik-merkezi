import { Metadata } from "next";
import { Award, Heart, Users, Sparkles, Target, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Team } from "@/components/sections/Team";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description: "Luna Beauty Studio hakkında. 10 yılı aşkın deneyimimiz, uzman kadromuz ve misyonumuz hakkında bilgi edinin.",
};

const values = [
  {
    icon: Heart,
    title: "Müşteri Odaklılık",
    description:
      "Her müşterimiz bizim için özeldir. İhtiyaçlarınızı dinler, size özel çözümler sunarız.",
  },
  {
    icon: Award,
    title: "Kalite Anlayışı",
    description:
      "En kaliteli ürünler ve en güncel tekniklerle hizmet veriyoruz. Kaliteden asla ödün vermiyoruz.",
  },
  {
    icon: Users,
    title: "Uzman Kadro",
    description:
      "Alanında sertifikalı, sürekli kendini geliştiren profesyonellerden oluşan ekibimiz.",
  },
  {
    icon: Sparkles,
    title: "Yenilikçilik",
    description:
      "Güzellik sektöründeki gelişmeleri yakından takip eder, en yeni teknolojileri uygularız.",
  },
];

const stats = [
  { value: "10+", label: "Yıllık Deneyim" },
  { value: "5000+", label: "Mutlu Müşteri" },
  { value: "20+", label: "Farklı Hizmet" },
  { value: "6", label: "Uzman Personel" },
];

export default function HakkimizdaPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-rose-50/50 to-background py-16 md:py-24">
        <Container>
          <SectionHeader
            subtitle="Hakkımızda"
            title="Güzelliğe Adanmış 10 Yıl"
            description="Luna Beauty Studio olarak, İstanbul'un kalbinde premium güzellik deneyimi sunuyoruz."
          />
        </Container>
      </section>

      {/* Story Section */}
      <section className="py-12 md:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 font-display text-2xl font-semibold text-foreground md:text-3xl">
              Hikayemiz
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                2016 yılında küçük bir stüdyo olarak başladığımız yolculuğumuz,
                bugün İstanbul&apos;un en güvenilir güzellik merkezlerinden biri olmamızla
                sonuçlandı. Kurucumuz Ayşe Yılmaz&apos;ın vizyonuyla şekillenen
                {siteConfig.name}, her zaman kalite ve müşteri memnuniyetini ön
                planda tuttu.
              </p>
              <p>
                Yıllar içinde binlerce müşterimize hizmet verdik, onlarca uzmanı
                ekibimize kattık ve sürekli kendimizi geliştirdik. Bugün, cilt
                bakımından lazer epilasyona, manikürden masaja kadar geniş bir
                hizmet yelpazesiyle sizlere en iyi deneyimi sunmak için buradayız.
              </p>
              <p>
                Her müşterimizin kendini özel hissetmesi, stüdyomuzdan mutlu ve
                güzel ayrılması bizim en büyük motivasyonumuz. Siz de bu deneyimi
                yaşamak için bizi ziyaret edin.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="bg-primary py-12 md:py-16">
        <Container>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-4xl font-bold text-primary-foreground md:text-5xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-primary-foreground/80">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 md:py-20">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="border-0 bg-gradient-to-br from-rose-50 to-amber-50 shadow-sm">
              <CardContent className="p-8">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="mb-4 font-display text-2xl font-semibold text-foreground">
                  Misyonumuz
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  Her müşterimize kişiselleştirilmiş, kaliteli ve güvenilir
                  güzellik hizmetleri sunarak, kendilerini en iyi hallerinde
                  hissetmelerini sağlamak. Profesyonel yaklaşımımız ve sıcak
                  atmosferimizle güzellik deneyimini bir ayrıcalığa dönüştürmek.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-amber-50 to-rose-50 shadow-sm">
              <CardContent className="p-8">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Eye className="h-6 w-6" />
                </div>
                <h3 className="mb-4 font-display text-2xl font-semibold text-foreground">
                  Vizyonumuz
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  Türkiye&apos;nin önde gelen güzellik merkezi olmak, sektörde
                  yenilikçi uygulamalarla öncü olmak ve müşterilerimizin ilk
                  tercihi olmaya devam etmek. Güzellik ve wellness alanında
                  referans noktası olmak.
                </p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="bg-muted/30 py-12 md:py-20">
        <Container>
          <h2 className="mb-12 text-center font-display text-2xl font-semibold text-foreground md:text-3xl">
            Değerlerimiz
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Card
                key={index}
                className="border-0 bg-background shadow-sm transition-all duration-300 hover:shadow-md"
              >
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 font-display text-lg font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <div id="ekip">
        <Team />
      </div>
    </div>
  );
}
