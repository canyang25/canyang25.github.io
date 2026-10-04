// Everything the site says lives in this file: edit it, save, and the page
// updates.

// Powers your avatar, GitHub links, and the "More on GitHub" section.
const githubUsername = "canyang25"

export const site: Site = {
  name: "Preston (Canyang) Zhao",
  initials: "PZ",
  role: "Data science master's student at UW–Madison",
  location: "Madison, WI · open to relocation",
  email: "canyang.zhao2@gmail.com",
  githubUsername,

  // Shown under your intro. Set to null to hide it.
  status: "Seeking Summer 2027 internships",

  intro:
    "I build software, data, and AI/ML systems: production web platforms and job queues, data pipelines and ranking models, and tool-calling LLM agents.",

  about: [
    "I'm a master's student at UW–Madison focused on computer science and machine learning, and I finished my B.S. in Data Science there in 2026. My experience spans software engineering, production ML systems, databases, and agentic systems.",
    "Most recently, I built a research analysis platform and an ML ranking service as a software development intern at Bio-Techne. Before that, I fine-tuned tool-calling LLMs at AI Rudder and built Snowflake data pipelines at Turning Green. I'm looking for a Summer 2027 internship in software, data, or AI/ML development.",
  ],

  skills: [
    {
      label: "Programming languages",
      items: ["Python", "C++", "SQL", "TypeScript", "JavaScript"],
    },
    {
      label: "Cloud & tools",
      items: [
        "Azure",
        "AWS (S3, Redshift)",
        "Snowflake",
        "Docker",
        "Celery",
        "Airbyte",
        "dbt",
        "PySpark",
        "PostgreSQL",
        "Databricks",
      ],
    },
    {
      label: "AI / LLM",
      items: [
        "LoRA / SFT",
        "LangChain",
        "LangGraph",
        "Agentic tool calling",
        "Function-call evaluation",
        "LLM-as-a-judge",
        "RAG",
      ],
    },
    {
      label: "Analytics",
      items: [
        "XGBoost",
        "Isolation Forest",
        "EDA",
        "Time series",
        "Anomaly detection",
        "Feature engineering",
      ],
    },
  ],

  // Extra links next to your email and GitHub at the top of the page.
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/preston-zhao" },
    // { label: "Résumé", href: "resume.pdf" }, // put the file in a public/ folder
  ],

  // Repositories linked here are left out of the "More on GitHub" section.
  projects: [
    {
      name: "Mini-MapReduce",
      description:
        "A Python MapReduce runtime and CLI, co-developed with three teammates for the Big Data Systems honors project. A gRPC scheduler dispatches tasks to Dockerized workers, HDFS and Parquet hold inputs and shuffle data, and heartbeats with task requeuing recover from worker failures.",
      tags: ["Python", "gRPC", "Docker", "HDFS", "PyArrow"],
      repo: `https://github.com/${githubUsername}/mapreduce-project`,
    },
    {
      name: "AutoSRE",
      description:
        "An autonomous LLM agent that takes a production alert from diagnosis to fix: it queries metrics and logs, identifies the root cause, runs the matching remediation playbook, and writes the incident report. Includes an Alertmanager webhook server, an approval gate, provider fallback, and rollback checks.",
      tags: ["Python", "LLM tool use", "FastAPI", "SQLite"],
      url: `https://${githubUsername}.github.io/AutoSRE/`,
      repo: `https://github.com/${githubUsername}/AutoSRE`,
    },
    {
      name: "BadgerForge",
      description:
        "A team coding agent for the Machine Learning Marathon's Efficient Coder Challenge. LangChain and LangGraph coordinate reasoning and shell tools for open-weight models on a single GPU, and Harbor runs Terminal-Bench tasks in Docker while tracking success rate and token usage.",
      tags: ["Python", "LangGraph", "LangChain", "Pydantic", "Docker"],
      repo: `https://github.com/${githubUsername}/BadgerForge`,
    },
    {
      name: "NASA APOD Service",
      description:
        "Browse NASA's Astronomy Picture of the Day across any date range. A lightweight Express backend keeps the NASA API key private and caches responses for a vanilla JavaScript frontend.",
      tags: ["JavaScript", "Node.js", "Express", "NASA Open API"],
      repo: `https://github.com/${githubUsername}/NASA-apod-service`,
    },
  ],

  experience: [
    {
      period: "May – Aug 2026",
      title: "Graduate Intern, Software Development",
      org: "Bio-Techne",
      location: "Minneapolis, MN",
      highlights: [
        "Built an Azure-hosted TypeScript app and Python API that replaced commercial analysis software for 50+ scientists, saving about $10K a month and cutting analysis turnaround by a third.",
        "Built an asynchronous Celery job service with PostgreSQL and Docker that sustained 50+ jobs per workday at 99% completion and cut median queue latency from 12 to 4 minutes.",
        "Trained an XGBoost candidate ranker in Databricks that raised top-1 selection success from 50% to 70% on held-out runs, and deployed it as a Dockerized inference service on Azure.",
      ],
    },
    {
      period: "May – Aug 2025",
      title: "LLM Engineer Intern",
      org: "AI Rudder",
      location: "Shanghai, China",
      highlights: [
        "Fine-tuned Llama 3.1 8B with LoRA SFT on customer-service tool-call traces, raising strict tool-call correctness from 61% for the base model to 80% on a held-out regression suite.",
        "Used a teacher LLM to generate paired call/no-call variations from labeled dialogs, then applied schema, argument, and duplicate checks to produce 150K+ validated conversations.",
        "Built release evaluations that combine tool-call checks with a three-level LLM judge, reaching 79% agreement with human judgments and recycling failures into training data.",
      ],
    },
    {
      period: "Dec 2024 – Mar 2025",
      title: "Data Analyst Intern (Data Engineering)",
      org: "Turning Green",
      location: "Sausalito, CA · Hybrid",
      highlights: [
        "Built an Airbyte-to-Snowflake ELT pipeline for 18 months of CDFA, school, and market data, cutting manual data preparation from four hours to 30 minutes per update.",
        "Built Snowflake SQL models that reconcile county labels, school locations, and commodity categories, reducing unmatched location records from 12% to 2%.",
        "Trained an XGBoost viability model over 5K+ candidate routes to rank farm-to-school hub sites, projecting 1.45× the existing network's San Mateo school coverage.",
      ],
    },
  ],

  education: [
    {
      period: "Expected Dec 2027",
      degree: "M.S. in Biomedical Data Science",
      school: "University of Wisconsin–Madison",
      detail: "Computer science and machine learning focus",
    },
    {
      period: "May 2026",
      degree: "B.S. in Data Science (Computational)",
      school: "University of Wisconsin–Madison",
    },
  ],

  coursework: [
    "Database Systems and Management",
    "Big Data Systems",
    "Applied Data Structures and Algorithms",
    "AI Agents",
    "Foundation Models",
  ],

  activities: [
    "Graduate Teaching Assistant (Statistics)",
    "Undergraduate Teaching Assistant (Computer Science)",
    "Machine Learning + X Club",
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
  skills: { label: string; items: string[] }[]
  links: { label: string; href: string }[]
  projects: Project[]
  experience: Role[]
  education: Degree[]
  coursework: string[]
  activities: string[]
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
  location: string
  highlights: string[]
}

export type Degree = {
  period: string
  degree: string
  school: string
  detail?: string
}
