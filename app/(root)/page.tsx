import React from "react";
import { Hero } from "@/app/(root)/_components/hero";
import { AboutMe } from "@/app/(root)/_components/aboutMe";
import { Skills } from "@/app/(root)/_components/skills";
import { SoftSkills } from "@/app/(root)/_components/softSkills";
import { Projects } from "@/app/(root)/projects";

export default function Home() {
 return (
  <main className="relative flex flex-col">
   <Hero />
   <AboutMe />
   <Skills />
   <SoftSkills />
   <Projects />
   <Hero />
  </main>
 );
}
