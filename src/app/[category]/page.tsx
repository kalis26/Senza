import ProductCard from '@/components/productcard';
import type { Product } from '@/components/productcard';

export default async function CategoryPage({
    params,
    searchParams,
}: {
    params: { category?: string } | Promise<{ category?: string }>;
    searchParams: { [key: string]: string | string[] | undefined } | Promise<{ [key: string]: string | string[] | undefined }>;
}) {

    const { category } = (await params) as { category?: string };
    const sp = (await searchParams) as { [key: string]: string | string[] | undefined };
    const minPrice = typeof sp.minPrice === "string" ? sp.minPrice : Array.isArray(sp.minPrice) ? sp.minPrice[0] : undefined;
    const maxPrice = typeof sp.maxPrice === "string" ? sp.maxPrice : Array.isArray(sp.maxPrice) ? sp.maxPrice[0] : undefined;

    const query = new URLSearchParams();
    if (category) query.set("category", category);
    if (minPrice) query.set("minPrice", minPrice);
    if (maxPrice) query.set("maxPrice", maxPrice);

    const sendCategory = category && category !== "all" ? category : undefined;
    if (sendCategory) query.set("category", sendCategory);

    const base = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const res = await fetch(`${base}/api/products?${query.toString()}`);
    const products = await res.json();

    return (
        <div className='p-20'>
            <h1 className='pb-20'>{category?.toUpperCase()}</h1>
            <div className="flex flex-wrap gap-20 mt-6 flex-row items-center justify-center">
                {Array.isArray(products) && products.map((product: Product) => (
                    <ProductCard key={product.id} product={product} newProduct={(product.tags?.some(t => (t.name ?? "").toLowerCase() === "nouveau")) ?? false} />
                ))}
            </div>
        </div>
    );
}