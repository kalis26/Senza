import ProductCard from "./productcard";

async function fetchNewProducts() {

    const query = new URLSearchParams();
    query.set("tag", "nouveau");

    const base = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const response = await fetch(`${base}/api/products?${query.toString()}`, {cache: 'no-store'});
    return response.json();
}

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    tags?: { name: string }[];
}

export default async function NewProducts() {
  const newProducts = await fetchNewProducts();

  return (
    <div className="p-20">
      <h1 className="text-center w-full text-3xl font-bold pb-6">NOUVEAUTÉS</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
        {newProducts.map((product: Product) => (
            <ProductCard key={product.id} product={product} newProduct={true} />
        ))}
      </div>
    </div>
  );
}