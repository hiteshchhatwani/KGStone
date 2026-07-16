import type { Metadata } from "next";
import { bodyFont, displayFont } from "@/lib/fonts";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { MobileActionBar } from "@/components/mobile-action-bar";
import { JsonLd } from "@/components/json-ld";
import { medicalBusinessSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Kidney Stone Treatment in Ajmer`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "kidney stone hospital Ajmer",
    "kidney stone treatment Ajmer",
    "laser stone surgery Ajmer",
    "PCNL Ajmer",
    "urologist Ajmer",
    "best kidney stone doctor Rajasthan",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Kidney Stone Treatment in Ajmer`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Kidney Stone Treatment in Ajmer`,
    description: siteConfig.description,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${displayFont.variable} h-full antialiased`}
    >
      <body className="mesh-hero flex min-h-full flex-col pb-16 md:pb-0">
        <JsonLd data={medicalBusinessSchema()} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <MobileActionBar />
      </body>
    </html>
  );
}
