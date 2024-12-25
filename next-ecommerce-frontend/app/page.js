import ProductCard from '@/components/ProductCard';

export default async function Home() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/products`, {
        cache: 'no-store',
    });

    if (!res.ok) {
        throw new Error('Failed to fetch products');
    }
    // const products = []
    const products = await res.json();
    
    console.log({products});

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Navbar */}
            {/* <Navbar /> */}

            {/* Hero Section */}
            <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-12 text-center">
                <h1 className="text-4xl font-extrabold mb-2">Discover Our Top Products</h1>
                <p className="text-lg">
                Handpicked just for you! Browse our exclusive collection.
                </p>
            </div>

            {/* Product Grid */}
            <div className="max-w-7xl mx-auto p-4">
                <h2 className="text-3xl font-semibold mb-6 text-gray-800 text-center">
                Latest Products
                </h2>
                <div className="grid grid-cols-2 justify-center items-center md:grid-cols-4 gap-6">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
                </div>
            </div>
        </div>

    );
}
