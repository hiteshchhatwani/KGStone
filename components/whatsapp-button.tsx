"use client";

import { FaWhatsapp } from "react-icons/fa";
import { contactInfo } from "@/lib/site-config";

export function WhatsAppButton() {
  const href = `${contactInfo.whatsappHref}?text=${encodeURIComponent(contactInfo.whatsappMessage)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with KG Stone Hospital on WhatsApp"
      className="fixed right-5 bottom-24 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/15 ring-4 ring-white/60 transition-transform duration-300 ease-out hover:scale-105 active:scale-95 md:bottom-6 dark:ring-black/20"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/60 motion-reduce:animate-none" />
      <FaWhatsapp className="h-7 w-7" aria-hidden="true" />
    </a>
  );
}
