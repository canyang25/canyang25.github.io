import { site } from "@/content"
import { Section } from "@/components/section"

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="space-y-10">
        {site.experience.map((role) => (
          <li
            key={`${role.title}-${role.org}`}
            className="grid gap-1 sm:grid-cols-[10rem_1fr] sm:gap-6"
          >
            <div className="text-sm leading-7 text-muted-foreground">
              <p className="tabular-nums">{role.period}</p>
              <p className="leading-5">{role.location}</p>
            </div>
            <div>
              <h3 className="leading-7 font-medium">
                {role.title}
                <span className="text-muted-foreground"> · </span>
                {role.org}
              </h3>
              <ul className="mt-2 list-disc space-y-2 pl-5 leading-7 text-pretty text-foreground/80 marker:text-muted-foreground">
                {role.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
