
import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/sections/Header";
import { Faq } from "@/components/sections/Faq";
import { DisclaimerBand } from "@/components/sections/DisclaimerBand";
import { Footer } from "@/components/sections/Footer";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQs | NotaRy Mobile Notary" },
      {
        name: "description",
        content:
          "Find answers about mobile notary appointments, identification requirements, fees, and notary services in Braddock, PA.",
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <div className="min-h-screen bg-ivory font-sans">
      <Header />
      <main className="pt-20">
        <Faq />
      </main>
      <DisclaimerBand />
      <Footer />
    </div>
  );
}
