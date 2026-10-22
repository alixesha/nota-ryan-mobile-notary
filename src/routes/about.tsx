import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/sections/Header";
import { About } from "@/components/sections/About";
import { DisclaimerBand } from "@/components/sections/DisclaimerBand";
import { Footer } from "@/components/sections/Footer";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Ryan Mancini | NotaRy Mobile Notary" },
      {
        name: "description",
        content:
          "Meet Ryan Mancini, mobile notary serving Braddock, Pennsylvania. Professional notary services that come to you.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-ivory font-sans">
      <Header />
      <main className="pt-20">
        <About />
      </main>
      <DisclaimerBand />
      <Footer />
    </div>
  );
        }
