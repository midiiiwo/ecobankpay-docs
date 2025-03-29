"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import Image from "next/image";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search } from "lucide-react";

interface MainNavProps {
  onSearchClick: () => void;
}

export function MainNav({ onSearchClick }: MainNavProps) {
  const pathname = usePathname();

  const CommandIcon = ({ className }) => (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 4h-4a4 4 0 0 0-4 4v4" />
      <path d="M8 16h4a4 4 0 0 0 4-4v-4" />
      <path d="M4 8h4" />
      <path d="M16 8h4" />
      <path d="M4 16h4" />
      <path d="M16 16h4" />
    </svg>
  );

  return (
    <div className="mr-4 flex items-center space-x-4 lg:space-x-6">
      <Link href="/" className="flex items-center space-x-2">
        <span className="hidden font-bold sm:inline-block text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-400">
          <Image
            src={require("../../../assets/images/tool.png")}
            alt="Tool Icon"
            width={200}
            height={200}
          />
        </span>
      </Link>
      <nav className="flex items-center space-x-2">
        <Button
          variant="ghost"
          asChild
          className={cn(
            "text-sm font-medium transition-colors",
            pathname === "/" || pathname.startsWith("/docs")
              ? "text-foreground bg-accent"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          <Link href="/docs">Documentation</Link>
        </Button>
        <Button
          variant="ghost"
          asChild
          className={cn(
            "text-sm font-medium transition-colors",
            pathname === "/guides"
              ? "text-foreground bg-accent"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          <Link href="/guides">Guides</Link>
        </Button>
        <Button
          variant="ghost"
          asChild
          className={cn(
            "text-sm font-medium transition-colors",
            pathname === "/api"
              ? "text-foreground bg-accent"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          <Link href="/api">API Reference</Link>
        </Button>
        <Button
          variant="ghost"
          className="flex items-center justify-between px-4 py-2 border border-gray-500 w-40 md:w-48 rounded-full text-white hover:bg-black/60 focus:ring-2 focus:ring-blue-400"
          onClick={onSearchClick}
        >
          <div className="flex items-center space-x-2">
            <Search className="h-5 w-5 text-gray-300" />
            <span className="hidden text-sm font-medium text-gray-300 md:inline">
              Search
            </span>
          </div>
          <div className="flex items-center space-x-1 bg-gray-700/50 text-white px-2 py-0.5 rounded-md">
            <span className="text-xs">⌘</span>
            <span className="text-xs">K</span>
          </div>
        </Button>
      </nav>
    </div>
  );
}
