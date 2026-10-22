import { useState } from "react";
import { ChevronDown, Phone } from "lucide-react";

import { business, faqs } from "@/data/site";
import { Reveal } from "@/components/reveal";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-ivory py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-deep">
            Answers Up Front
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold text-navy sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="rule-gold mt-5" aria-hidden />
        </Reveal>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <Reveal key={faq.question} delay={index * 50}>
                <div
                  className={`overflow-hidden rounded-lg border bg-card transition-colors duration-300 ${
                    isOpen ? "border-gold-deep/60 shadow-card" : "border-border"
                  }`}
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span className="font-display text-base font-bold text-navy">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`size-5 shrink-0 text-gold-deep transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-relaxed text-ink-soft">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-10 text-center">
          <p className="text-sm text-ink-soft">
            Have a question that isn't here?{" "}
            <a
              href={business.phoneHref}
              className="inline-flex items-center gap-1.5 font-semibold text-gold-deep underline-offset-4 transition-colors hover:text-navy hover:underline"
            >
              <Phone className="size-4" />
              Call {business.phoneDisplay}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
