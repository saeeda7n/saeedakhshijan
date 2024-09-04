"use client";
import React, { useEffect } from "react";
import { motion, useCycle, Variants } from "framer-motion";
import { useLenis } from "@studio-freight/react-lenis";
import { LINKS } from "@/data/links";

const items = [
 {
  name: "Home",
  pointer: "#hero",
 },
 {
  name: "About Me",
  pointer: "#about_me",
 },
 {
  name: "Technical Skills",
  pointer: "#skills",
 },
 {
  name: "React Ecosystem",
  pointer: "#ecosystem",
 },
 {
  name: "Projects",
  pointer: "#projects",
 },
 {
  name: "Contact Me",
  pointer: "#contact_me",
 },
];

const variants: Variants = {
 open: {
  clipPath: `xywh(0% 0% 100% 100% round 0.75rem 0.75rem)`,
  transition: {
   delay: 0.5,
  },
 },
 closed: {
  clipPath: `xywh(100% 0% 0% 0% round 0.75rem 0.75rem)`,
  transition: {
   delay: 0.5,
  },
 },
};

const backgroundVariants: Variants = {
 closed: {
  backdropFilter: `blur(0px)`,
  pointerEvents: "none",
  background: "#00000000",
  transition: {
   delay: 0.5,
  },
 },
 open: {
  backdropFilter: `blur(24px)`,
  pointerEvents: "auto",
  background: "#00000033",
 },
};

const menuItemVariants: Variants = {
 open: {
  y: 0,
  opacity: 1,
  transition: {
   y: { type: "spring" },
  },
 },
 closed: {
  y: 50,
  opacity: 0,
  transition: {
   y: { type: "spring" },
  },
 },
};

const navigationVariants: Variants = {
 open: {
  transition: { staggerChildren: 0.07, delayChildren: 0.75 },
 },
 closed: {
  transition: { staggerChildren: 0.05, staggerDirection: -1 },
 },
};
const linksVariants: Variants = {
 open: {
  transition: { staggerChildren: 0.07, delayChildren: 0.75 },
 },
 closed: {
  transition: { staggerChildren: 0.05, staggerDirection: -1 },
 },
};

const linkItemVariants: Variants = {
 open: {
  opacity: 1,
  transition: {
   y: { type: "spring" },
  },
 },
 closed: {
  opacity: 0,
  transition: {
   y: { type: "spring" },
  },
 },
};

function MenuItem({ item, toggle }: { item: any; toggle: () => void }) {
 const lenis = useLenis();

 return (
  <motion.li
   className="cursor-pointer text-[clamp(1rem,10vw,2rem)] font-bold uppercase text-gray-500 hover:text-gray-950 sm:text-4xl md:text-5xl"
   variants={menuItemVariants}
   onClick={() => {
    lenis?.start();
    toggle();
    lenis?.scrollTo(item.pointer);
   }}
  >
   {item.name.split("").map((word: string, index: number) => (
    <span className="hoverText" key={index}>
     {word}
    </span>
   ))}
  </motion.li>
 );
}

function Navigation({ toggle }: { toggle: () => void }) {
 return (
  <motion.ul
   className="flex flex-col gap-5 md:gap-10"
   variants={navigationVariants}
  >
   {items.map((item, key) => (
    <MenuItem toggle={toggle} item={item} key={key} />
   ))}
  </motion.ul>
 );
}

function Links() {
 return (
  <motion.div variants={linksVariants} className="mt-auto flex flex-wrap gap-5">
   {LINKS.map((link) => (
    <motion.a
     variants={linkItemVariants}
     key={link.name}
     target="_blank"
     href={link.url}
     className="flex items-center gap-1"
    >
     {link.icon}
     <span>{link.name}</span>
    </motion.a>
   ))}
  </motion.div>
 );
}

function NavigationButton({ toggle }: { toggle: () => void }) {
 const topVariants: Variants = {
  open: {
   rotate: 45,
   marginLeft: "0.5rem",
  },
  closed: {
   rotate: 0,
   marginLeft: "0rem",
  },
 };
 const bottomVariants: Variants = {
  open: {
   rotate: -45,
   marginLeft: "0.5rem",
  },
  closed: {
   rotate: 0,
   marginLeft: "0rem",
  },
 };

 const centerVariants: Variants = {
  open: {
   scale: 0,
  },
  closed: {
   scale: 1,
  },
 };
 return (
  <button
   onClick={() => toggle()}
   className="pointer-events-auto absolute right-2 top-2 z-50 flex size-14 flex-col items-center justify-center gap-1 rounded-xl bg-gray-50"
  >
   <div className="flex aspect-square h-8 w-10 flex-col justify-between">
    <motion.span
     variants={topVariants}
     className="h-2 w-full origin-top-left rounded-full bg-zinc-950"
    />
    <motion.span
     variants={centerVariants}
     className="h-2 w-full rounded-full bg-zinc-950"
    />
    <motion.span
     variants={bottomVariants}
     className="h-2 w-full origin-bottom-left rounded-full bg-zinc-950"
    />
   </div>
  </button>
 );
}

const Navbar = () => {
 const lenis = useLenis();
 const [isOpen, toggleOpen] = useCycle(false, true);
 useEffect(() => {
  if (!lenis) return;
  isOpen ? lenis.stop() : lenis.start();
 }, [isOpen]);
 return (
  <motion.header
   dir="rtl"
   initial={false}
   variants={backgroundVariants}
   animate={isOpen ? "open" : "closed"}
   className="fixed inset-0 z-[99999] bg-zinc-950/50"
  >
   <motion.nav
    animate={isOpen ? "open" : "closed"}
    dir="ltr"
    className="absolute inset-y-4 left-4 right-4 max-w-3xl"
   >
    <NavigationButton toggle={toggleOpen} />
    <motion.div
     initial={false}
     variants={variants}
     style={{ overflowY: isOpen ? "auto" : "hidden", overflowX: "hidden" }}
     className="absolute inset-0 flex flex-col justify-between gap-10 rounded-xl bg-gray-50 p-6 text-gray-900 md:p-10"
    >
     <Navigation toggle={toggleOpen} />
     <Links />
    </motion.div>
   </motion.nav>
  </motion.header>
 );
};

export default Navbar;
