"use client";
import React, { PropsWithChildren, useState } from "react";
import { DroppingCodes } from "@/components/droppingCodes";
import { SKILLS } from "@/data/skills";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type SkillCardProps = {
 skill: SkillsProps;
 className?: string;
};

function SkillCard({ skill, className }: SkillCardProps) {
 return (
  <motion.div
   viewport={{ amount: 0.5, once: true }}
   initial={{ opacity: 0, y: "100%" }}
   whileInView={{
    opacity: 1,
    y: 0,
   }}
   style={
    {
     "--skillColor": skill.backgroundColor,
     "--textColor": skill.textColor,
     "--width": skill.data.percent + "%",
    } as React.CSSProperties
   }
   className={cn("relative flex flex-col gap-2 bg-zinc-950 p-5", className)}
  >
   <div className="flex gap-2">
    <img src={skill.miniIcon} className="size-8" />
    <h3 className="font-medium sm:text-xl md:text-2xl">{skill.name}</h3>
   </div>
   <div className="relative h-3 w-full overflow-hidden rounded-full bg-zinc-900 after:absolute after:inset-y-0 after:left-0 after:w-[--width] after:rounded-full after:bg-[--skillColor] sm:h-4 md:h-5"></div>
  </motion.div>
 );
}

export function Skills() {
 return (
  <DroppingCodes>
   <section id="skills" className="relative isolate flex min-h-screen py-16">
    <div className="container relative flex flex-col items-center justify-center">
     <h2 className="text-[clamp(2.5rem,10vw,8rem)] font-bold">
      Technical Skills
     </h2>
     <div className="grid w-full">
      {SKILLS.map((skill) => (
       <SkillCard skill={skill} />
      ))}
     </div>
    </div>
   </section>
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
