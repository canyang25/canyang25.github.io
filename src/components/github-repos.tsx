import { useEffect, useState } from "react"
import { ArrowRight, BookMarked, GitFork, RefreshCw, Star } from "lucide-react"

import { site } from "@/content"
import {
  compactNumber,
  fetchRepos,
  languageColor,
  timeAgo,
  type Repo,
} from "@/lib/github"
import { Section } from "@/components/section"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
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
  | { status: "ready"; repos: Repo[]; fetchedAt: number }

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
            className="font-medium text-foreground underline-offset-4 hover:underline"
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
            .filter((repo) => !featuredRepos.has(repo.html_url.toLowerCase()))
            .slice(0, VISIBLE_REPOS),
          fetchedAt: Date.now(),
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
        <ul className="grid gap-4 sm:grid-cols-2" aria-hidden="true">
          {Array.from({ length: 4 }, (_, index) => (
            <li key={index}>
              <Card size="sm" className="h-full">
                <CardHeader className="gap-2.5">
                  <Skeleton className="h-4 w-2/5" />
                  <Skeleton className="h-3 w-full" />
                  <Skeleton className="h-3 w-3/4" />
                </CardHeader>
                <CardContent className="flex gap-4">
                  <Skeleton className="h-3 w-16" />
                  <Skeleton className="h-3 w-10" />
                  <Skeleton className="h-3 w-24" />
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  if (state.status === "error") {
    return (
      <div
        role="alert"
        className="flex flex-col items-center gap-3 rounded-xl border border-dashed px-6 py-10 text-center"
      >
        <p className="font-medium">Couldn't load repositories</p>
        <p className="max-w-sm text-sm text-muted-foreground">
          {state.message}
        </p>
        <Button variant="outline" className="mt-1" onClick={onRetry}>
          <RefreshCw />
          Try again
        </Button>
      </div>
    )
  }

  if (state.repos.length === 0) {
    return (
      <div className="flex flex-col items-center gap-2 rounded-xl border border-dashed px-6 py-10 text-center">
        <BookMarked className="size-5 text-muted-foreground" />
        <p className="font-medium">No other public repositories yet</p>
        <p className="max-w-sm text-sm text-muted-foreground">
          New projects will show up here as soon as they're public on GitHub.
        </p>
      </div>
    )
  }

  return (
    <div>
      <ul className="grid gap-4 sm:grid-cols-2">
        {state.repos.map((repo) => (
          <li key={repo.id}>
            <RepoCard repo={repo} now={state.fetchedAt} />
          </li>
        ))}
      </ul>
      <a
        href={`${profileUrl}?tab=repositories`}
        target="_blank"
        rel="noreferrer"
        className="group mt-6 inline-flex items-center gap-1.5 rounded-md text-sm font-medium outline-none hover:underline focus-visible:ring-3 focus-visible:ring-ring/50"
      >
        View all repositories
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
      </a>
    </div>
  )
}

function RepoCard({ repo, now }: { repo: Repo; now: number }) {
  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noreferrer"
      className="group block h-full rounded-xl outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
    >
      <Card
        size="sm"
        className="h-full transition-[box-shadow,translate] group-hover:-translate-y-0.5 group-hover:shadow-md group-hover:ring-foreground/20"
      >
        <CardHeader>
          <CardTitle className="flex min-w-0 items-center gap-2 font-mono text-sm font-medium">
            <BookMarked className="size-4 shrink-0 text-muted-foreground" />
            <span className="truncate group-hover:underline">{repo.name}</span>
          </CardTitle>
          <CardDescription className="line-clamp-2 leading-relaxed">
            {repo.description ?? "No description provided."}
          </CardDescription>
        </CardHeader>
        <CardContent className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
          {repo.language && (
            <span className="inline-flex items-center gap-1.5">
              <span
                className="size-2.5 rounded-full"
                style={{ backgroundColor: languageColor(repo.language) }}
              />
              {repo.language}
            </span>
          )}
          <span className="inline-flex items-center gap-1">
            <Star className="size-3.5" />
            <span className="sr-only">Stars:</span>
            {compactNumber.format(repo.stargazers_count)}
          </span>
          <span className="inline-flex items-center gap-1">
            <GitFork className="size-3.5" />
            <span className="sr-only">Forks:</span>
            {compactNumber.format(repo.forks_count)}
          </span>
          <span>Updated {timeAgo(repo.pushed_at, now)}</span>
        </CardContent>
      </Card>
    </a>
  )
}
