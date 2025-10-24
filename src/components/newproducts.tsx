import ProductCard from "./productcard";
import type { Product } from "./productcard";

async function fetchNewProducts() {

    const query = new URLSearchParams();
    query.set("tag", "nouveau");

    const base = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const response = await fetch(`${base}/api/products?${query.toString()}`, { cache: 'no-store' });
    return response.json();
}

export default async function NewProducts() {
    const newProducts = await fetchNewProducts();

    return (
        <div className="p-20">
            <h1 className="text-center w-full text-3xl font-bold pb-6">NOUVEAUTÉS</h1>
            <div className="flex flex-wrap gap-20 mt-6 flex-row items-center justify-center">
                {Array.isArray(newProducts) && newProducts.map((product: Product) => (
                    <ProductCard key={product.id} product={product} newProduct={true} />
                ))}
            </div>
        </div>
    );
}