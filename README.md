# Personal site

A one-page personal website (intro, about, projects, live GitHub repositories, experience, and contact) built with React, TypeScript, Tailwind CSS, and shadcn/ui. It's set up to publish on **GitHub Pages** at `https://<your-username>.github.io`.

## Make it yours

Everything the page says lives in [`src/content.ts`](src/content.ts): your name, intro, links, projects, and experience. Edit that file and the page, browser tab title, and favicon all update.

- Set `githubUsername` to your GitHub username. It drives your avatar, the GitHub buttons, and the "Latest on GitHub" section (it's set to GitHub's demo account, `octocat`, until you change it).
- Replace the example status line, skills, projects, and experience with your own.
- Uncomment the LinkedIn or résumé lines under `links` to add more buttons. For a résumé, create a `public/` folder and put `resume.pdf` in it.

## Run it locally

Requires Node.js 20.19+ or 22.12+.

```bash
npm install
npm run dev
```

Then open http://127.0.0.1:5391.

| Command             | What it does                               |
| ------------------- | ------------------------------------------ |
| `npm run dev`       | Start the dev server with hot reload       |
| `npm run build`     | Type-check and build the site into `dist/` |
| `npm run preview`   | Serve the built site at port 5392          |
| `npm run lint`      | Run ESLint                                 |
| `npm run format`    | Format the code with Prettier              |

## Publish on GitHub Pages

You don't need a special `gh-pages` branch. The included workflow (`.github/workflows/deploy.yml`) builds the site and publishes it every time you push to `main`.

1. Create a **public** repository on GitHub named exactly `<your-username>.github.io` (for example, `octocat.github.io`).
2. Push this project to that repository's `main` branch.
3. In the repository, open **Settings → Pages**, and under **Build and deployment → Source**, choose **GitHub Actions**.
4. Push a commit (or re-run the workflow from the **Actions** tab). After a minute or so, your site is live at `https://<your-username>.github.io`.

Using a different repository name also works: the site is then published at `https://<your-username>.github.io/<repository-name>/`, and the workflow adjusts paths automatically.

GitHub Pages on a free account requires the repository to be public.

## Project structure

```
src/
  content.ts          All of the site's text and links
  App.tsx             Page layout (section order)
  components/         Header, hero, sections, and footer
  components/ui/      shadcn/ui primitives
  lib/github.ts       GitHub API client for the "Latest on GitHub" section
.github/workflows/
  deploy.yml          Builds and deploys to GitHub Pages
```
