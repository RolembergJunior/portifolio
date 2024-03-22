import { IoLogoJavascript } from "react-icons/io";
import { SiStyledcomponents, SiTypescript } from "react-icons/si";


export default function ProjectCard(){
    return(
        <div className="hover:scale-110 transition-transform">
            <img 
                src="./projectTeste.jpg" 
                alt="Foto do Projeto"
                className="w-96" 
            />
            <div className="flex justify-between items-center bg-[#424244] border-t-[4px] border-t-[#3333ff] w-96 h-12 rounded-b-xl p-3">
                <h2 className="text-[white] font-semibold">Nome do projeto</h2>
                <div className="flex gap-3">
                    <IoLogoJavascript />
                    <SiTypescript />
                    <SiStyledcomponents />
                </div>
            </div>
        </div>
    );
}