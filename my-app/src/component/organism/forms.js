import Forme from "@/component/molecules/forme"

export default function Forms() {
  return (
    <section className="bg-primary">
      <div
        className="
          min-h-screen
          flex
          flex-col
          lg:flex-row
          items-center
          lg:gap-20
          px-6
          py-10
          sm:px-10
          md:px-16
          lg:px-20
        "
      >

        {/* TEXTO */}
        <div className="w-full max-w-[700px] lg:w-[700px]">
          <h2
            className="
              text-[2rem]
              leading-[3.75rem]
              sm:text-[2.5rem]
              md:text-[3rem]
              lg:text-[3.5rem]
              text-secundary
              font-bold
              font-poppins
            "
          >
            <span className="font-bold">Medicamento negado?</span> <br />
            Comece por aqui?
          </h2>
        </div>

        {/* FORMULÁRIO */}
        <div className="w-full max-w-[500px] lg:w-[750px]">
          <Forme />
        </div>

      </div>
    </section>
  );
}