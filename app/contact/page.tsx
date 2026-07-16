import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, ShieldAlert } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { PageHero } from "@/components/page-hero";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Reveal } from "@/components/reveal";
import { ContactForm } from "@/components/contact-form";
import { contactInfo } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with KG Stone Hospital, Ajmer — phone, WhatsApp, email, address, working hours and directions.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const whatsappHref = `${contactInfo.whatsappHref}?text=${encodeURIComponent(
    contactInfo.whatsappMessage
  )}`;

  const cards = [
    {
      icon: Phone,
      title: "Call Us",
      value: contactInfo.phoneDisplay,
      href: contactInfo.phoneHref,
    },
    {
      icon: FaWhatsapp,
      title: "WhatsApp",
      value: "Chat with our team",
      href: whatsappHref,
      external: true,
    },
    {
      icon: Mail,
      title: "Email",
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
    },
    {
      icon: ShieldAlert,
      title: "Emergency (24×7)",
      value: contactInfo.emergencyPhone,
      href: contactInfo.emergencyPhoneHref,
    },
  ];

  return (
    <>
      <Breadcrumbs items={[{ name: "Contact", href: "/contact" }]} />
      <PageHero
        eyebrow="Get In Touch"
        title="Contact Us"
        description="Reach out with questions, reports, or to schedule your visit — we typically respond within a few hours."
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.05}>
              <a
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noopener noreferrer" : undefined}
                className="flex h-full flex-col items-start gap-3 rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <c.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground">{c.title}</p>
                  <p className="mt-0.5 text-sm font-semibold text-foreground">{c.value}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
          <Reveal className="rounded-3xl border border-border bg-card p-6 sm:p-8">
            <h2 className="font-heading text-xl font-semibold text-foreground">Send a Message</h2>
            <div className="mt-5">
              <ContactForm />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="space-y-6">
            <div>
              <h2 className="flex items-center gap-2 font-heading text-lg font-semibold text-foreground">
                <MapPin className="h-5 w-5 text-primary" aria-hidden="true" />
                Address
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {contactInfo.address.line1}
                <br />
                {contactInfo.address.line2}
              </p>
            </div>
            <div>
              <h2 className="flex items-center gap-2 font-heading text-lg font-semibold text-foreground">
                <Clock className="h-5 w-5 text-primary" aria-hidden="true" />
                Working Hours
              </h2>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                {contactInfo.hours.map((h) => (
                  <li key={h.days} className="flex justify-between gap-4">
                    <span>{h.days}</span>
                    <span className="font-medium text-foreground/80">{h.time}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-2 text-xs text-secondary">{contactInfo.emergencyNote}</p>
            </div>
            <div className="overflow-hidden rounded-2xl border border-border">
              <iframe
                title="KG Stone Hospital location on Google Maps"
                src={contactInfo.address.mapsEmbedSrc}
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
