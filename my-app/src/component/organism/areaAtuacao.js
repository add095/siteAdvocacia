import Image from "next/image";

const areas = [
  {
    nome: "Negativas de plano de saúde",
    icone: "/svgs/X.svg",
  },
  {
    nome: "Medicamentos de alto custo",
    icone: "/svgs/pilula.svg",
  },
  {
    nome: "Oncologia",
    icone: "/svgs/coracao.svg",
  },
  {
    nome: "Doenças raras",
    icone: "/svgs/laco.svg",
  },
  {
    nome: "TEA e terapias",
    icone: "/svgs/autismo.svg",
  },
  {
    nome: "BPC/LOAS",
    icone: "/svgs/losangulo.svg",
  },
  {
    nome: "Home care",
    icone: "/svgs/hospital.svg",
  },
  {
    nome: "Tratamentos pelo SUS",
    icone: "/svgs/cruz.svg",
  },
  {
    nome: "Cirurgias e procedimentos",
    icone: "/svgs/flor.svg",
  },
];

export default function AreasAtuacao() {
  return (
    <section
      className="
        w-full
        bg-white

        px-[2rem]
        sm:px-[5rem]

        py-12
        sm:py-16
      "
    >

      {/* TÍTULO */}
      <h2
        className="
          text-center
          text-[2.3rem]
          sm:text-[3rem]
          md:text-[3.5rem]
          lg:text-[4rem]

          leading-none
          font-bold
          font-poppins

          text-[#27313D]

          mb-7
          sm:mb-10
        "
      >
        Áreas de atuação
      </h2>


      {/* CARDS */}
      <div
        className="
          w-full

          flex
          flex-wrap
          justify-center

          gap-3

          sm:grid
          sm:grid-cols-3
          sm:gap-4
        "
      >
        {areas.map((area, index) => (
          <div
            key={index}
            className="
              w-[calc(50%-0.375rem)]

              sm:w-full

              h-[105px]
              sm:h-[115px]
              lg:h-[125px]

              bg-[#f1f2f3]

              flex
              flex-col
              items-center
              justify-center

              text-center

              px-2
              sm:px-4

              transition
              hover:bg-[#e9eaec]
            "
          >

            {/* ÍCONE SVG */}
            <Image
              src={area.icone}
              alt=""
              width={44}
              height={44}
              className="
                w-[38px]
                h-[38px]

                sm:w-[44px]
                sm:h-[44px]

                object-contain

                mb-1.5
                sm:mb-2
              "
            />


            {/* NOME */}
            <h3
              className="
                text-[0.75rem]
                sm:text-[0.9rem]
                md:text-[1.05rem]
                lg:text-[1.2rem]

                leading-tight

                font-semibold
                font-poppins

                text-[#27313D]
              "
            >
              {area.nome}
            </h3>

          </div>
        ))}
      </div>

    </section>
  );
}