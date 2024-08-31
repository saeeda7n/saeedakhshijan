"use client";
import { SOFT_SKILLS } from "@/data/skills";
import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useWindowSize } from "react-use";

export function SoftSkills() {
 return (
  <div className="relative flex min-h-lvh w-screen items-center overflow-hidden bg-gray-50 py-16 text-gray-800">
   <Background />
   <div className="container relative z-20 flex flex-col items-center gap-5">
    <div className="text-center">
     <h2 className="text-[clamp(2.5rem,10vw,8rem)] font-bold">Soft Skills</h2>
     <p className="text-2xl font-bold sm:-mt-5">React ecosystem / Tools</p>
    </div>
    <ul className="grid grid-cols-2 gap-2 font-medium text-gray-50 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
     {SOFT_SKILLS.map((skill) => (
      <li
       key={skill}
       className="flex-shrink-0 rounded-md bg-zinc-950 p-2 px-5 hover:bg-zinc-900"
      >
       {skill}
      </li>
     ))}
    </ul>
   </div>
  </div>
 );
}

function Background() {
 const { width, height } = useWindowSize(1920, 1080);
 const [lines, setLines] = useState(0);

 useEffect(() => {
  setLines(Math.round((Math.max(width, height) * 1.3) / 64));
 }, [width, height]);
 return (
  <div className="absolute inset-0 flex -rotate-[9deg] select-none items-center">
   {[...new Array(lines)].map((_, index) => (
    <RenderLine key={index} index={index} center={Math.round(lines / 2)} />
   ))}
  </div>
 );
}

function RenderLine({ index, center }: any) {
 const idx = center > index ? index : index - center;
 const y = center > index ? idx * 62 : idx * -62;
 const opacity = 1 - idx / 12;
 const duration = 45 - idx * 1.1;
 return (
  <motion.div
   style={{ y, opacity }}
   className="absolute z-20 flex gap-2 text-3xl font-bold uppercase text-gray-700"
  >
   <motion.ul
    transition={{ repeat: Infinity, duration, ease: "linear" }}
    animate={{ x: "-100%" }}
    className="flex flex-shrink-0 gap-2 ps-1"
   >
    {SOFT_SKILLS.map((skill) => (
     <li
      key={skill}
      className="flex-shrink-0 rounded-md bg-gray-200 p-2 px-5 text-center"
     >
      {skill}
     </li>
    ))}
   </motion.ul>
   <motion.ul
    transition={{ repeat: Infinity, duration, ease: "linear" }}
    animate={{ x: "-100%" }}
    className="flex flex-shrink-0 gap-2 pe-1"
   >
    {SOFT_SKILLS.map((skill) => (
     <li
      key={skill}
      className="flex-shrink-0 rounded-md bg-gray-200 p-2 px-5 text-center"
     >
      {skill}
     </li>
    ))}
   </motion.ul>
  </motion.div>
 );
}
