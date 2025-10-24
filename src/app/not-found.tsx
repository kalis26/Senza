import Link from "next/link";

export default function NotFound() {
    return (
        <div className="p-10 min-h-screen flex flex-col items-center justify-center text-center">
            <h1 className="text-5xl font-playfair font-semibold text-neutral mb-4">
                Page introuvable
            </h1>
            <p className="text-gray-500 mb-8 max-w-md">
                Il semble que cette page se soit évaporée...
                Retournez à l’élégance de la maison <span className="font-semibold">SENZA</span>.
            </p>
            <Link href="/" className="btn btn-neutral btn-outline rounded px-8 transition-all duration-300">
                Retour à l’accueil
            </Link>
        </div>
    );
}
