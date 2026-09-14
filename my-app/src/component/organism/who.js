import Image from "next/image";


export default function QuemSomos() {
  return (
    <section className="min-h-screen bg-white grid grid-cols-1 md:grid-cols-100">


      {/* TEXTO - 55% */}
      <div
        className="
          col-span-1
          md:col-span-50
          flex
          items-center
          px-6
          sm:px-10
          md:px-12
          lg:px-16
          xl:px-20
        "
      >
        <div className="w-full max-w-[550px] mt-[2rem] mb-[2rem] mx-auto">


          <h2
            className="
              text-[42px]
              sm:text-[52px]
              md:text-[60px]
              lg:text-[66px]
              leading-[1]
              font-bold
              text-primary
              mb-8
            "
          >
            Quem somos
          </h2>


          <div
            className="
              text-[20px]
              sm:text-[22px]
              md:text-[23px]
              text-primary
              leading-[1.4]
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




      {/* IMAGEM - 45% */}
      <div
        className="
          col-span-1
          md:col-span-50
          relative
          min-h-[400px]
          md:min-h-screen
          w-full
        "
      >
        <Image
          src="/quem-somos.jpg"
          alt="Atendimento jurídico"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 45vw"
        />
      </div>


    </section>
  );
}

