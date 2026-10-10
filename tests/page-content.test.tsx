import { expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import Page from "@/app/page";
import { projects } from "@/lib/portfolio-data";

it("renders Achintya's name and balanced SWE plus AI positioning", () => {
  render(<Page />);
  expect(screen.getByRole("heading", { name: "Achintya Narula", level: 1 })).toBeInTheDocument();
  expect(
    screen.getByText(/I build backend systems, applied ML workflows, and data tools/i),
  ).toBeInTheDocument();
  expect(screen.getByText(/test the parts that matter and state what each project cannot yet do/i)).toBeInTheDocument();
  expect(screen.getByText(/internships starting in January 2027/i)).toBeInTheDocument();
});

it("describes a cautious troubleshooting process without overstating the outcome", () => {
  render(<Page />);
  const about = screen.getByRole("region", {
    name: /I want to understand why a system behaves the way it does/i,
  });

  expect(within(about).getByText(/begin with the simplest plausible cause/i)).toBeInTheDocument();
  expect(within(about).getByText(/Linux setup with NVIDIA graphics/i)).toBeInTheDocument();
  expect(within(about).getByText(/could not prove the original cause/i)).toBeInTheDocument();
  expect(within(about).getByText(/instead of calling a partial fix complete/i)).toBeInTheDocument();
});

it("renders distinct Software Engineering and AI\/ML & Data career tracks with resume downloads", () => {
  render(<Page />);
  const tracks = screen.getByRole("region", { name: /career tracks/i });
  expect(within(tracks).getByRole("heading", { name: "Software Engineering" })).toBeInTheDocument();
  expect(within(tracks).getByRole("heading", { name: "AI/ML & Data" })).toBeInTheDocument();
  expect(within(tracks).getByRole("link", { name: "Download Software Engineering resume" })).toHaveAttribute(
    "href",
    "/Achintya_Narula_SWE_Resume.pdf",
  );
  expect(within(tracks).getByRole("link", { name: "Download AI/ML and Data resume" })).toHaveAttribute(
    "href",
    "/Achintya_Narula_AIML_Resume.pdf",
  );
  expect(within(tracks).getByText("Placement Tracker")).toBeInTheDocument();
  expect(within(tracks).getByText("Customer Churn Prediction & Explainability")).toBeInTheDocument();
});

it("renders every project as a semantic evidence case note", () => {
  render(<Page />);
  const projectSection = screen.getByRole("region", { name: "Selected projects" });
  expect(within(projectSection).getAllByRole("article")).toHaveLength(projects.length);

  for (const project of projects) {
    const heading = within(projectSection).getByRole("heading", { name: project.name });
    const article = heading.closest("article");
    expect(article).not.toBeNull();

    const caseNote = within(article as HTMLElement);
    expect(caseNote.getByText(project.motivation)).toBeInTheDocument();
    expect(caseNote.getByText(project.implementation)).toBeInTheDocument();
    expect(caseNote.getByRole("list", { name: `${project.name} evidence` })).toBeInTheDocument();
    expect(caseNote.getByLabelText(`${project.name} limitation`)).toHaveTextContent(project.limitation);

    const source = project.links.find((link) => link.kind === "source");
    expect(caseNote.getByRole("link", { name: source?.label })).toHaveAttribute("href", source?.href);
  }

  expect(within(projectSection).queryByText("↗")).not.toBeInTheDocument();
});

it("groups detailed projects into AI\/ML & Data and Software & Backend sections", () => {
  render(<Page />);
  expect(screen.getByRole("heading", { name: "AI/ML & Data Projects" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "Software & Backend Projects" })).toBeInTheDocument();
});

it("renders experience, rebalanced skills, education, and public contact actions without STPO", () => {
  render(<Page />);
  expect(screen.getByText("Technical Head")).toBeInTheDocument();
  expect(screen.queryAllByText(/Student Training & Placement Officer/i)).toHaveLength(0);
  expect(screen.getByText("Software & Backend")).toBeInTheDocument();
  expect(screen.getByText("Data & Analytics")).toBeInTheDocument();
  expect(screen.queryByText("Agentic Workflows")).not.toBeInTheDocument();
  expect(screen.getByText(/7\.53 \/ 10/)).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /email me/i })).toHaveAttribute(
    "href",
    "mailto:achintyanarula@gmail.com",
  );
});

it("renders project decisions and the portfolio source footer", () => {
  render(<Page />);
  expect(screen.getByText(/22-test suite covers ownership/i)).toBeInTheDocument();
  expect(screen.getByText(/Twenty students across eight threads/i)).toBeInTheDocument();
  expect(screen.getByText(/SCD Type 1 does not preserve history/i)).toBeInTheDocument();
  expect(screen.getByText("Built with Next.js")).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /source on github/i })).toHaveAttribute(
    "href",
    "https://github.com/Achintya-Narula/portfolio",
  );
});

it("states the site's limited privacy claim accurately", () => {
  render(<Page />);
  const footer = screen.getByRole("contentinfo");

  expect(within(footer).getByText(
    /uses email links instead of a contact form and does not intentionally run behavioural analytics/i,
  )).toBeInTheDocument();
  expect(footer).not.toHaveTextContent(/Vercel (?:receives|collects|stores) no/i);
});

it("uses text labels instead of decorative external-link arrows", () => {
  render(<Page />);
  expect(screen.queryByText("↗")).not.toBeInTheDocument();
});
