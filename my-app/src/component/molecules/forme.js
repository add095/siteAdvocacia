"use client";

import { useState } from "react";

export default function Forms() {
  const [enviando, setEnviando] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setEnviando(true);

    const form = event.currentTarget;

    const dados = {
      nome: form.nome.value,
      telefone: form.telefone.value,

      interesses: Array.from(
        form.querySelectorAll('input[name="interesse"]:checked')
      ).map((input) => input.value),

      outroCaso: form.outroCaso.value,
    };

    try {
      const resposta = await fetch("/api/enviar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dados),
      });

      const resultado = await resposta.json();

      if (resultado.success) {
        alert("Formulário enviado com sucesso!");
        form.reset();
      } else {
        alert("Erro ao enviar o formulário.");
        console.error(resultado);
      }
    } catch (error) {
      console.error(error);
      alert("Não foi possível enviar o formulário.");
    } finally {
      setEnviando(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="
       bg-white
       border-solid
       border-[2rem]
       rounded-[10px]
       border-white
      w-full
    max-w-[750px]
    mx-auto
    px-4
    sm:px-0
    space-y-4
      "
    >
      <h3 className="
            text-[1.5rem]
              sm:text-[1.5rem]
              md:text-[1.5rem]
              lg:text-[2rem]
              text-primary 
              leading-none 
              font-poppins
      ">
        Quero orientações com um especialista! 
      </h3>
      {/* NOME */}
      <div>
        <label
          htmlFor="nome"
          className="block text-[12px] text-gray-700 mb-1"
        >
          Nome
        </label>

        <input
          type="text"
          id="nome"
          name="nome"
          required
          className="
            w-full
            h-[32px]
            border
            border-gray-400
            rounded-sm
            px-2
            text-sm
            outline-none
            focus:border-blue-400
          "
        />
      </div>

      {/* TELEFONE */}
      <div>
        <label
          htmlFor="telefone"
          className="block text-[12px] text-gray-700 mb-1"
        >
          Telefone
        </label>

        <input
          type="tel"
          id="telefone"
          name="telefone"
          required
          className="
            w-full
            h-[32px]
            border
            border-gray-400
            rounded-sm
            px-2
            text-sm
            outline-none
            focus:border-blue-400
          "
        />
      </div>

      {/* INTERESSES */}
      <div>
        <p className="text-[12px] text-gray-700 mb-1.5">
          Seu caso envolve:
        </p>

        <div className="space-y-1.5">

          <label
            className="
              flex
              items-center
              gap-2
              w-full
              min-h-[45px]
              bg-gray-200
              hover:bg-gray-300
              rounded-sm
              px-2.5
              cursor-pointer
              transition
            "
          >
            <input
              type="checkbox"
              name="interesse"
              value="Medicamento / tratamento negado pelo plano ou SUS"
              className="w-3.5 h-3.5 shrink-0"
            />

            <span className="text-[12px] text-gray-800">
              Medicamento / tratamento negado pelo plano ou SUS
            </span>
          </label>

          <label
            className="
              flex
              items-center
              gap-2
              w-full
              min-h-[45px]
              bg-gray-200
              hover:bg-gray-300
              rounded-sm
              px-2.5
              cursor-pointer
              transition
            "
          >
            <input
              type="checkbox"
              name="interesse"
              value="Doença rara"
              className="w-3.5 h-3.5 shrink-0"
            />

            <span className="text-[12px] text-gray-800">
              Doença rara
            </span>
          </label>

          <label
            className="
              flex
              items-center
              gap-2
              w-full
              min-h-[45px]
              bg-gray-200
              hover:bg-gray-300
              rounded-sm
              px-2.5
              cursor-pointer
              transition
            "
          >
            <input
              type="checkbox"
              name="interesse"
              value="Oncologia"
              className="w-3.5 h-3.5 shrink-0"
            />

            <span className="text-[12px] text-gray-800">
              Oncologia
            </span>
          </label>

        </div>
      </div>

      {/* OUTRO CASO */}
      <div>
        <label
          htmlFor="outroCaso"
          className="block text-[12px] text-gray-700 mb-1"
        >
          Outro caso (conte brevemente)
        </label>

        <textarea
          id="outroCaso"
          name="outroCaso"
          rows={4}
          className="
            w-full
            min-h-[85px]
            border
            border-gray-400
            rounded-sm
            resize-none
            px-2
            py-1.5
            text-sm
            outline-none
            focus:border-blue-400
          "
        />
      </div>

      {/* BOTÃO */}
      <button
        type="submit"
        disabled={enviando}
        className="
          w-full
          h-[34px]
          bg-primary
          hover:bg-blue-900
          disabled:bg-gray-300
          text-gray-200
          text-[12px]
          rounded-md
          transition
          cursor-pointer
          disabled:cursor-not-allowed
        "
      >
        {enviando ? "Enviando informações..." : "Enviar informações"}
      </button>

    </form>
  );
}
