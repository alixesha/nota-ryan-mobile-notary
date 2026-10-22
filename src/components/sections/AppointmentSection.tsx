import { useState, type FormEvent } from "react";
import {
  CalendarClock,
  CheckCircle2,
  Clock,
  Loader2,
  MapPin,
  Phone,
  User,
} from "lucide-react";

import { business, services, timePreferences } from "@/data/site";
import { Reveal } from "@/components/reveal";

type FormValues = {
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  time: string;
  message: string;
};

type FieldErrors = Partial<Record<keyof FormValues, string>>;

const emptyForm: FormValues = {
  name: "",
  phone: "",
  email: "",
  service: "",
  date: "",
  time: "",
  message: "",
};

function validate(values: FormValues): FieldErrors {
  const errors: FieldErrors = {};

  if (!values.name.trim()) {
    errors.name = "Please enter your name.";
  } else if (values.name.trim().length > 100) {
    errors.name = "Name must be under 100 characters.";
  }

  const digits = values.phone.replace(/\D/g, "");
  if (!values.phone.trim()) {
    errors.phone = "Please enter your phone number.";
  } else if (digits.length < 10 || digits.length > 15) {
    errors.phone = "Enter a valid phone number, e.g. (412) 555-1234.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()) ||
    values.email.trim().length > 255
  ) {
    errors.email = "Enter a valid email address, e.g. name@example.com.";
  }

  if (!values.service) {
    errors.service = "Please choose the service you need.";
  }

  if (!values.date) {
    errors.date = "Please choose your preferred date.";
  }

  if (!values.time) {
    errors.time = "Please choose a preferred time.";
  }

  if (values.message.trim().length > 1000) {
    errors.message = "Message must be under 1,000 characters.";
  }

  return errors;
}

