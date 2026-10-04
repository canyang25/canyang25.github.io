# Preston Zhao's personal site

The source for Preston (Canyang) Zhao's one-page personal website: intro, about, contact, experience, featured projects, and education. It's built with React, TypeScript, Tailwind CSS, and shadcn/ui, and set up to publish on **GitHub Pages** at `https://canyang25.github.io`.

## Edit the content

Everything the page says lives in [`src/content.ts`](src/content.ts): name, intro, links, projects, experience, and education. Edit that file and the page, browser tab title, and favicon all update.

- `githubUsername` drives the avatar and the GitHub link under Contact.
- Each project links to its repository from the project title.
- Set `status` to `null` to hide the line under the intro.
- The contact section links to `public/resume.pdf`. Replace that file to update the download.
- `image`, `logo`, and `mark` point at files in `public/` (for example `public/images/mapreduce.png`). Project pictures sit to the right of the write-up. Company logos and the school mark sit beside the entry.

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
.github/workflows/
  deploy.yml          Builds and deploys to GitHub Pages
```
