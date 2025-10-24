import { prisma } from '@/lib/db';
import ProductCard from '@/components/productcard';
import type { Product } from '@/components/productcard';
import { notFound } from 'next/navigation';

export default async function FilteredPage({
    params,
    searchParams,
}: {
    params: { category?: string; subcategory?: string } | Promise<{ category?: string; subcategory?: string }>;
    searchParams: { [key: string]: string | string[] | undefined } | Promise<{ [key: string]: string | string[] | undefined }>;
}) {
    const { category, subcategory } = (await params) as { category?: string; subcategory?: string };
    
    if (category) {
        const categoryRecord = await prisma.category.findUnique({ where: { slug: category } });
        if (!categoryRecord) return notFound();
    }

    if (subcategory) {
        const tagRecord = await prisma.tag.findUnique({ where: { slug: subcategory } });
        if (!tagRecord) return notFound();
    }

    const sp = (await searchParams) as { [key: string]: string | string[] | undefined };
    const minPrice = typeof sp.minPrice === "string" ? sp.minPrice : Array.isArray(sp.minPrice) ? sp.minPrice[0] : undefined;
    const maxPrice = typeof sp.maxPrice === "string" ? sp.maxPrice : Array.isArray(sp.maxPrice) ? sp.maxPrice[0] : undefined;

    const query = new URLSearchParams();
    if (category) query.set("category", category);
    if (subcategory) query.set("tag", subcategory);
    if (minPrice) query.set("minPrice", minPrice);
    if (maxPrice) query.set("maxPrice", maxPrice);

    const base = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const res = await fetch(`${base}/api/products?${query.toString()}`);
    const products = await res.json();

    const categoryRecord = category ? await prisma.category.findUnique({ where: { slug: category } }) : null;
    const tagRecord = subcategory ? await prisma.tag.findUnique({ where: { slug: subcategory } }) : null;

    const categoryName = categoryRecord?.name ?? (category ? category.toUpperCase() : undefined);
    const subcategoryName = tagRecord?.name ?? (subcategory ? subcategory.toUpperCase() : undefined);

    return (
        <div className='p-20'>
            <h1 className='pb-20'>{categoryName} {subcategoryName && `> ${subcategoryName}`}</h1>
            <div className="flex flex-wrap gap-20 mt-6 flex-row items-center justify-center">
                {Array.isArray(products) && products.map((product: Product) => (
                    <ProductCard key={product.id} product={product} newProduct={(product.tags?.some(t => (t.name ?? "").toLowerCase() === "nouveau")) ?? false} />
                ))}
            </div>
        </div>
    );
}
