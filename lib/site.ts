const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");

export const site = {
  name: "Achintya Narula",
  title: "Achintya Narula | Software Engineering, AI/ML & Data",
  description:
    "Portfolio of Achintya Narula, a Computer Science student building backend software, applied machine-learning systems, data pipelines, and practical developer tools.",
  email: "achintyanarula@gmail.com",
  emailHref: "mailto:achintyanarula@gmail.com",
  github: "https://github.com/Achintya-Narula",
  linkedin: "https://www.linkedin.com/in/achintyanarula",
  source: "https://github.com/Achintya-Narula/portfolio",
  resumes: {
    swe: "/Achintya_Narula_SWE_Resume.pdf",
    aiMl: "/Achintya_Narula_AIML_Resume.pdf",
  },
  url: configuredSiteUrl ?? "https://achintya-portfolio-roan.vercel.app",
} as const;
