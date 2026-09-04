import HeroMain from "../component/organism/HeroMain";
import Informative from "../component/organism/informative";
import Forms from "../component/organism/forms"

export default function Home() {
  return (
   <main className="flex flex-col">
   <HeroMain/>
   <Informative/>
   <Forms/>
   </main>
  );
}
