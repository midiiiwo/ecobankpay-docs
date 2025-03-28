"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Search } from "lucide-react"

interface MainNavProps {
  onSearchClick: () => void
}

export function MainNav({ onSearchClick }: MainNavProps) {
  const pathname = usePathname()

  return (
    <div className="mr-4 flex items-center space-x-4 lg:space-x-6">
      <Link href="/" className="flex items-center space-x-2">
        <span className="hidden font-bold sm:inline-block text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-400">
          EcobankPay
        </span>
      </Link>
      <nav className="flex items-center space-x-2">
        <Button variant="ghost" asChild className={cn("text-sm font-medium transition-colors",
          pathname === "/" || pathname.startsWith("/docs") ? "text-foreground bg-accent" : "text-muted-foreground hover:text-foreground")}>
          <Link href="/docs">Documentation</Link>
        </Button>
        <Button variant="ghost" asChild className={cn("text-sm font-medium transition-colors",
          pathname === "/guides" ? "text-foreground bg-accent" : "text-muted-foreground hover:text-foreground")}>
          <Link href="/guides">Guides</Link>
        </Button>
        <Button variant="ghost" asChild className={cn("text-sm font-medium transition-colors",
          pathname === "/api" ? "text-foreground bg-accent" : "text-muted-foreground hover:text-foreground")}>
          <Link href="/api">API Reference</Link>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="ml-2"
          onClick={onSearchClick}
        >
          <Search className="h-5 w-5" />
          <span className="sr-only">Search documentation</span>
        </Button>
      </nav>
    </div>
  )
}
