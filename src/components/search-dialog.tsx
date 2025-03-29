"use client"

import * as React from "react"
import { Search } from "lucide-react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface SearchDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
  const [searchQuery, setSearchQuery] = React.useState("")

  // Sample search results for demonstration
  const searchResults = [
    { title: "Getting Started", href: "/docs" },
    { title: "Error Codes", href: "/docs/error-codes" },
    { title: "Integration Guide", href: "/docs/integration" },
    { title: "Request Parameters", href: "/api/request" },
    { title: "Response Codes", href: "/api/response" },
    { title: "Webhooks & Notifications", href: "/api/webhook" }
  ].filter(result =>
    searchQuery.length > 0 &&
    result.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] p-0">
        <DialogHeader className="px-4 pt-4">
          <DialogTitle>Search Documentation</DialogTitle>
        </DialogHeader>
        <div className="flex items-center border-b px-4 py-2">
          <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
          <Input
            placeholder="Search documentation..."
            className="flex h-11 w-full border-0 bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="max-h-[300px] overflow-y-auto p-4">
          {searchQuery.length > 0 ? (
            searchResults.length > 0 ? (
              <div className="space-y-2">
                {searchResults.map((result) => (
                  <Button
                    key={result.href}
                    variant="ghost"
                    className="w-full justify-start text-sm"
                    onClick={() => {
                      onOpenChange(false)
                      setSearchQuery("")
                    }}
                    asChild
                  >
                    <Link href={result.href}>{result.title}</Link>
                  </Button>
                ))}
              </div>
            ) : (
              <p className="py-6 text-center text-sm text-muted-foreground">
                No results found.
              </p>
            )
          ) : (
            <p className="py-6 text-center text-sm text-muted-foreground">
              Type to search...
            </p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
