import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/sections/Header";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { DisclaimerBand } from "@/components/sections/DisclaimerBand";
import { Footer } from "@/components/sections/Footer";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How It Works | NotaRy Mobile Notary" },
      {
        name: "description",
        content:
          "Learn how to book a mobile notary appointment with Ryan Mancini in Braddock, Pennsylvania, from your first call to completed paperwork.",
      },
    ],
  }),
  component: HowItWorksPage,
});

function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-ivory font-sans">
      <Header />
      <main className="pt-20">
        <HowItWorks />
      </main>
      <DisclaimerBand />
      <Footer />
    </div>
  );
}
