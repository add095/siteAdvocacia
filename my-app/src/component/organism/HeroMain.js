import Image from "next/image";
import Header from "../atoms/Header";
import Link from "next/link";
import "@/app/globals.css";

export default function HeroMain() {
  return (
    <section className="a h-screen bg-[url('/heroImage.jpg')] bg-cover bg-no-repeat bg-center">
      <div className="b bg-black/70 h-full flex pt-[7rem]">
        <div className="c pl-[5rem] pr-[8rem] flex-1">
          <div className="d flex justify-center flex-col w-[100%] h-full ">
            <h1 className="e text-title text-white font-bold leading-none font-poppins">
              Medicamento <br/>de alto custo<br/> negado?
            </h1>

            <div className="f flex justify-between w-[100%] mt-[2rem]">
             <p className="g text-[2rem] text-white">
                Entenda seus direitos antes de aceitar a negativa.
              </p>

              <Link href={""} className="
              bg-primary rounded-[100px]
              text-subtopics text-white font-bold 
              flex items-center justify-center text-nowrap   
              pr-[clamp(1.5rem,2.5rem,5rem)] pt-[1rem] pb-[1rem] pl-[clamp(1.5rem,2.5rem,5rem)]
             ">QUERO ORIENTAÇÃO</Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}