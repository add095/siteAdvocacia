import Image from "next/image";

export default function header() {
    return (
        <header className="absolute top-0 left-0 w-full z-50 bg-transparent  pt-[3rem] pl-[3.5rem] w-full h-fit ">
            <Image src="./logo.svg" width={100} height={10}></Image>
        </header>
    );
}