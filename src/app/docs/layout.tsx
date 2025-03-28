"use client"

import Link from "next/link"
import { SiteHeader } from "@/components/layout/site-header"
import { DocsSidebarNav } from "@/components/layout/sidebar"

interface DocsLayoutProps {
  children: React.ReactNode
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <div className="container flex-1">
        <div className="flex flex-col gap-4 md:flex-row">
          <aside className="w-full md:w-64 shrink-0 border-r md:sticky md:top-16 md:h-[calc(100vh-4rem)]">
            <DocsSidebarNav />
          </aside>
          <main className="flex-1 py-6 md:py-8 lg:py-10">
            {children}
          </main>
        </div>
      </div>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} EcobankPay. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
