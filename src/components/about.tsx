import { site } from "@/content"
import { Section } from "@/components/section"
import { Badge } from "@/components/ui/badge"

export function About() {
  return (
    <Section id="about" title="About">
      <div className="grid gap-10 md:grid-cols-[1fr_14rem]">
        <div className="space-y-4 leading-relaxed text-pretty text-foreground/80">
          {site.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div>
          <h3 className="text-sm font-medium">Tools I use</h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {site.skills.map((skill) => (
              <li key={skill}>
                <Badge variant="secondary" className="h-6 px-2.5">
                  {skill}
                </Badge>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
