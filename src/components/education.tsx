import { site } from "@/content"
import { Section } from "@/components/section"
import { Badge } from "@/components/ui/badge"

export function Education() {
  return (
    <Section id="education" title="Education">
      <ol className="space-y-6">
        {site.education.map((degree) => (
          <li
            key={degree.degree}
            className="grid gap-1 sm:grid-cols-[11rem_1fr] sm:gap-6"
          >
            <p className="pt-0.5 font-mono text-xs text-muted-foreground sm:text-sm">
              {degree.period}
            </p>
            <div>
              <h3 className="font-semibold">
                {degree.degree}
                <span className="font-normal text-muted-foreground">
                  {" "}
                  · {degree.school}
                </span>
              </h3>
              {degree.detail && (
                <p className="mt-1 text-foreground/80">{degree.detail}</p>
              )}
            </div>
          </li>
        ))}
      </ol>

      <dl className="mt-10 space-y-6">
        {site.coursework.length > 0 && (
          <div className="grid gap-2 sm:grid-cols-[11rem_1fr] sm:gap-6">
            <dt className="pt-0.5 font-mono text-xs text-muted-foreground sm:text-sm">
              Coursework
            </dt>
            <dd>
              <ul className="flex flex-wrap gap-1.5">
                {site.coursework.map((course) => (
                  <li key={course}>
                    <Badge variant="secondary" className="h-6 px-2.5">
                      {course}
                    </Badge>
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        )}
        {site.activities.length > 0 && (
          <div className="grid gap-2 sm:grid-cols-[11rem_1fr] sm:gap-6">
            <dt className="pt-0.5 font-mono text-xs text-muted-foreground sm:text-sm">
              Activities
            </dt>
            <dd>
              <ul className="list-disc space-y-1 pl-5 text-foreground/80 marker:text-muted-foreground">
                {site.activities.map((activity) => (
                  <li key={activity}>{activity}</li>
                ))}
              </ul>
            </dd>
          </div>
        )}
      </dl>
    </Section>
  )
}
