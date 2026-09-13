import { describe, expect, it } from "vitest";
import { education, experience, projects, skills } from "@/lib/portfolio-data";
import { site } from "@/lib/site";

const publicData = JSON.stringify({ site, projects, experience, skills, education });

describe("public portfolio data", () => {
  it("uses the dedicated public email", () => {
    expect(site.email).toBe("achintyanarula@gmail.com");
  });

  it("pins metadata to the submitted production URL and portfolio source repository", () => {
    expect(site.url).toBe("https://achintya-portfolio-roan.vercel.app");
    expect(site.source).toBe("https://github.com/Achintya-Narula/portfolio");
  });

  it("publishes separate public-safe SWE and AI/ML resume paths", () => {
    expect(site).toHaveProperty("resumes.swe", "/Achintya_Narula_SWE_Resume.pdf");
    expect(site).toHaveProperty("resumes.aiMl", "/Achintya_Narula_AIML_Resume.pdf");
  });

  it("contains the verified project repository links", () => {
    expect(projects.map((project) => project.href)).toEqual([
      "https://github.com/Achintya-Narula/customer-churn-ml",
      "https://github.com/Achintya-Narula/sales-data-warehouse",
      "https://github.com/Achintya-Narula/issuesense",
      "https://github.com/Achintya-Narula/placement-tracker",
      "https://github.com/Achintya-Narula/campus-queue",
      "https://github.com/Achintya-Narula/claude-genai-lab-assistant",
    ]);
  });

  it("does not expose phone-like public contact data", () => {
    expect(publicData).not.toMatch(/tel:/i);
    expect(publicData).not.toMatch(/"(?:phone|telephone)"/i);
    expect(publicData).not.toMatch(/\b\d{10,12}\b/);
  });
});
