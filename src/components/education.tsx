import { site } from "@/content"
import { Section } from "@/components/section"

export function Education() {
  return (
    <Section id="education" title="Education">
      <ol className="space-y-6">
        {site.education.map((degree) => (
          <li
            key={degree.degree}
            className="grid gap-1 sm:grid-cols-[10rem_1fr] sm:gap-6"
          >
            <p className="text-sm leading-7 text-muted-foreground tabular-nums">
              {degree.period}
            </p>
            <div>
              <h3 className="flex items-center gap-2.5 leading-7 font-medium">
                {degree.mark && (
                  <img
                    src={degree.mark}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="size-9 shrink-0 rounded-xs"
                  />
                )}
                <span>{degree.degree}</span>
              </h3>
              <p className="leading-7 text-foreground/80">{degree.school}</p>
              {degree.detail && (
                <p className="leading-7 text-muted-foreground">
                  {degree.detail}
                </p>
              )}
            </div>
          </li>
        ))}
      </ol>

      <dl className="mt-10 space-y-6">
        {site.coursework.length > 0 && (
          <div className="grid gap-1 sm:grid-cols-[10rem_1fr] sm:gap-6">
            <dt className="text-sm leading-7 text-muted-foreground">
              Coursework
            </dt>
            <dd className="leading-7 text-foreground/80">
              {site.coursework.join(", ")}
            </dd>
          </div>
        )}
        {site.activities.length > 0 && (
          <div className="grid gap-1 sm:grid-cols-[10rem_1fr] sm:gap-6">
            <dt className="text-sm leading-7 text-muted-foreground">
              Activities
            </dt>
            <dd>
              <ul className="list-disc pl-5 leading-7 text-foreground/80 marker:text-muted-foreground">
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
