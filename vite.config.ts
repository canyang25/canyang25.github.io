import { resolve } from "node:path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig, type Plugin } from "vite"

import { site } from "./src/content.ts"

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")

// Fills the __SITE_*__ placeholders in index.html from src/content.ts, so the
// page title, description, and favicon stay in sync with the site content.
function siteMeta(): Plugin {
  const favicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#171717"/><text x="32" y="41" text-anchor="middle" font-family="ui-monospace,Menlo,monospace" font-size="24" font-weight="600" fill="#fafafa">${escapeHtml(site.initials)}</text></svg>`

  return {
    name: "site-meta",
    transformIndexHtml: {
      order: "pre",
      handler: (html) =>
        html
          .replaceAll(
            "__SITE_TITLE__",
            escapeHtml(`${site.name} · ${site.role}`)
          )
          .replaceAll("__SITE_DESCRIPTION__", escapeHtml(site.intro))
          .replaceAll(
            "__SITE_FAVICON__",
            `data:image/svg+xml,${encodeURIComponent(favicon)}`
          ),
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), siteMeta()],
  resolve: {
    alias: {
      "@": resolve(import.meta.dirname, "./src"),
    },
  },
  server: { host: "127.0.0.1", port: 5391, strictPort: true },
  preview: { host: "127.0.0.1", port: 5392, strictPort: true },
})
