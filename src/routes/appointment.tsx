
import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/sections/Header";
import { AppointmentSection } from "@/components/sections/AppointmentSection";
import { DisclaimerBand } from "@/components/sections/DisclaimerBand";
import { Footer } from "@/components/sections/Footer";

export const Route = createFileRoute("/appointment")({
  head: () => ({
    meta: [
      { title: "Book an Appointment | NotaRy Mobile Notary" },
      {
        name: "description",
        content:
          "Request a mobile notary appointment with Ryan Mancini in Braddock, Pennsylvania. Call (412) 607-5670.",
      },
    ],
  }),
  component: AppointmentPage,
});

function AppointmentPage() {
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
