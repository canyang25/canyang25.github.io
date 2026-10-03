# Preston Zhao's personal site

The source for Preston (Canyang) Zhao's one-page personal website: intro, about and skills, featured projects, more repositories pulled live from GitHub, experience, education, and contact. It's built with React, TypeScript, Tailwind CSS, and shadcn/ui, and set up to publish on **GitHub Pages** at `https://canyang25.github.io`.

## Edit the content

Everything the page says lives in [`src/content.ts`](src/content.ts): name, intro, skills, links, projects, experience, and education. Edit that file and the page, browser tab title, and favicon all update.

- `githubUsername` drives the avatar, the GitHub buttons, and the "More on GitHub" section, which lists public repositories live from the GitHub API (forks and archived repositories are skipped).
- Repositories linked from `projects` get a featured card and are left out of "More on GitHub", so each one appears only once.
- Set `status` to `null` to hide the badge above the name.
- To add a résumé button, create a `public/` folder, put `resume.pdf` in it, and uncomment the résumé line under `links`.

## Run it locally

Requires Node.js 20.19+ or 22.12+.

```bash
npm install
npm run dev
```

Then open http://127.0.0.1:5391.

| Command           | What it does                               |
| ----------------- | ------------------------------------------ |
| `npm run dev`     | Start the dev server with hot reload       |
| `npm run build`   | Type-check and build the site into `dist/` |
| `npm run preview` | Serve the built site at port 5392          |
| `npm run lint`    | Run ESLint                                 |
| `npm run format`  | Format the code with Prettier              |

## Publish on GitHub Pages

You don't need a special `gh-pages` branch. The included workflow (`.github/workflows/deploy.yml`) builds the site and publishes it every time you push to `main`.

1. Create a **public** repository on GitHub named exactly `canyang25.github.io`.
2. Push this project to that repository's `main` branch.
3. In the repository, open **Settings → Pages**, and under **Build and deployment → Source**, choose **GitHub Actions**.
4. Push a commit (or re-run the workflow from the **Actions** tab). After a minute or so, the site is live at `https://canyang25.github.io`.

Existing project sites keep their addresses: AutoSRE's site stays at `https://canyang25.github.io/AutoSRE/`.

Using a different repository name also works: the site is then published at `https://canyang25.github.io/<repository-name>/`, and the workflow adjusts paths automatically.

GitHub Pages on a free account requires the repository to be public.

## Project structure

```
src/
  content.ts          All of the site's text and links
  App.tsx             Page layout (section order)
  components/         Header, hero, sections, and footer
  components/ui/      shadcn/ui primitives
  lib/github.ts       GitHub API client for the "More on GitHub" section
.github/workflows/
  deploy.yml          Builds and deploys to GitHub Pages
```
