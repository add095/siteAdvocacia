import Image from "next/image";

export default function header() {
    return (
        <header className="absolute top-0 left-0 w-full z-50 bg-transparent pt-[3rem] pl-[4.7
        5rem] flex-1 h-fit">
            <Image src="/sab_adv_branco.png" width={100} height={10}/>
        </header>
    );
}