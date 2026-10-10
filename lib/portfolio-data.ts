export type ProjectTrack = "ai-data" | "software";

export type ProjectLink = {
  label: string;
  href: string;
  kind: "source" | "tests" | "docs" | "demo";
};

export type Project = {
  name: string;
  stack: readonly string[];
  motivation: string;
  implementation: string;
  evidence: readonly string[];
  limitation: string;
  links: readonly ProjectLink[];
  track: ProjectTrack;
};

export type ExperienceEntry = {
  role: string;
  organization: string;
  dates?: string;
  description: string;
};

export type SkillGroup = {
  name: string;
  items: readonly string[];
};

export const projects: readonly Project[] = [
  {
    name: "Customer Churn Prediction & Explainability",
    stack: ["Python", "scikit-learn", "XGBoost", "SHAP", "FastAPI"],
    motivation:
      "Work through a complete tabular ML problem without using the holdout set to choose the model.",
    implementation:
      "A leakage-safe preprocessing and XGBoost pipeline with cross-validation, SHAP analysis, serialized inference, FastAPI, and Docker.",
    evidence: [
      "Selected XGBoost by five-fold training cross-validation and reached 0.8486 ROC-AUC on an untouched 1,761-row holdout.",
      "Pytest covers the training, serialization, inference, and API boundaries in CI.",
    ],
    limitation:
      "The benchmark uses IBM's public 7,043-row sample, and a real retention threshold would require business costs and calibrated probabilities.",
    links: [
      {
        label: "Customer Churn source",
        href: "https://github.com/Achintya-Narula/customer-churn-ml",
        kind: "source",
      },
      {
        label: "Customer Churn test evidence",
        href: "https://github.com/Achintya-Narula/customer-churn-ml/tree/main/tests",
        kind: "tests",
      },
    ],
    track: "ai-data",
  },
  {
    name: "Sales Analytics & Data Warehouse Pipeline",
    stack: ["SQL Server", "T-SQL", "Python", "Star Schema", "Power BI"],
    motivation:
      "Learn what happens before analytics begins: repeatable inputs, rejected records, dimensional modelling, safe change loading, and rerun checks.",
    implementation:
      "A SQL Server star schema with deterministic Python data, SCD Type 1 loading, data-quality validation, analytical SQL, and DAX measures.",
    evidence: [
      "The integration run proves 500 initial customers, 30 first-pass updates, zero repeated updates, no duplicate identifiers, and 5,000 fact rows.",
      "GitHub Actions executes Python checks and the full scenario against a pinned SQL Server container.",
    ],
    limitation:
      "SCD Type 1 does not preserve history, and MERGE is used only for a controlled single-writer batch demonstration.",
    links: [
      {
        label: "Sales Data Warehouse source",
        href: "https://github.com/Achintya-Narula/sales-data-warehouse",
        kind: "source",
      },
      {
        label: "Sales Data Warehouse workflow",
        href: "https://github.com/Achintya-Narula/sales-data-warehouse/actions",
        kind: "tests",
      },
    ],
    track: "ai-data",
  },
  {
    name: "IssueSense",
    stack: ["Python", "scikit-learn", "pandas", "NLP"],
    motivation:
      "Explore a small, reproducible text-classification workflow that can defer uncertain predictions instead of hiding them.",
    implementation:
      "A TF-IDF and logistic-regression pipeline for bug, feature, and documentation labels with confidence-based review routing.",
    evidence: [
      "The fixed 90-row demo dataset produces 82.6% accuracy and 82.7% macro-F1 on a stratified 23-row holdout.",
      "Fifteen tests cover loading, training, persistence, evaluation, and command-line behavior.",
    ],
    limitation:
      "The included examples are curated demo data, so the reported holdout score is evidence of reproducibility rather than production accuracy.",
    links: [
      {
        label: "IssueSense source",
        href: "https://github.com/Achintya-Narula/issuesense",
        kind: "source",
      },
      {
        label: "IssueSense tests",
        href: "https://github.com/Achintya-Narula/issuesense/tree/main/tests",
        kind: "tests",
      },
    ],
    track: "ai-data",
  },
  {
    name: "Placement Tracker",
    stack: ["TypeScript", "Node.js", "REST APIs"],
    motivation:
      "Keep application stages, deadlines, follow-ups, and notes in one private workflow while preparing for placements.",
    implementation:
      "A TypeScript and Node.js tracker with owner-scoped REST endpoints, scrypt password hashing, JWT sessions, editable timelines, and atomic JSON persistence.",
    evidence: [
      "The 22-test suite covers ownership, workflow validation, rescheduling, reminder idempotency, HTTP errors, and static-file traversal protection.",
      "The browser workflow supports create, edit, search, filtering, notes, stage dates, deadlines, and follow-up changes.",
    ],
    limitation:
      "The JSON store is suitable for a single-process MVP, not a multi-instance service; a production version would use PostgreSQL and a durable job queue.",
    links: [
      {
        label: "Placement Tracker source",
        href: "https://github.com/Achintya-Narula/placement-tracker",
        kind: "source",
      },
      {
        label: "Placement Tracker tests",
        href: "https://github.com/Achintya-Narula/placement-tracker/tree/main/tests",
        kind: "tests",
      },
    ],
    track: "software",
  },
  {
    name: "CampusQueue",
    stack: ["Java 17", "Spring Boot", "PostgreSQL", "Testcontainers"],
    motivation:
      "Handle limited workshop capacity without overbooking when several students register at the same time.",
    implementation:
      "A Spring Boot and PostgreSQL API with JWT security, role-scoped workshop workflows, pessimistic row locking, FIFO waitlisting, and automatic promotion.",
    evidence: [
      "Twenty students across eight threads consistently finish as exactly 3 confirmed and 17 waitlisted for a capacity-three workshop.",
      "Twenty-eight integration tests run against a real PostgreSQL Testcontainer in GitHub Actions.",
    ],
    limitation:
      "The API has no refresh-token flow, rate limiting, notifications, attendance tracking, or hosted deployment.",
    links: [
      {
        label: "CampusQueue source",
        href: "https://github.com/Achintya-Narula/campus-queue",
        kind: "source",
      },
      {
        label: "CampusQueue workflow",
        href: "https://github.com/Achintya-Narula/campus-queue/actions",
        kind: "tests",
      },
    ],
    track: "software",
  },
  {
    name: "Claude GenAI Lab Assistant",
    stack: ["Next.js", "TypeScript", "Anthropic API"],
    motivation:
      "Turn a small set of campus GenAI lab notes into guided explanations, hints, debugging help, and prompt feedback.",
    implementation:
      "A Next.js assistant with four learning modes, curated local context, server-only API key handling, request validation, and safe error responses.",
    evidence: [
      "Vitest covers request validation, context selection, prompt construction, and API-route behavior.",
      "Retrieved lab text is marked as reference material rather than trusted instructions before it reaches the model prompt.",
    ],
    limitation:
      "It uses three curated local files and intentionally avoids a vector database; live answers also require an Anthropic API key.",
    links: [
      {
        label: "Claude GenAI Lab Assistant source",
        href: "https://github.com/Achintya-Narula/claude-genai-lab-assistant",
        kind: "source",
      },
      {
        label: "Claude GenAI Lab Assistant tests",
        href: "https://github.com/Achintya-Narula/claude-genai-lab-assistant/tree/main/tests",
        kind: "tests",
      },
    ],
    track: "software",
  },
] as const;

