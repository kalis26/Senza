import { Karla } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
    return (
      <nav>
        <div className="flex flex-row items-center justify-center p-4 h-24">
          <Link href={"/"}>
            <Image src={"/images/Logo.png"} alt={"SENZA Logo"} height={1367} width={5169} className={"h-12 w-auto"} id="divbarlogo" />
          </Link>
        </div>
        <div className={`flex flex-row items-center justify-center gap-2 h-10 bg-[#0B0B0B] font-normal ${Karla.className}`}>
          <div className="bg-[#0B0B0B] hover:bg-[#303030] h-full flex items-center transition-all duration-300">
            <Link href={"/"} className="text-white text-md px-4">HOME</Link>
          </div>
          <div className="bg-[#0B0B0B] hover:bg-[#303030] h-full flex items-center transition-all duration-300">
            <Link href={"/about"} className="text-white text-md px-4">ABOUT</Link>
          </div>
          <div className="bg-[#0B0B0B] hover:bg-[#303030] h-full flex items-center transition-all duration-300">
            <Link href={"/collections"} className="text-white text-md px-4">COLLECTIONS</Link>
          </div>
          <div className="bg-[#0B0B0B] hover:bg-[#303030] h-full flex items-center transition-all duration-300">
            <Link href={"/contact"} className="text-white text-md px-4">CONTACT</Link>
          </div>
        </div>
      </nav>
    );
}