import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, MapPin, Phone } from "lucide-react";

import { business, disclaimer } from "@/data/site";
import { DisclaimerBand } from "@/components/sections/DisclaimerBand";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | NotaRy Mobile Notary — Braddock, PA" },
      {
        name: "description",
        content:
          "How NotaRy Mobile Notary handles information you share through this website. Call (412) 607-5670 with any questions.",
      },
      { property: "og:title", content: "Privacy Policy | NotaRy Mobile Notary" },
      {
        property: "og:description",
        content: "How NotaRy Mobile Notary handles information you share through this website.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-ivory font-sans">
      <header className="border-b border-white/10 bg-navy-deep">
        <div className="mx-auto flex h-16 max-w-3xl items-center px-4 sm:px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-ivory/80 transition-colors hover:text-gold"
          >
            <ArrowLeft className="size-4" />
            Back to NotaRy
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-deep">
          Your Information
        </p>
        <h1 className="mt-4 font-display text-3xl font-bold text-navy sm:text-4xl">
          Privacy Policy
        </h1>
        <div className="rule-gold mt-5 max-w-xs" aria-hidden />

        <div className="mt-8 space-y-5 text-sm leading-relaxed text-ink-soft">
          <p>
            {business.name} respects your privacy. This page explains, in plain terms, how
            information shared through this website is handled.
          </p>

          <h2 className="pt-2 font-display text-xl font-bold text-navy">
            What this website collects
          </h2>
          <p>
            The appointment request form asks for your name, phone number, email address, the
            service you need, your preferred date and time, and an optional message. You provide
            this information voluntarily so that {business.owner} can contact you about your
            notary request.
          </p>

          <h2 className="pt-2 font-display text-xl font-bold text-navy">How it is used</h2>
          <p>
            Information you submit is used solely to respond to your appointment request and to
            communicate with you about the notary services you asked about. It is not sold, rented,
            or shared with third parties for their own marketing.
          </p>

          <h2 className="pt-2 font-display text-xl font-bold text-navy">Calling and texting</h2>
          <p>
            If you call or text {business.phoneDisplay}, standard phone carrier practices apply.
            Please never send sensitive personal information — such as full Social Security numbers
            or financial account numbers — by text or email.
          </p>

          <h2 className="pt-2 font-display text-xl font-bold text-navy">Your choices</h2>
          <p>
            You may ask at any time that your contact information no longer be used to respond to
            your requests. Simply call or text {business.phoneDisplay} and say so.
          </p>

          <h2 className="pt-2 font-display text-xl font-bold text-navy">Contact</h2>
          <p>
            Questions about this policy? Call{" "}
            <a
              href={business.phoneHref}
              className="font-semibold text-gold-deep underline-offset-4 hover:underline"
            >
              {business.phoneDisplay}
            </a>{" "}
            or write to {business.name}, {business.location}, USA.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href={business.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-md bg-navy px-6 py-3 text-sm font-semibold text-ivory shadow-card transition-all hover:-translate-y-0.5 hover:bg-navy-soft"
          >
            <Phone className="size-4" />
            Call {business.phoneDisplay}
          </a>
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-navy/25 px-6 py-3 text-sm font-semibold text-navy transition-colors hover:border-gold-deep hover:text-gold-deep"
          >
            <MapPin className="size-4" />
            Back to Home
          </Link>
        </div>
      </main>

      <DisclaimerBand />
      <footer className="border-t border-white/10 bg-navy-deep py-6 text-center text-xs text-ivory/50">
        © {new Date().getFullYear()} {business.name} · {business.owner} · {business.location}
      </footer>
    </div>
  );
}
