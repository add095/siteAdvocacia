import Image from "next/image";

export default function Informative() {
    return (
        <section className="bg-secundary">
            <div className="
        min-h-screen
        flex
        flex-col
        lg:flex-row
        justify-center
        lg:justify-around
        items-center
        gap-[3rem]
        px-[1.5rem]
        py-[5rem]
        sm:px-[2.5rem]
        md:px-[4rem]
        lg:px-[5rem]
      ">

                {/* Texto */}
                <div className="w-full lg:w-auto">
                    <h2 className="
                                text-[2.5rem]
                                sm:text-[3rem]
                                md:text-[3.5rem]
                                lg:text-[4rem]
                                text-primary
                                font-bold
                                eading-none
                                ont-poppins
                                -[2rem]
          ">
                        Casos em que<br />
                        orientamos:
                    </h2>

                    <ul className="
                                list-disc
                                pl-6
                                sm:pl-8
                                md:pl-10
                                text-primary
                                font-poppins
          ">
                        <li className="text-list">
                            <span className="font-bold">Negativa de medicamento</span> pelo plano de saúde
                        </li>

                        <li className="text-list">
                            <span className="font-bold">Medicamento de alto custo</span> fora do rol da ANS
                        </li>

                        <li className="text-list">
                            Medicamento com <span className="font-bold">registro na Anvisa</span>
                        </li>

                        <li className="text-list">
                            Tratamento <span className="font-bold">oncológicos</span>
                        </li>

                        <li className="text-list">
                            <span className="font-bold">Doenças raras</span>
                        </li>

                        <li className="text-list">
                            Medicamento <span className="font-bold">importados</span> ou de{" "}
                            <span className="font-bold">díficil acesso</span>
                        </li>

                        <li className="text-list">
                            <span className="font-bold">Demora excessivas</span> na resposta do plano ou do SUS
                        </li>

                        <li className="text-list">
                            <span className="font-bold">Falta de justificativa</span> clara para a negativa
                        </li>
                    </ul>
                </div>

                {/* Imagem */}
                <div className="
          w-full
          lg:w-auto
          flex
          justify-center
        ">
                    <Image
                        src="/informative-image.jpg"
                        width={350}
                        height={150}
                        alt="Informações sobre orientação jurídica"
                        className="
              w-full
              max-w-[350px]
              h-auto
              object-cover
            "
                    />
                </div>

            </div>
        </section>
    );
}
