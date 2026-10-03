import { ArrowUpRight, Mail, MapPin } from "lucide-react"

import { site } from "@/content"
import { GitHubIcon } from "@/components/github-icon"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)] bg-size-[56px_56px]"
      />
      <div
        aria-hidden="true"
        className="absolute -top-48 left-1/2 -z-10 h-[28rem] w-[48rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,oklch(0.72_0.15_265/0.22),transparent)]"
      />

      <div className="mx-auto max-w-4xl animate-in px-6 pt-16 pb-20 duration-700 fade-in slide-in-from-bottom-3 motion-reduce:animate-none sm:pt-24 sm:pb-24">
        <Avatar className="size-20 shadow-sm ring-4 ring-background">
          <AvatarImage
            src={`https://github.com/${site.githubUsername}.png?size=160`}
            alt={site.name}
          />
          <AvatarFallback className="text-xl font-medium">
            {site.initials}
          </AvatarFallback>
        </Avatar>

        {site.status && (
          <Badge
            variant="outline"
            className="mt-8 h-7 gap-2 bg-background/60 px-3 text-xs backdrop-blur"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-60 motion-reduce:animate-none" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            {site.status}
          </Badge>
        )}

        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
          {site.name}
        </h1>
        <p className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-muted-foreground sm:text-lg">
          <span>{site.role}</span>
          <span aria-hidden="true" className="hidden sm:inline">
            ·
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="size-4" />
            {site.location}
          </span>
        </p>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-foreground/80">
          {site.intro}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button size="lg" className="px-4" asChild>
            <a href={`mailto:${site.email}`}>
              <Mail />
              Email me
            </a>
          </Button>
          <Button size="lg" variant="outline" className="px-4" asChild>
            <a
              href={`https://github.com/${site.githubUsername}`}
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
              GitHub
            </a>
          </Button>
          {site.links.map((link) => (
            <Button
              key={link.href}
              size="lg"
              variant="ghost"
              className="px-4"
              asChild
            >
              <a href={link.href} target="_blank" rel="noreferrer">
                {link.label}
                <ArrowUpRight />
              </a>
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}
