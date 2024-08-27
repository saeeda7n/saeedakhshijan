"use client";
import React, { useRef } from "react";
import { LinedBox } from "@/components/linedBox";
import { motion, useScroll } from "framer-motion";

export function AboutMe() {
 const target = useRef<HTMLDivElement | null>(null);
 const { scrollYProgress } = useScroll({
  target,
 });

 return (
  <div
   className="relative z-40 -mt-[100lvh] min-h-[220lvh] selection:bg-zinc-900 selection:text-gray-50"
   ref={target}
  >
   <motion.div className="sticky top-0 mx-auto flex min-h-lvh items-center justify-center overflow-hidden bg-white">
    <LinedBox
     lineClassName="bg-gray-200"
     className="absolute -bottom-[min(50vh,50vw)] -end-[min(30vh,30vw)] size-[max(100vh,100vw)]"
     rainClassName="bg-gray-900"
     spaceSize={44}
    />
    <div className="absolute -end-64 bottom-64 size-96 bg-green-900/5 backdrop-blur-sm md:end-32" />
    <div className="absolute -end-32 bottom-32 size-96 bg-blue-600/5 backdrop-blur-sm md:end-64" />

    <div className="container relative">
     <h2 className="text-[clamp(2.5rem,10vw,8rem)] font-bold text-gray-800">
      About me
     </h2>
     <p className="max-w-6xl text-sm text-gray-600 sm:text-base lg:text-lg">
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
