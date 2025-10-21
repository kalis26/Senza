import { Karla } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
    return (
        <nav>
            <div className={`flex flex-row items-center justify-center p-6 md:p-10 h-16 md:h-24 gap-10 text-sm ${Karla.className}`}>
                <div className="flex-1 flex flex-row border-0 md:border-gray-300 md:border-b focus-within:md:border-black transition-all duration-200">
                    <input type="search" placeholder="Rechercher un produit, une marque ..." className={`md:w-2/3 p-2 hidden md:flex flex-1 bg-transparent text-gray-800 placeholder-gray-400 focus:outline-none`} />
                    <button type="submit" className="p-2 cursor-pointer group">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 group-hover:scale-110 transition-all duration-200" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    </button>
                </div>
                <div className="flex-1 flex justify-center">
                    <Link href={"/"} className="md:block hidden">
                        <Image src={"/images/Logo.png"} alt={"SENZA Logo"} height={1367} width={5181} className={"h-12 w-auto"}/>
                    </Link>
                    <Link href={"/"} className="relative md:hidden">
                        <Image src={"/images/LogoSmall.png"} alt={"SENZA Logo Small"} height={205} width={205} className={"h-12 w-auto"}/>
                    </Link>
                </div>
                <div className="flex-1 flex flex-row items-center justify-center">
                    <Link href={"/"} className="border-r border-gray-300 p-2 pr-4">
                        <span className="md:block hidden">Mon compte</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 md:hidden block group-hover:scale-110 transition-all duration-200" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                    </Link>
                    <span className="p-2 pl-4 cursor-pointer group">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 group-hover:scale-110 transition-all duration-200" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V6l-3-4H6zM3.8 6h16.4M16 10a4 4 0 1 1-8 0" /></svg>
                    </span>
                </div>
            </div>
            <div className={`hidden md:flex flex-row items-center justify-center gap-2 md:h-10 bg-[#0B0B0B] font-normal ${Karla.className}`}>
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
            <div className={`flex md:hidden items-center justify-end h-10 bg-[#0B0B0B] font-normal ${Karla.className}`}>
                <button className="px-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                </button>
            </div>
        </nav>
    );
}