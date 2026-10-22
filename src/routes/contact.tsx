
import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/sections/Header";
import { AppointmentSection } from "@/components/sections/AppointmentSection";
import { DisclaimerBand } from "@/components/sections/DisclaimerBand";
import { Footer } from "@/components/sections/Footer";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Ryan Mancini | NotaRy Mobile Notary" },
      {
        name: "description",
        content:
          "Contact Ryan Mancini for mobile notary services in Braddock, Pennsylvania. Call (412) 607-5670 or request an appointment online.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-ivory font-sans">
      <Header />
      <main className="pt-16">
        <AppointmentSection />
      </main>
      <DisclaimerBand />
      <Footer />
    </div>
  );
}
