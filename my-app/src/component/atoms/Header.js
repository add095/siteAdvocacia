import Image from "next/image";

export default function header() {
    return (
        <header className="absolute top-0 left-0 w-full z-50 bg-transparent pt-[3rem] pl-[3rem] flex-1 h-fit">
            <Image src="./logo.svg" width={120} height={10}></Image>
        </header>
    );
}