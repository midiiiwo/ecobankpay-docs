"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { SiteHeader } from "@/components/layout/site-header";

interface NavLink {
  title: string;
  href: string;
  isActivePath: boolean;
}

interface NavSection {
  title: string;
  links: NavLink[];
}
function GuidesSidebar({
  className,
  links,
}: {
  className?: string;
  links: NavSection[];
}) {
  const pathname = usePathname();

  return (
    <div
      className={cn("w-full h-screen sticky top-14 overflow-hidden", className)}
    >
      {links.map((section, index) => (
        <div key={index} className="pb-4">
          <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">
            {section.title}
          </h4>
          {section.links && section.links.length > 0 ? (
            <div className="grid grid-flow-row auto-rows-max text-sm">
              {section.links.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline",
                    item.isActivePath
                      ? "font-medium text-foreground bg-accent"
                      : "text-muted-foreground"
                  )}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export default function GuidesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <GuidesSidebar
          className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block"
          links={[
            {
              title: "Getting Started",
              links: [
                {
                  title: "Introduction",
                  href: "/guides",
                  isActivePath: pathname === "/guides",
                },
                {
                  title: "Setup Guide",
                  href: "/guides/setup",
                  isActivePath: pathname === "/guides/setup",
                },
              ],
            },
            {
              title: "Implementation",
              links: [
                {
                  title: "Mobile Money Integration",
                  href: "/guides/mobile-money",
                  isActivePath: pathname === "/guides/mobile-money",
                },
                {
                  title: "Card Payments",
                  href: "/guides/card-payments",
                  isActivePath: pathname === "/guides/card-payments",
                },
                {
                  title: "QR Code Payments",
                  href: "/guides/qr-code",
                  isActivePath: pathname === "/guides/qr-code",
                },
              ],
            },
            {
              title: "Advanced Topics",
              links: [
                {
                  title: "Security Best Practices",
                  href: "/guides/security",
                  isActivePath: pathname === "/guides/security",
                },
                {
                  title: "Webhooks Setup",
                  href: "/guides/webhooks",
                  isActivePath: pathname === "/guides/webhooks",
                },
                {
                  title: "Testing",
                  href: "/guides/testing",
                  isActivePath: pathname === "/guides/testing",
                },
              ],
            },
          ]}
        />
        <main className="relative py-6 lg:gap-10 lg:py-8">{children}</main>
      </div>
    </div>
  );
}
