import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { siteConfig, contactInfo } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms and conditions for using the ${siteConfig.name} website and booking services.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Terms & Conditions", href: "/terms" }]} />
      <PageHero eyebrow="Legal" title="Terms & Conditions" description="Last updated: 1 July 2026" />
      <article className="mx-auto max-w-3xl space-y-8 px-4 py-14 text-sm leading-relaxed text-foreground/85 sm:px-6 lg:px-8">
        <p>
          These Terms & Conditions govern your use of the {siteConfig.name} website. By using this
          website or its appointment booking features, you agree to the terms below.
        </p>

        <section>
          <h2 className="font-heading text-lg font-semibold text-foreground">
            1. Website Purpose
          </h2>
          <p className="mt-2">
            This website provides general information about {siteConfig.name}, our services,
            doctor, and facility, and allows visitors to request appointments or send enquiries.
            Content on this site is for informational purposes and does not replace professional
            medical advice, diagnosis, or treatment.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-lg font-semibold text-foreground">
            2. Not a Substitute for Medical Advice
          </h2>
          <p className="mt-2">
            Information on symptoms, causes, treatments, and prevention published on this site is
            general in nature. Always consult a qualified doctor for diagnosis and treatment
            specific to your condition. In a medical emergency, call our emergency line at{" "}
            {contactInfo.emergencyPhone} or your nearest emergency service immediately.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-lg font-semibold text-foreground">
            3. Appointment Requests
          </h2>
          <p className="mt-2">
            Submitting an appointment request through this website does not guarantee a confirmed
            slot until our team contacts you to confirm date, time and doctor availability.
            Emergency cases should call our emergency line directly rather than using the online
            form.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-lg font-semibold text-foreground">
            4. Accuracy of Information
          </h2>
          <p className="mt-2">
            While we make reasonable efforts to keep information on this website accurate and
            current, we do not warrant that all content is complete or error-free. Pricing,
            procedures and doctor availability are confirmed at consultation.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-lg font-semibold text-foreground">
            5. Intellectual Property
          </h2>
          <p className="mt-2">
            All content on this website, including text, graphics and layout, is the property of{" "}
            {siteConfig.name} unless otherwise noted, and may not be reproduced without permission.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-lg font-semibold text-foreground">
            6. Limitation of Liability
          </h2>
          <p className="mt-2">
            {siteConfig.name} shall not be liable for any indirect, incidental or consequential
            damages arising from the use of, or inability to use, this website or reliance on its
            content.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-lg font-semibold text-foreground">
            7. Governing Law
          </h2>
          <p className="mt-2">
            These terms are governed by the laws of India, with courts in Ajmer, Rajasthan having
            jurisdiction over any disputes.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-lg font-semibold text-foreground">8. Contact Us</h2>
          <p className="mt-2">
            Questions about these terms can be sent to{" "}
            <a href={`mailto:${contactInfo.email}`} className="text-primary underline underline-offset-2">
              {contactInfo.email}
            </a>{" "}
            or {contactInfo.phoneDisplay}.
          </p>
        </section>
      </article>
    </>
  );
}
