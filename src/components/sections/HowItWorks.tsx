import { CalendarCheck, ClipboardCheck, PhoneCall, Stamp } from "lucide-react";

import { steps } from "@/data/site";
import { Reveal } from "@/components/reveal";

const stepIcons = [PhoneCall, CalendarCheck, ClipboardCheck, Stamp];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative bg-navy py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Simple Process
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold text-ivory sm:text-4xl">
            How It Works
          </h2>
          <div className="rule-gold mt-5" aria-hidden />
          <p className="mt-5 text-base leading-relaxed text-ivory/70">
            Four easy steps from first call to finished paperwork.
          </p>
        </Reveal>

        <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {steps.map((step, index) => {
            const Icon = stepIcons[index % stepIcons.length] ?? PhoneCall;
            return (
              <Reveal key={step.title} delay={index * 100} className="relative">
                <li className="relative text-center lg:text-left">
                  {/* Connector line (desktop) */}
                  {index < steps.length - 1 && (
                    <span
                      className="absolute top-7 left-[calc(50%+3.5rem)] hidden h-px w-[calc(100%-5rem)] bg-gold/30 lg:block"
                      aria-hidden
                    />
                  )}
                  <div className="relative mx-auto flex size-14 items-center justify-center rounded-full border border-gold/50 bg-navy-soft lg:mx-0">
                    <Icon className="size-6 text-gold" />
                    <span className="absolute -top-1.5 -right-1.5 flex size-6 items-center justify-center rounded-full bg-gold font-display text-xs font-bold text-navy-deep">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-ivory">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ivory/65">
                    {step.description}
                  </p>
                </li>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
