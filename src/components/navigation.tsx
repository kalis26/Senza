import { Karla } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
    return (
        <nav>
            <div className={`flex flex-row items-center justify-center p-10 h-24 gap-10 text-sm ${Karla.className}`}>
                <div className="flex-1 flex flex-row border-gray-300 border-b focus-within:border-black transition-all duration-200">
                    <input type="search" placeholder="Rechercher un produit, une marque ..." className={`w-2/3 p-2 flex-1 bg-transparent text-gray-800 placeholder-gray-400 focus:outline-none`} />
                    <button type="submit" className="p-2 cursor-pointer group">
                        <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:scale-110 transition-all duration-200" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    </button>
                </div>
                <div className="flex-1 flex justify-center">
                    <Link href={"/"}>
                        <Image src={"/images/Logo.png"} alt={"SENZA Logo"} height={1367} width={5169} className={"h-12 w-auto"}/>
                    </Link>
                </div>
                <div className="flex-1 flex flex-row items-center justify-center">
                    <Link href={"/"} className="border-r border-gray-300 p-2 pr-4">
                        <span>Mon compte</span>
                    </Link>
                    <span className="p-2 pl-4 cursor-pointer group">
                        <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:scale-110 transition-all duration-200" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V6l-3-4H6zM3.8 6h16.4M16 10a4 4 0 1 1-8 0" /></svg>
                    </span>
                </div>
            </div>
            <div className={`flex flex-row items-center justify-center gap-2 h-10 bg-[#0B0B0B] font-normal ${Karla.className}`}>
                <div className="bg-[#0B0B0B] hover:bg-[#303030] h-full flex items-center transition-all duration-300">
                    <Link href={"/"} className="text-white text-md px-4">ACCUEIL</Link>
                </div>
                <div className="bg-[#0B0B0B] hover:bg-[#303030] h-full flex items-center transition-all duration-300">
                    <Link href={"/"} className="text-white text-md px-4">PARFUMS</Link>
                </div>
                <div className="bg-[#0B0B0B] hover:bg-[#303030] h-full flex items-center transition-all duration-300">
                    <Link href={"/collections"} className="text-white text-md px-4">COLLECTIONS</Link>
                </div>
                <div className="bg-[#0B0B0B] hover:bg-[#303030] h-full flex items-center transition-all duration-300">
                    <Link href={"/marques"} className="text-white text-md px-4">MARQUES</Link>
                </div>
                <div className="bg-[#0B0B0B] hover:bg-[#303030] h-full flex items-center transition-all duration-300">
                    <Link href={"/about"} className="text-white text-md px-4">À PROPOS</Link>
                </div>
                <div className="bg-[#0B0B0B] hover:bg-[#303030] h-full flex items-center transition-all duration-300">
                    <Link href={"/contact"} className="text-white text-md px-4">CONTACT</Link>
                </div>
            </div>
        </nav>
    );
}