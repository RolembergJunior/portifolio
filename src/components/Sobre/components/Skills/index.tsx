


interface SkillsProps{
    title: string
}

export default function Skils({ title, icon }:SkillsProps){
    return(
        <div className="flex flex-col items-center border-b-4 border-[#3333ff] rounded-tl-xl justify-center bg-[#0d0d0d] w-32 p-4 gap-2">
            <h1 className="text-[#3333ff]">{title}</h1>
            <div>
                {icon}
            </div>
        </div>
    );
}