import { FaMoon, FaPhone, FaUser } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { VscProject } from "react-icons/vsc";


export default function Header(){
    
    return(
        <header className="fixed flex bg-[#323338] rounded-t-xl rounded-b-xl h-[60%] mx-auto right-10 p-5">
            <div className="flex flex-col items-center justify-around">
                <div className="relative cursor-pointer hover:bg-white rounded-full hover:rounded-full hover:p-2 transition-all duration-300">
                    <FaMoon />  
                </div>
                <div className="relative cursor-pointer bg-white rounded-full p-3 hover:z-0 transition-all duration-300">
                    <IoHome className={`z-10 `} />
                </div>
                <div className="relative cursor-pointer hover:bg-white rounded-full hover:rounded-full hover:scale-10 hover:p-2 hover:z-0 transition-all duration-300">
                    <FaUser />  
                </div>
                <div className="relative cursor-pointer hover:bg-white rounded-full hover:rounded-full hover:scale-100 hover:p-2 hover:z-0 transition-all duration-300">
                    <VscProject />
                </div>
                <div className="relative cursor-pointer hover:bg-white rounded-full hover:rounded-full hover:scale-1 hover:p-2 hover:z-0 transition-all duration-300">
                    <FaPhone />
                </div>
            </div>  
        </header>
    );
}