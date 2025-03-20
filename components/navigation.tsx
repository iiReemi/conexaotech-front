"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Home, Menu, X } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const topics = [
    { id: "frontend-basics", name: "O que é frontend?" },
    { id: "browser-interpretation", name: "Como os Navegadores Funcionam" },
    { id: "seo", name: "Como Aparecer no Google" },
    { id: "security", name: "Segurança no Frontend" },
    { id: "dev-tools", name: "Nossas Ferramentas" },
    { id: "nextjs-performance", name: "Sites Ultra-Rápidos" },
    { id: "nielsen-heuristics", name: "10 Regras de Ouro" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <img src="/logo.svg" className="w-32" />
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {topics.map((topic) => (
              <Link
                key={topic.id}
                href={`/topics/${topic.id}`}
                className={`transition-colors hover:text-foreground/80 ${
                  pathname === `/topics/${topic.id}`
                    ? "text-foreground"
                    : "text-foreground/60"
                }`}
              >
                {topic.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <Button
            variant="ghost"
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
          <ModeToggle />
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden container py-4">
          <nav className="flex flex-col space-y-4">
            {topics.map((topic) => (
              <Link
                key={topic.id}
                href={`/topics/${topic.id}`}
                className={`transition-colors hover:text-foreground/80 ${
                  pathname === `/topics/${topic.id}`
                    ? "text-foreground"
                    : "text-foreground/60"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {topic.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
