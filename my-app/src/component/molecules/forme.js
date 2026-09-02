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
      className="w-full max-w-[400px] space-y-4"
    >

      {/* NOME */}
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
          required
          className="
            w-full
            h-[25px]
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
          className="block text-[11px] text-gray-700 mb-1"
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
            h-[25px]
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
        <p className="text-[11px] text-gray-700 mb-1">
          What are you interested in?
        </p>

        <div className="space-y-1">

          <label
            className="
              flex
              items-center
              gap-1.5
              w-full
              min-h-[48px]
              bg-gray-200
              rounded-sm
              px-2
              cursor-pointer
            "
          >
            <input
              type="checkbox"
              name="interesse"
              value="Medicamento / tratamento negado pelo plano ou SUS"
            />

            <span className="text-[11px] text-gray-800">
              Medicamento / tratamento negado pelo plano ou SUS
            </span>
          </label>

          <label
            className="
              flex
              items-center
              gap-1.5
              w-full
              min-h-[48px]
              bg-gray-200
              rounded-sm
              px-2
              cursor-pointer
            "
          >
            <input
              type="checkbox"
              name="interesse"
              value="Doença rara"
            />

            <span className="text-[11px] text-gray-800">
              Doença rara
            </span>
          </label>

          <label
            className="
              flex
              items-center
              gap-1.5
              w-full
              min-h-[48px]
              bg-gray-200
              rounded-sm
              px-2
              cursor-pointer
            "
          >
            <input
              type="checkbox"
              name="interesse"
              value="Oncologia"
            />

            <span className="text-[11px] text-gray-800">
              Oncologia
            </span>
          </label>

        </div>
      </div>

      {/* OUTRO CASO */}
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
          className="
            w-full
            border
            border-gray-400
            rounded-sm
            resize-none
            px-2
            py-1
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
          h-[27px]
          bg-blue-300
          hover:bg-blue-400
          disabled:bg-gray-300
          text-gray-800
          text-[11px]
          rounded-md
          transition
        "
      >
        {enviando ? "Enviando..." : "Enviar"}
      </button>

      {/* AVISO */}
      <p className="text-center text-[7px] text-gray-500">
        Seu nome de perfil no Canva não será compartilhado.
        Nunca envie senhas.
      </p>

    </form>
  );
}