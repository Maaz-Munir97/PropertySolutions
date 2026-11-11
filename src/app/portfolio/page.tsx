import type { Metadata } from "next";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";
import CtaBanner from "@/components/ui/CtaBanner";
import PageHero from "@/components/ui/PageHero";
import { images } from "@/data/media";

export const metadata: Metadata = {
  title: "Our Work",
  description: "Selected properties leased, restored and managed across Australia.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Our work"
        title="Properties we're proud to look after."
        accent={[3, 4]}
        text="From riverside residences to CBD office suites — a selection of recent results for Australian owners."
        image={images.hero}
      />
      <section className="py-20 sm:py-28">
        <div className="container-x">
          <PortfolioGrid />
        </div>
      </section>
      <CtaBanner title="Want results like these for your property?" />
    </>
  );
}
