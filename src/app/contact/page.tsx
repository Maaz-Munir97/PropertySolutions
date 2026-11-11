import type { Metadata } from "next";
import ContactDetails from "@/components/contact/ContactDetails";
import ContactForm from "@/components/contact/ContactForm";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import { images } from "@/data/media";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book a free rental appraisal or ask a question about your property.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Ask about your property."
        accent={[3]}
        text="Tell us a little about what you own or are looking to buy — we'll come back with a straight answer, not a sales pitch."
        image={images.contact}
      />

      <section className="py-20 sm:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <Reveal>
              <span className="eyebrow text-gold">Reach us directly</span>
              <h2 className="display mt-5 text-4xl leading-tight sm:text-5xl">
                We&apos;d love to <em className="text-gold">hear from you.</em>
              </h2>
            </Reveal>
            <ContactDetails />
          </div>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
