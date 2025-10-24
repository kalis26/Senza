import Link from "next/link";
import Image from "next/image";

type Product = {
    id: number;
    name: string;
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
        <div className={`${newProduct ? 'indicator' : ''}`}>
            {newProduct && (
                <span className="indicator-item indicator-start badge">NOUVEAU</span>
            )}
            <div key={product.id} className="flex flex-col gap-2 items-center justify-center">
                <Link href={`/product/${product.id}`} className="pb-4">
                    <Image src={product.imageUrl} width={300} height={300} alt={product.name} className="h-auto" />
                </Link>
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-gray-600">{product.description}</p>
                {fragranceLabel && (
                    <p className="text-sm text-gray-600 italic">{fragranceLabel}</p>
                )}
                <p className="font-bold">{product.price} DA</p>
            </div>
        </div>
    );
}
