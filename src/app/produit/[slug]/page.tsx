import { prisma } from "@/lib/db";
import Image from "next/image";
import ProductNotFound from "./not-found";

export default async function ProductPage({ params }: { params: { slug: string } }) {
    const product = await prisma.product.findUnique({
        where: { slug: params.slug },
        include: { tags: true, category: true },
    });

    if (!product) return ProductNotFound();

    return (
        <div className="max-w-5xl mx-auto p-8">
            {product.imageUrl ? (
                <Image src={product.imageUrl} alt={product.name} className="rounded-xl" width={500} height={500} />
            ) : (
                <div className="w-[500px] h-[500px] bg-gray-100 rounded-xl flex items-center justify-center text-gray-500">
                    Image non disponible
                </div>
            )}
            <h1 className="text-3xl font-heading mt-4">{product.name}</h1>
            <p>{product.description}</p>
            <p className="mt-4 font-semibold">{product.price} DA</p>
            <div className="mt-4 flex gap-2">
                {product.tags.map(tag => (
                    <span key={tag.id} className="px-3 py-1 bg-gray-200 rounded-full text-sm">
                        {tag.name === "edp"
                            ? "Eau de Parfum"
                            : tag.name === "edt"
                                ? "Eau de Toilette"
                                : tag.name === "ext"
                                    ? "Extrait de Parfum"
                                    : tag.name === "edc"
                                        ? "Eau de Cologne"
                                        : tag.name}
                    </span>
                ))}
            </div>
        </div>
    );
}
