"use client";
import React, { PropsWithChildren, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { calculateDistance, generateRandomNumber } from "@/lib/utils";
import { KEY_WORDS } from "@/data/skills";

const DISTANCE_THRESHOLD_MAX = 260;
const DISTANCE_THRESHOLD_MIN = 110;

export function DroppingCodes({ children }: PropsWithChildren) {
 const scope = useRef<HTMLDivElement | null>(null);
 const [codes, setCodes] = useState<Omit<CodeBoxProps, "onComplete">[]>([]);
 const previous = useRef({ x: 0, y: 0 });

 function removeCode(key: string) {
  setCodes((p) => [...p.filter((v) => v.id !== key)]);
 }

 useEffect(() => {
  if (!scope.current) return;

  function handleMouseMove(e: MouseEvent) {
   const { y, x } = previous.current;
   if (
    calculateDistance(x, y, e.pageX, e.pageY) >
     generateRandomNumber(DISTANCE_THRESHOLD_MIN, DISTANCE_THRESHOLD_MAX) ||
    e.type === "click"
   ) {
    const id = Math.random().toString(32) + Math.random().toString(36);
    previous.current = { x: e.pageX, y: e.pageY };
    const newBox = {
     id,
     left: e.pageX,
     top: e.pageY,
     children: KEY_WORDS[generateRandomNumber(0, KEY_WORDS.length - 1)],
    };
    setCodes((p) => [...p, newBox]);
   }
  }

  scope.current!.addEventListener("mousemove", handleMouseMove);
  scope.current!.addEventListener("click", handleMouseMove);
  return () => {
   scope.current!.removeEventListener("mousemove", handleMouseMove);
   scope.current!.removeEventListener("click", handleMouseMove);
  };
 }, [scope.current]);

 return (
  <div ref={scope}>
   {children}
   {codes.map((box) => (
    <CodeBox
     key={box.id}
     onComplete={removeCode}
     top={box.top}
     left={box.left}
     id={box.id}
    >
     {box.children}
    </CodeBox>
   ))}
  </div>
 );
}

function CodeBox({ onComplete, top, left, id, children }: CodeBoxProps) {
 return (
  <motion.div
   onAnimationComplete={() => onComplete(id)}
   className="pointer-events-none absolute z-[9999] rounded-lg border bg-zinc-950 px-3 py-1 text-sm font-light"
   transition={{
    duration: 1,
    ease: "anticipate",
   }}
   animate={{
    opacity: 0,
    y: 120,
    skewY: 5,
   }}
   style={{ top, left, x: "-50%" }}
  >
   {children}
  </motion.div>
 );
}
