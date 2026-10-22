
/**
 * Single source of truth for all business content.
 *
 * Everything editable — contact details, services, steps, FAQs — lives here so
 * a database and admin panel can be layered in later without touching layout
 * code. Until then, edit the arrays below to update the website.
 */

export const business = {
  name: "NotaRy Mobile Notary",
  owner: "Ryan Mancini",
  phoneDisplay: "(412) 607-5670",
  phoneHref: "tel:+14126075670",
  location: "Braddock, Pennsylvania",
  tagline: "Professional Notary Services That Come to You.",
};

export const disclaimer =
  "I am not an attorney licensed to practice law in this Commonwealth. I am not allowed to draft legal records, give advice on legal matters, including immigration, or charge a fee for those activities.";

export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
  { label: "Appointment", href: "/appointment" },
];

export type Service = {
  title: string;
  description: string;
  icon: string;
};

/**
 * Default service cards. These are standard Pennsylvania notary acts —
 * replace or reorder them here as the business evolves.
 */
export const services: Service[] = [
  {
    title: "General Notary Work",
    description:
      "Everyday notarization for personal and business records, handled accurately and without delay.",
    icon: "stamp",
  },
  {
    title: "Acknowledgments & Jurats",
    description:
      "Signature verification for deeds, affidavits, powers of attorney, and similar records.",
    icon: "file-check",
  },
  {
    title: "Oaths & Affirmations",
    description:
      "Sworn statements administered properly, with witnessing done by the book.",
    icon: "scale",
  },
  {
    title: "Certified Copies",
    description:
      "Copy certification of certain original records, completed in accordance with Pennsylvania law.",
    icon: "copy",
  },
  {
    title: "Real Estate & Loan Documents",
    description:
      "Notarization for property and lender paperwork — at your agent's office or your own table.",
    icon: "home",
  },
  {
    title: "Mobile Visits",
    description:
      "Ryan comes to homes, offices, care facilities, and public meeting places in and around Braddock.",
    icon: "car",
  },
];

export type Step = { title: string; description: string };

export const steps: Step[] = [
  {
    title: "Call or Request Online",
    description:
      "Tell Ryan what you need notarized and when. Phone calls get the fastest answer.",
  },
  {
    title: "Confirm Your Appointment",
    description:
      "He confirms a time and a meeting place that works for you — home, office, or elsewhere.",
  },
  {
    title: "Meet & Verify Identity",
    description:
      "Each signer presents current, government-issued photo identification at the appointment.",
  },
  {
    title: "Signed, Sealed & Done",
    description:
      "Documents are signed, notarized, and sealed on the spot, ready for their next step.",
  },
];

export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
  {
    question: "What should I bring to the appointment?",
    answer:
      "Every signer must present a current, government-issued photo ID — such as a driver's license, passport, or state identification card. All signers must be present and able to sign in the notary's presence.",
  },
  {
    question: "Where will we meet?",
    answer:
      "Wherever is convenient for you. Ryan travels to homes, offices, care facilities, hospitals, and public meeting places in and around Braddock, Pennsylvania.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Fees depend on the type and number of documents involved. Call (412) 607-5670 for a clear quote before you book — no surprises.",
  },
  {
    question: "Can you give legal advice or help me fill out my documents?",
    answer:
      "No. Pennsylvania law does not allow a notary to draft legal records, give advice on legal matters (including immigration), or charge a fee for those activities. For legal guidance, please consult a licensed attorney.",
  },
  {
    question: "What kinds of documents can you notarize?",
    answer:
      "Powers of attorney, affidavits, deeds, consent forms, vehicle-related paperwork, business records, and many others. If you are unsure whether your document qualifies, just call and ask.",
  },
  {
    question: "How do I schedule an appointment?",
    answer:
      "Call (412) 607-5670 or submit the appointment request form below with your preferred date and time. Ryan will confirm availability as quickly as possible.",
  },
];

export const timePreferences = [
  "Morning",
  "Afternoon",
  "Evening",
  "Flexible — any time that works",
];
