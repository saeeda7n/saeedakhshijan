"use client";

import { cn, generateRandomNumber, Sleep } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";

type LinedBoxProps = {
 className?: string;
 spaceSize?: number;
 lineSize?: number;
 lineClassName?: string;
 rainClassName?: string;
};

export function LinedBox({
 className,
 spaceSize,
 lineSize,
 rainClassName,
 lineClassName,
}: LinedBoxProps) {
 spaceSize = spaceSize || 64;
 lineSize = lineSize || 1;
 const scope = useRef<HTMLDivElement | null>(null);
 const [lines, setLines] = useState(0);

 useEffect(() => {
  if (!scope.current) return;
  const { width } = scope.current!.getBoundingClientRect();
  setLines(width / spaceSize);
 }, [scope.current, spaceSize, lineSize]);

 return (
  <div
   ref={scope}
   className={cn(
    "relative size-96 overflow-hidden [mask-image:radial-gradient(circle,rgba(255,255,255,1)_0%,rgba(255,255,255,0)_85%)]",
    className,
   )}
  >
   {[...new Array(Math.ceil(lines))].map((_, index) => (
    <React.Fragment key={index}>
     <Line
      className={lineClassName}
      rainClassName={rainClassName}
      vertical
      x={spaceSize * index + spaceSize / 2 - lineSize}
      size={lineSize!}
     />
     <Line
      rainClassName={rainClassName}
      className={lineClassName}
      x={spaceSize * index + spaceSize / 2 - lineSize}
      size={lineSize!}
     />
    </React.Fragment>
   ))}
  </div>
 );
}

type LineProps = {
 vertical?: boolean;
 className?: string;
 x: number;
 size: number;
 rainClassName?: string;
};

function Line({ x, size, vertical, className, rainClassName }: LineProps) {
 const scope = useRef<HTMLDivElement | null>(null);
 const animationControls = useAnimationControls();
 useEffect(() => {
  if (!scope.current) return;

  const { height } = scope.current!.getBoundingClientRect();

  async function animate() {
   const top = generateRandomNumber(0, height - 72 / 2);
   animationControls.set({ top, opacity: 1 });
   await animationControls.start(
    {
     top: top + 72,
     opacity: 0,
    },
    { duration: generateRandomNumber(0.7, 1.4) },
   );
   await Sleep(generateRandomNumber(2000, 5400));
   return animate();
  }

  animate();
 }, [scope.current]);
 return (
  <div
   ref={scope}
   className={cn(
    "absolute flex justify-center",
    vertical ? "inset-y-0" : "inset-x-0",
    className,
   )}
   style={{
    [vertical ? "width" : "height"]: size,
    [vertical ? "left" : "top"]: x,
   }}
  >
   {vertical && (
    <motion.div
     animate={animationControls}
     className={cn(
      "absolute z-10 rounded-b-full bg-red-600 [mask-image:linear-gradient(0deg,rgba(0,0,0,1)0%,rgba(0,0,0,0)100%)]",
      rainClassName,
     )}
     style={{
      height: 72,
      width: size * 2,
     }}
    />
   )}
  </div>
 );
}
