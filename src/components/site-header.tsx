import { Menu, Moon, Sun } from "lucide-react"

import { site } from "@/content"
import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
]

export function SiteHeader() {
  return (
    <header className="mx-auto flex max-w-2xl items-center justify-end gap-3 px-6 pt-6">
      <nav aria-label="Main" className="hidden sm:block">
        <ul className="flex items-center gap-5 text-sm">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="rounded-xs text-muted-foreground transition-colors outline-none hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <ThemeToggle />
      <MobileNav />
    </header>
  )
}

function ThemeToggle() {
  const { setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Toggle dark mode"
      onClick={() =>
        setTheme(
          document.documentElement.classList.contains("dark") ? "light" : "dark"
        )
      }
    >
      <Sun className="dark:hidden" />
      <Moon className="hidden dark:block" />
    </Button>
  )
}

function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="sm:hidden"
          aria-label="Open menu"
        >
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-72">
        <SheetHeader>
          <SheetTitle>{site.name}</SheetTitle>
          <SheetDescription>Jump to a section</SheetDescription>
        </SheetHeader>
        <nav aria-label="Mobile" className="px-2">
          <ul className="grid gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <SheetClose asChild>
                  <a
                    href={item.href}
                    className="block rounded-md px-3 py-2.5 text-base transition-colors outline-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50"
                  >
                    {item.label}
                  </a>
                </SheetClose>
              </li>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
