import Link from "next/link";
import "@/app/globals.css";

export default function HeroMain() {
  return (
    <section className="
      h-screen 
      bg-[url('/heroImage.jpg')] 
      bg-cover 
      bg-no-repeat 
      bg-center
    ">
      <div className="
        bg-black/70 
        h-full 
        flex 
        pt-[5rem] 
        md:pt-[7rem]
      ">
        <div className="
          px-[1.5rem]
          sm:px-[2.5rem]
          md:px-[4rem]
          lg:pl-[5rem]
          lg:pr-[8rem]
          flex-1
        ">
          <div className="
            flex 
            justify-center 
            flex-col 
            w-full 
            h-full
          ">
            
            <h1 className="
              text-[2.5rem]
              sm:text-[4rem]
              md:text-[4.5rem]
              lg:text-[5rem]
              text-white 
              font-bold 
              leading-none 
              font-poppins
            ">
              Medicamento <br />
              de alto custo <br />
              negado?
            </h1>

            <div className="
              flex 
              flex-col
              md:flex-row
              md:items-center
              md:justify-between
              gap-[1.5rem]
              w-full 
              mt-[2rem]
            ">
              
              <p className="
                text-white 
                text-[1.25rem]
                sm:text-[1.5rem]
                md:text-[1.75rem]
                lg:text-[2rem]
                max-w-[700px]
              ">
                Entenda seus direitos antes de aceitar a negativa.
              </p>

              <Link
                href={""}
                className="
                  bg-primary 
                  rounded-[100px] 
                  text-subtopics 
                  text-white 
                  font-bold 
                  flex 
                  items-center 
                  justify-center 
                  text-nowrap
                  w-fit
                  px-[1.5rem]
                  py-[0.8rem]
                  sm:px-[2rem]
                  sm:py-[1rem]
                  lg:px-[2.5rem]
                "
              >
                QUERO ORIENTAÇÃO
              </Link>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}