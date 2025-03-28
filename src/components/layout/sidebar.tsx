"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";

const sidebarNavItems = [
  {
    title: "Getting Started",
    href: "/docs",
    items: [
      {
        title: "Introduction",
        href: "/docs",
      },
      {
        title: "Prerequisites",
        href: "/docs/prerequisites",
      },
    ],
  },
  {
    title: "Integration",
    href: "/docs/integration",
    items: [
      {
        title: "Gateway Overview",
        href: "/docs/integration",
      },
      {
        title: "Payment Flow",
        href: "/docs/integration/payment-flow",
      },
    ],
  },
  {
    title: "API Reference",
    href: "/api",
    items: [
      {
        title: "Request Parameters",
        href: "/api/request",
      },
      {
        title: "Response Codes",
        href: "/api/response",
      },
      {
        title: "Webhooks",
        href: "/api/webhook",
      },
      {
        title: "Error Codes",
        href: "/api/error-codes",
      },
    ],
  },
  {
    title: "Sample Code",
    href: "/docs/sample-code",
    items: [
      {
        title: "Request Example",
        href: "/docs/sample-code/request",
      },
      {
        title: "Response Example",
        href: "/docs/sample-code/response",
      },
    ],
  },
];

interface DocsSidebarNavProps {
  className?: string;
}

export function DocsSidebarNav({ className }: DocsSidebarNavProps) {
  const pathname = usePathname();

  return (
    <div
      className={cn("w-full h-screen sticky top-14 overflow-hidden", className)}
    >
      <div className={cn("w-full", className)}>
        {sidebarNavItems.map((section) => (
          <div key={section.href} className="pb-4">
            <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">
              {section.title}
            </h4>
            {section.items && section.items.length > 0 ? (
              <div className="grid grid-flow-row auto-rows-max text-sm">
                {section.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline",
                      pathname === item.href
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
    </div>
  );
}
