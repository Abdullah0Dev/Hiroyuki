"use client";

import { Approach, Clients, Experience, Footer, Hero, RecentProjects } from "@/components";
import Grid from "@/components/Grid";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
 import { navItems } from "@/data";
// overflow-clip to hide the bottom bar
export default function Home() {
  return (
    <main className="relative text-white bg-white-100 dark:bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav
        navItems={navItems}
        />
        {/* hero section */}
        <Hero />   
        {/* grid section */}
        <Grid /> 
        <RecentProjects /> 
        <Clients />
        <Experience  />
        <Approach  />
        <Footer  />
      </div>
    </main>
  );
}
