
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";

import { business, navLinks } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className="h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent"
        aria-hidden="true"
      />

      <div
        className={`border-b border-white/10 transition-colors duration-300 ${
          scrolled
            ? "bg-navy-deep/95 shadow-lift backdrop-blur-md"
            : "bg-navy-deep"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-3"
            onClick={() => setOpen(false)}
            aria-label="NotaRy Mobile Notary Home"
          >
            <span className="flex size-10 items-center justify-center rounded-full border border-gold/60 bg-navy-soft">
              <span className="font-display text-lg font-bold text-gold">
                N
              </span>
            </span>

            <span className="leading-tight">
              <span className="block font-display text-lg font-bold tracking-wide text-ivory">
                NotaRy
              </span>
              <span className="block text-[0.6rem] font-semibold uppercase tracking-[0.28em] text-gold">
                Mobile Notary
              </span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav
            className="hidden items-center gap-5 lg:flex"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="whitespace-nowrap text-sm font-medium text-ivory/80 transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Call and Mobile Menu */}
          <div className="flex items-center gap-2">
            <a
              href={business.phoneHref}
              className="group inline-flex items-center gap-2 rounded-md bg-gold px-4 py-2 text-sm font-semibold text-navy-deep shadow-card transition-all hover:-translate-y-0.5 hover:bg-gold/90 hover:shadow-lift"
            >
              <Phone className="size-4 transition-transform group-hover:rotate-12" />
              <span className="hidden sm:inline">Call Now</span>
              <span className="sm:hidden">Call</span>
            </a>

            <button
              type="button"
              className="inline-flex size-10 items-center justify-center rounded-md text-ivory transition-colors hover:bg-white/10 lg:hidden"
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? (
                <X className="size-5" />
              ) : (
                <Menu className="size-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {open && (
          <nav
            className="border-t border-white/10 bg-navy-deep px-4 pb-4 lg:hidden"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block border-b border-white/5 py-3 text-sm font-medium text-ivory/85 transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            ))}

            <a
              href="/appointment"
              onClick={() => setOpen(false)}
              className="mt-3 block rounded-md border border-gold/60 px-4 py-2.5 text-center text-sm font-semibold text-gold transition-colors hover:bg-gold/10"
            >
              Request an Appointment
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
