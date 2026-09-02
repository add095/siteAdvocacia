import Image from "next/image";

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
                    <form className="w-full max-w-[400px] space-y-4">

  <h2 className="text-[20px] text-gray-800 mb-6">
    Quero orientações com um especialista!
  </h2>

  {/* Nome */}
  <div>
    <label
      htmlFor="nome"
      className="block text-[11px] text-gray-700 mb-1"
    >
      Nome
    </label>

    <input
      type="text"
      id="nome"
      name="nome"
      className="w-full h-[25px] border border-gray-400 rounded-sm px-2 text-sm outline-none focus:border-blue-400"
    />
  </div>

  {/* Telefone */}
  <div>
    <label
      htmlFor="telefone"
      className="block text-[11px] text-gray-700 mb-1"
    >
      Telefone
    </label>

    <input
      type="tel"
      id="telefone"
      name="telefone"
      className="w-full h-[25px] border border-gray-400 rounded-sm px-2 text-sm outline-none focus:border-blue-400"
    />
  </div>

  {/* Interesses */}
  <div>
    <p className="text-[11px] text-gray-700 mb-1">
      Em que você está interessado?
    </p>

    <div className="space-y-1">

      {/* Opção 1 */}
      <label className="flex items-center gap-1.5 w-full min-h-[48px] bg-gray-200 rounded-sm px-2 cursor-pointer">
        <input
          type="checkbox"
          name="interesse"
          value="medicamento"
          className="w-[11px] h-[11px]"
        />

        <span className="text-[11px] text-gray-800">
          Medicamento / tratamento negado pelo plano ou SUS
        </span>
      </label>

      {/* Opção 2 */}
      <label className="flex items-center gap-1.5 w-full min-h-[48px] bg-gray-200 rounded-sm px-2 cursor-pointer">
        <input
          type="checkbox"
          name="interesse"
          value="doenca-rara"
          className="w-[11px] h-[11px]"
        />

        <span className="text-[11px] text-gray-800">
          Doença rara
        </span>
      </label>

      {/* Opção 3 */}
      <label className="flex items-center gap-1.5 w-full min-h-[48px] bg-gray-200 rounded-sm px-2 cursor-pointer">
        <input
          type="checkbox"
          name="interesse"
          value="oncologia"
          className="w-[11px] h-[11px]"
        />

        <span className="text-[11px] text-gray-800">
          Oncologia
        </span>
      </label>

    </div>
  </div>

  {/* Outro caso */}
  <div>
    <label
      htmlFor="outroCaso"
      className="block text-[11px] text-gray-700 mb-1"
    >
      Outro caso (conte brevemente)
    </label>

    <textarea
      id="outroCaso"
      name="outroCaso"
      rows={4}
      className="w-full border border-gray-400 rounded-sm resize-none px-2 py-1 text-sm outline-none focus:border-blue-400"
    />
  </div>

  {/* Botão */}
  <button
    type="submit"
    className="w-full h-[27px] bg-blue-300 hover:bg-blue-400 text-gray-800 text-[11px] rounded-md transition"
  >
    Enviar
  </button>

</form>
                </div>
            </div>
        </section>
    );
}
