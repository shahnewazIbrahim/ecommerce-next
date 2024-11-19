import Navbar from '@/components/Navbar';
import ProductCard from '@/components/ProductCard';

export default async function Home() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/products`, {
        cache: 'no-store',
    });

    if (!res.ok) {
        throw new Error('Failed to fetch products');
    }
    console.log({res});
    // const products = []
    const products = await res.json();

    return (
        <div>
            <Navbar />
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Products</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
}
