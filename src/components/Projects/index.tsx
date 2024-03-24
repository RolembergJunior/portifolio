import { useEffect } from "react";
import ProjectCard from "./components/ProjectCard";
import { UseUsIntersectingObserver } from "@/hooks/UseIsIntersecting";


export default function Projects(){
    const [ref, isIntersecting] = UseUsIntersectingObserver( {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    });
    

    const intersectionStyle = {
        opacity: 1,
        filter: 'blur(15px)',
        transition: 'all 0.5s ease-in-out',
        // transform: 'translateX(100%)'
    }


    if(isIntersecting){
        intersectionStyle.opacity = 1;
        intersectionStyle.filter = 'blur(0px)';
        // intersectionStyle.transform = 'translateX(-100%)'
    } else if(!isIntersecting) {
        intersectionStyle.opacity = 0;
        intersectionStyle.filter = 'blur(15px)';
        // intersectionStyle.transform = 'translateX(100%)'
    }

    
    return(
        <section className="bg-[#00001c] space-y-20 pt-10 max-h-full" >
            <div ref={ref} style={ intersectionStyle } className="w-[95%] mx-auto">
                <h1 className="text-white text-3xl font-bold text-center dark:text-white space-y-3">Projetos</h1>
                <div className="space-y-16">
                    <div>
                        <h1 className="text-white text-2xl font-bold">Destaques</h1>
                        <div className="w-24 h-[4px] bg-[#3333ff]"/>
                    </div>
                    <div className="flex flex-wrap justify-around w-[80%] mx-auto gap-10">
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                    </div>
                </div>
            </div>
        </section>
    );
}