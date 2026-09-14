import Hero from "@/components/home/Hero";
import SuburbMarquee from "@/components/home/SuburbMarquee";
import Intro from "@/components/home/Intro";
import ServicesPreview from "@/components/home/ServicesPreview";
import FeaturedWork from "@/components/home/FeaturedWork";
import Process from "@/components/home/Process";
import Testimonials from "@/components/home/Testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SuburbMarquee />
      <Intro />
      <ServicesPreview />
      <FeaturedWork />
      <Process />
      <Testimonials />
    </>
  );
}
