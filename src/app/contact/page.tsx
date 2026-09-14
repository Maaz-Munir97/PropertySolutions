import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import ContactForm from "@/components/contact/ContactForm";
import { images, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book a free rental appraisal or ask a question about your Brisbane property.",
};

const details = [
  { icon: Phone, label: "Call us", value: site.phone, href: site.phoneHref },
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: MapPin, label: "Office", value: site.address },
  { icon: Clock, label: "Hours", value: site.hours },
];

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

            <ul className="mt-12 space-y-4">
              {details.map(({ icon: Icon, label, value, href }, i) => (
                <Reveal
                  as="li"
                  key={label}
                  delay={i * 0.08}
                  className="flex items-center gap-5 rounded-2xl border border-ink/10 p-5 transition-colors duration-500 hover:border-gold/50 hover:bg-linen"
                >
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-midnight text-gold-soft">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-semibold tracking-[0.16em] text-stone uppercase">{label}</span>
                      {href ? (
                        <a href={href} className="mt-1 block break-words font-medium transition-colors hover:text-gold">
                          {value}
                        </a>
                      ) : (
                        <span className="mt-1 block font-medium">{value}</span>
                      )}
                    </span>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={0.2} className="mt-8 overflow-hidden rounded-2xl border border-ink/10">
              <iframe
                title="Map of Brisbane City"
                src="https://www.google.com/maps?q=Brisbane+City+QLD+4000&output=embed"
                className="h-64 w-full grayscale-[60%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
