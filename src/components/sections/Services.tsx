import {
  Car,
  Copy,
  FileCheck2,
  Home,
  Phone,
  Scale,
  Stamp,
  type LucideIcon,
} from "lucide-react";

import { business, services } from "@/data/site";
import { Reveal } from "@/components/reveal";

const iconMap: Record<string, LucideIcon> = {
  stamp: Stamp,
  "file-check": FileCheck2,
  scale: Scale,
  copy: Copy,
  home: Home,
  car: Car,
};

export function Services() {
  return (
    <section id="services" className="bg-ivory-soft py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-deep">
            What We Handle
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold text-navy sm:text-4xl">
            Notary Services, Delivered to Your Door
          </h2>
          <div className="rule-gold mt-5" aria-hidden />
          <p className="mt-5 text-base leading-relaxed text-ink-soft">
            Standard Pennsylvania notary acts, performed wherever it's convenient for you. Not sure
            which one your document needs? Call and ask — it's an easy question to answer.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] ?? Stamp;
            return (
              <Reveal key={service.title} delay={index * 80}>
                <article className="group h-full rounded-lg border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-gold-deep/50 hover:shadow-lift">
                  <span className="inline-flex size-12 items-center justify-center rounded-md bg-navy text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-navy-deep">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-navy">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {service.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-10 text-center">
          <p className="text-sm text-ink-soft">
            Don't see what you need?{" "}
            <a
              href={business.phoneHref}
              className="inline-flex items-center gap-1.5 font-semibold text-gold-deep underline-offset-4 transition-colors hover:text-navy hover:underline"
            >
              <Phone className="size-4" />
              Call {business.phoneDisplay} and ask.
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
