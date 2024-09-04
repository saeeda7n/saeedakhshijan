"use client";
import React, { useEffect, useRef } from "react";
import { motion, useCycle } from "framer-motion";

const Page = () => {
 return (
  <div className="min-h-svh bg-gray-900">
   <Example />
  </div>
 );
};

export default Page;

// Naive implementation - in reality would want to attach
// a window or resize listener. Also use state/layoutEffect instead of ref/effect
// if this is important to know on initial client render.
// It would be safer to  return null for unmeasured states.
export const useDimensions = (ref: any) => {
 const dimensions = useRef({ width: 0, height: 0 });

 useEffect(() => {
  dimensions.current.width = ref.current.offsetWidth;
  dimensions.current.height = ref.current.offsetHeight;
 }, []);

 return dimensions.current;
};

const variants = {
 open: {
  transition: { staggerChildren: 0.07, delayChildren: 0.2 },
 },
 closed: {
  transition: { staggerChildren: 0.05, staggerDirection: -1 },
 },
};

export const Navigation = () => (
 <motion.ul variants={variants}>
  {itemIds.map((i) => (
   <MenuItem i={i} key={i} />
  ))}
 </motion.ul>
);

const itemIds = [0, 1, 2, 3, 4];

export const MenuToggle = ({ toggle }) => (
 <button className="text-gray-800" onClick={toggle}>
  Not
 </button>
);

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

export const MenuItem = ({ i }) => {
 const variants = {
  open: {
   y: 0,
   opacity: 1,
   transition: {
    y: { stiffness: 1000, velocity: -100 },
   },
  },
  closed: {
   y: 50,
   opacity: 0,
   transition: {
    y: { stiffness: 1000 },
   },
  },
 };

 const style = { border: `2px solid ${colors[i]}` };
 return (
  <motion.li
   variants={variants}
   whileHover={{ scale: 1.1 }}
   whileTap={{ scale: 0.95 }}
  >
   <div className="icon-placeholder" style={style} />
   <div className="text-placeholder" style={style} />
  </motion.li>
 );
};

const sidebar = {
 open: (height = 1000) => ({
  clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
  transition: {
   type: "spring",
   stiffness: 20,
   restDelta: 2,
  },
 }),
 closed: {
  clipPath: "circle(30px at 40px 40px)",
  transition: {
   delay: 0.5,
   type: "spring",
   stiffness: 400,
   damping: 40,
  },
 },
};

export const Example = () => {
 const [isOpen, toggleOpen] = useCycle(false, true);
 const containerRef = useRef(null);
 const { height } = useDimensions(containerRef);

 return (
  <motion.nav
   initial={false}
   animate={isOpen ? "open" : "closed"}
   custom={height}
   ref={containerRef}
  >
   <motion.div className="background bg-gray-200" variants={sidebar} />
   <Navigation />
   <MenuToggle toggle={() => toggleOpen()} />
  </motion.nav>
 );
};
