
import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/sections/Header";
import { Services } from "@/components/sections/Services";
import { DisclaimerBand } from "@/components/sections/DisclaimerBand";
import { Footer } from "@/components/sections/Footer";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Mobile Notary Services | NotaRy Mobile Notary" },
      {
        name: "description",
        content:
          "Explore mobile notary services in Braddock, Pennsylvania, including acknowledgments, jurats, oaths, and more. Call Ryan Mancini at (412) 607-5670.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="min-h-screen bg-ivory font-sans">
      <Header />
      <main className="pt-20">
        <Services />
      </main>
      <DisclaimerBand />
      <Footer />
    </div>
  );
}
