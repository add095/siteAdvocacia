import Image from "next/image";
import HeroMain from "../component/organism/HeroMain";
import Informative from "../component/organism/informative";

export default function Home() {
  return (
   <main className="flex flex-col">
   <HeroMain/>
   <Informative/>
   </main>
  );
}
