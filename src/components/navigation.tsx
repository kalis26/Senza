import Image from "next/image";

export default function Navigation() {
    return (
      <nav className="flex flex-row items-center justify-between p-4">
          <Image src={"/images/Logo.png"} alt={"SENZA Logo"} height={1367} width={5169} className={"h-12 w-auto"} />
      </nav>
    );
}