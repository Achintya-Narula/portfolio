import { expect, it } from "vitest";
import { createPersonJsonLd } from "@/lib/structured-data";

it("creates public Person JSON-LD without private fields", () => {
  const data = createPersonJsonLd("https://example.vercel.app");

  expect(data).toMatchObject({
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Achintya Narula",
    url: "https://example.vercel.app",
    sameAs: [
      "https://github.com/Achintya-Narula",
      "https://www.linkedin.com/in/achintyanarula",
    ],
  });

  expect(JSON.stringify(data)).not.toContain("phone");
  expect(JSON.stringify(data)).not.toContain("telephone");
});
