import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";


export default function Banner(){
    return(
        <div className="flex w-[80%] justify-center items-center gap-28 mx-auto">
            <div className="w-[30%] space-y-8">
                <h1 className="text-white font-bold text-3xl">Rolemberg Junior</h1>
                <p className="text-[#9c9c9c] font-medium">
                    Intro text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </p>
                <button className="bg-[#3F8E00] text-white rounded-md w-72 h-16">Vamos começar!</button>
            </div>
            <div>
                <img 
                    src="./fotoDesenvolvedor.jpg" 
                    alt="Foto do Desenvolvedor"
                    width={450} 
                    className="rounded-full"
                />
                <div className="flex items-center justify-center gap-8 my-5">
                    <FaLinkedinIn className="hover:text-white transition-colors duration-300 cursor-pointer" size={30} />
                    <FaInstagram className="hover:text-white transition-colors duration-300 cursor-pointer" size={30} />
                    <FaTwitter className="hover:text-white transition-colors duration-300 cursor-pointer" size={30} />
                </div>
            </div>
        </div>
    );
}