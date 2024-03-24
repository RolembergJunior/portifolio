import Skils from "./components/Skills";
import { TbBrandNextjs } from "react-icons/tb";
import { SiHtml5, SiJavascript, SiReactquery, SiRedux, SiStyledcomponents, SiTailwindcss, SiTypescript } from "react-icons/si";
import { FaAtom, FaCss3, FaReact } from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";
import { UseUsIntersectingObserver } from "@/hooks/UseIsIntersecting";


export default function Sobre(){
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
        <section className="bg-[#323338] h-screen">
            <div ref={ref} style={ intersectionStyle } >
                <div className="w-[900px] mx-auto mt-20 space-y-4">
                <h1 className="text-white text-3xl font-semibold text-center">Sobre mim</h1>
                <p className="text-white font-medium text-center">
                    Oi, tudo bem? Eu sou instrutor de Front-end na Alura e estou feliz de te ver por aqui. 
                    Minha história com programação começou no Instituto Federal do Piauí (IFPI), quando fiz o ensino médio integrado ao curso de Informática. 
                    Eu aprendi lógica de programação e o básico de várias linguagens, como PHP, Python, Java, mas sem aprofundar muito em cada uma delas. 
                    Eu gostava muito de estudar programação, mas na época não fazia ideia de que trabalharia com isso hoje. No ensino superior, escolhi 
                    cursar Engenharia Elétrica na Universidade Federal do Piauí (UFPI). Lá eu consegui entrar no PET (Programa de Educação Tutorial), um 
                    grupo acadêmico que contribui de diversas formas para o curso. Lá eu tive a oportunidade de estudar desenvolvimento web para ser um 
                    dos mantenedores do site deles
                </p> 
                </div>
                <div className="my-20 space-y-10">
                    <h1 className="text-white text-3xl font-semibold text-center">Habilidades</h1>
                    <div className="flex flex-wrap justify-center gap-20">
                        <Skils title='React.js' icon={<TbBrandNextjs className="text-[#3333ff]" size={50} />}/>
                        <Skils title='React.js' icon={<SiStyledcomponents className="text-[#3333ff]" size={50} />}/>
                        <Skils title='React.js' icon={<SiJavascript className="text-[#3333ff]" size={50} />}/>
                        <Skils title='React.js' icon={<SiTypescript className="text-[#3333ff]" size={50} />}/>
                        <Skils title='React.js' icon={<FaReact className="text-[#3333ff]" size={50} />}/>
                        <Skils title='React.js' icon={<SiHtml5 className="text-[#3333ff]" size={50} />}/>
                        <Skils title='React.js' icon={<FaCss3 className="text-[#3333ff]" size={50} />}/>
                        <Skils title='React.js' icon={<SiReactquery className="text-[#3333ff]" size={50} />}/>
                        <Skils title='React.js' icon={<FaAtom className="text-[#3333ff]" size={50} />}/>
                        <Skils title='React.js' icon={<GrGraphQl className="text-[#3333ff]" size={50} />}/>
                        <Skils title='React.js' icon={<SiTailwindcss className="text-[#3333ff]" size={50} />}/>
                        <Skils title='React.js' icon={<SiRedux className="text-[#3333ff]" size={50} />}/>
                    </div>
                </div>
            </div>
        </section>
    );
}