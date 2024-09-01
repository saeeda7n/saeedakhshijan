"use client";
import React, { PropsWithChildren, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function ProjectContainer({
 children,
 len,
}: PropsWithChildren & { len: number }) {
 const target = useRef<HTMLDivElement | null>(null);
 const { scrollYProgress } = useScroll({
  target,
  offset: ["start start", "end end"],
 });
 const x = useTransform(
  scrollYProgress,
  [0, 0.15, 0.85, 1],
  ["0%", "-5%", `-${(len - 1) * 100 - 5}%`, `-${(len - 1) * 100}%`],
 );
 return (
  <div ref={target} style={{ minHeight: `${len * 100 + 220}vh` }}>
   <h2 className="my-16 text-center text-[clamp(2.5rem,10vw,8rem)] font-bold">
    Projects I'v Done
   </h2>
   <motion.div
    style={{ x }}
    className="sticky top-0 flex min-h-lvh items-center"
   >
    {children}
   </motion.div>
  </div>
 );
}
