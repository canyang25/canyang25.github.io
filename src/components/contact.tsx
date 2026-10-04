import { useEffect, useState } from "react"

import { site } from "@/content"
import { Section } from "@/components/section"

export function Contact() {
  return (
    <Section id="contact" title="Contact">
      <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
        <EmailLink />
        {site.links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              {link.label}
            </a>
          </li>
        ))}
        <li>
          <a
            href={`https://github.com/${site.githubUsername}`}
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            GitHub
          </a>
        </li>
      </ul>
    </Section>
  )
}

function EmailLink() {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const timeout = setTimeout(() => setCopied(false), 2000)
    return () => clearTimeout(timeout)
  }, [copied])

  return (
    <li className="flex items-center gap-2">
      <a
        href={`mailto:${site.email}`}
        className="link break-all"
        onClick={() => {
          navigator.clipboard.writeText(site.email).then(
            () => setCopied(true),
            () => setCopied(false)
          )
        }}
      >
        {site.email}
      </a>
      <span role="status" className="sr-only">
        {copied ? "Email address copied" : ""}
      </span>
      {copied && (
        <span className="text-sm text-muted-foreground" aria-hidden="true">
          Copied
        </span>
      )}
    </li>
  )
}
