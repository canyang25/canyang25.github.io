import { useEffect, useState } from "react"
import { Check, Copy } from "lucide-react"

import { site } from "@/content"
import { Section } from "@/components/section"
import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    <Section id="contact" title="Contact">
      <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
        <li className="flex items-center gap-2">
          <a href={`mailto:${site.email}`} className="link break-all">
            {site.email}
          </a>
          <CopyEmailButton />
        </li>
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

const COPY_LABELS = {
  idle: "Copy",
  copied: "Copied",
  failed: "Couldn't copy",
}

function CopyEmailButton() {
  const [state, setState] = useState<keyof typeof COPY_LABELS>("idle")

  useEffect(() => {
    if (state === "idle") return
    const timeout = setTimeout(() => setState("idle"), 2000)
    return () => clearTimeout(timeout)
  }, [state])

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.email)
      setState("copied")
    } catch {
      setState("failed")
    }
  }

  return (
    <>
      <Button
        size="sm"
        variant="outline"
        aria-label="Copy email address"
        onClick={copyEmail}
      >
        {state === "copied" ? <Check /> : <Copy />}
        {COPY_LABELS[state]}
      </Button>
      <span role="status" className="sr-only">
        {state === "copied" && "Email address copied"}
        {state === "failed" && "Couldn't copy the email address"}
      </span>
    </>
  )
}
