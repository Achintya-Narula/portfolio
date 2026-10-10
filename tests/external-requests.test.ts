import { existsSync, readFileSync, readdirSync } from "node:fs";
import { extname, join } from "node:path";
import { describe, expect, it } from "vitest";
import { site } from "@/lib/site";

const buildRoot = join(process.cwd(), ".next");
const serverRoot = join(buildRoot, "server", "app");
const staticRoot = join(buildRoot, "static");
const allowedOrigin = new URL(site.url).origin;

function filesUnder(directory: string, extensions: ReadonlySet<string>): string[] {
  if (!existsSync(directory)) {
    return [];
  }

  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory()
      ? filesUnder(path, extensions)
      : extensions.has(extname(entry.name))
        ? [path]
        : [];
  });
}

function attribute(tag: string, name: string): string | undefined {
  return tag.match(new RegExp(`\\b${name}=["']([^"']+)["']`, "i"))?.[1];
}

function absoluteOrigins(reference: string): string[] {
  return reference
    .split(",")
    .map((candidate) => candidate.trim().split(/\s+/)[0])
    .filter((candidate) => /^(?:https?:)?\/\//i.test(candidate))
    .map((candidate) => new URL(candidate, site.url).origin);
}

describe("production asset origins", () => {
  it("keeps initial-load scripts, styles, fonts, and images on the configured site", () => {
    expect(
      existsSync(buildRoot),
      "Production output is missing. Run npm run build before this test.",
    ).toBe(true);

    const htmlFiles = filesUnder(serverRoot, new Set([".html"]));
    const cssFiles = filesUnder(staticRoot, new Set([".css"]));
    expect(htmlFiles.length, "No generated HTML files were found.").toBeGreaterThan(0);

    const requestedOrigins: { file: string; reference: string; origin: string }[] = [];

    for (const file of htmlFiles) {
      const html = readFileSync(file, "utf8");
      const tags = html.match(/<(?:script|img|source|video|audio|iframe|link)\b[^>]*>/gi) ?? [];

      for (const tag of tags) {
        const tagName = tag.match(/^<([a-z]+)/i)?.[1]?.toLowerCase();
        const rel = attribute(tag, "rel")?.toLowerCase() ?? "";
        const shouldInspectLink = tagName !== "link"
          || /\b(?:stylesheet|preload|modulepreload|icon|manifest|preconnect|dns-prefetch)\b/.test(rel);

        if (!shouldInspectLink) {
          continue;
        }

        for (const name of ["src", "srcset", "href"]) {
          const reference = attribute(tag, name);
          if (!reference) {
            continue;
          }

          for (const origin of absoluteOrigins(reference)) {
            requestedOrigins.push({ file, reference, origin });
          }
        }
      }
    }

    for (const file of cssFiles) {
      const css = readFileSync(file, "utf8");
      const references = [...css.matchAll(/url\(\s*["']?([^"')]+)["']?\s*\)/gi)]
        .map((match) => match[1]);

      for (const reference of references) {
        for (const origin of absoluteOrigins(reference)) {
          requestedOrigins.push({ file, reference, origin });
        }
      }
    }

    expect(requestedOrigins.filter(({ origin }) => origin !== allowedOrigin)).toEqual([]);
  });
});
