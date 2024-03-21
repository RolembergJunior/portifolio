import Banner from "@/components/Banner";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Sobre from "@/components/Sobre";
import WorkWith from "@/components/WorkedWith";

export default function Home() {
  return (
    <main className="flex flex-col justify-around">
        <div className="flex items-center bg-[#dbdada] drak:bg-[#07071d] h-screen -z-10">
          <Banner/>
          <Header/>
        </div>
        <div className="bg-[#323338] max-h-full">
          <Sobre/>
        </div>
        <div className="bg-[#00001c] max-h-full">
          <Projects/>
        </div>
    </main>
  );
}
