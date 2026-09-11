import Image from "next/image";






export default function QuemEstaFrente() {
  const profissionais = [
    {
      nome: "Simone Bueno",
      cargo: "OAB / PR - 47.260",
      imagem: "/simone.jpg",
      descricao:
        "Atua em casos de negativas de plano, medicamentos de alto custo e tratamentos complexos, com experiência e análise cuidadosa dos documentos.",
    },
    {
      nome: "Cyrce Sousa",
      cargo: "OAB / PR - 65.138",
      imagem: "/cyrce.jpg",
      descricao:
        "Atua em demandas de saúde, terapias e direitos da pessoa autista, unindo vivência, técnica e acolhimento na condução dos casos.",
    },
    {
      nome: "Sheila Alves",
      cargo: "OAB / PR - 82.531",
      imagem: "/sheila.jpg",
      descricao:
        "Atua com orientação responsável para pessoas e famílias que precisam de segurança em benefícios, proteção social e demandas relacionadas ao autismo.",
    },
  ];


  return (
    <section className="h-fit py-[5%] flex flex-col justify-center bg-[#f2f3f4] px-[2rem]">


      {/* Título */}
      <h2 className="
        text-center
        text-[42px]
        sm:text-[52px]
        md:text-[65px]
        lg:text-[75px]
        leading-[1.1]
        font-bold
        text-[#07145C]
        mb-12
      ">
        Quem está à frente da SAB
      </h2>


      {/* Profissionais */}
      <div className="
        max-w-[1100px]
        mx-auto
        grid
        grid-cols-1
        md:grid-cols-3
        gap-24
      ">
        {profissionais.map((profissional) => (
          <div
            key={profissional.nome}
            className="flex flex-col items-center text-center"
          >


            {/* Foto */}
            <Image
              src={profissional.imagem}
              alt={profissional.nome}
              width={150}
              height={150}
              className="
                w-[250px]
                h-[250px]
                object-cover
                rounded-[10px]
                mb-4
            "/>


            {/* Nome */}
            <h3 className="
              text-[20px]
              leading-none
              font-bold
              text-[#07145C]
              mb-1
            ">
              {profissional.nome}
            </h3>


            {/* Cargo */}
            <p className="
              text-[14px]
              leading-[1.2]
              text-[#07145C]
              mb-5
              min-h-[22px]
            ">
              {profissional.cargo}
            </p>


            {/* Descrição */}
            <p className="
              text-[18px]
              leading-[1.25]
              text-[#07145C]
              text-justify
              max-w-[300px]
            ">
              {profissional.descricao}
            </p>


          </div>
        ))}
      </div>


    </section>
  );
}

