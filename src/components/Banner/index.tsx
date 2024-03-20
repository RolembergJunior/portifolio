import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";


export default function Banner(){
    return(
        <div className="flex w-[80%] justify-between items-center mx-auto">
            <div className="w-[30%] space-y-10">
                <h1 className="text-[#D9D9D9] font-semibold text-3xl">Olá! eu sou o <strong className="font-bold text-[#0080ff]">Rolemberg Junior</strong>!</h1>
                <hr className="w-64 bg-[#0000ff]"/>
                <h2 className="text-[#D9D9D9] text-2xl font-semibold" >Desenvolvedor Front-End</h2>
                <div className="flex items-center gap-8 my-5">
                    <li><a href="" className="text-[#D9D9D9] hover:text-[#0080ff] font-medium cursor-pointer transition duration-300">Linkedin</a></li>
                    <li><a href="" className="text-[#D9D9D9] hover:text-[#0080ff] font-medium cursor-pointer transition duration-300">GitHub</a></li>
                    <li><a href="" className="text-[#D9D9D9] hover:text-[#0080ff] font-medium cursor-pointer transition duration-300">Figma</a></li>
                </div>
                <hr className="w-52 bg-[#0000ff]" />
                <p className="text-[#D9D9D9] text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit, ex ac rhoncus hendrerit, ipsum diam feugiat ligula, ac vulputate nisl elit id ex. Donec fringilla nibh sed nisi ornare lacinia. 
                Ut sagittis, nisl sit amet mollis convallis, ipsum justo blandit nulla, ut sollicitudin sapien leo non mi. Nam venenatis lobortis diam vel rhoncus.
                </p>
                <div className="flex gap-3">
                    <button className="bg-gradient-to-r from-[#0080ff] to-[#004080] text-white text-sm rounded-xl w-40 h-8">BAIXAR CV</button>
                    <button className="text-white text-sm border border-[#0080ff] hover:bg-[#0080ff] hover:h-6 transition duration-500 rounded-xl w-40 h-8">Entrar em contato</button>
                </div>
            </div>
            <div className="relative w-[70%]">
                <img 
                    src="./fotoDesenvolvedor.jpg" 
                    alt="Foto do Desenvolvedor"
                    width={450} 
                    className="rounded-full mx-auto z-20"
                />
                <div className="absolute right-10 -top-28 bg-[#D9D9D9] w-[500px] h-[500px] rounded-full opacity-40 -z-10" />
            </div>
        </div>
    );
}