export function AppointmentSection() {
  return (
    <section id="appointment" className="bg-ivory-soft pb-20 lg:pb-28">
      <div id="contact" className="mx-auto max-w-6xl px-4 pt-20 sm:px-6 lg:pt-28">
        <div className="grid gap-10 lg:grid-cols-[2fr_3fr] lg:gap-14">
          {/* Contact panel */}
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-deep">
              Get in Touch
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold text-navy sm:text-4xl">
              Contact & Appointments
            </h2>
            <div className="rule-gold mt-5 max-w-xs" aria-hidden />

            <div className="mt-8 space-y-6">
              <a
                href={business.phoneHref}
                className="group flex items-start gap-4 rounded-lg border border-border bg-card p-5 shadow-card transition-all hover:-translate-y-0.5 hover:border-gold-deep/50 hover:shadow-lift"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-md bg-navy text-gold transition-colors group-hover:bg-gold group-hover:text-navy-deep">
                  <Phone className="size-5" />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-widest text-ink-soft">
                    Call or Text
                  </span>
                  <span className="mt-1 block font-display text-xl font-bold text-navy group-hover:text-gold-deep">
                    {business.phoneDisplay}
                  </span>
                  <span className="mt-1 block text-xs text-ink-soft">
                    Fastest way to book — ask any question before you commit.
                  </span>
                </span>
              </a>

              <div className="flex items-start gap-4 rounded-lg border border-border bg-card p-5 shadow-card">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-md bg-navy text-gold">
                  <MapPin className="size-5" />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-widest text-ink-soft">
                    Location
                  </span>
                  <span className="mt-1 block font-display text-lg font-bold text-navy">
                    {business.location}, USA
                  </span>
                  <span className="mt-1 block text-xs text-ink-soft">
                    Mobile service — Ryan travels to you in and around Braddock.
                  </span>
                </span>
              </div>

              <div className="flex items-start gap-4 rounded-lg border border-border bg-card p-5 shadow-card">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-md bg-navy text-gold">
                  <Clock className="size-5" />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-widest text-ink-soft">
                    Hours
                  </span>
                  <span className="mt-1 block font-display text-lg font-bold text-navy">
                    By appointment
                  </span>
                  <span className="mt-1 block text-xs text-ink-soft">
                    Call to schedule a time that works for you.
                  </span>
                </span>
              </div>

              <div className="flex items-center gap-3 rounded-lg border border-gold-deep/40 bg-gold/15 p-4">
                <User className="size-5 shrink-0 text-gold-deep" />
                <p className="text-sm text-ink">
                  Owned and operated by{" "}
                  <span className="font-semibold text-navy">{business.owner}</span> — you'll always
                  know who is coming to your door.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Appointment form */}
          <Reveal delay={120}>
            <AppointmentForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function AppointmentForm() {
  const [values, setValues] = useState<FormValues>(emptyForm);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const setField = (field: keyof FormValues, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      const firstField = Object.keys(nextErrors)[0];
      document.getElementById(`field-${firstField}`)?.focus();
      return;
    }

    // Demo submission — when a backend is added later, replace this block
    // with a server call. Structure is already shaped like an API payload.
    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  if (submitted) {
    return (
      <div
        className="flex h-full flex-col items-center justify-center rounded-lg border border-gold-deep/40 bg-card p-10 text-center shadow-card"
        role="status"
        aria-live="polite"
      >
        <CheckCircle2 className="size-14 text-gold-deep" />
        <h3 className="mt-5 font-display text-2xl font-bold text-navy">
          Request Received — Thank You, {values.name.trim().split(/\s+/)[0]}!
        </h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-soft">
          Your appointment request for <strong className="text-navy">{values.service}</strong> on{" "}
          <strong className="text-navy">{values.date}</strong> ({values.time.toLowerCase()}) has
          been noted. {business.owner} will reach out to you at{" "}
          <strong className="text-navy">{values.phone}</strong> to confirm the details.
        </p>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-soft">
          Need it sooner?{" "}
          <a
            href={business.phoneHref}
            className="font-semibold text-gold-deep underline-offset-4 hover:underline"
          >
            Call {business.phoneDisplay}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => {
            setValues(emptyForm);
            setSubmitted(false);
          }}
          className="mt-7 rounded-md border border-navy/25 px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:border-gold-deep hover:text-gold-deep"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  const inputClass = (field: keyof FormValues) =>
    `w-full rounded-md border bg-ivory px-3.5 py-2.5 text-sm text-ink transition-colors placeholder:text-ink-soft/60 focus:outline-none focus:ring-2 focus:ring-gold-deep/50 ${
      errors[field] ? "border-destructive" : "border-input"
    }`;

  const labelClass = "mb-1.5 block text-xs font-semibold uppercase tracking-widest text-navy";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-lg border border-border bg-card p-6 shadow-card sm:p-8"
      aria-labelledby="appointment-form-title"
    >
      <div className="flex items-center gap-3">
        <span className="flex size-10 items-center justify-center rounded-md bg-navy text-gold">
          <CalendarClock className="size-5" />
        </span>
        <div>
          <h3 id="appointment-form-title" className="font-display text-xl font-bold text-navy">
            Request an Appointment
          </h3>
          <p className="text-xs text-ink-soft">Fields marked * are required.</p>
        </div>
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="field-name" className={labelClass}>
            Full Name *
          </label>
          <input
            id="field-name"
            name="name"
            type="text"
            autoComplete="name"
            maxLength={100}
            placeholder="Your name"
            value={values.name}
            onChange={(e) => setField("name", e.target.value)}
            className={inputClass("name")}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "error-name" : undefined}
          />
          {errors.name && (
            <p id="error-name" className="mt-1.5 text-xs font-medium text-destructive">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="field-phone" className={labelClass}>
            Phone Number *
          </label>
          <input
            id="field-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            maxLength={20}
            placeholder="(412) 555-1234"
            value={values.phone}
            onChange={(e) => setField("phone", e.target.value)}
            className={inputClass("phone")}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "error-phone" : undefined}
          />
          {errors.phone && (
            <p id="error-phone" className="mt-1.5 text-xs font-medium text-destructive">
              {errors.phone}
            </p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="field-email" className={labelClass}>
            Email Address *
          </label>
          <input
            id="field-email"
            name="email"
            type="email"
            autoComplete="email"
            maxLength={255}
            placeholder="name@example.com"
            value={values.email}
            onChange={(e) => setField("email", e.target.value)}
            className={inputClass("email")}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "error-email" : undefined}
          />
          {errors.email && (
            <p id="error-email" className="mt-1.5 text-xs font-medium text-destructive">
              {errors.email}
            </p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="field-service" className={labelClass}>
            Requested Service *
          </label>
          <select
            id="field-service"
            name="service"
            value={values.service}
            onChange={(e) => setField("service", e.target.value)}
            className={inputClass("service")}
            aria-invalid={Boolean(errors.service)}
            aria-describedby={errors.service ? "error-service" : undefined}
          >
            <option value="">Select a service…</option>
            {services.map((service) => (
              <option key={service.title} value={service.title}>
                {service.title}
              </option>
            ))}
            <option value="Other / Not sure yet">Other / Not sure yet</option>
          </select>
          {errors.service && (
            <p id="error-service" className="mt-1.5 text-xs font-medium text-destructive">
              {errors.service}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="field-date" className={labelClass}>
            Preferred Date *
          </label>
          <input
            id="field-date"
            name="date"
            type="date"
            value={values.date}
            onChange={(e) => setField("date", e.target.value)}
            className={inputClass("date")}
            aria-invalid={Boolean(errors.date)}
            aria-describedby={errors.date ? "error-date" : undefined}
          />
          {errors.date && (
            <p id="error-date" className="mt-1.5 text-xs font-medium text-destructive">
              {errors.date}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="field-time" className={labelClass}>
            Preferred Time *
          </label>
          <select
            id="field-time"
            name="time"
            value={values.time}
            onChange={(e) => setField("time", e.target.value)}
            className={inputClass("time")}
            aria-invalid={Boolean(errors.time)}
            aria-describedby={errors.time ? "error-time" : undefined}
          >
            <option value="">Select a time…</option>
            {timePreferences.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
          {errors.time && (
            <p id="error-time" className="mt-1.5 text-xs font-medium text-destructive">
              {errors.time}
            </p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="field-message" className={labelClass}>
            Message <span className="font-normal normal-case tracking-normal">(optional)</span>
          </label>
          <textarea
            id="field-message"
            name="message"
            rows={4}
            maxLength={1000}
            placeholder="Tell Ryan about your document, the number of signers, or anything else helpful."
            value={values.message}
            onChange={(e) => setField("message", e.target.value)}
            className={`${inputClass("message")} resize-y`}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "error-message" : undefined}
          />
          {errors.message && (
            <p id="error-message" className="mt-1.5 text-xs font-medium text-destructive">
              {errors.message}
            </p>
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-md bg-navy px-6 py-3.5 text-base font-semibold text-ivory shadow-card transition-all hover:-translate-y-0.5 hover:bg-navy-soft hover:shadow-lift disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:shadow-card"
      >
        {submitting ? (
          <>
            <Loader2 className="size-5 animate-spin" />
            Sending Request…
          </>
        ) : (
          "Send Appointment Request"
        )}
      </button>

      <p className="mt-3 text-center text-xs text-ink-soft">
        Prefer to talk first?{" "}
        <a
          href={business.phoneHref}
          className="font-semibold text-gold-deep underline-offset-4 hover:underline"
        >
          Call {business.phoneDisplay}
        </a>
      </p>
    </form>
  );
}
