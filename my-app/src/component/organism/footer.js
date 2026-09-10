import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative min-h-[470px] overflow-hidden">

      {/* Imagem de fundo com blur */}
      <div
        className="
          absolute
          inset-0
          bg-cover
          bg-center
          bg-no-repeat
          blur-[1px]
          scale-105
        "
        style={{
          backgroundImage: "url('/footer-bg.png')",
        }}
      />

      {/* Camada azul sobre a imagem */}
      <div className="absolute inset-0 bg-[#07145C]/90" />

      {/* Conteúdo */}
      <div
        className="
          relative
          z-10
          max-w-[1200px]
          mx-auto
          min-h-[470px]
          px-[2.5rem]
          py-[3rem]
          flex
          items-center
          justify-between
          gap-12
        "
      >

        {/* Informações */}
        <div className="text-white text-[16px] leading-[1.25]">

          <div className="text-[1.5rem] mb-10">
            <p><span className="font-bold">Tel:</span> +55 41 9 9270 0506</p>
            <p><span className="font-bold">Email:</span> juridico@sabadvoacaciasaude.com.br</p>
            <p><span className="font-bold">Social:</span> @sab.advocacia</p>
          </div>

          <div className="text-[1.25rem] mb-14">
            <p>Curitiba, Paraná</p>
            <p>Foz do Iguaçu, Paraná</p>
          </div>

          <p className="font-bold text-[1.5rem] max-w-[350px]">
            Orientação jurídica em casos
            <br />
            sensíveis de saúde e previdência.
          </p>

        </div>

        {/* Logo */}
        <div className="flex justify-center items-center">
          <Image
            src="/sab_adv_branco.png"
            alt="SAB Advocacia"
            width={320}
            height={320}
            className="w-[280px] md:w-[320px] h-auto"
          />
        </div>

      </div>
    </footer>
  );
}