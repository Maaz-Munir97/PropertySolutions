"use client";

import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

type FormSuccessProps = {
  demo: boolean;
  onReset: () => void;
};

export default function FormSuccess({ demo, onReset }: FormSuccessProps) {
  return (
    <motion.div
      key="sent"
      role="status"
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
        {demo
          ? "This is a demo, so your enquiry wasn't sent anywhere. Connect a form endpoint to receive real submissions."
          : "Your enquiry is on its way. A manager will reply within one business day."}
      </p>
      <button type="button" onClick={onReset} className="mt-8 text-sm font-semibold text-gold hover:underline">
        Send another enquiry
      </button>
    </motion.div>
  );
}
