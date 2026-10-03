import { site } from "@/content"
import { Section } from "@/components/section"

export function About() {
  return (
    <Section id="about" title="About">
      <div className="space-y-4 leading-7 text-pretty text-foreground/80">
        {site.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <h3 className="mt-10 text-sm font-medium text-muted-foreground">
        Skills
      </h3>
      <dl className="mt-3 space-y-2">
        {site.skills.map((group) => (
          <div
            key={group.label}
            className="grid sm:grid-cols-[10rem_1fr] sm:gap-6"
          >
            <dt className="text-sm leading-7 text-muted-foreground">
              {group.label}
            </dt>
            <dd className="leading-7 text-foreground/80">
              {group.items.join(", ")}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
