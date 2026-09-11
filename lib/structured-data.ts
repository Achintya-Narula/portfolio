import { site } from "@/lib/site";

export function createPersonJsonLd(url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url,
    sameAs: [site.github, site.linkedin],
    affiliation: {
      "@type": "CollegeOrUniversity",
      name: "Shaheed Bhagat Singh State University",
    },
    knowsAbout: [
      "Software Development",
      "Artificial Intelligence",
      "Machine Learning",
      "Natural Language Processing",
      "Generative AI",
    ],
  } as const;
}
