"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Loader2, Send } from "lucide-react";
import { submitEnquiry, type EnquiryResult } from "@/lib/enquiry";
import FormField from "./FormField";
import FormSuccess from "./FormSuccess";
import InterestPicker from "./InterestPicker";

const interests = ["Property management", "Asset oversight", "Investment advisory", "Not sure yet"] as const;

type Status = "idle" | "sending" | "error" | EnquiryResult;

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [interest, setInterest] = useState<string>(interests[0]);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    try {
      setStatus(await submitEnquiry(e.currentTarget));
    } catch {
      setStatus("error");
    }
  };

  const finished = status === "sent" || status === "demo";

  return (
    <div className="relative rounded-[2rem] bg-linen p-6 shadow-[0_40px_120px_-40px_rgba(15,29,46,0.25)] sm:p-10">
      <AnimatePresence mode="wait">
        {finished ? (
          <FormSuccess demo={status === "demo"} onReset={() => setStatus("idle")} />
        ) : (
          <motion.form key="form" onSubmit={onSubmit} exit={{ opacity: 0 }} className="space-y-5">
            <InterestPicker options={interests} value={interest} onChange={setInterest} />

            <div className="grid gap-5 sm:grid-cols-2">
              <FormField id="name" label="Full name" required autoComplete="name" />
              <FormField id="phone" label="Phone number" type="tel" required autoComplete="tel" />
            </div>
            <FormField id="email" label="Email address" type="email" required autoComplete="email" />
            <FormField id="address" label="Property address or suburb (optional)" autoComplete="street-address" />
            <FormField id="message" label="How can we help?" textarea />

            {status === "error" && (
              <p role="alert" className="text-sm text-gold">
                Something went wrong sending your enquiry. Please try again or give us a call.
              </p>
            )}

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
