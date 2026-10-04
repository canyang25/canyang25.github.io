import { useEffect, useState } from "react"
import { Check, Copy } from "lucide-react"

import { site } from "@/content"
import { Section } from "@/components/section"
import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    <Section id="contact" title="Contact">
      <p className="leading-7 text-foreground/80">
        You can find my resume{" "}
        <a
          href={site.resume}
          download="Preston-Zhao-Resume.pdf"
          className="link"
        >
          here
        </a>
        .
      </p>
      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
        <a href={`mailto:${site.email}`} className="link break-all">
          {site.email}
        </a>
        <CopyEmailButton />
      </div>
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
