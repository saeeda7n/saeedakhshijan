import React from "react";
import { Hero } from "@/app/(root)/_components/hero";
import { AboutMe } from "@/app/(root)/_components/aboutMe";
import { Skills } from "@/app/(root)/_components/skills";
import { OtherSkills } from "@/app/(root)/_components/otherSkills";
import { Projects } from "@/app/(root)/_components/projects";
import { ContactMe } from "@/app/(root)/_components/contactMe";

export default function Home() {
 return (
  <main className="relative flex flex-col">
   <Hero />
   <AboutMe />
   <Skills />
   <OtherSkills />
   <Projects />
   <ContactMe />
   <Hero />
  </main>
 );
}
