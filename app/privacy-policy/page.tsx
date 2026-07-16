import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { siteConfig, contactInfo } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${siteConfig.name} — how we collect, use and protect your personal and health information.`,
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Privacy Policy", href: "/privacy-policy" }]} />
      <PageHero eyebrow="Legal" title="Privacy Policy" description="Last updated: 1 July 2026" />
      <article className="mx-auto max-w-3xl space-y-8 px-4 py-14 text-sm leading-relaxed text-foreground/85 sm:px-6 lg:px-8">
        <p>
          This Privacy Policy explains how {siteConfig.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;,
          &ldquo;our&rdquo;) collects, uses and protects information you share with us through this
          website, over phone, WhatsApp, or during a hospital visit.
        </p>

        <section>
          <h2 className="font-heading text-lg font-semibold text-foreground">
            1. Information We Collect
          </h2>
          <p className="mt-2">
            When you book an appointment, submit a contact form, or message us on WhatsApp, we may
            collect your name, phone number, email address, age, gender, preferred appointment
            details, and any symptoms or messages you choose to share. During a hospital visit, we
            collect additional medical information as part of standard clinical care and record-keeping.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-lg font-semibold text-foreground">
            2. How We Use Your Information
          </h2>
          <ul className="mt-2 list-disc space-y-1.5 pl-5">
            <li>To schedule, confirm and manage your appointments</li>
            <li>To contact you regarding your enquiry, appointment, or treatment</li>
            <li>To maintain accurate medical records for your care</li>
            <li>To process insurance and billing where applicable</li>
            <li>To improve our services and website</li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading text-lg font-semibold text-foreground">
            3. Medical Confidentiality
          </h2>
          <p className="mt-2">
            All medical information is treated as strictly confidential and handled in accordance
            with standard medical ethics and applicable healthcare data protection norms. Your
            health information is only shared with treating clinicians, laboratory/imaging
            partners directly involved in your care, and insurers or TPAs where you have requested
            cashless processing.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-lg font-semibold text-foreground">4. Data Security</h2>
          <p className="mt-2">
            We take reasonable technical and organisational measures to protect your information
            from unauthorised access, alteration, disclosure or destruction. No online submission,
            however, can be guaranteed 100% secure — please avoid sending highly sensitive
            information through the general contact form and call us directly for urgent or
            sensitive matters.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-lg font-semibold text-foreground">
            5. Third-Party Services
          </h2>
          <p className="mt-2">
            Our website may use third-party services such as Google Maps for location display and
            WhatsApp for messaging. These services have their own privacy policies governing use of
            information you share directly with them.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-lg font-semibold text-foreground">6. Your Rights</h2>
          <p className="mt-2">
            You may request access to, correction of, or deletion of your personal information held
            by us, subject to our legal obligation to retain certain medical records. Contact us at{" "}
            <a href={`mailto:${contactInfo.email}`} className="text-primary underline underline-offset-2">
              {contactInfo.email}
            </a>{" "}
            for any such request.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-lg font-semibold text-foreground">
            7. Changes to This Policy
          </h2>
          <p className="mt-2">
            We may update this Privacy Policy from time to time. Changes will be posted on this
            page with an updated revision date.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-lg font-semibold text-foreground">8. Contact Us</h2>
          <p className="mt-2">
            For privacy-related questions, contact us at {contactInfo.address.full}, phone{" "}
            {contactInfo.phoneDisplay}, or email{" "}
            <a href={`mailto:${contactInfo.email}`} className="text-primary underline underline-offset-2">
              {contactInfo.email}
            </a>
            .
          </p>
        </section>
      </article>
    </>
  );
}
