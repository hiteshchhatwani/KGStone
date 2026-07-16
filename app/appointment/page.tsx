import type { Metadata } from "next";
import { Phone, Clock, ShieldCheck } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { PageHero } from "@/components/page-hero";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Reveal } from "@/components/reveal";
import { AppointmentForm } from "@/components/appointment-form";
import { contactInfo } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description:
    "Book a kidney stone consultation at KG Stone Hospital, Ajmer. Most patients are seen within 24 hours; emergency care is available 24x7.",
  alternates: { canonical: "/appointment" },
};

export default function AppointmentPage() {
  const whatsappHref = `${contactInfo.whatsappHref}?text=${encodeURIComponent(
    contactInfo.whatsappMessage
  )}`;

  return (
    <>
      <Breadcrumbs items={[{ name: "Appointment", href: "/appointment" }]} />
      <PageHero
        eyebrow="Book Now"
        title="Book an Appointment"
        description="Fill in your details and our team will call to confirm your slot — usually within a few hours during working hours."
      />

      <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:gap-16">
          <Reveal className="rounded-3xl border border-border bg-card p-6 sm:p-8">
            <AppointmentForm />
          </Reveal>

          <Reveal delay={0.1} className="space-y-5">
            <div className="rounded-2xl border border-border bg-card p-5">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" aria-hidden="true" />
                <p className="text-sm font-semibold text-foreground">Prefer to call?</p>
              </div>
              <a href={contactInfo.phoneHref} className="mt-2 block text-lg font-semibold text-primary">
                {contactInfo.phoneDisplay}
              </a>
              <p className="mt-1 text-xs text-muted-foreground">
                {contactInfo.hours.map((h) => `${h.days}: ${h.time}`).join(" · ")}
              </p>
            </div>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-[#25D366]/30 bg-[#25D366]/10 p-5"
            >
              <FaWhatsapp className="h-5 w-5 text-[#25D366]" aria-hidden="true" />
              <div>
                <p className="text-sm font-semibold text-foreground">WhatsApp us instead</p>
                <p className="text-xs text-muted-foreground">Fastest way to reach our team</p>
              </div>
            </a>

            <div className="rounded-2xl border border-border bg-card p-5">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-secondary" aria-hidden="true" />
                <p className="text-sm font-semibold text-foreground">Emergency stone pain?</p>
              </div>
              <a
                href={contactInfo.emergencyPhoneHref}
                className="mt-2 block text-lg font-semibold text-secondary"
              >
                {contactInfo.emergencyPhone}
              </a>
              <p className="mt-1 text-xs text-muted-foreground">{contactInfo.emergencyNote}</p>
            </div>

            <div className="flex items-start gap-2.5 rounded-2xl bg-muted/60 p-4 text-xs text-muted-foreground">
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              Your information is used only to schedule and confirm your appointment.
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
