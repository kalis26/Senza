async function fetchNewProducts() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/products`);
  return response.json();
}

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
}

export default async function NewProducts() {
  const newProducts = await fetchNewProducts();

  return (
    <div>
      <h1>New Products</h1>
      <ul>
        {newProducts.map((product: Product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <img src={product.imageUrl} alt={product.name} />
          </li>
        ))}
      </ul>
    </div>
  );
}