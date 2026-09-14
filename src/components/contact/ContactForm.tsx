"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import clsx from "clsx";

const interests = ["Property management", "Asset oversight", "Investment advisory", "Not sure yet"];

const fieldClass =
  "peer w-full rounded-xl border border-ink/15 bg-linen px-4 pb-2.5 pt-6 text-ink outline-none transition-colors placeholder:text-transparent focus:border-gold";
const labelClass =
  "pointer-events-none absolute left-4 top-4 origin-left text-sm text-stone transition-all duration-300 peer-focus:top-2 peer-focus:text-xs peer-focus:text-gold peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [interest, setInterest] = useState(interests[0]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    // Demo only — no backend is wired up yet.
    setTimeout(() => setStatus("sent"), 1200);
  };

  return (
    <div className="relative rounded-[2rem] bg-linen p-6 shadow-[0_40px_120px_-40px_rgba(15,29,46,0.25)] sm:p-10">
      <AnimatePresence mode="wait">
        {status === "sent" ? (
          <motion.div
            key="sent"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex min-h-[520px] flex-col items-center justify-center text-center"
          >
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.1 }}
            >
              <CheckCircle2 className="size-16 text-gold" aria-hidden />
            </motion.span>
            <h3 className="display mt-6 text-3xl">Thanks — we&apos;ll be in touch.</h3>
            <p className="mt-3 max-w-sm text-stone">
              This is a demo form, so your enquiry wasn&apos;t actually sent. On the live site a manager would reply within one business day.
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-8 text-sm font-semibold text-gold hover:underline"
            >
              Send another enquiry
            </button>
          </motion.div>
        ) : (
          <motion.form key="form" onSubmit={onSubmit} exit={{ opacity: 0 }} className="space-y-5">
            <fieldset>
              <legend className="text-sm font-medium text-ink">I&apos;m interested in</legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {interests.map((item) => (
                  <label
                    key={item}
                    className={clsx(
                      "cursor-pointer rounded-full border px-4 py-2 text-sm transition-colors duration-300 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-gold",
                      interest === item ? "border-ink bg-ink text-linen" : "border-ink/15 text-ink/75 hover:border-ink/40",
                    )}
                  >
                    <input
                      type="radio"
                      name="interest"
                      value={item}
                      checked={interest === item}
                      onChange={() => setInterest(item)}
                      className="sr-only"
                    />
                    {item}
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="relative">
                <input id="name" name="name" required placeholder="Full name" className={fieldClass} autoComplete="name" />
                <label htmlFor="name" className={labelClass}>Full name</label>
              </div>
              <div className="relative">
                <input id="phone" name="phone" type="tel" required placeholder="Phone" className={fieldClass} autoComplete="tel" />
                <label htmlFor="phone" className={labelClass}>Phone number</label>
              </div>
            </div>
            <div className="relative">
              <input id="email" name="email" type="email" required placeholder="Email" className={fieldClass} autoComplete="email" />
              <label htmlFor="email" className={labelClass}>Email address</label>
            </div>
            <div className="relative">
              <input id="address" name="address" placeholder="Property address" className={fieldClass} autoComplete="street-address" />
              <label htmlFor="address" className={labelClass}>Property address or suburb (optional)</label>
            </div>
            <div className="relative">
              <textarea id="message" name="message" rows={5} placeholder="Message" className={clsx(fieldClass, "resize-none")} />
              <label htmlFor="message" className={labelClass}>How can we help?</label>
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="group flex w-full items-center justify-center gap-3 rounded-full bg-ink px-8 py-4 text-sm font-semibold text-linen transition-colors duration-500 hover:bg-gold disabled:opacity-70 sm:w-auto"
            >
              {status === "sending" ? (
                <>
                  <Loader2 className="size-4 animate-spin" aria-hidden /> Sending…
                </>
              ) : (
                <>
                  Send enquiry
                  <Send className="size-4 transition-transform duration-500 group-hover:translate-x-1" aria-hidden />
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
