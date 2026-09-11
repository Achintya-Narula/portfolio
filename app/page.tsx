import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { Skills } from "@/components/skills";

export default function Page() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
