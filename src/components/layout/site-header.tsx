"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

import { ThemeToggle } from "@/components/theme-toggle"
import { MainNav } from "@/components/layout/main-nav"
import { SearchDialog } from "@/components/search-dialog"
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/command-palette"

export function SiteHeader() {
  const [searchOpen, setSearchOpen] = useState(false)
  const [commandOpen, setCommandOpen] = useState(false)

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setCommandOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const toggleSearch = () => setSearchOpen(!searchOpen)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <MainNav onSearchClick={toggleSearch} />
        <div className="flex items-center space-x-2">
          <ThemeToggle />
        </div>
      </div>

      {/* Search Dialog - triggered by search icon */}
      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />

      {/* Command Palette - triggered by Cmd+K/Ctrl+K */}
      <CommandDialog open={commandOpen} onOpenChange={setCommandOpen}>
        <CommandInput placeholder="Type a command..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Documentation">
            <CommandItem>
              <Link href="/docs" className="flex w-full">
                Getting Started
              </Link>
            </CommandItem>
            <CommandItem>
              <Link href="/docs/error-codes" className="flex w-full">
                Error Codes
              </Link>
            </CommandItem>
            <CommandItem>
              <Link href="/docs/integration" className="flex w-full">
                Integration Guide
              </Link>
            </CommandItem>
          </CommandGroup>
          <CommandGroup heading="API Reference">
            <CommandItem>
              <Link href="/api/request" className="flex w-full">
                Request Parameters
              </Link>
            </CommandItem>
            <CommandItem>
              <Link href="/api/response" className="flex w-full">
                Response Codes
              </Link>
            </CommandItem>
            <CommandItem>
              <Link href="/api/webhook" className="flex w-full">
                Webhooks & Notifications
              </Link>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </header>
  )
}
