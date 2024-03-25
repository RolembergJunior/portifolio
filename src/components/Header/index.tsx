import { 
    Dialog,
    DialogContent,
    DialogDescription,
    DialogPortal,
    // DialogHeader,
    DialogTitle,
    DialogTrigger,
    Overlay,
    Root,
   } from '@radix-ui/react-dialog';
import { useState } from 'react';
import { FaMoon, FaPhone, FaUser } from "react-icons/fa";
import { IoMdMenu } from 'react-icons/io';
import { IoHome } from "react-icons/io5";
import { VscProject } from "react-icons/vsc";


export default function Header(){
    const [isOpenMenu, setIsOpenMenu] = useState(false)
    
    return(
        <Root>
            <DialogTrigger onClick={() => setIsOpenMenu(true)} className="fixed right-10 top-10 p-5 z-10">
                <button  className="bg-[#aeafb7] rounded-full p-3">
                    <IoMdMenu size={40} />
                </button>
            </DialogTrigger>
            <DialogPortal >
                {/* <Overlay className="inset-0 bg-black/50 fixed" /> */}
                <DialogContent className='z-10'>
                    <DialogTitle>Escolha a seção</DialogTitle>
                    <header className="absolute">
                        <div className="flex flex-col rounded-t-xl rounded-b-xl items-center justify-around">
                            <div className="relative cursor-pointer hover:bg-white p-3 bg-transparent rounded-full hover:rounded-full hover:p-3 transition-all duration-300">
                                <FaMoon />  
                            </div>
                            <div className="relative cursor-pointer bg-white rounded-full p-3 hover:z-0 transition-all duration-300">
                                <IoHome className={`z-10 `} />
                            </div>
                            <div className="relative cursor-pointer hover:bg-white bg-transparent rounded-full hover:rounded-full hover:scale-100 p-3 hover:p-3 hover:z-0 transition-all duration-300">
                                <FaUser />  
                            </div>
                            <div className="relative cursor-pointer hover:bg-white bg-transparent rounded-full hover:rounded-full hover:scale-100 p-3 hover:p-3 hover:z-0 transition-all duration-300">
                                <VscProject />
                            </div>
                            <div className="relative cursor-pointer hover:bg-white bg-transparent rounded-full hover:rounded-full hover:scale-100 p-3 hover:p-3 hover:z-0 transition-all duration-300">
                                <FaPhone />
                            </div>
                        </div>  
                    </header>
                </DialogContent>
            </DialogPortal>
        </Root>
        // <header className="fixed flex bg-[#aeafb7] rounded-t-xl rounded-b-xl h-[60%] mx-auto right-10 p-5 z-10">
        //     <div classNam e="flex flex-col items-center justify-around">
        //         <div className="relative cursor-pointer hover:bg-white p-3 bg-transparent rounded-full hover:rounded-full hover:p-3 transition-all duration-300">
        //             <FaMoon />  
        //         </div>
        //         <div className="relative cursor-pointer bg-white rounded-full p-3 hover:z-0 transition-all duration-300">
        //             <IoHome className={`z-10 `} />
        //         </div>
        //         <div className="relative cursor-pointer hover:bg-white bg-transparent rounded-full hover:rounded-full hover:scale-100 p-3 hover:p-3 hover:z-0 transition-all duration-300">
        //             <FaUser />  
        //         </div>
        //         <div className="relative cursor-pointer hover:bg-white bg-transparent rounded-full hover:rounded-full hover:scale-100 p-3 hover:p-3 hover:z-0 transition-all duration-300">
        //             <VscProject />
        //         </div>
        //         <div className="relative cursor-pointer hover:bg-white bg-transparent rounded-full hover:rounded-full hover:scale-100 p-3 hover:p-3 hover:z-0 transition-all duration-300">
        //             <FaPhone />
        //         </div>
        //     </div>  
        // </header>
    );
}