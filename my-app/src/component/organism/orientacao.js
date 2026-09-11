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
        px-4
        sm:px-10
        md:px-16
        lg:px-[5.5rem]
        py-16
        sm:py-25
      "
    >
      {/* Título */}
      <h2
        className="
          text-center
          text-[#07145C]
          font-bold
          font-poppins
          leading-[0.95]
          text-[2rem]
          sm:text-[3.5rem]
          md:text-[4rem]
          mb-10
        "
      >
        Como funciona a
        <br />
        <span
          className="
            text-[2.5rem]
            sm:text-[4.5rem]
            md:text-[5rem]
          "
        >
          orientação jurídica?
        </span>
      </h2>

      {/* Passos */}
      <div
        className="
          max-w-[900px]
          mx-auto
          grid
          grid-cols-1
          sm:grid-cols-2
          gap-3
          justify-items-center
        "
      >
        {passos.map((passo, index) => (
          <div
            key={index}
            className="
              bg-[#07145C]
              text-white
              rounded-[10px]
              min-h-[120px]
              w-full
              max-w-[400px]
              px-4
              py-3
              flex
              flex-col
              items-center
              justify-center
              text-center
              mx-2
              my-2
            "
          >
            {/* Passo */}
            <span
              className="
                font-bold
                font-poppins
                text-[20px]
                leading-none
                mb-2
              "
            >
              {passo.numero}
            </span>

            {/* Título */}
            <h3
              className="
                font-semibold
                font-poppins
                text-[17px]
                leading-none
                mb-1
              "
            >
              {passo.titulo}
            </h3>

            {/* Descrição */}
            <p
              className="
                font-poppins
                text-[13px]
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