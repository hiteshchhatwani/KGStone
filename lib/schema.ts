import { siteConfig, contactInfo } from "./site-config";
import { doctor } from "@/content/doctor";
import { faqs } from "@/content/faqs";

export function medicalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "@id": `${siteConfig.url}/#hospital`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: contactInfo.phone,
    email: contactInfo.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: contactInfo.address.line1,
      addressLocality: "Ajmer",
      addressRegion: "Rajasthan",
      postalCode: "305001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: contactInfo.address.lat,
      longitude: contactInfo.address.lng,
    },
    medicalSpecialty: "Urology",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "11:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "17:00",
        closes: "19:00",
      },
    ],
    sameAs: Object.values(contactInfo.social),
  };
}

export function physicianSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": `${siteConfig.url}/about-doctor/#physician`,
    name: doctor.name,
    honorificSuffix: doctor.credentials,
    jobTitle: doctor.title,
    medicalSpecialty: "Urology",
    worksFor: {
      "@type": "MedicalClinic",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    url: `${siteConfig.url}/about-doctor`,
  };
}

export function faqPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function medicalProcedureSchema(name: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name,
    description,
    url,
    performer: {
      "@type": "Physician",
      name: doctor.name,
    },
    availableService: {
      "@type": "MedicalClinic",
      name: siteConfig.name,
    },
  };
}

export function articleSchema(opts: {
  title: string;
  description: string;
  url: string;
  publishedAt: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    headline: opts.title,
    description: opts.description,
    url: opts.url,
    datePublished: opts.publishedAt,
    author: {
      "@type": "Physician",
      name: doctor.name,
    },
    publisher: {
      "@type": "MedicalClinic",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}
