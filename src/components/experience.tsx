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
            <p className="pt-0.5 font-mono text-xs text-muted-foreground sm:text-sm">
              {role.period}
            </p>
            <div>
              <h3 className="font-semibold">
                {role.title}
                <span className="font-normal text-muted-foreground">
                  {" "}
                  · {role.org}
                </span>
              </h3>
              <p className="mt-2 leading-relaxed text-pretty text-foreground/80">
                {role.summary}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
