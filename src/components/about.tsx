import { site } from "@/content"
import { Section } from "@/components/section"
import { Badge } from "@/components/ui/badge"

export function About() {
  return (
    <Section id="about" title="About">
      <div className="max-w-3xl space-y-4 leading-relaxed text-pretty text-foreground/80">
        {site.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <h3 className="mt-10 text-sm font-medium">Skills</h3>
      <dl className="mt-4 grid gap-x-8 gap-y-6 sm:grid-cols-2">
        {site.skills.map((group) => (
          <div key={group.label}>
            <dt className="font-mono text-xs text-muted-foreground">
              {group.label}
            </dt>
            <dd className="mt-2.5">
              <ul className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li key={item}>
                    <Badge variant="secondary" className="h-6 px-2.5">
                      {item}
                    </Badge>
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
