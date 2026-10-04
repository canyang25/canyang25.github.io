import { useEffect, useState } from "react"
import { RefreshCw } from "lucide-react"

import { site } from "@/content"
import { fetchRepos, languageColor, type Repo } from "@/lib/github"
import { Section } from "@/components/section"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"

const VISIBLE_REPOS = 6

const featuredRepos = new Set(
  site.projects.flatMap((project) =>
    project.repo ? [project.repo.toLowerCase()] : []
  )
)

type ReposState =
  | { status: "loading" }
  | { status: "error"; message: string }
  | { status: "ready"; repos: Repo[] }

export function GitHubRepos() {
  const [attempt, setAttempt] = useState(0)
  const profileUrl = `https://github.com/${site.githubUsername}`

  return (
    <Section
      id="github"
      title="More on GitHub"
      description={
        <>
          Other public repositories, pulled live from{" "}
          <a
            href={profileUrl}
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            github.com/{site.githubUsername}
          </a>
          .
        </>
      }
    >
      <RepoGrid
        key={attempt}
        username={site.githubUsername}
        profileUrl={profileUrl}
        onRetry={() => setAttempt((count) => count + 1)}
      />
    </Section>
  )
}

type RepoGridProps = {
  username: string
  profileUrl: string
  onRetry: () => void
}

function RepoGrid({ username, profileUrl, onRetry }: RepoGridProps) {
  const [state, setState] = useState<ReposState>({ status: "loading" })

  useEffect(() => {
    const controller = new AbortController()
    fetchRepos(username, controller.signal)
      .then((repos) =>
        setState({
          status: "ready",
          repos: repos
            .filter(
              (repo) =>
                !featuredRepos.has(repo.html_url.toLowerCase()) &&
                !repo.name.toLowerCase().endsWith(".github.io")
            )
            .slice(0, VISIBLE_REPOS),
        })
      )
      .catch((error: unknown) => {
        if (controller.signal.aborted) return
        setState({
          status: "error",
          message:
            error instanceof Error ? error.message : "Something went wrong.",
        })
      })
    return () => controller.abort()
  }, [username])

  if (state.status === "loading") {
    return (
      <div role="status">
        <span className="sr-only">Loading repositories…</span>
        <ul className="space-y-6" aria-hidden="true">
          {Array.from({ length: 4 }, (_, index) => (
            <li key={index} className="space-y-2.5">
              <Skeleton className="h-4 w-48" />
              <Skeleton className="h-3.5 w-full" />
            </li>
          ))}
        </ul>
      </div>
    )
  }

  if (state.status === "error") {
    return (
      <div role="alert">
        <p className="font-medium">Couldn't load repositories</p>
        <p className="mt-1 text-sm text-muted-foreground">{state.message}</p>
        <Button variant="outline" className="mt-4" onClick={onRetry}>
          <RefreshCw />
          Try again
        </Button>
      </div>
    )
  }

  if (state.repos.length === 0) {
    return (
      <div>
        <p className="font-medium">No other public repositories yet</p>
        <p className="mt-1 text-sm text-muted-foreground">
          New projects will show up here as soon as they're public on GitHub.
        </p>
      </div>
    )
  }

  return (
    <div>
      <ul className="space-y-6">
        {state.repos.map((repo) => (
          <li key={repo.id}>
            <RepoEntry repo={repo} />
          </li>
        ))}
      </ul>
      <a
        href={`${profileUrl}?tab=repositories`}
        target="_blank"
        rel="noreferrer"
        className="mt-8 inline-block link text-sm"
      >
        View all repositories on GitHub
      </a>
    </div>
  )
}

function RepoEntry({ repo }: { repo: Repo }) {
  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noreferrer"
      className="group block rounded-xs outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
    >
      <span className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
        <span className="font-mono text-sm break-all underline decoration-foreground/30 underline-offset-4 transition-colors group-hover:decoration-foreground">
          {repo.name}
        </span>
        {repo.language && (
          <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
            <span
              className="size-2 rounded-full"
              style={{ backgroundColor: languageColor(repo.language) }}
            />
            {repo.language}
          </span>
        )}
      </span>
      {repo.description && (
        <span className="mt-1 line-clamp-2 text-sm leading-6 text-foreground/80">
          {repo.description}
        </span>
      )}
    </a>
  )
}
