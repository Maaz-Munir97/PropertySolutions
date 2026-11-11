import type { Metadata } from "next";
import Process from "@/components/home/Process";
import ServiceDetail from "@/components/services/ServiceDetail";
import CtaBanner from "@/components/ui/CtaBanner";
import PageHero from "@/components/ui/PageHero";
import { images } from "@/data/media";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description: "Property management, asset oversight and investment advisory for Australian owners.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="One team for every part of owning property."
        accent={[5, 6]}
        text="Whether you own one apartment or a growing portfolio, we handle the detail so your property keeps performing."
        image={images.office}
      />

      <section className="py-20 sm:py-28">
        <div className="container-x space-y-24 sm:space-y-32">
          {services.map((service, i) => (
            <ServiceDetail key={service.slug} service={service} reversed={i % 2 === 1} />
          ))}
        </div>
      </section>

      <Process />
      <div className="pt-24 sm:pt-32">
        <CtaBanner />
      </div>
    </>
  );
}
