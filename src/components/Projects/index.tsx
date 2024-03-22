import ProjectCard from "./components/ProjectCard";


export default function Projects(){
    return(
        <section className="w-[95%] mx-auto space-y-20 pt-10">
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
            <div>
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