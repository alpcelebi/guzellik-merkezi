import { Hero } from "@/components/sections/Hero";
import { FeaturedServices } from "@/components/sections/FeaturedServices";
import { WhyUs } from "@/components/sections/WhyUs";
import { Pricing } from "@/components/sections/Pricing";
import { GalleryPreview } from "@/components/sections/GalleryPreview";
import { Team } from "@/components/sections/Team";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedServices />
      <WhyUs />
      <Pricing />
      <GalleryPreview />
      <Team />
      <Testimonials />
      <FAQ />
      <ContactCTA />
    </>
  );
}
