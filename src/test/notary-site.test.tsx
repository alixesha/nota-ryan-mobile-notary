import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";
import { business, disclaimer, services } from "@/data/site";
import { Header } from "@/components/sections/Header";
import { DisclaimerBand } from "@/components/sections/DisclaimerBand";
import { AppointmentSection } from "@/components/sections/AppointmentSection";
import { render, screen, fireEvent } from "@testing-library/react";

// Routing: both pages resolve to real routes, not the not-found fallback.
describe("App routing", () => {
  it("matches a page for / instead of falling back to not found", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
    const matches = router.matchRoutes("/");
    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });

  it("matches a page for /privacy instead of falling back to not found", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
    const matches = router.matchRoutes("/privacy");
    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });
});

// Business rules the owner cares about: the phone number must actually dial,
// and the Pennsylvania disclaimer must appear verbatim.
describe("Call Now and contact details", () => {
  it("dials the business phone number from the Call Now button", () => {
    render(<Header />);
    const callNow = screen.getByRole("link", { name: /call/i });
    expect(callNow).toHaveAttribute("href", "tel:+14126075670");
    expect(callNow.textContent).toContain("(412) 607-5670");
  });
});

describe("Pennsylvania advertising disclaimer", () => {
  it("displays the required disclaimer verbatim", () => {
    render(<DisclaimerBand />);
    expect(screen.getByText(disclaimer)).toBeInTheDocument();
    expect(disclaimer).toBe(
      "I am not an attorney licensed to practice law in this Commonwealth. I am not allowed to draft legal records, give advice on legal matters, including immigration, or charge a fee for those activities.",
    );
  });
});

describe("Appointment request form", () => {
  const fillValidForm = () => {
    fireEvent.change(screen.getByLabelText(/full name/i), { target: { value: "Jane Smith" } });
    fireEvent.change(screen.getByLabelText(/phone number/i), {
      target: { value: "(412) 555-1234" },
    });
    fireEvent.change(screen.getByLabelText(/email address/i), {
      target: { value: "jane@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/requested service/i), {
      target: { value: services[0].title },
    });
    fireEvent.change(screen.getByLabelText(/preferred date/i), {
      target: { value: "2026-11-02" },
    });
    fireEvent.change(screen.getByLabelText(/preferred time/i), {
      target: { value: "Afternoon" },
    });
  };

  it("shows validation errors when required fields are empty", () => {
    render(<AppointmentSection />);
    fireEvent.click(screen.getByRole("button", { name: /send appointment request/i }));
    expect(screen.getByText("Please enter your name.")).toBeInTheDocument();
    expect(screen.getByText("Please enter your phone number.")).toBeInTheDocument();
    expect(screen.getByText("Please enter your email address.")).toBeInTheDocument();
    expect(screen.getByText("Please choose the service you need.")).toBeInTheDocument();
    expect(screen.getByText("Please choose your preferred date.")).toBeInTheDocument();
    expect(screen.getByText("Please choose a preferred time.")).toBeInTheDocument();
  });

  it("shows a clear success message after a valid submission", () => {
    render(<AppointmentSection />);
    fillValidForm();
    fireEvent.click(screen.getByRole("button", { name: /send appointment request/i }));
    expect(await screen.findByRole("status")).toBeInTheDocument();
    expect(screen.getByText(/Request Received/i)).toBeInTheDocument();
    expect(screen.getByText(/412\) 555-1234/)).toBeInTheDocument();
  });
});
