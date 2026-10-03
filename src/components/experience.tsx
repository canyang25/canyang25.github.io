import { site } from "@/content"
import { Section } from "@/components/section"

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="space-y-10">
        {site.experience.map((role) => (
          <li
            key={`${role.title}-${role.org}`}
            className="grid gap-1 sm:grid-cols-[11rem_1fr] sm:gap-6"
          >
            <div className="pt-0.5">
              <p className="font-mono text-xs text-muted-foreground sm:text-sm">
                {role.period}
              </p>
              <p className="mt-0.5 text-xs text-muted-foreground">
                {role.location}
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                {role.title}
                <span className="font-normal text-muted-foreground">
                  {" "}
                  · {role.org}
                </span>
              </h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed text-pretty text-foreground/80 marker:text-muted-foreground">
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
