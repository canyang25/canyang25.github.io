// Everything the site says lives in this file: edit it, save, and the page
// updates. The status line, skills, projects, and experience below are
// examples to replace with your own.

// Powers your avatar, GitHub links, and the "Latest on GitHub" section.
// "octocat" is GitHub's demo account; replace it with your username.
const githubUsername = "octocat"

export const site: Site = {
  name: "Canyang Zhao",
  initials: "CZ",
  role: "Student at the University of Wisconsin–Madison",
  location: "Madison, WI",
  email: "czhao255@wisc.edu",
  githubUsername,

  // Shown as a badge above your name. Set to null to hide it.
  status: "Looking for summer 2027 internships",

  intro:
    "I like turning ideas into things people can actually use: small tools, class projects that outgrew the assignment, and experiments that teach me something new.",

  about: [
    "I'm a student at UW–Madison, where most of my time goes to classes, side projects, and figuring out which problems are worth solving. I learn best by building, so most of what I pick up ends up as a project on GitHub.",
    "Right now I'm focused on getting better at shipping: writing code other people can read, designing interfaces that feel obvious, and putting my work out in public. This site is part of that.",
  ],

  skills: [
    "Python",
    "Java",
    "TypeScript",
    "React",
    "SQL",
    "Git & GitHub",
    "Linux",
  ],

  // Extra buttons next to "Email me" and "GitHub" at the top of the page.
  links: [
    // { label: "LinkedIn", href: "https://www.linkedin.com/in/your-handle" },
    // { label: "Résumé", href: "resume.pdf" }, // put the file in a public/ folder
  ],

  projects: [
    {
      name: "Personal website",
      description:
        "The site you're on. Written in React and TypeScript, styled with Tailwind CSS, and published to GitHub Pages automatically on every push.",
      tags: ["React", "TypeScript", "Tailwind CSS", "GitHub Actions"],
      repo: `https://github.com/${githubUsername}/${githubUsername}.github.io`,
    },
    {
      name: "Course planner",
      description:
        "Lays out four years of classes around prerequisites, the terms each course is offered, and credit limits, then flags conflicts before registration opens.",
      tags: ["Python", "Flask", "SQLite"],
    },
    {
      name: "Study group finder",
      description:
        "Matches classmates by course and availability, then gives each group a shared calendar and a place to post notes.",
      tags: ["React", "Firebase"],
    },
    {
      name: "Dining hall digest",
      description:
        "Checks campus dining menus every morning and sends a short email when a favorite dish is on the menu.",
      tags: ["Python", "GitHub Actions"],
    },
  ],

  experience: [
    {
      period: "2024 – Present",
      title: "Undergraduate student",
      org: "University of Wisconsin–Madison",
      summary:
        "Studying computer science. Favorite courses so far: data structures, machine organization, and user interfaces.",
    },
    {
      period: "Summer 2026",
      title: "Software engineering intern",
      org: "A Madison startup",
      summary:
        "Built internal dashboards in React and turned a weekly reporting task that took an afternoon into a few minutes.",
    },
    {
      period: "2025 – 2026",
      title: "Peer mentor",
      org: "UW–Madison Computer Sciences",
      summary:
        "Ran weekly drop-in hours helping first-year students debug assignments and get comfortable with Git.",
    },
  ],
}

export type Site = {
  name: string
  initials: string
  role: string
  location: string
  email: string
  githubUsername: string
  status: string | null
  intro: string
  about: string[]
  skills: string[]
  links: { label: string; href: string }[]
  projects: Project[]
  experience: Role[]
}

export type Project = {
  name: string
  description: string
  tags: string[]
  url?: string
  repo?: string
}

export type Role = {
  period: string
  title: string
  org: string
  summary: string
}
