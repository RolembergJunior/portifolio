import { UseUsIntersectingObserver } from "@/hooks/UseIsIntersecting";
import ProjectCard from "../Projects/components/ProjectCard";


export default function AllProjects(){
    const [ref, isIntersecting] = UseUsIntersectingObserver( {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    });


    const intersectionStyle = {
        opacity: 1,
        filter: 'blur(15px)',
        transition: 'all 0.5s ease-in-out'
    }


    if(isIntersecting){
        intersectionStyle.opacity = 1;
        intersectionStyle.filter = 'blur(0px)';
    } else if(!isIntersecting) {
        intersectionStyle.opacity = 0;
        intersectionStyle.filter = 'blur(15px)';
    }

    
    return(
        <section className="bg-[#00001c] h-screen">
            <div style={ intersectionStyle } ref={ref} className="w-[95%] mx-auto mt-32 space-y-10">
                <div>
                    <h1 className="text-white text-2xl font-bold">Todos os Projetos</h1>
                    <div className="w-40 h-[4px] bg-[#3333ff]"/>
                </div>
                <div className="flex flex-wrap justify-around w-[80%] mx-auto gap-10">
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </div>
            </div>
        </section>
    );
}