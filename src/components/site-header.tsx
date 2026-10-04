import { useEffect, useState, type ReactNode } from "react"
import { Moon, Sun } from "lucide-react"

import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

function useActiveSection() {
  const [active, setActive] = useState(NAV_ITEMS[0].href)

  useEffect(() => {
    const sections = NAV_ITEMS.flatMap((item) => {
      const section = document.querySelector(item.href)
      return section instanceof HTMLElement ? [section] : []
    })
    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target.id) setActive(`#${visible.target.id}`)
      },
      { rootMargin: "-15% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] }
    )

    for (const section of sections) observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return active
}

export function SiteShell({ children }: { children: ReactNode }) {
  const active = useActiveSection()

  return (
    <>
      <div className="sticky top-0 z-30 border-b bg-background sm:hidden">
        <div className="flex items-center justify-between gap-3 px-6 py-3">
          <nav aria-label="Main" className="min-w-0">
            <NavLinks
              active={active}
              className="flex flex-wrap gap-x-3 gap-y-1"
            />
          </nav>
          <ThemeToggle />
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-[52rem]">
        <aside className="sticky top-0 hidden h-svh w-40 shrink-0 flex-col self-start px-6 py-16 sm:flex">
          <nav aria-label="Main">
            <NavLinks active={active} className="flex flex-col gap-3" />
          </nav>
          <div className="mt-auto">
            <ThemeToggle />
          </div>
        </aside>
        <div className="min-w-0 flex-1">{children}</div>
      </div>
    </>
  )
}

function NavLinks({
  active,
  className,
}: {
  active: string
  className: string
}) {
  return (
    <ul className={className}>
      {NAV_ITEMS.map((item) => {
        const isActive = active === item.href
        return (
          <li key={item.href}>
            <a
              href={item.href}
              aria-current={isActive ? "location" : undefined}
              className={`rounded-xs text-sm transition-colors outline-none focus-visible:ring-3 focus-visible:ring-ring/50 ${
                isActive
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </a>
          </li>
        )
      })}
    </ul>
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
