
import { MapPin, Phone } from "lucide-react";
import { business, navLinks, services } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-navy-deep">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <a href="/" className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-full border border-gold/60 bg-navy-soft">
              <span className="font-display text-lg font-bold text-gold">N</span>
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

          <p className="mt-4 text-sm leading-relaxed text-ivory/60">
            Professional mobile notary service owned by {business.owner},
            based in {business.location}. We come to you — home, office,
            or meeting place.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-ivory/70 transition-colors hover:text-gold"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/appointment"
                className="text-sm text-ivory/70 transition-colors hover:text-gold"
              >
                Request an Appointment
              </a>
            </li>
            <li>
              <a
                href="/privacy"
                className="text-sm text-ivory/70 transition-colors hover:text-gold"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </nav>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Contact
          </h3>
          <ul className="mt-4 space-y-3.5 text-sm text-ivory/70">
            <li>
              <a
                href={business.phoneHref}
                className="flex items-center gap-2.5 font-semibold text-ivory transition-colors hover:text-gold"
              >
                <Phone className="size-4 text-gold" />
                {business.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <MapPin className="size-4 text-gold" />
              {business.location}, USA
            </li>
          </ul>

          <h3 className="mt-8 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Services
          </h3>
          <ul className="mt-4 space-y-2.5">
            {services.slice(0, 4).map((service) => (
              <li key={service.title}>
                <a
                  href="/services"
                  className="text-sm text-ivory/70 transition-colors hover:text-gold"
                >
                  {service.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-ivory/50 sm:flex-row sm:px-6">
          <p>
            © {year} {business.name} · {business.owner} · {business.location}
          </p>
          <a href="/privacy" className="transition-colors hover:text-gold">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
