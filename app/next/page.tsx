"use client";
import React, { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
import { AtSignIcon, Github, Instagram, Linkedin } from "lucide-react";
import { SKILLS, SOFT_SKILLS } from "@/data/skills";
import { motion } from "framer-motion";

const Page = () => {
 return (
  <main className="relative flex min-h-lvh items-center justify-center bg-zinc-950">
   <Box className="h-44 w-96 flex-col justify-center">
    <span className="opacity-50">hey, its me</span>
    <h1 className="text-5xl font-black">Saeed Akhshijan</h1>
   </Box>

   <Box className="flex h-[16.1rem] w-20 translate-x-[-15rem] translate-y-[2.5rem] flex-col items-center justify-center gap-6">
    <AtSignIcon className="size-8" />
    <Instagram className="size-8" />
    <Github className="size-8" />
    <Linkedin className="size-8" />
   </Box>

   <Box className="flex max-w-xl translate-x-[6rem] translate-y-[11.25rem] flex-col justify-center">
    <h2 className="text-xl font-black">About me</h2>
    <p className="mt-0.5 opacity-70">
     Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam culpa
     dolorum necessitatibus placeat possimus quidem suscipit! Accusantium facere
     fuga itaque, magnam minima perferendis qui quo soluta suscipit unde
     voluptate?
    </p>
   </Box>

   <Box className="flex max-w-xl -translate-x-[6rem] -translate-y-[9.95rem] flex-col justify-center gap-5">
    <h2 className="text-xl font-black">Technical Skills</h2>
    <div className="flex overflow-hidden">
     <motion.div
      animate={{ x: "-100%" }}
      transition={{ duration: 10, ease: "linear", repeat: Infinity }}
      className="flex shrink-0 gap-8 px-4 text-3xl font-black"
     >
      {SKILLS.map((skill) => (
       <div key={skill.name} className="shrink-0 opacity-50">
        {skill.name}
       </div>
      ))}
     </motion.div>
     <motion.div
      animate={{ x: "-100%" }}
      transition={{ duration: 10, ease: "linear", repeat: Infinity }}
      className="flex shrink-0 gap-8 px-4 text-3xl font-black"
     >
      {SKILLS.map((skill) => (
       <div key={skill.name} className="shrink-0 opacity-50">
        {skill.name}
       </div>
      ))}
     </motion.div>
    </div>
   </Box>

   <Box className="test group flex h-[30.2rem] w-96 max-w-xl -translate-x-[24.5rem] translate-y-[1.3rem] flex-col">
    <h2 className="text-xl font-black">Soft Skills</h2>
    <p className="text-xs">React ecosystem / Tools</p>
    <span className="absolute bottom-1 right-1 flex h-[4.8rem] items-center justify-center bg-zinc-800 px-5 font-bold group-hover:bg-gray-200">
     THREE.js
    </span>

    <span className="absolute right-[5.75rem] top-[8.5rem] flex h-[4.8rem] items-center justify-center bg-zinc-800 px-5 font-bold group-hover:bg-gray-200">
     PWA
    </span>

    <span className="absolute bottom-[2.7rem] right-[7.5rem] flex h-[2.35rem] items-center justify-center bg-zinc-800 px-5 font-bold group-hover:bg-gray-200">
     Zustand
    </span>

    <span className="absolute bottom-1 right-[7.5rem] flex h-[2.2rem] items-center justify-center bg-zinc-800 px-[1.72rem] font-bold group-hover:bg-gray-200">
     Redux
    </span>

    <span className="absolute bottom-1 left-1 flex h-[4.8rem] items-center justify-center bg-zinc-800 px-[1.1rem] font-bold group-hover:bg-gray-200">
     SSR/SSG/CSR
    </span>

    <span className="absolute bottom-[5.3rem] left-1 flex h-[4.8rem] items-center justify-center bg-zinc-800 px-[1.1rem] font-bold group-hover:bg-gray-200">
     Bootstrap
    </span>

    <span className="absolute bottom-[10.3rem] left-[4.5rem] flex h-[4rem] items-center justify-center bg-zinc-800 px-[0.75rem] font-bold group-hover:bg-gray-200">
     Git
    </span>
    <span className="absolute bottom-[10.3rem] left-[7.75rem] flex h-[4rem] items-center justify-center bg-zinc-800 px-[0.75rem] font-bold group-hover:bg-gray-200">
     GitFlow
    </span>

    <span className="absolute bottom-[14.55rem] left-[4.5rem] flex h-[4.8rem] items-center justify-center bg-zinc-800 px-[1.15rem] font-bold group-hover:bg-gray-200">
     React Query
    </span>

    <span className="absolute left-[7rem] top-[8.55rem] flex h-[2rem] items-center justify-center bg-zinc-800 px-[0.5rem] font-bold group-hover:bg-gray-200">
     Socket IO
    </span>

    <span className="absolute left-[2.8rem] top-[6.7rem] flex h-[2.2rem] rotate-90 items-center justify-center bg-zinc-800 px-[0.5rem] font-bold group-hover:bg-gray-200">
     Tanstack
    </span>

    <span className="absolute left-1 top-[5rem] flex h-[5.05rem] items-center justify-center bg-zinc-800 px-[0.6rem] font-bold group-hover:bg-gray-200">
     Axios
    </span>
    <span className="absolute left-[7rem] top-[5rem] flex h-[3.3rem] items-center justify-center bg-zinc-800 px-[1.05rem] font-bold group-hover:bg-gray-200">
     Fiber
    </span>
    <span className="absolute bottom-[13.1rem] left-[-2.5rem] flex h-[4rem] rotate-90 items-center justify-center bg-zinc-800 px-[1.1rem] font-bold group-hover:bg-gray-200">
     Responsive UI
    </span>

    <span className="absolute bottom-[5.3rem] left-[7.75rem] flex h-[4.8rem] items-center justify-center bg-zinc-800 px-[1rem] font-bold group-hover:bg-gray-200">
     jQuery
    </span>

    <span className="absolute right-[2.5rem] top-[16.8rem] flex h-[4.8rem] rotate-90 items-center justify-center bg-zinc-800 px-[2.1rem] font-bold group-hover:bg-gray-200">
     React Context
    </span>
   </Box>

   <Box className="projects group flex h-[30.2rem] w-96 max-w-xl translate-x-[24.5rem] translate-y-[1.3rem] flex-col gap-2">
    <h2 className="text-xl font-black">Projects</h2>
    <div className="h-60 w-full bg-red-600"></div>
    <div className="ms-auto mt-auto h-36 w-[9.75rem]"></div>
   </Box>
  </main>
 );
};

export default Page;

function Box({
 children,
 className,
}: PropsWithChildren & { className?: string }) {
 return (
  <div
   className={cn(
    "absolute flex bg-zinc-900 p-5 hover:bg-gray-50 hover:text-gray-800",
    className,
   )}
  >
   {children}
  </div>
 );
}
