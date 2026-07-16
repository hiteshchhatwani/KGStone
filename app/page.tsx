import Link from "next/link";
import type { Metadata } from "next";
import {
  CalendarPlus,
  ShieldCheck,
  Sparkles,
  Timer,
  PlayCircle,
  ArrowUpRight,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { buttonVariants } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { ServiceCard } from "@/components/service-card";
import { TestimonialCard } from "@/components/testimonial-card";
import { BlogCard } from "@/components/blog-card";
import { FAQAccordion } from "@/components/faq-accordion";
import { CTASection } from "@/components/cta-section";
import { PlaceholderImage } from "@/components/placeholder-image";
import { DynamicIcon } from "@/lib/icon";
import { JsonLd } from "@/components/json-ld";
import { faqPageSchema } from "@/lib/schema";
import { services } from "@/content/services";
import { doctor } from "@/content/doctor";
import { testimonials } from "@/content/testimonials";
import { blogPosts } from "@/content/blog";
import { homeStats, technology, insurance } from "@/content/stats";
import { faqs } from "@/content/faqs";
import { contactInfo, siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Kidney Stone Hospital in Ajmer",
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

const homeFaqs = faqs.slice(0, 6);
const whatsappHref = `${contactInfo.whatsappHref}?text=${encodeURIComponent(
  contactInfo.whatsappMessage
)}`;

export default function Home() {
  return (
    <>
      <JsonLd data={faqPageSchema()} />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 pt-14 pb-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8 lg:pt-20 lg:pb-28">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold tracking-wide text-primary uppercase">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                Ajmer&rsquo;s Super-Specialty Urology Hospital
              </span>
              <h1 className="mt-5 text-balance font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Kidney Stone Pain Ends Here.{" "}
                <span className="text-primary">Laser-Precise</span> Treatment in Ajmer.
              </h1>
              <p className="mt-5 max-w-xl text-balance text-base leading-relaxed text-muted-foreground sm:text-lg">
                {siteConfig.name}{" "}treats kidney stones of every size with laser surgery, PCNL,
                URS, RIRS and ESWL — led by {doctor.name}, {doctor.surgeriesPerformed}{" "}surgeries
                performed. Most patients go home the same day.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/appointment"
                className={cn(buttonVariants({ size: "lg" }), "h-12 rounded-full px-7 text-base")}
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
                  "h-12 rounded-full px-7 text-base"
                )}
              >
                <FaWhatsapp className="h-4 w-4 text-[#25D366]" aria-hidden="true" />
                WhatsApp Enquiry
              </a>
            </Reveal>
            <Reveal delay={0.18} className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {homeStats.map((s) => (
                <div key={s.label}>
                  <p className="font-heading text-2xl font-semibold text-foreground sm:text-3xl">
                    {s.value.toLocaleString("en-IN")}
                    <span className="text-primary">{s.suffix}</span>
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground sm:text-sm">{s.label}</p>
                </div>
              ))}
            </Reveal>
          </div>

          <Reveal delay={0.15} className="relative">
            <div className="relative mx-auto max-w-md">
              <PlaceholderImage
                icon="stethoscope"
                label={`${doctor.name} consulting a patient at ${siteConfig.name}`}
                className="aspect-[4/5] w-full"
                iconClassName="h-16 w-16"
              />
              <div className="glass absolute -bottom-6 -left-6 flex items-center gap-3 rounded-2xl p-4 shadow-lg sm:-left-10">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">10,000+ Surgeries</p>
                  <p className="text-xs text-muted-foreground">Performed by Dr. Sharma</p>
                </div>
              </div>
              <div className="glass absolute -top-5 -right-4 flex items-center gap-3 rounded-2xl p-3.5 shadow-lg sm:-right-8">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/20 text-accent-foreground">
                  <Timer className="h-4.5 w-4.5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Same-Day Discharge</p>
                  <p className="text-xs text-muted-foreground">For most laser cases</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Hospital introduction */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold tracking-wide text-secondary uppercase">
              About KG Stone Hospital
            </span>
            <h2 className="mt-3 text-balance font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Advanced stone care, built for Ajmer — not imported from it.
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {siteConfig.name}{" "}was built around a simple idea: patients in Ajmer shouldn&rsquo;t
              have to travel to Jaipur or beyond for advanced, laser-based kidney stone treatment.
              Led by Dr. Kuldeep Sharma — who performed the Ajmer division&rsquo;s first urology
              surgery — our in-house laser lithotripsy suite, fluoroscopy-guided PCNL setup and
              flexible ureteroscopes put us on par with the region&rsquo;s leading urology centres.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "In-house laser, PCNL, RIRS, URS & ESWL under one roof",
                "24×7 emergency care for acute stone pain",
                "Transparent cost estimates before any procedure",
                "Cashless admission with major insurers & TPAs",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground/90">
                  <ShieldCheck className="mt-0.5 h-4.5 w-4.5 shrink-0 text-primary" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/about-hospital"
              className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary"
            >
              More about our hospital
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
          <Reveal delay={0.1} className="grid grid-cols-2 gap-4">
            {technology.slice(0, 4).map((t) => (
              <div key={t.title} className="rounded-2xl border border-border bg-card p-5">
                <DynamicIcon name={t.icon} className="h-6 w-6 text-primary" strokeWidth={1.75} aria-hidden="true" />
                <p className="mt-3 text-sm font-semibold text-foreground">{t.title}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Doctor profile */}
      <section className="bg-tint/40 py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16 lg:px-8">
          <Reveal>
            <PlaceholderImage
              icon="user-round"
              label={`Portrait of ${doctor.name}`}
              className="aspect-[3/4] w-full max-w-sm"
              iconClassName="h-16 w-16"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold tracking-wide text-primary uppercase">
              Meet Your Surgeon
            </span>
            <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {doctor.name}
            </h2>
            <p className="mt-1 text-sm font-medium text-secondary">{doctor.credentials}</p>
            <p className="mt-4 leading-relaxed text-muted-foreground">{doctor.summary}</p>
            <blockquote className="mt-5 border-l-2 border-primary pl-4 font-heading text-lg italic text-foreground/90">
              {doctor.philosophy}
            </blockquote>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {doctor.stats.map((s) => (
                <div key={s.label}>
                  <p className="font-heading text-xl font-semibold text-foreground">{s.value}</p>
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
            <Link
              href="/about-doctor"
              className={cn(buttonVariants({ size: "lg" }), "mt-7 rounded-full px-6")}
            >
              Read Full Profile
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Why choose us */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why KG Stone"
          title="Why patients across Rajasthan choose us"
          description="A focused stone-care programme, not a general hospital treating stones as one line item among many."
          align="center"
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: "target",
              title: "Least-invasive-first",
              text: "We recommend the smallest effective procedure for your stone — never the biggest one by default.",
            },
            {
              icon: "zap",
              title: "In-house laser technology",
              text: "Holmium laser, PCNL and RIRS setups on site — no referring you elsewhere for advanced procedures.",
            },
            {
              icon: "clock-4",
              title: "Fast access",
              text: "Most patients are seen within 24 hours; emergency stone pain is attended 24×7.",
            },
            {
              icon: "heart-handshake",
              title: "Clear communication",
              text: "You'll understand your stone, your options and your recovery before you agree to anything.",
            },
          ].map((f, i) => (
            <Reveal key={f.title} delay={i * 0.05}>
              <div className="h-full rounded-3xl border border-border bg-card p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <DynamicIcon name={f.icon} className="h-5.5 w-5.5" strokeWidth={1.75} aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-heading text-base font-semibold text-foreground">
                  {f.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Treatment options */}
      <section className="bg-clinical/50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Treatment Options"
            title="Five ways we clear kidney stones — matched to your stone"
            description="From non-invasive shockwave therapy to advanced PCNL for the largest stones, we recommend based on size, location and hardness."
            align="center"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.05}>
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Technology"
          title="The equipment behind our success rate"
          align="center"
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {technology.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.04}>
              <div className="flex h-full gap-4 rounded-2xl border border-border bg-card p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                  <DynamicIcon name={t.icon} className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {t.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Stats band */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <Reveal className="grid grid-cols-2 gap-4 rounded-[2rem] border border-border bg-card p-6 sm:grid-cols-4 sm:p-8">
          {homeStats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-heading text-3xl font-semibold text-primary sm:text-4xl">
                {s.value.toLocaleString("en-IN")}
                {s.suffix}
              </p>
              <p className="mt-1 text-xs font-medium text-muted-foreground sm:text-sm">
                {s.label}
              </p>
            </div>
          ))}
        </Reveal>
      </section>

      {/* Testimonials */}
      <section className="bg-tint/40 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Patient Voices"
            title="What our patients say"
            align="center"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.slice(0, 6).map((t, i) => (
              <Reveal key={t.name} delay={i * 0.04}>
                <TestimonialCard testimonial={t} />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8 text-center">
            <Link
              href="/testimonials"
              className="inline-flex items-center gap-1 text-sm font-semibold text-primary"
            >
              Read all patient testimonials
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Video section */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold tracking-wide text-primary uppercase">
              See Inside
            </span>
            <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              A tour of our laser stone-care facility
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Take a look inside our operation theatre, recovery suite and laser lithotripsy unit
              — the same facility where over 10,000 surgeries have been performed.
            </p>
            <Link
              href="/gallery"
              className={cn(buttonVariants({ size: "lg" }), "mt-6 rounded-full px-6")}
            >
              View Full Gallery
            </Link>
          </Reveal>
          <Reveal delay={0.1} className="group relative">
            <PlaceholderImage
              icon="play-circle"
              label="Video tour of KG Stone Hospital"
              className="aspect-video w-full"
              iconClassName="h-14 w-14"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-primary shadow-lg transition-transform duration-300 ease-out group-hover:scale-105">
                <PlayCircle className="h-8 w-8" aria-hidden="true" />
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Insurance */}
      <section className="bg-clinical/50 py-16">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Insurance & Billing"
            title="Cashless treatment with major insurers"
            description={insurance.intro}
            align="center"
          />
          <Reveal delay={0.1} className="mt-8 flex flex-wrap justify-center gap-2.5">
            {insurance.accepted.map((name) => (
              <span
                key={name}
                className="rounded-full border border-border bg-card px-4 py-1.5 text-sm text-foreground/85"
              >
                {name}
              </span>
            ))}
          </Reveal>
          <p className="mx-auto mt-6 max-w-xl text-xs text-muted-foreground">{insurance.note}</p>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Inside KG Stone" title="Our facility" align="center" />
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { icon: "building-2", label: "Hospital Front Entrance" },
            { icon: "stethoscope", label: "Modular Operation Theatre" },
            { icon: "zap", label: "Laser Lithotripsy Suite" },
            { icon: "bed", label: "Private Recovery Room" },
          ].map((g, i) => (
            <Reveal key={g.label} delay={i * 0.05}>
              <PlaceholderImage icon={g.icon} label={g.label} className="aspect-square w-full" />
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8 text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary"
          >
            View full gallery
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="bg-tint/40 py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="FAQs" title="Common questions, answered" align="center" />
          <Reveal delay={0.1} className="mt-8">
            <FAQAccordion faqs={homeFaqs} idPrefix="home-faq" />
          </Reveal>
          <Reveal className="mt-6 text-center">
            <Link
              href="/faqs"
              className="inline-flex items-center gap-1 text-sm font-semibold text-primary"
            >
              View all FAQs
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Latest blogs */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="From the Blog"
          title="Understand your stone, before your visit"
          align="center"
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.slice(0, 3).map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05}>
              <BlogCard post={p} />
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary"
          >
            Read all articles
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Reveal>
      </section>

      <CTASection />

      {/* Map */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Find Us" title="Visit KG Stone Hospital" align="center" />
        <Reveal delay={0.1} className="mt-8 overflow-hidden rounded-3xl border border-border">
          <iframe
            title="KG Stone Hospital location on Google Maps"
            src={contactInfo.address.mapsEmbedSrc}
            className="h-96 w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </section>
    </>
  );
}
