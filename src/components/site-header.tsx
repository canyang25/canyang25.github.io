import { useEffect, useRef, useState, type ReactNode } from "react"
import { Moon, Sun } from "lucide-react"

import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
]

function useActiveSection() {
  const [active, setActive] = useState(NAV_ITEMS[0].href)
  const scrollingTo = useRef<string | null>(null)
  const motion = useRef(0)

  useEffect(() => {
    const sections = NAV_ITEMS.flatMap((item) => {
      const section = document.querySelector(item.href)
      return section instanceof HTMLElement ? [section] : []
    })
    if (sections.length === 0) return

    const update = () => {
      if (scrollingTo.current) return
      const line = 112
      let current = NAV_ITEMS[0].href
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= line) {
          current = `#${section.id}`
        }
      }
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4
      if (atBottom) current = NAV_ITEMS[NAV_ITEMS.length - 1].href
      setActive(current)
    }

    const release = () => {
      motion.current += 1
      scrollingTo.current = null
      update()
    }

    update()
    window.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update)
    window.addEventListener("wheel", release, { passive: true })
    window.addEventListener("touchmove", release, { passive: true })
    return () => {
      window.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
      window.removeEventListener("wheel", release)
      window.removeEventListener("touchmove", release)
    }
  }, [])

  function navigate(href: string) {
    const section = document.querySelector(href)
    if (!(section instanceof HTMLElement)) return

    scrollingTo.current = href
    setActive(href)
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const offset = window.matchMedia("(min-width: 640px)").matches ? 32 : 80
    const max = Math.max(
      0,
      document.documentElement.scrollHeight - window.innerHeight
    )
    const top = Math.min(
      max,
      Math.max(0, section.getBoundingClientRect().top + window.scrollY - offset)
    )
    const frame = ++motion.current

    if (reduce || Math.abs(top - window.scrollY) < 2) {
      window.scrollTo({ top, behavior: "instant" })
      if (scrollingTo.current === href) scrollingTo.current = null
      return
    }

    const start = window.scrollY
    const distance = top - start
    const duration = Math.min(1000, Math.max(480, Math.abs(distance) * 0.5))
    const startTime = performance.now()

    const tick = (now: number) => {
      if (motion.current !== frame) return
      const t = Math.min(1, (now - startTime) / duration)
      const eased = t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2
      window.scrollTo({
        top: start + distance * eased,
        behavior: "instant",
      })
      if (t < 1) {
        requestAnimationFrame(tick)
        return
      }
      if (scrollingTo.current === href) scrollingTo.current = null
    }
    requestAnimationFrame(tick)
  }

  return { active, navigate }
}

export function SiteShell({ children }: { children: ReactNode }) {
  const { active, navigate } = useActiveSection()

  return (
    <>
      <div className="sticky top-0 z-30 border-b bg-background sm:hidden">
        <div className="flex items-center justify-between gap-3 px-6 py-3">
          <nav aria-label="Main" className="min-w-0">
            <NavLinks
              active={active}
              navigate={navigate}
              className="flex flex-wrap gap-x-3 gap-y-1"
            />
          </nav>
          <ThemeToggle />
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-[52rem]">
        <aside className="sticky top-0 hidden w-40 shrink-0 self-start px-6 pt-16 sm:block">
          <nav aria-label="Main">
            <NavLinks
              active={active}
              navigate={navigate}
              className="flex flex-col gap-3"
            />
          </nav>
          <div className="mt-4">
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
  navigate,
  className,
}: {
  active: string
  navigate: (href: string) => void
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
              onClick={(event) => {
                event.preventDefault()
                navigate(item.href)
              }}
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
