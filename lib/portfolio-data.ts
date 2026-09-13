export type ProjectTrack = "ai-data" | "software";

export type Project = {
  name: string;
  stack: readonly string[];
  summary: string;
  highlights: readonly string[];
  href: string;
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
    summary:
      "An end-to-end machine learning pipeline comparing Logistic Regression, Random Forest, and XGBoost with leakage-safe preprocessing, SHAP explainability, and containerized FastAPI inference.",
    highlights: [
      "Leakage-safe ColumnTransformer preprocessing",
      "5-fold stratified cross-validation & GridSearchCV",
      "0.8486 holdout ROC-AUC & 0.6585 PR-AUC with XGBoost",
      "Out-of-fold threshold tuning & confusion-matrix analysis",
      "Global SHAP & permutation feature importance",
      "FastAPI inference service with Docker-ready serving",
    ],
    href: "https://github.com/Achintya-Narula/customer-churn-ml",
    track: "ai-data",
  },
  {
    name: "Sales Analytics & Data Warehouse Pipeline",
    stack: ["SQL Server", "T-SQL", "Python", "Star Schema", "Power BI"],
    summary:
      "A complete dimensional data warehouse with FactSales, Customer/Product/Date dimensions, SCD Type 1 MERGE ETL, and automated Python data-quality validation.",
    highlights: [
      "Star schema design with surrogate keys & staging tables",
      "SCD Type 1 MERGE ETL procedures in T-SQL",
      "Automated Python quality checks on 5,000 sales transactions",
      "Referential integrity & amount arithmetic assertions",
      "Analytical SQL with CTEs, LAG, and ROW_NUMBER",
      "Power BI-ready DAX measures for MoM revenue metrics",
    ],
    href: "https://github.com/Achintya-Narula/sales-data-warehouse",
    track: "ai-data",
  },
  {
    name: "IssueSense",
    stack: ["Python", "scikit-learn", "pandas", "NLP"],
    summary:
      "A text-classification tool for categorizing software issues as bugs, feature requests, or documentation tasks using TF-IDF features and logistic regression.",
    highlights: [
      "Word and bigram TF-IDF features",
      "Confidence-based review flagging",
      "Per-class performance reporting",
      "Joblib model persistence",
      "Automated tests",
    ],
    href: "https://github.com/Achintya-Narula/issuesense",
    track: "ai-data",
  },
  {
    name: "Placement Tracker",
    stack: ["TypeScript", "Node.js", "REST APIs"],
    summary:
      "An authenticated placement-management system for tracking applications, deadlines, follow-ups, notes, and recruitment stages.",
    highlights: [
      "JWT authentication",
      "Secure password hashing",
      "User-scoped application data",
      "Filtering and stage tracking",
      "Idempotent reminder handling",
      "Automated API tests",
    ],
    href: "https://github.com/Achintya-Narula/placement-tracker",
    track: "software",
  },
  {
    name: "CampusQueue",
    stack: ["Java 17", "JDK HttpServer", "Concurrency"],
    summary:
      "A workshop registration and waitlist system designed around concurrency-safe enrollment.",
    highlights: [
      "FIFO waitlist",
      "Automatic promotion when seats become available",
      "Duplicate registration prevention",
      "Role validation",
      "Concurrent registration handling",
      "Structured API errors",
    ],
    href: "https://github.com/Achintya-Narula/campus-queue",
    track: "software",
  },
  {
    name: "Claude GenAI Lab Assistant",
    stack: ["Next.js", "TypeScript", "Anthropic API"],
    summary:
      "A Next.js learning assistant with a server-side API boundary, curated local context, request validation, safe secret handling, and mode-specific educational workflows.",
    highlights: [
      "Anthropic Messages API integration",
      "Context-grounded responses",
      "Server-side API key handling",
      "Input validation and structured error handling",
      "Explain, Hint, Debug, and Prompt Coach workflows",
      "Automated tests with Vitest",
    ],
    href: "https://github.com/Achintya-Narula/claude-genai-lab-assistant",
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
