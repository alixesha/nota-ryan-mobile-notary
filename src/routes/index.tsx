import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Faq } from "@/components/sections/Faq";
import { AppointmentSection } from "@/components/sections/AppointmentSection";
import { DisclaimerBand } from "@/components/sections/DisclaimerBand";
import { Footer } from "@/components/sections/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NotaRy Mobile Notary | Braddock, PA — Ryan Mancini" },
      {
        name: "description",
        content:
          "Professional mobile notary services that come to you in Braddock, Pennsylvania. Acknowledgments, jurats, oaths, and more. Call Ryan Mancini at (412) 607-5670.",
      },
      { property: "og:title", content: "NotaRy Mobile Notary | Braddock, PA — Ryan Mancini" },
      {
        property: "og:description",
        content:
          "Professional mobile notary services that come to you in Braddock, Pennsylvania. Call (412) 607-5670.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-ivory font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <HowItWorks />
        <Faq />
        <AppointmentSection />
      </main>
      <DisclaimerBand />
      <Footer />
    </div>
  );
}
