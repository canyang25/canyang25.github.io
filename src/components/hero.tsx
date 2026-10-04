import { site } from "@/content"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Hero() {
  return (
    <section className="mx-auto max-w-2xl px-6 pt-12 pb-6 sm:pt-16">
      <Avatar className="size-16">
        <AvatarImage
          src={`https://github.com/${site.githubUsername}.png?size=128`}
          alt={site.name}
        />
        <AvatarFallback className="text-lg font-medium">
          {site.initials}
        </AvatarFallback>
      </Avatar>

      <h1 className="mt-6 text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
        {site.name}
      </h1>
      <p className="mt-1 flex flex-wrap gap-x-1.5 text-muted-foreground">
        <span>{site.role}</span>
        <span aria-hidden="true" className="hidden sm:inline">
          ·
        </span>
        <span>{site.location}</span>
      </p>

      <p className="mt-6 leading-7 text-pretty">{site.intro}</p>
      {site.status && <p className="mt-4 font-medium">{site.status}</p>}

      <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
        <li>
          <a href={`mailto:${site.email}`} className="link">
            {site.email}
          </a>
        </li>
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
      </ul>
    </section>
  )
}
