'use client'

import { useEffect, useRef, useState } from "react";
import Banner from "@/components/Banner";
import Header from "@/components/Header";
import Sobre from "@/components/Sobre";
import IntersectionComponent from "@/components/IntersectionComponent";
import Projects from "@/components/Projects";


export default function Home() {
  const [scroolPosition, setScroolPosition] = useState(0);
  const ref = useRef(null);

  useEffect(() => {

    

    function onHandleScrool(){
      setScroolPosition(window.scrollY + ((window.innerHeight * 3) / 4));
    };

    window.addEventListener('scroll', () => onHandleScrool());

    return () => window.removeEventListener('scroll', () => onHandleScrool());

  },[]);


  console.log(scroolPosition,'VALOR DA TELA')

  return (
    <main className="flex flex-col justify-around">
          <div className={` flex items-center bg-[#dbdada] drak:bg-[#07071d] h-screen`}>
            {/* <IntersectionComponent> */}
              <Banner/>
              <Header/>
            {/* </IntersectionComponent>   */}
          </div>
          <div className="bg-[#323338] h-screen">
            {/* <IntersectionComponent> */}
              <Sobre />
            {/* </IntersectionComponent> */}
          </div>
          <div className="bg-[#00001c] max-h-full">
            {/* <IntersectionComponent> */}
              <Projects/>
            {/* </IntersectionComponent> */}
          </div>
    </main>
  );
}
