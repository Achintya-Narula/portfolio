import { expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import Page from "@/app/page";

it("renders Achintya's name and balanced SWE plus AI positioning", () => {
  render(<Page />);
  expect(screen.getByRole("heading", { name: "Achintya Narula", level: 1 })).toBeInTheDocument();
  expect(
    screen.getByText(/I build backend software, applied ML systems, and practical developer tools/i),
  ).toBeInTheDocument();
});

it("renders distinct Software Engineering and AI\/ML & Data career tracks with resume downloads", () => {
  render(<Page />);
  const tracks = screen.getByRole("region", { name: /career tracks/i });
  expect(within(tracks).getByRole("heading", { name: "Software Engineering" })).toBeInTheDocument();
  expect(within(tracks).getByRole("heading", { name: "AI/ML & Data" })).toBeInTheDocument();
  expect(within(tracks).getByRole("link", { name: /SWE Resume/i })).toHaveAttribute(
    "href",
    "/Achintya_Narula_SWE_Resume.pdf",
  );
  expect(within(tracks).getByRole("link", { name: /AI\/ML Resume/i })).toHaveAttribute(
    "href",
    "/Achintya_Narula_AIML_Resume.pdf",
  );
  expect(within(tracks).getByText("Placement Tracker")).toBeInTheDocument();
  expect(within(tracks).getByText("Customer Churn Prediction & Explainability")).toBeInTheDocument();
});

it("renders all six projects and their verified repository links", () => {
  render(<Page />);
  expect(screen.getByRole("heading", { name: "Customer Churn Prediction & Explainability" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /View Customer Churn Prediction & Explainability on GitHub/i })).toHaveAttribute(
    "href",
    "https://github.com/Achintya-Narula/customer-churn-ml",
  );
  expect(screen.getByRole("heading", { name: "Sales Analytics & Data Warehouse Pipeline" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /View Sales Analytics & Data Warehouse Pipeline on GitHub/i })).toHaveAttribute(
    "href",
    "https://github.com/Achintya-Narula/sales-data-warehouse",
  );
  expect(screen.getByRole("heading", { name: "IssueSense" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "Placement Tracker" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "CampusQueue" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "Claude GenAI Lab Assistant" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /View Claude GenAI Lab Assistant on GitHub/i })).toHaveAttribute(
    "href",
    "https://github.com/Achintya-Narula/claude-genai-lab-assistant",
  );
});

it("groups detailed projects into AI\/ML & Data and Software & Backend sections", () => {
  render(<Page />);
  expect(screen.getByRole("heading", { name: "AI/ML & Data Projects" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "Software & Backend Projects" })).toBeInTheDocument();
});

it("renders experience, rebalanced skills, education, and public contact actions", () => {
  render(<Page />);
  expect(screen.getByText("Technical Head")).toBeInTheDocument();
  expect(screen.getByText("Software & Backend")).toBeInTheDocument();
  expect(screen.getByText("Data & Analytics")).toBeInTheDocument();
  expect(screen.queryByText("Agentic Workflows")).not.toBeInTheDocument();
  expect(screen.getByText(/7\.53 \/ 10/)).toBeInTheDocument();
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
