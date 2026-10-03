import { useEffect, useState } from "react"
import { Check, Copy, Mail } from "lucide-react"

import { site } from "@/content"
import { Section } from "@/components/section"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function Contact() {
  return (
    <Section id="contact" title="Get in touch">
      <Card className="relative isolate overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute -right-24 -bottom-32 -z-10 size-80 rounded-full bg-[radial-gradient(closest-side,oklch(0.72_0.15_265/0.18),transparent)]"
        />
        <CardContent className="flex flex-col gap-6 py-4 sm:flex-row sm:items-center sm:justify-between sm:py-6">
          <div className="max-w-md">
            <p className="text-lg font-semibold tracking-tight">
              Have a role, a project, or a question?
            </p>
            <p className="mt-1 text-muted-foreground">
              My inbox is open, and email is the fastest way to reach me.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button size="lg" className="max-w-full px-4" asChild>
              <a href={`mailto:${site.email}`}>
                <Mail />
                <span className="truncate">{site.email}</span>
              </a>
            </Button>
            <CopyEmailButton />
          </div>
        </CardContent>
      </Card>
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
        size="lg"
        variant="outline"
        className="px-4"
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
