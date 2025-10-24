import Link from "next/link";
import Image from "next/image";

export type Product = {
    id: number;
    name: string;
    slug: string;
    description: string;
    price: number;
    imageUrl: string;
    tags?: { name: string }[];
};

function detectFragranceType(tags?: { name: string; slug?: string }[]) {
    if (!tags || tags.length === 0) return undefined;
    for (const t of tags) {
        const raw = (t.slug ?? t.name ?? "").toLowerCase();

        if (raw.includes("edp") || raw.includes("eau de parfum")) return "edp";
        if (raw.includes("edt") || raw.includes("eau de toilette")) return "edt";
        if (raw.includes("exp") || raw.includes("extrait")) return "exp";
        if (raw.includes("edc") || raw.includes("cologne")) return "edc";
    }
    return undefined;
}

export default function ProductCard({ product, newProduct }: { product: Product, newProduct?: boolean }) {

    const tags = product.tags ?? [];

    const fragranceType: string | undefined = detectFragranceType(tags);

    const fragranceMap: Record<string, string> = {
        edp: "Eau de Parfum",
        edt: "Eau de Toilette",
        exp: "Extrait de Parfum",
        edc: "Eau de Cologne",
    };

    const fragranceLabel = fragranceType ? fragranceMap[fragranceType] : undefined;

    return (
        <div className={`${newProduct ? 'indicator' : ''} h-full`}>
            {newProduct && (
                <span className="indicator-item indicator-center badge">NOUVEAU</span>
            )}
            <div key={product.id} className="flex flex-col h-full gap-2 items-center justify-between p-4">
                <Link href={`/produit/${product.slug}`} className="mb-2">
                    <Image src={product.imageUrl} width={300} height={300} alt={product.name} className="h-auto" />
                </Link>
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p
                    className="text-gray-600 mt-2 text-center"
                    style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                    }}
                >
                    {product.description}
                </p>
                {fragranceLabel && (
                    <p className="text-sm text-gray-600 italic">{fragranceLabel}</p>
                )}
                <p className="font-bold">{product.price} DA</p>
                <Link href={`/produit/${product.slug}`} className="mt-2 px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors duration-200">
                    ACHETER
                </Link>
            </div>
        </div>
    );
}
