import Link from "next/link";
import { CalendarPlus, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { buttonVariants } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { contactInfo } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function CTASection({
  title = "Don't let stone pain wait.",
  description = "Book a consultation with Dr. Kamal Gehlot and get a clear treatment plan — most patients are seen within 24 hours.",
}: {
  title?: string;
  description?: string;
}) {
  const whatsappHref = `${contactInfo.whatsappHref}?text=${encodeURIComponent(
    contactInfo.whatsappMessage
  )}`;

  return (
    <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
      <Reveal className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary via-primary to-secondary px-6 py-14 text-center sm:px-16 sm:py-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -right-16 h-64 w-64 rounded-full bg-accent/30 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-white/10 blur-3xl"
        />
        <h2 className="relative text-balance font-heading text-3xl font-semibold text-white sm:text-4xl">
          {title}
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-balance text-primary-foreground/85">
          {description}
        </p>
        <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/appointment"
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-11 rounded-full bg-white px-6 text-primary hover:bg-white/90"
            )}
          >
            <CalendarPlus className="h-4 w-4" aria-hidden="true" />
            Book Appointment
          </Link>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "h-11 rounded-full border-white/40 bg-white/10 px-6 text-white hover:bg-white/20"
            )}
          >
            <FaWhatsapp className="h-4 w-4" aria-hidden="true" />
            WhatsApp Us
          </a>
          <a
            href={contactInfo.phoneHref}
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "h-11 rounded-full border-white/40 bg-white/10 px-6 text-white hover:bg-white/20"
            )}
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {contactInfo.phoneDisplay}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
