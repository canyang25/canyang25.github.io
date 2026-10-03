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
  return (
    <>
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="font-medium">{project.name}</h3>
        {(project.url || project.repo) && (
          <p className="flex gap-4 text-sm">
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`Live site for ${project.name}`}
                className="link"
              >
                Live site
              </a>
            )}
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.name} on GitHub`}
                className="link"
              >
                GitHub
              </a>
            )}
          </p>
        )}
      </div>
      <p className="mt-1 leading-7 text-pretty text-foreground/80">
        {project.description}
      </p>
      <p className="mt-2 text-sm text-muted-foreground">
        <span className="sr-only">Built with: </span>
        {project.tags.join(", ")}
      </p>
    </>
  )
}
