import { site, type Project } from "@/content"
import { Section } from "@/components/section"

export function Projects() {
  return (
    <Section id="projects" title="Projects">
      <ul className="space-y-10">
        {site.projects.map((project) => (
          <li key={project.name}>
            <ProjectEntry project={project} />
          </li>
        ))}
      </ul>
    </Section>
  )
}

function ProjectEntry({ project }: { project: Project }) {
  const href = project.repo ?? project.url

  return (
    <div className="flex items-start gap-4">
      <div className="min-w-0 flex-1">
        <h3 className="font-medium">
          {href ? (
            <a href={href} target="_blank" rel="noreferrer" className="link">
              {project.name}
            </a>
          ) : (
            project.name
          )}
        </h3>
        <p className="mt-1 leading-7 text-pretty text-foreground/80">
          {project.description}
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          <span className="sr-only">Built with: </span>
          {project.tags.join(", ")}
        </p>
      </div>
      {project.image && (
        <img
          src={project.image}
          alt=""
          loading="lazy"
          decoding="async"
          className={`w-24 shrink-0 rounded-sm border border-border sm:w-40 ${
            project.imageFit === "contain"
              ? "h-auto"
              : "aspect-[3/2] object-cover"
          }`}
        />
      )}
    </div>
  )
}
