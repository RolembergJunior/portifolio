'use client'

import { useEffect, useState } from "react";
import Banner from "@/components/Banner";
import Header from "@/components/Header";
import Sobre from "@/components/Sobre";
import Projects from "@/components/Projects";
import AllProjects from "@/components/AllProjects";


export default function Home() {
  return (
    <main className="flex flex-col justify-around">
          <section className={` flex items-center bg-[#dbdada] drak:bg-[#07071d] h-screen`}>
              <Banner/>
              <Header/>
          </section>
              <Sobre />
              <Projects/>
              <AllProjects/>
    </main>
  );
}
