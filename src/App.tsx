import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Education } from "@/components/education"
import { Experience } from "@/components/experience"
import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
import { SiteFooter } from "@/components/site-footer"
import { SiteShell } from "@/components/site-header"

export function App() {
  return (
    <div id="top" className="min-h-svh">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-background focus:px-3 focus:py-2 focus:text-sm focus:ring-3 focus:ring-ring/50"
      >
        Skip to content
      </a>
      <SiteShell>
        <main id="main">
          <Hero />
          <About />
          <Contact />
          <Experience />
          <Projects />
          <Education />
        </main>
        <SiteFooter />
      </SiteShell>
    </div>
  )
}

export default App
