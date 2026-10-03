import { ArrowUpRight } from "lucide-react"

import { site, type Project } from "@/content"
import { GitHubIcon } from "@/components/github-icon"
import { Section } from "@/components/section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function Projects() {
  return (
    <Section
      id="projects"
      title="Selected projects"
      description="A few things I've built, from class assignments to weekend experiments."
    >
      <ul className="grid gap-4 sm:grid-cols-2">
        {site.projects.map((project) => (
          <li key={project.name}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </Section>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="font-semibold">{project.name}</CardTitle>
        {(project.url || project.repo) && (
          <CardAction className="-mt-1.5 -mr-1.5 flex">
            {project.url && (
              <Button variant="ghost" size="icon-sm" asChild>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${project.name}`}
                >
                  <ArrowUpRight />
                </a>
              </Button>
            )}
            {project.repo && (
              <Button variant="ghost" size="icon-sm" asChild>
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Source code for ${project.name}`}
                >
                  <GitHubIcon />
                </a>
              </Button>
            )}
          </CardAction>
        )}
        <CardDescription className="leading-relaxed">
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="mt-auto">
        <ul className="flex flex-wrap gap-1.5" aria-label="Built with">
          {project.tags.map((tag) => (
            <li key={tag}>
              <Badge variant="secondary">{tag}</Badge>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
