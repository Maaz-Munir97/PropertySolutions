import type { Metadata } from "next";
import AboutStory from "@/components/about/AboutStory";
import ValuesSection from "@/components/about/ValuesSection";
import Testimonials from "@/components/home/Testimonials";
import CtaBanner from "@/components/ui/CtaBanner";
import PageHero from "@/components/ui/PageHero";
import { images } from "@/data/media";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: "A local Australian property management team — professional and down to earth.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Local people, looking after local property."
        accent={[4, 5]}
        text={`${site.shortName} was built on a simple idea: owners deserve a manager who picks up the phone and knows their street.`}
        image={images.about}
      />
      <AboutStory />
      <ValuesSection />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
