import { services } from "./services";

export type NavLink = { label: string; href: string; description?: string };
export type NavGroup = { label: string; href?: string; items: NavLink[] };

export const treatmentNavItems: NavLink[] = [
  {
    label: "Treatment Overview",
    href: "/treatment",
    description: "How we choose the right procedure for your stone",
  },
  ...services.map((s) => ({
    label: s.name,
    href: `/treatment/${s.slug}`,
    description: s.tagline,
  })),
];

export const mainNav: NavGroup[] = [
  { label: "Home", href: "/", items: [] },
  {
    label: "About",
    items: [
      { label: "About the Hospital", href: "/about-hospital", description: "Our story, facility & values" },
      { label: "About the Doctor", href: "/about-doctor", description: "Meet Dr. Kamal Gehlot" },
    ],
  },
  {
    label: "Treatments",
    href: "/treatment",
    items: treatmentNavItems,
  },
  {
    label: "Kidney Stones",
    items: [
      { label: "Symptoms", href: "/symptoms", description: "How to recognise a stone early" },
      { label: "Causes", href: "/causes", description: "What leads to stone formation" },
      { label: "Prevention Tips", href: "/prevention-tips", description: "Reduce your risk of recurrence" },
    ],
  },
  {
    label: "Patients",
    items: [
      { label: "Patient Testimonials", href: "/testimonials", description: "In patients' own words" },
      { label: "Success Stories", href: "/success-stories", description: "Detailed case journeys" },
      { label: "Gallery", href: "/gallery", description: "Inside KG Stone Hospital" },
      { label: "FAQs", href: "/faqs", description: "Common questions answered" },
    ],
  },
  { label: "Blog", href: "/blog", items: [] },
  { label: "Contact", href: "/contact", items: [] },
];

export const footerNav = {
  hospital: [
    { label: "About the Hospital", href: "/about-hospital" },
    { label: "About the Doctor", href: "/about-doctor" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact Us", href: "/contact" },
  ],
  treatments: treatmentNavItems,
  patients: [
    { label: "Symptoms", href: "/symptoms" },
    { label: "Causes", href: "/causes" },
    { label: "Prevention Tips", href: "/prevention-tips" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Success Stories", href: "/success-stories" },
    { label: "FAQs", href: "/faqs" },
    { label: "Blog", href: "/blog" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
};
