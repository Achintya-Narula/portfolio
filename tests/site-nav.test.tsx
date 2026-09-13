import { expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SiteNav } from "@/components/site-nav";

it("opens and closes the mobile navigation", async () => {
  const user = userEvent.setup();
  render(<SiteNav />);

  const button = screen.getByRole("button", { name: /open navigation/i });
  expect(button).toHaveAttribute("aria-expanded", "false");

  await user.click(button);
  expect(button).toHaveAttribute("aria-expanded", "true");
  expect(screen.getByRole("navigation", { name: "Mobile navigation" })).toBeInTheDocument();

  await user.click(button);
  expect(button).toHaveAttribute("aria-expanded", "false");
});

it("links resume navigation to the career-track chooser", () => {
  render(<SiteNav />);
  expect(screen.getByRole("link", { name: /resumes/i })).toHaveAttribute("href", "#tracks");
});
