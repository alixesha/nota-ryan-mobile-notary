import { MapPin, Phone } from "lucide-react";

import { business } from "@/data/site";
import { Reveal } from "@/components/reveal";
import aboutImage from "@/assets/about-notary.jpg";

export function About() {
  return (
    <section id="about" className="bg-ivory py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative mx-auto max-w-lg lg:max-w-none">
            <div
              className="absolute -inset-2 rounded-lg border border-gold-deep/30 sm:-inset-3"
              aria-hidden
            />
            <img
              src={aboutImage}
              alt="Brass notary seal, ledger book, and fountain pen on a dark wooden desk"
              width={1200}
              height={900}
              loading="lazy"
              className="relative w-full rounded-lg object-cover shadow-card"
            />
          </div>
        </Reveal>

        <Reveal delay={100} className="order-1 lg:order-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-deep">
            About Your Notary
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold text-navy sm:text-4xl">
            Meet Ryan Mancini
          </h2>
          <div className="rule-gold mt-5 max-w-xs" aria-hidden />

          <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
            <p>
              Ryan Mancini is a mobile notary based in {business.location}. Instead of asking you
              to rearrange your day, he brings the notary service to you — your kitchen table, your
              office, a hospital room, or wherever signing needs to happen.
            </p>
            <p>
              Every appointment is handled with the same care: signers are verified properly,
              documents are completed accurately, and your journal entry is recorded the right way,
              every time.
            </p>
            <p>
              Whether it's a single power of attorney or a stack of closing paperwork, you can
              expect a professional, on-time visit and a straightforward answer to every question
              about the process.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={business.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-navy px-6 py-3 text-sm font-semibold text-ivory shadow-card transition-all hover:-translate-y-0.5 hover:bg-navy-soft hover:shadow-lift"
            >
              <Phone className="size-4" />
              Call {business.phoneDisplay}
            </a>
            <a
              href="#appointment"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-navy/25 px-6 py-3 text-sm font-semibold text-navy transition-colors hover:border-gold-deep hover:text-gold-deep"
            >
              <MapPin className="size-4" />
              Book a Mobile Visit
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
