import Image from "next/image";

export default function Informative() {
    return (
        <section className="bg-secundary">
            <div className="flex flex-row justify-around items-center h-screen">
                <div>
                    <h2 className="text-subtitle text-primary font-bold leading-none font-poppins mb-[2rem]">
                        Casos em que<br/> orientamos:
                    </h2>
                    <div>
                        <ul className="list-disc pl-10 text-primary font-poppins">
                            <li className="text-list"><span className="font-bold">Negativa de medicamento</span> pelo plano de saúde </li>
                            <li className="text-list"><span className="font-bold">Medicamento de alto custo</span> fora do rol da ANS</li>
                            <li className="text-list">Medicamento com <span className="font-bold">registro na Anvisa</span></li>
                            <li className="text-list">Tratamento <span className="font-bold">oncológicos</span></li>
                            <li className="text-list"><span className="font-bold">Doenças raras</span></li>
                            <li className="text-list">Medicamento <span className="font-bold">importados</span> ou de <span className="font-bold">díficil acesso</span></li>
                            <li className="text-list"><span className="font-bold">Demora excessivas</span> na resposta do plano ou do SUS</li>
                            <li className="text-list"><span className="font-bold">Falta de justificativa</span> clara para a negativa</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <Image src={"/informative-image.jpg"} width={350} height={150} />
                </div>
            </div>
        </section>
    );
}