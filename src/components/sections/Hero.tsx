import { MapPin, Phone, ShieldCheck } from "lucide-react";

import { business } from "@/data/site";
import { Reveal } from "@/components/reveal";
import heroImage from "@/assets/hero-notary.jpg";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-navy-deep pt-28 pb-16 sm:pt-32 lg:pb-24">
      {/* Subtle radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(60% 55% at 70% 20%, oklch(0.33 0.06 260 / 0.55), transparent 70%)",
        }}
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            <MapPin className="size-4" />
            Mobile Notary · {business.location}
          </p>
          <h1 className="mt-5 font-display text-4xl leading-tight font-bold text-ivory sm:text-5xl lg:text-[3.4rem]">
            Professional Notary Services That{" "}
            <span className="text-gold italic">Come to You.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ivory/75">
            {business.name}, led by {business.owner}, brings prompt, careful notarization to your
            home, office, or meeting place. One call, and the notary comes to you.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={business.phoneHref}
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-gold px-6 py-3.5 text-base font-semibold text-navy-deep shadow-lift transition-all hover:-translate-y-0.5 hover:bg-gold/90"
            >
              <Phone className="size-5 transition-transform group-hover:rotate-12" />
              Call {business.phoneDisplay}
            </a>
            <a
              href="#appointment"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-ivory/30 px-6 py-3.5 text-base font-semibold text-ivory transition-all hover:border-gold hover:text-gold"
            >
              Request an Appointment
            </a>
          </div>

          <div className="mt-8 flex items-center gap-2 border-t border-white/10 pt-6 text-sm text-ivory/60">
            <ShieldCheck className="size-4 shrink-0 text-gold" />
            <span>
              Notary Public · Commonwealth of Pennsylvania · By appointment — call to schedule
            </span>
          </div>
        </Reveal>

        <Reveal delay={150} className="relative">
          <div className="relative mx-auto max-w-lg lg:max-w-none">
            {/* Offset gold frame */}
            <div
              className="absolute -inset-2 rounded-lg border border-gold/40 sm:-inset-3"
              aria-hidden
            />
            <img
              src={heroImage}
              alt="Fountain pen signing an official document beside a brass notary seal"
              width={1920}
              height={1080}
              className="relative w-full rounded-lg object-cover shadow-lift"
              fetchPriority="high"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
