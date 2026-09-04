import {
  CircleX,
  Pill,
  HeartPulse,
  Ribbon,
  Puzzle,
  Shapes,
  Hospital,
  CirclePlus,
  Flower2,
} from "lucide-react";

const areas = [
  { nome: "Negativas de plano de saúde", icone: CircleX },
  { nome: "Medicamentos de alto custo", icone: Pill },
  { nome: "Oncologia", icone: HeartPulse },
  { nome: "Doenças raras", icone: Ribbon },
  { nome: "TEA e terapias", icone: Puzzle },
  { nome: "BPC/LOAS", icone: Shapes },
  { nome: "Home care", icone: Hospital },
  { nome: "Tratamentos pelo SUS", icone: CirclePlus },
  { nome: "Cirurgias e procedimentos", icone: Flower2 },
];

export default function AreasAtuacao() {
  return (
    <section className="w-full bg-white px-[5rem] py-12 sm:py-16">

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
          grid
          grid-cols-2
          lg:grid-cols-3
          gap-2
          sm:gap-3
        "
      >
        {areas.map((area, index) => {
          const Icone = area.icone;

          return (
            <div
              key={index}
              className="
                w-full
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
              <Icone
                size={38}
                className="
                  text-[#9bc3ec]
                  mb-1.5
                  sm:mb-2
                  sm:w-[44px]
                  sm:h-[44px]
                "
                strokeWidth={2}
              />

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
          );
        })}
      </div>
    </section>
  );
}