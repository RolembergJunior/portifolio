import Banner from "@/components/Banner";
import Header from "@/components/Header";
import WorkWith from "@/components/WorkedWith";

export default function Home() {
  return (
    <main className="flex flex-col justify-around h-screen">
      <Header/>
      <Banner/>
      <WorkWith/>
    </main>
  );
}
