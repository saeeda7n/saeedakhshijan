"use client";
export function Header() {
 return (
  <header className="fixed inset-0 z-[555]">
   <div className="absolute bottom-3 end-3 start-3 top-3 flex overflow-hidden rounded-xl bg-gray-200/80 text-gray-950 backdrop-blur-2xl">
    <button className="absolute end-0 top-0 size-10 rounded-xl">O</button>

    <div className="flex flex-1 items-center gap-5 p-8 text-5xl font-semibold">
     <div className="flex-1"></div>

     <div className="flex-1">
      <ul className="space-y-8 uppercase">
       <li>About me</li>
       <li>Skills</li>
       <li>Projects</li>
       <li>Github</li>
       <li>Instagram</li>
      </ul>
     </div>
    </div>
   </div>
  </header>
 );
}
