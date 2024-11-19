import Navbar from '@/components/Navbar';
import ProductCard from '@/components/ProductCard';

export default async function Category({ params }) {
    const { slug } = params;

    // Fetch category details
    const categoryRes = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/categories/${slug}`, {
        cache: 'no-store',
    });
    if (!categoryRes.ok) {
        throw new Error('Failed to fetch category');
    }
    const category = await categoryRes.json();

    // Fetch products in the category
    const productsRes = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/categories/${slug}/products`, {
        cache: 'no-store',
    });
    if (!productsRes.ok) {
        throw new Error('Failed to fetch products');
    }
    const products = await productsRes.json();

    return (
        <div>
            <Navbar />
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">{category.name}</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
}
