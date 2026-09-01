import Image from "next/image";
import Header from "../atoms/Header";
import Link from "next/link";
import "@/app/globals.css";

export default function HeroMain() {
  return (
    <section className="h-[100vh] w-screen bg-[url('/heroImage.jpg')] bg-cover bg-no-repeat bg-center">
      <div className="bg-black/70 h-full w-full">
        
        <div className="mt-18 ml-20 grid grid-cols-2">
          <div>
            <h1 className="text-title w-[30rem] text-white font-bold leading-tight font-poppins">
              Medicamento de alto custo negado?
            </h1>

            <p className="text-[2rem] text-white mt-[2rem]">
              Entenda seus direitos antes de aceitar a negativa.
            </p>
          </div>

          <div className="flex items-end justify-end ">
              <Link href={""} className="mt-[20rem] mr-[2.5rem] bg-primary text-texto text-white font-bold pl-[3.5rem] pr-[3.5rem] pt-[1rem] pb-[1rem] rounded-[100px]">QUERO ORIENTAÇÃO</Link>
          </div>
        </div>
      </div>
    </section>
  );
}