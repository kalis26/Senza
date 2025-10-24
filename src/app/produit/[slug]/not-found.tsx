import Link from "next/link";

export default function ProductNotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center animate-fade-in">
            <h1 className="text-5xl font-playfair font-semibold text-neutral mb-4">
                Produit introuvable
            </h1>
            <p className="text-gray-500 mb-8 max-w-md">
                Le parfum que vous cherchez semble s’être dissipé dans l’air.
                Découvrez nos sélections intemporelles.
            </p>
            <Link href="/all" className="btn btn-neutral btn-outline rounded px-8 transition-all duration-300">
                Voir tous les parfums
            </Link>
        </div>
    );
}
