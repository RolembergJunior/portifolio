


interface SkillsProps{
    title: string
}

export default function Skils({ title, icon }:SkillsProps){
    return(
        <div className="flex flex-col items-center border-b-4 border-[#0000ff] rounded-tl-xl justify-center bg-[#262626] w-32 p-4 gap-2">
            <h1 >{title}</h1>
            <div>
                {icon}
            </div>
        </div>
    );
}