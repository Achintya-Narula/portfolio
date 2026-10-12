import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

const root = process.cwd();
const globalCss = readFileSync(join(root, "app", "globals.css"), "utf8");
const layout = readFileSync(join(root, "app", "layout.tsx"), "utf8");

describe("editorial style contract", () => {
  it("uses the approved colour and spacing tokens", () => {
    expect(globalCss).toContain("--background: #faf8f3;");
    expect(globalCss).toContain("--text: #171717;");
    expect(globalCss).toContain("--muted: #66635e;");
    expect(globalCss).toContain("--accent: #4056a1;");
    expect(globalCss).toContain("--border: #d6d0c5;");
    expect(globalCss).toContain("--radius: 4px;");
  });

  it("uses the approved type scale", () => {
    expect(globalCss).toContain("clamp(2.75rem, 8vw, 6.75rem)");
    expect(globalCss).toContain("clamp(1.9rem, 4vw, 3.25rem)");
    expect(globalCss).toContain("clamp(1.2rem, 2vw, 1.5rem)");
  });

  it("avoids mass-produced visual effects and oversized radii", () => {
    expect(globalCss).not.toMatch(/(?:linear|radial)-gradient/i);
    expect(globalCss).not.toMatch(/box-shadow/i);
    expect(globalCss).not.toMatch(/backdrop-filter/i);
    expect(globalCss).not.toMatch(/\.external-arrow|\.flow-arrow[^}]*transform/i);
    expect(globalCss).not.toMatch(/transition:\s*all\b/i);

    const radii = [...globalCss.matchAll(/border-radius:\s*([^;]+);/g)].map((match) => match[1].trim());
    expect(radii.length).toBeGreaterThan(0);
    expect(radii.every((radius) => radius === "var(--radius)" || /^(?:0|[0-4](?:\.\d+)?px)$/.test(radius))).toBe(true);
  });

  it("keeps focus visible and fonts self-hosted by Next", () => {
    expect(globalCss).toMatch(/:focus-visible\s*{[^}]*outline:\s*3px solid var\(--accent\)/);
    expect(layout).toContain("Instrument_Sans");
    expect(layout).toContain("IBM_Plex_Mono");
    expect(layout).not.toMatch(/https?:\/\/fonts\.(?:googleapis|gstatic)\.com/);
  });
});
