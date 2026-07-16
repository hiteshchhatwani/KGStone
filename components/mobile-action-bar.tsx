import Link from "next/link";
import { Phone, CalendarPlus } from "lucide-react";
import { contactInfo } from "@/lib/site-config";

export function MobileActionBar() {
  return (
    <div className="glass fixed inset-x-0 bottom-0 z-40 flex items-stretch gap-2 border-t px-3 py-2.5 md:hidden">
      <a
        href={contactInfo.phoneHref}
        className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-secondary py-2.5 text-sm font-semibold text-secondary-foreground transition-transform duration-200 ease-out active:scale-95"
      >
        <Phone className="h-4 w-4" aria-hidden="true" />
        Call Now
      </a>
      <Link
        href="/appointment"
        className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary py-2.5 text-sm font-semibold text-primary-foreground transition-transform duration-200 ease-out active:scale-95"
      >
        <CalendarPlus className="h-4 w-4" aria-hidden="true" />
        Book Appointment
      </Link>
    </div>
  );
}
