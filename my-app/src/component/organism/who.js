import Image from "next/image";

export default function QuemSomos() {
  return (
    <section className="min-h-screen bg-white grid grid-cols-1 md:grid-cols-100">

      {/* TEXTO - 3 COLUNAS */}
      <div
        className="
          col-span-1
          md:col-span-55
          flex
          items-center
          px-[2.5rem]
          pl-[5rem]
          pr-[10rem]
        ">
        <div className="w-full max-w-[650px] mx-auto">

          <h2
            className="
              text-[55px]
              sm:text-[60px]
              md:text-[66px]
              leading-[1]
              font-bold
              text-primary
              mb-8
              text-justify
            "
          >
            Quem somos
          </h2>

          <div
            className="
              text-[19px]
              text-primary
              leading-[1.3]
              space-y-6
              text-justify
            "
          >

            <p>
              A <strong>SAB Advocacia</strong> atua em{" "}
              <strong>Direito da Saúde</strong>,
              orientando pacientes e familiares em casos
              de negativa de tratamentos e medicamentos
              de alto custo.
            </p>

            <p>
              Nossa atuação une acolhimento, análise
              responsável e clareza para que cada
              pessoa entenda seus direitos e os
              caminhos possíveis diante da burocracia.
            </p>

            <p className="font-bold">
              Para nós, informação também é cuidado.
            </p>

          </div>

        </div>
      </div>


      {/* IMAGEM - 2 COLUNAS */}
      <div
        className="
          col-span-1
          md:col-span-45
          relative
          min-h-[500px]
          md:min-h-screen
          w-full
        "
      >
        <Image
          src="/quem-somos.jpg"
          alt="Atendimento jurídico"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 40vw"
        />
      </div>

    </section>
  );
}