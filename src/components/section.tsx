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
      className="mx-auto max-w-4xl scroll-mt-14 px-6"
    >
      <div className="border-t py-14 sm:py-16">
        <div className="mb-8 sm:mb-10">
          <h2
            id={`${id}-title`}
            className="text-2xl font-semibold tracking-tight sm:text-3xl"
          >
            {title}
          </h2>
          {description && (
            <p className="mt-2 text-muted-foreground">{description}</p>
          )}
        </div>
        {children}
      </div>
    </section>
  )
}
