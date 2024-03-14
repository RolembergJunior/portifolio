import { FaCss3, FaReact } from "react-icons/fa";
import { IoLogoHtml5 } from "react-icons/io";
import { SiNextdotjs, SiReactquery, SiStyledcomponents, SiTailwindcss, SiTypescript } from "react-icons/si";


export default function WorkWith(){

    const iconsArray = [
        <IoLogoHtml5 color="#ec6231" size={50} />,
        <FaCss3 color="#264de4" size={50} />,
        <FaReact color="#264de4" size={50} />,
        <SiNextdotjs color="white" size={50} />,
        <SiStyledcomponents color="white" size={50} />,
        <SiReactquery size={50} />,
        <SiTypescript color="#007ACC" size={50} />,
        <SiTailwindcss color="#007ACC" size={50} />,
    ]

    return(
            <div className="flex justify-between w-[80%] mx-auto my-10">
                <IoLogoHtml5 color="#ec6231" size={50} />
                <FaCss3 color="#264de4" size={50} />
                <FaReact color="#264de4" size={50} />
                <SiNextdotjs color="white" size={50} />
                <SiStyledcomponents color="white" size={50} />
                <SiReactquery size={50} />
                <SiTypescript color="#007ACC" size={50} />
                <SiTailwindcss color="#007ACC" size={50} />
            </div>
    );
}