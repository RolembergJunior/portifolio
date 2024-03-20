import Banner from "@/components/Banner";
import Header from "@/components/Header";
import Sobre from "@/components/Sobre";
import WorkWith from "@/components/WorkedWith";

export default function Home() {
  return (
    <main className="flex flex-col justify-around">
        <div className="flex items-center bg-[#00001a] h-screen">
          <Banner/>
          <Header/>
        </div>
        <div className="bg-[#323338] max-h-full">
          <Sobre/>
        </div>
    </main>
  );
}
