import { site } from "@/content"
import { Section } from "@/components/section"

export function About() {
  return (
    <Section id="about" title="About">
      <div className="space-y-4 leading-7 text-pretty text-foreground/80">
        {site.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <p>
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
      </div>
    </Section>
  )
}
