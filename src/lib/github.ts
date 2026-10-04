export type Repo = {
  id: number
  name: string
  description: string | null
  html_url: string
  language: string | null
  stargazers_count: number
  forks_count: number
  pushed_at: string
  fork: boolean
  archived: boolean
}

export async function fetchRepos(
  username: string,
  signal: AbortSignal
): Promise<Repo[]> {
  let response: Response
  try {
    response = await fetch(
      `https://api.github.com/users/${encodeURIComponent(username)}/repos?sort=pushed&per_page=100`,
      { signal, headers: { Accept: "application/vnd.github+json" } }
    )
  } catch (error) {
    if (signal.aborted) throw error
    throw new Error(
      "Couldn't reach GitHub. Check your connection and try again.",
      { cause: error }
    )
  }

  if (response.status === 404) {
    throw new Error(`GitHub doesn't have a user named "${username}".`)
  }
  if (response.status === 403 || response.status === 429) {
    throw new Error(
      "GitHub's rate limit was reached. Try again in a few minutes."
    )
  }
  if (!response.ok) {
    throw new Error(`GitHub returned an error (${response.status}).`)
  }

  const repos: Repo[] = await response.json()
  return repos
    .filter((repo) => !repo.fork && !repo.archived)
    .sort((a, b) => Date.parse(b.pushed_at) - Date.parse(a.pushed_at))
}

// A subset of GitHub's linguist colors.
const LANGUAGE_COLORS: Record<string, string> = {
  C: "#555555",
  "C#": "#178600",
  "C++": "#f34b7d",
  CSS: "#663399",
  Go: "#00add8",
  HTML: "#e34c26",
  Java: "#b07219",
  JavaScript: "#f1e05a",
  "Jupyter Notebook": "#da5b0b",
  Kotlin: "#a97bff",
  Python: "#3572a5",
  Ruby: "#701516",
  Rust: "#dea584",
  Shell: "#89e051",
  Swift: "#f05138",
  TypeScript: "#3178c6",
}

export function languageColor(language: string) {
  return LANGUAGE_COLORS[language] ?? "var(--color-muted-foreground)"
}
