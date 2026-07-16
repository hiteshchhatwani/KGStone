"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Phone, CalendarPlus, ChevronRight } from "lucide-react";
import { Logo } from "@/components/logo";
import { buttonVariants } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { mainNav } from "@/content/nav";
import { contactInfo } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="glass sticky top-0 z-50 border-b">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 py-2.5 sm:px-6 lg:px-8">
        <Logo />

        <NavigationMenu className="hidden max-w-none flex-1 justify-center lg:flex">
          <NavigationMenuList>
            {mainNav.map((group) =>
              group.items.length === 0 ? (
                <NavigationMenuItem key={group.label}>
                  <Link
                    href={group.href ?? "#"}
                    className={cn(
                      "inline-flex h-9 items-center rounded-lg px-2.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
                    )}
                  >
                    {group.label}
                  </Link>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem key={group.label}>
                  <NavigationMenuTrigger>{group.label}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-72 gap-1 p-2">
                      {group.items.map((item) => (
                        <li key={item.href}>
                          <NavigationMenuLink
                            render={<Link href={item.href} />}
                            className="flex-col items-start gap-0.5"
                          >
                            <span className="text-sm font-medium text-foreground">
                              {item.label}
                            </span>
                            {item.description && (
                              <span className="text-xs text-muted-foreground">
                                {item.description}
                              </span>
                            )}
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              )
            )}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-2">
          <a
            href={contactInfo.phoneHref}
            className="hidden items-center gap-1.5 text-sm font-semibold text-secondary xl:flex"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {contactInfo.phoneDisplay}
          </a>
          <Link
            href="/appointment"
            className={cn(buttonVariants({ size: "lg" }), "hidden sm:inline-flex")}
          >
            <CalendarPlus className="h-4 w-4" aria-hidden="true" />
            Book Appointment
          </Link>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground lg:hidden"
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="right" className="w-full max-w-sm gap-0 overflow-y-auto">
          <SheetHeader className="border-b">
            <SheetTitle>
              <Logo />
            </SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col gap-1 p-4">
            {mainNav.map((group) => (
              <div key={group.label} className="border-b border-border/70 py-2 last:border-0">
                {group.href ? (
                  <Link
                    href={group.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between py-2 text-base font-semibold text-foreground"
                  >
                    {group.label}
                    <ChevronRight className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                  </Link>
                ) : (
                  <p className="py-2 text-base font-semibold text-foreground">{group.label}</p>
                )}
                {group.items.length > 0 && (
                  <ul className="ml-1 flex flex-col gap-1 pb-1">
                    {group.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className="block rounded-lg px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </nav>
          <div className="mt-auto flex flex-col gap-2 border-t p-4">
            <a
              href={contactInfo.phoneHref}
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {contactInfo.phoneDisplay}
            </a>
            <Link
              href="/appointment"
              onClick={() => setOpen(false)}
              className={cn(buttonVariants({ size: "lg" }))}
            >
              <CalendarPlus className="h-4 w-4" aria-hidden="true" />
              Book Appointment
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}
