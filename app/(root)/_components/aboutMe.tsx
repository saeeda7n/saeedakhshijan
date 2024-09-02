import React from "react";
import { LinedBox } from "@/components/linedBox";

export function AboutMe() {
 return (
  <section className="relative z-40 -mt-[100vh] min-h-[220vh] selection:bg-zinc-900 selection:text-gray-50">
   <div className="sticky top-0 mx-auto flex min-h-screen items-center justify-center overflow-hidden bg-white">
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
      Dedicated Front-end Developer with 1+ years of experience building
      user-friendly web applications. Proficient in React, JavaScript, and CSS,
      with a strong understanding of responsive design principles. Passionate
      about creating intuitive and visually appealing user interfaces. Seeking a
      challenging role to contribute my skills and drive innovation in a
      fast-paced environment.
     </p>
    </div>
   </div>
  </section>
 );
}
