import type { ReactNode } from "react"

type SectionProps = {
  id: string
  title: string
  description?: ReactNode
  children: ReactNode
}

export function Section({ id, title, description, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="mx-auto max-w-2xl px-6 py-10 sm:py-12"
    >
      <h2
        id={`${id}-title`}
        className="text-sm font-medium text-muted-foreground"
      >
        {title}
      </h2>
      {description && (
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      )}
      <div className="mt-6">{children}</div>
    </section>
  )
}