export const experience: readonly ExperienceEntry[] = [
  {
    role: "Technical Head",
    organization: "Google Developer Groups On Campus, SBSSU",
    dates: "Aug 2025 to Present",
    description:
      "Help plan and execute developer workshops, hackathons, hands-on GenAI labs, technical sessions, and wider campus activities. Support students with technical setup, debugging, developer tools, and practical AI workflows while coordinating event execution and volunteer activities.",
  },
  {
    role: "Full-Stack Development Intern",
    organization: "Solitaire Infosys",
    dates: "Jul 2025 to Aug 2025",
    description:
      "Worked with React, Node.js, Express, and MongoDB on web development tasks and received the Best Intern Award.",
  },
  {
    role: "Web Development Intern",
    organization: "ShadowFox",
    dates: "May 2025 to Jun 2025",
    description:
      "Worked on web development, API integration, testing, REST workflows, and Git-based development.",
  },
] as const;

export const skills: readonly SkillGroup[] = [
  {
    name: "Languages",
    items: ["Java 17", "TypeScript/JavaScript", "Python", "SQL", "C++", "C"],
  },
  {
    name: "Software & Backend",
    items: ["Node.js", "REST APIs", "HTTP/JSON", "JWT", "Authentication & Authorization", "JDK HttpServer", "Concurrency", "Automated Testing", "React"],
  },
  {
    name: "AI/ML",
    items: ["scikit-learn", "XGBoost", "SHAP", "Model Evaluation", "Cross-Validation", "NLP", "TF-IDF", "Classification"],
  },
  {
    name: "Data & Analytics",
    items: ["SQL Server", "T-SQL", "pandas", "NumPy", "ETL", "Star Schema", "Power BI", "Data Quality"],
  },
  {
    name: "Tools & Deployment",
    items: ["Git", "GitHub Actions", "Docker", "FastAPI", "Postman", "VS Code"],
  },
] as const;

export const education = {
  degree: "B.Tech in Computer Science Engineering",
  minor: "Minor in Artificial Intelligence & Machine Learning",
  university: "Shaheed Bhagat Singh State University",
  graduation: "Expected May 2027",
  cgpa: "7.53 / 10",
  coursework: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "Database Management Systems",
    "Operating Systems",
    "Software Engineering",
    "Artificial Intelligence & Machine Learning",
  ],
  recognition: [
    "Best Intern Award, Solitaire Infosys",
    "Python for Everybody, University of Michigan (Coursera)",
    "Crash Course on Python, Google (Coursera)",
    "Power BI Fundamentals",
  ],
} as const;
