"use client";
import React, { useEffect, useRef, useState } from "react";
import {
 AnimatePresence,
 motion,
 useAnimationControls,
 useSpring,
 Variants,
} from "framer-motion";
import { SKILLS } from "@/data/skills";

type CurrentSkillProps = {
 name: string;
 icon?: string;
};

const variants: Variants = {
 initiate: {
  scale: 0,
 },
 hover: {
  scale: 1,
 },
};

function CurrentSkill({ name, icon }: CurrentSkillProps) {
 const scope = useRef<HTMLDivElement | null>(null);
 const iconRef = useRef<HTMLDivElement | null>(null);

 const top = useSpring(0);
 const left = useSpring(0);

 const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
  const { width, height } = iconRef.current!.getBoundingClientRect();
  const rect = scope.current!.getBoundingClientRect();

  top.set(e.clientY - rect.top - height / 2);
  left.set(e.clientX - rect.left - width / 2);
 };

 return (
  <motion.div
   ref={scope}
   className="relative cursor-none"
   onMouseMove={handleMouseMove}
   whileHover="hover"
   animate="initiate"
   initial="initiate"
  >
   <div className="absolute -inset-5" />
   <motion.div
    ref={iconRef}
    style={{
     left,
     top,
    }}
    variants={variants}
    className="pointer-events-none absolute z-10 size-10 overflow-hidden rounded-full bg-[--textColor] p-2"
   >
    <img
     className="size-full object-contain object-center"
     src={icon}
     alt={name}
    />
   </motion.div>
   <div className="relative overflow-hidden rounded-md bg-[--backgroundColor] px-2 transition duration-300">
    <AnimatePresence initial={false} mode="popLayout">
     <motion.span
      className="relative block text-[--textColor]"
      initial={{ y: "-110%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: "110%", opacity: 0 }}
      key={name}
     >
      {name}
     </motion.span>
    </AnimatePresence>
   </div>
  </motion.div>
 );
}

export function Hero() {
 const [index, setIndex] = useState(0);
 const { name, textColor, backgroundColor, miniIcon } = SKILLS[index];
 useEffect(() => {
  const id = setTimeout(() => setIndex((p) => (p + 1) % SKILLS.length), 4000);
  return () => clearTimeout(id);
 }, [index]);

 return (
  <section
   id="hero"
   className="relative z-50 bg-black selection:bg-zinc-900 selection:text-gray-100"
   style={
    {
     "--backgroundColor": backgroundColor,
     "--textColor": textColor,
    } as React.CSSProperties
   }
  >
   <Background />
   <div className="container relative z-50 flex min-h-svh flex-col justify-center py-32">
    <div
     className="mt-[calc(theme(spacing.6)+1lh)] text-[clamp(1rem,3vw,2rem)]"
     aria-hidden
    />
    <span>Hey👋, its me</span>
    <h1 className="text-[clamp(3.5rem,10vw,10rem)] font-black leading-none">
     Saeed <br /> Akhshijan
    </h1>

    <div className="mt-6 inline-flex items-center gap-2 self-start text-[clamp(0.5rem,3vw,2rem)] font-semibold text-gray-200">
     You want to develop a
     <CurrentSkill name={name} icon={miniIcon} />
     project 🤔?
    </div>
   </div>
  </section>
 );
}

function Background() {
 const animationControls = useAnimationControls();
 useEffect(() => {
  animationControls.start(
   { rotate: 360 },
   { duration: 35, repeat: Infinity, ease: "linear" },
  );
 }, []);
 return (
  <div className="absolute inset-0 overflow-hidden">
   <div className="relative z-10 h-full w-full bg-[url('/images/noise.png')] backdrop-blur-3xl" />
   <motion.div
    animate={animationControls}
    className="absolute -bottom-[10vw] -start-[max(-10rem,5vw)] size-[max(30rem,40vw)] origin-top rounded-full bg-blue-600 opacity-50 blur-3xl"
   />
   <motion.div
    animate={animationControls}
    className="absolute -top-[5vw] start-[10vw] size-[max(25rem,35vw)] origin-bottom rounded-full bg-purple-900 opacity-50 blur-3xl"
   />
   <div className="absolute rounded-full bg-[--backgroundColor] blur-3xl transition duration-300 max-md:inset-x-5 max-md:-bottom-12 max-md:h-16 md:inset-y-12 md:-end-24 md:w-16" />
  </div>
 );
}
