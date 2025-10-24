import { Image, ImageKitProvider } from "@imagekit/next";
import Link from "next/link";

export default function AProposPage() {
    return (
        <main className="min-h-screen text-neutral animate-fade-in">
            
            <section className="flex flex-col items-center justify-center text-center py-32 px-6">
                <Image
                    urlEndpoint="https://ik.imagekit.io/txllyxas2y/"
                    src="/Logo.png"
                    alt="SENZA – Maison de Parfums"
                    className="mb-4"
                    width={200}
                    height={100}
                />
                <p className="max-w-2xl text-gray-600">
                    Redéfinir l’élégance à travers le parfum.
                    Rendre la haute parfumerie accessible à tous, sans compromis.
                </p>
            </section>
  
            <section className="px-8 md:px-24 py-20 grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-3xl font-playfair mb-4">L’essence de SENZA</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Chez <strong>SENZA</strong>, le parfum est une émotion. Une trace invisible,
                        un souvenir, une présence. Notre mission est de rendre cet art universel
                        accessible à tous. Nous croyons que le luxe n’a de valeur que lorsqu’il se
                        partage, lorsqu’il devient une expérience intime et personnelle.
                    </p>
                </div>
                <Image
                    urlEndpoint="https://ik.imagekit.io/txllyxas2y/"
                    src="/senza-bottle.png"
                    alt="Flacon SENZA"
                    className="rounded shadow-lg object-cover w-full h-[400px]"
                    width={600}
                    height={400}
                />
            </section>

            <section className="px-8 md:px-24 py-20 bg-[#E5E5E5] text-gray-600 text-center">
                <h2 className="text-3xl font-playfair mb-6">Une philosophie “sans”</h2>
                <p className="max-w-3xl mx-auto  leading-relaxed">
                    Inspiré du mot <em>“senza”</em> — “sans” en italien — notre nom porte une promesse :
                    un luxe <strong>sans barrière</strong>, <strong>sans compromis</strong>,
                    <strong> sans excès</strong>. SENZA, c’est l’expérience d’une parfumerie libre,
                    où la beauté se découvre au naturel.
                </p>
            </section>

            <section className="px-8 md:px-24 py-20 grid md:grid-cols-2 gap-16 items-center">
                <Image
                    urlEndpoint="https://ik.imagekit.io/txllyxas2y/"
                    src="/senza-miniatures.png"
                    alt="Miniatures SENZA"
                    className="rounded shadow-md object-cover w-full h-[400px]"
                    width={600}
                    height={400}
                />
                <div>
                    <h2 className="text-3xl font-playfair mb-4">Le concept</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Nous proposons des <strong>parfums authentiques</strong> et
                        <strong> certifiés</strong>, disponibles en formats
                        <strong> 10, 20, 30 ou 50 ml</strong>, pour offrir à chacun la liberté
                        d’explorer sans contrainte. Tester, comparer, découvrir – à votre rythme,
                        selon vos envies.
                    </p>
                </div>
            </section>

            <section className="px-8 md:px-24 py-20 bg-[#E5E5E5] text-gray-600 text-center">
                <h2 className="text-3xl font-playfair mb-6">Une approche responsable</h2>
                <p className="max-w-3xl mx-auto leading-relaxed">
                    SENZA s’inscrit dans une démarche de <strong>consommation consciente</strong> :
                    des formats justes, des emballages soignés et durables, moins de gaspillage,
                    plus de sens. Nous croyons qu’un geste élégant doit aussi être respectueux.
                </p>
            </section>

            <section className="px-8 md:px-24 py-20 grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-3xl font-playfair mb-4">L’expérience SENZA</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Chaque parfum est choisi avec soin. Chaque flacon est préparé avec amour.
                        SENZA, c’est la rencontre entre la passion, la qualité et la curiosité
                        olfactive. Une maison créée pour éveiller les sens, et révéler votre
                        personnalité à travers les notes qui vous ressemblent.
                    </p>
                </div>
                <Image
                    urlEndpoint="https://ik.imagekit.io/txllyxas2y/"
                    src="/senza-experience.png"
                    width={600}
                    height={400}
                    alt="Expérience SENZA"
                    className="rounded shadow-lg object-cover w-full h-[400px]"
                />
            </section>

            <section className="text-center py-32 px-8 bg-[#E5E5E5] text-gray-600">
                <h2 className="text-4xl font-playfair mb-6">Notre promesse</h2>
                <p className="max-w-2xl mx-auto leading-relaxed mb-10">
                    Parce que le parfum est un langage universel, SENZA s’engage à le rendre
                    accessible, authentique et profondément personnel.
                </p>
                <Link href="/all" className="btn btn-outline btn-base-100 rounded px-8 transition-all duration-300">
                    Découvrir nos parfums
                </Link>
            </section>
        </main>
    );
}