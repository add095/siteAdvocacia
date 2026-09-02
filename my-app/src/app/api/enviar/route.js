import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const {
      nome,
      telefone,
      interesses,
      outroCaso,
    } = await request.json();

    const { data, error } = await resend.emails.send({
      from: "Formulário <onboarding@resend.dev>",

      // COLOQUE SEU GMAIL AQUI
      to: ["seugmail@gmail.com"],

      subject: `Novo formulário - ${nome}`,

      html: `
        <h2>Novo contato pelo formulário</h2>

        <hr />

        <p>
          <strong>Nome:</strong>
          ${nome}
        </p>

        <p>
          <strong>Telefone:</strong>
          ${telefone}
        </p>

        <p>
          <strong>Interesses:</strong>
        </p>

        <ul>
          ${
            interesses?.length
              ? interesses
                  .map((interesse) => `<li>${interesse}</li>`)
                  .join("")
              : "<li>Nenhum interesse selecionado</li>"
          }
        </ul>

        <p>
          <strong>Outro caso:</strong>
        </p>

        <p>
          ${outroCaso || "Nenhuma informação adicional."}
        </p>
      `,
    });

    if (error) {
      console.error(error);

      return Response.json(
        {
          success: false,
          error: error.message,
        },
        { status: 400 }
      );
    }

    return Response.json({
      success: true,
      data,
    });

  } catch (error) {
    console.error(error);

    return Response.json(
      {
        success: false,
        error: "Erro interno ao enviar o formulário.",
      },
      { status: 500 }
    );
  }
}