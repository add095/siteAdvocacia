import HeroMain from "../component/organism/HeroMain";
import Forms from "../component/organism/forms"
import AreasAtuacao from "@/component/organism/areaAtuacao";
import Header from "@/component/atoms/Header";
import Who from "@/component/organism/who";
import Quem from "@/component/organism/quem";
import Footer from "@/component/organism/footer";
import Orientacao from "@/component/organism/orientacao"
export default function Home() {
  return (
    <main className="flex flex-col">
      <Header />
      <HeroMain />
      <AreasAtuacao />
      <Orientacao/>
      <Forms />
      <Who />
      <Quem />
      <Footer />
    </main>
  );
}

/* 

Orientação precisa aumentar algumas coisas
Quem somos precisa mudar o bg, aumentar a imagem, alinhar padding
Footer tem que colocar negrito no que é negrito

*/