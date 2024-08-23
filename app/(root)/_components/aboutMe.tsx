"use client";
import React, { useRef } from "react";
import {
 motion,
 useMotionTemplate,
 useScroll,
 useTransform,
} from "framer-motion";

export function AboutMe() {
 const target = useRef<HTMLDivElement | null>(null);
 const { scrollYProgress } = useScroll({
  target,
  offset: ["start end", "end start"],
 });
 const x1 = useTransform(scrollYProgress, [0, 0.4], [0, 100]);
 const x = useTransform(scrollYProgress, [0.5, 1], ["0%", "100%"]);
 const y = useTransform(scrollYProgress, [0.5, 0.55, 1], ["0%", "10%", "100%"]);
 const clipPath = useMotionTemplate`polygon(0 0, ${x1}% 0, ${x1}% 100%, 0 100%)`;

 return (
  <div className="relative z-40 flex min-h-screen" ref={target}>
   <motion.div
    style={{
     clipPath,
     x,
     y,
    }}
    className="sticky top-0 mx-auto flex flex-1 items-center justify-center overflow-hidden bg-zinc-900"
   >
    <div className="pointer-events-none absolute -start-[max(-14rem,6vw)] -top-[15vw] size-[max(15rem,30vw)] rounded-full bg-red-600 opacity-50 blur-3xl md:size-[max(25rem,30vw)]" />
    <motion.div
     animate={{ rotate: 360 }}
     transition={{ repeat: Infinity, ease: "linear", duration: 128 }}
     className="pointer-events-none absolute -bottom-[15vw] end-[max(-14rem,6vw)] size-[max(15rem,30vw)] rounded-[30%] bg-blue-600 opacity-50 blur-3xl md:size-[max(25rem,30vw)]"
    />

    <div className="container relative">
     <h2 className="text-[clamp(2.5rem,10vw,8rem)] font-bold">About me</h2>
     <p className="max-w-6xl text-sm sm:text-base lg:text-lg">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi
      architecto cumque delectus expedita in itaque quia sequi similique
      suscipit. Ab, delectus distinctio ea iusto nam nihil quidem quo vel! Lorem
      ipsum dolor sit amet, consectetur adipisicing elit. Accusamus asperiores
      autem eum hic libero nisi repellendus saepe totam voluptatem voluptatibus!
      Aliquid consectetur debitis labore laboriosam nam possimus quo repudiandae
      unde!
     </p>
    </div>
   </motion.div>
  </div>
 );
}
