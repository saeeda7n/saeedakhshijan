import React from "react";
import { LaptopMockup } from "@/components/laptopMockup";
import { IPhoneXMockup } from "@/components/IPhoneXMockup";
import { ExternalLink, Github } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { ProjectContainer } from "@/app/(root)/projectContainer";

const linksMeta = {
 GIT: {
  icon: <Github className="opacity-50" />,
 },
 WEBSITE: {
  icon: <ExternalLink className="opacity-50" />,
 },
};

export function Projects() {
 return (
  <ProjectContainer len={PROJECTS.length}>
   {PROJECTS.map((project) => (
    <React.Fragment key={project.name}>
     <ProjectCard project={project} />
    </React.Fragment>
   ))}
  </ProjectContainer>
 );
}

function ProjectCard({
 project: { techs, name, links, mobileScreen, desktopScreen, body },
}: {
 project: ProjectProps;
}) {
 return (
  <div className="flex w-screen shrink-0 flex-col items-center justify-center py-12 max-md:px-8">
   <div className="flex flex-col items-center justify-center gap-5">
    <div className="flex items-end">
     <div className="w-[80vw] sm:w-[32rem] md:w-[40rem] lg:w-[44rem] xl:w-[52rem] 2xl:w-[62rem]">
      <LaptopMockup src={desktopScreen} />
     </div>
     <div className="-ms-[16vw] w-[18vw] sm:-ms-28 sm:w-[7rem] md:w-[8.5rem] lg:-ms-32 lg:w-[10rem] xl:-ms-44 xl:w-48 2xl:w-56">
      <IPhoneXMockup src={mobileScreen} />
     </div>
    </div>

    <div className="w-full space-y-4 md:max-w-2xl lg:max-w-4xl">
     <div className="flex flex-col gap-2">
      <h2 className="text-xl font-bold md:text-3xl">{name}</h2>
      <p className="opacity-70 max-lg:text-sm">{body}</p>
     </div>

     <div className="flex w-full items-center justify-between gap-5">
      <div className="flex flex-wrap gap-1">
       {techs.map((tech) => (
        <span
         className="rounded-sm bg-zinc-800 px-2 py-0.5 text-xs font-light"
         key={tech}
        >
         {tech}
        </span>
       ))}
      </div>
      <div className="flex gap-2">
       {links.map((link) => (
        <a href={link.url} target="_blank" key={link.name}>
         {linksMeta[link.name].icon}
        </a>
       ))}
      </div>
     </div>
    </div>
   </div>
  </div>
 );
}
