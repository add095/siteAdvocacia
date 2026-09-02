import Image from "next/image";
import Forme from "../molecules/forme"
export default function forms() {
  return (
    <section className="bg-white">
      <div className="min-h-screen flex flex-col lg:flex-row justify-center lg:justify-around items-center gap-[3rem] px-[1.5rem] py-[5rem] sm:px-[2.5rem] md:px-[4rem] lg:px-[5rem]">

        <div className="w-full lg:w-auto">
          <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] text-primary font-bold eading-none ont-poppins-[2rem]">
            Medicamento negado?<br />
            Comece por aqui?
          </h2>
          <ul className="text-primary font-poppins">
            <li className="font-bold text-[1rem] sm:text-[1.5rem] md:text-[1.5rem]">Passo 1: Solicite a negativa formal</li>
            <li>Peça o motivo da recusa por escrito.</li>
            <li className="font-bold text-[1rem] sm:text-[1.5rem] md:text-[1.5rem]" >Passo 2: Organize os documentos médicos</li>
            <li>Prescrição, relatório, exames e histórico de tratamento</li>
            <li className="font-bold text-[1rem] sm:text-[1.5rem] md:text-[1.5rem]">Passo 3: Guarde protocolos e mensagens</li>
            <li>Registre toda tentativa de solicitação ou resposta recebida.</li>
            <li className="font-bold text-[1rem] sm:text-[1.5rem] md:text-[1.5rem]">Passo 4: Procure orientação especializada</li>
            <li>Cada caso exige análise individual e documentação adequada.</li>
          </ul>
        </div>
        <div className="w-full lg:w-auto flex justify-center">
          <Forme/>
        </div>
      </div>
    </section>
  );
}
