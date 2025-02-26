import FAQ from "@/components/home/FAQ";
import Feature from "@/components/home/Feature";
import Hero from "@/components/home/Hero";
import SocialProof from "@/components/home/SocialProof";
import Testimonials from "@/components/home/Testimonials";
import { defaultLocale, getDictionary } from "@/lib/i18n";
import Showcase from "./Showcase";
export default async function HomeIndex({ lang }: { lang: string }) {
  const langName = lang || defaultLocale;
  const dict = await getDictionary(langName);
  return (
    <>
      {/* Hero Section */}
      <Hero locale={dict.Hero} langName={langName} CTALocale={dict.CTAButton} />
      <SocialProof locale={dict.SocialProof} />
      {/* display technology stack, partners, project honors, etc. */}
      {/* <ScrollingLogos /> */}
      {/* Showcase */}
      <Showcase id="Showcase" locale={dict.Showcase} />
      {/* USP (Unique Selling Proposition) */}
      <Feature id="products" locale={dict.Feature} langName={langName} />
      {/* Testimonials */}
      {/* <Testimonials id="Testimonials" locale={dict.Testimonials} /> */}
      {/* FAQ (Frequently Asked Questions) */}
      {/* <FAQ id="FAQ" locale={dict.FAQ} langName={langName} /> */}
    </>
  );
}
