const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");

export const site = {
  name: "Achintya Narula",
  title: "Achintya Narula | Computer Science, AI & Software Development",
  description:
    "Portfolio of Achintya Narula, a Computer Science student building software, AI tools, NLP projects, and learning-focused GenAI experiences.",
  email: "achintyanarula@gmail.com",
  emailHref: "mailto:achintyanarula@gmail.com",
  github: "https://github.com/Achintya-Narula",
  linkedin: "https://www.linkedin.com/in/achintyanarula",
  source: "https://github.com/Achintya-Narula/portfolio",
  resume: "/achintya-narula-resume.pdf",
  url: configuredSiteUrl ?? "https://achintya-portfolio-roan.vercel.app",
} as const;
