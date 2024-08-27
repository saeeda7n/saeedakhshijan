"use client";
import React, { PropsWithChildren, useState } from "react";
import { DroppingCodes } from "@/components/droppingCodes";
import { SKILLS } from "@/data/skills";
import { cn } from "@/lib/utils";
import { Component } from "@/app/(root)/_components/test";

type SkillCardProps = {
 skill: SkillsProps;
 className?: string;
};

function SkillCard({ skill, className }: SkillCardProps) {
 return (
  <div
   style={
    {
     "--skillColor": skill.backgroundColor,
     "--textColor": skill.textColor,
    } as React.CSSProperties
   }
   className={cn(
    "relative flex items-center justify-center gap-2 bg-zinc-950 p-5 [background-image:radial-gradient(circle_at_var(--x)_var(--y),var(--skillColor),transparent_80px)] after:absolute after:-inset-0.5 after:-z-10 after:bg-gray-50/5 after:[background-image:radial-gradient(circle_at_var(--x)_var(--y),var(--skillColor),transparent_80px)] group-hover:bg-fixed group-hover:after:bg-fixed sm:gap-4 md:min-h-32",
    className,
   )}
  >
   <img
    alt={skill.name}
    src={skill.miniIcon}
    className="-ms-10 size-8 sm:size-9 md:size-10"
   />
   <h3 className="sm:text-xl md:text-2xl">{skill.name}</h3>
  </div>
 );
}

export function Skills() {
 return (
  <DroppingCodes>
   <div className="relative isolate flex min-h-lvh py-16">
    <div className="container relative flex flex-col items-center justify-center">
     <h2 className="text-[clamp(2.5rem,10vw,8rem)] font-bold">
      Technical Skills
     </h2>
     <div className="grid w-full grid-cols-2 lg:grid-cols-4">
      {SKILLS.map((skill) => (
       <Component skill={skill} key={skill.name} />
      ))}
     </div>
    </div>
   </div>
  </DroppingCodes>
 );
}

function Background({ children }: PropsWithChildren) {
 const [position, setPosition] = useState({ x: -1110, y: -1110 });
 return (
  <div
   onMouseMove={(e) => setPosition({ x: e.clientX, y: e.clientY })}
   style={
    {
     "--x": position.x + "px",
     "--y": position.y + "px",
    } as React.CSSProperties
   }
   className="group grid w-full cursor-none grid-cols-12 gap-3 bg-fixed"
  >
   {children}
  </div>
 );
}
