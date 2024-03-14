import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";


export default function Header(){
    
    return(
        <header className="flex justify-between items-center bg-[#1B1B1B] w-[80%] h-[70px] mx-auto p-3">
                <ul className="flex justify-around w-full text-[#9C9C9C] font-medium">
                    <li className="my-4" >Início</li>
                    <li className="my-4" >Sobre</li>
                    <li className="my-4" >Projetos</li>
                </ul>
        </header>
    );
}