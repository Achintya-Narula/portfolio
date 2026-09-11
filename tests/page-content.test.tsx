import { render, screen } from "@testing-library/react";
import Page from "@/app/page";

it("renders Achintya's name", () => {
  render(<Page />);
  expect(screen.getByRole("heading", { name: "Achintya Narula", level: 1 })).toBeInTheDocument();
});

it("renders the positioning statement and mentoring-focused About copy", () => {
  render(<Page />);
  expect(
    screen.getByText(/I build software, AI tools, and learning experiences around real problems/i),
  ).toBeInTheDocument();
  expect(
    screen.getByText(/how AI tools can change the way students learn to code/i),
  ).toBeInTheDocument();
});

it("renders all featured projects and their verified repository links", () => {
  render(<Page />);
  expect(screen.getByRole("heading", { name: "Claude GenAI Lab Assistant" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /View Claude GenAI Lab Assistant on GitHub/i })).toHaveAttribute(
    "href",
    "https://github.com/Achintya-Narula/claude-genai-lab-assistant",
  );
  expect(screen.getByRole("heading", { name: "IssueSense" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "Placement Tracker" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "CampusQueue" })).toBeInTheDocument();
});

it("renders the Claude learning modes and architecture flow", () => {
  render(<Page />);
  for (const mode of ["Explain", "Hint", "Debug", "Prompt Coach"]) {
    expect(screen.getByText(mode)).toBeInTheDocument();
  }
  expect(screen.getByText("Student prompt")).toBeInTheDocument();
  expect(screen.getByText("Mode instructions + lab context")).toBeInTheDocument();
  expect(screen.getByText("Claude")).toBeInTheDocument();
  expect(screen.getByText("Guided response")).toBeInTheDocument();
});

it("renders experience, skills, education, and public contact actions", () => {
  render(<Page />);
  expect(screen.getByText("Technical Head")).toBeInTheDocument();
  expect(screen.getByText("Agentic Workflows")).toBeInTheDocument();
  expect(screen.getByText("7.53 / 10")).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /email me/i })).toHaveAttribute(
    "href",
    "mailto:achintyanarula@gmail.com",
  );
});

it("renders the complete approved project highlights and portfolio source footer", () => {
  render(<Page />);
  expect(screen.getByText("Filtering and stage tracking")).toBeInTheDocument();
  expect(screen.getByText("Role validation")).toBeInTheDocument();
  expect(screen.getByText("Structured API errors")).toBeInTheDocument();
  expect(screen.getByText("Built with Next.js")).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /source on github/i })).toHaveAttribute(
    "href",
    "https://github.com/Achintya-Narula/portfolio",
  );
});
