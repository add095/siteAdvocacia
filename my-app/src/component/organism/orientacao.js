const passos = [
  {
    numero: "Passo 1",
    titulo: "Você conta seu caso",
    descricao: "Rápido, sem burocracia.",
  },
  {
    numero: "Passo 2",
    titulo: "Analisamos os documentos",
    descricao: "Verificamos se há base jurídica.",
  },
  {
    numero: "Passo 3",
    titulo: "Você recebe um retorno claro",
    descricao: "Sem juridiquês. Sem enrolação.",
  },
  {
    numero: "Passo 4",
    titulo: "Você decide o próximo passo",
    descricao: "Com informação, não com pressão.",
  },
];

export default function ComoFunciona() {
  return (
    <section
      className="
        w-full
        bg-[#f5f5f5]

        px-5
        sm:px-8
        md:px-12
        lg:px-20
        xl:px-[5.5rem]

        py-12
        sm:py-16
        lg:py-24
      "
    >

      {/* TÍTULO */}
      <h2
        className="
          text-center
          text-[#07145C]
          font-bold
          font-poppins
          leading-[0.95]

          text-[2rem]
          sm:text-[2.8rem]
          md:text-[3.5rem]
          lg:text-[4rem]

          mb-8
          sm:mb-10
          lg:mb-12
        "
      >
        Como funciona a
        <br />

        <span
          className="
            text-[2.7rem]
            sm:text-[3.5rem]
            md:text-[4.2rem]
            lg:text-[5rem]
          "
        >
          orientação jurídica?
        </span>
      </h2>


      {/* PASSOS */}
      <div
        className="
          w-full
          max-w-[900px]
          mx-auto

          grid
          grid-cols-1
          sm:grid-cols-2

          gap-3
          sm:gap-4
        "
      >
        {passos.map((passo, index) => (
          <div
            key={index}
            className="
              w-full
              min-h-[120px]

              bg-[#07145C]
              text-white

              rounded-[10px]

              px-4
              sm:px-5
              py-4

              flex
              flex-col
              items-center
              justify-center

              text-center

              transition-transform
              duration-200
              hover:scale-[1.01]
            "
          >

            {/* PASSO */}
            <span
              className="
                font-bold
                font-poppins

                text-[17px]
                sm:text-[19px]
                md:text-[20px]

                leading-none
                mb-2
              "
            >
              {passo.numero}
            </span>


            {/* TÍTULO */}
            <h3
              className="
                font-semibold
                font-poppins

                text-[15px]
                sm:text-[16px]
                md:text-[17px]

                leading-tight

                mb-1
              "
            >
              {passo.titulo}
            </h3>


            {/* DESCRIÇÃO */}
            <p
              className="
                font-poppins

                text-[12px]
                sm:text-[13px]

                leading-tight
              "
            >
              {passo.descricao}
            </p>

          </div>
        ))}
      </div>

    </section>
  );
}