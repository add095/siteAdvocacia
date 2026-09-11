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
        bg-[#030e50]/85
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
              lg:text-[6.5rem]
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
                max-w-[700px]
                leading-[2rem]
              ">
                Antes de aceitar a negativa, entenda se o seu caso pode ser analisado juridicamente.
              </p>


              <Link
                href={"https://api.whatsapp.com/send/?phone=5541992700506&text=Ol%C3%A1%2C%20gostaria%20de%20orienta%C3%A7%C3%A3o!&type=phone_number&app_absent=0"}
                className="
                  bg-secundary
                  rounded-[100px]
                  text-subtopics
                  text-primary
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


                  hover:bg-[#d8d6d7]


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

