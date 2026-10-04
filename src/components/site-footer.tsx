import { site } from "@/content"

const YEAR = new Date().getFullYear()

export function SiteFooter() {
  return (
    <footer className="px-6">
      <div className="flex flex-col gap-4 border-t py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {YEAR} {site.name}. Built with React and Tailwind CSS, hosted on
          GitHub Pages.
        </p>
        <a
          href="#top"
          className="shrink-0 self-start rounded-xs transition-colors outline-none hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50 sm:self-auto"
        >
          Back to top
        </a>
      </div>
    </footer>
  )
}
