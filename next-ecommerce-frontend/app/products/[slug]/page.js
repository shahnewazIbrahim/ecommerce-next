import AddToCart from '@/components/AddToCart';
import ProductSlider from '@/components/ProductSlider';

export default async function ProductDetails({ params }) {
    const { slug } = params;

    // Fetch product details
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/products/${slug}`, {
        cache: 'no-store',
    });

    if (!res.ok) {
        throw new Error('Failed to fetch product');
    }

    const product = await res.json();

    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="container mx-auto p-4">
                {/* Product Header */}
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between border-b pb-6 mb-6">
                    <h1 className="text-4xl font-extrabold text-gray-800">{product.name}</h1>
                    <div className="text-green-600 font-bold text-2xl mt-2 lg:mt-0 flex items-center space-x-2">
                        <span>&#2547;{product.price}</span>
                        {product.discount_price && (
                            <span className="text-red-500 text-lg bg-red-100 px-2 py-1 rounded">
                                {product.discount_percentage}% Off
                            </span>
                        )}
                    </div>
                </div>

                {/* Product Slider */}
                <div className="shadow-lg rounded-lg overflow-hidden bg-white p-4">
                    <ProductSlider images={product.product_images || []} />
                </div>

                {/* Description */}
                <div className="mt-6 bg-white p-6 rounded-lg shadow">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">Product Description</h2>
                    <p className="text-gray-600 leading-relaxed">{product.description}</p>
                </div>

                {/* Pricing and Add to Cart */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-8 bg-white p-6 rounded-lg shadow">
                    <div className="text-lg font-semibold text-gray-700">
                        <span>Category:</span> <span className="font-medium">{product.category?.name || 'N/A'}</span>
                    </div>
                    <div className="mt-4 md:mt-0">
                        <AddToCart productId={product.id} />
                    </div>
                </div>

                {/* Product Specifications */}
                {product.specifications?.length > 0 && (
                    <div className="mt-8 bg-white p-6 rounded-lg shadow">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Product Specifications</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {product.specifications.map((spec, index) => (
                                <div key={index} className="border p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                                    <h3 className="font-bold text-gray-800">{spec.name}</h3>
                                    <p className="text-gray-600">{spec.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Reviews Section */}
                <div className="mt-8 bg-white p-6 rounded-lg shadow">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Customer Reviews</h2>
                    <div className="space-y-4">
                        {product.reviews?.length > 0 ? (
                            product.reviews.map((review, index) => (
                                <div
                                    key={index}
                                    className="border p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                                >
                                    <div className="flex justify-between items-center">
                                        <h3 className="font-bold text-gray-800">{review.user_name}</h3>
                                        <div className="flex items-center space-x-2">
                                            <span className="text-yellow-500">{'★'.repeat(review.rating)}</span>
                                            <span className="text-gray-600 text-sm">({review.rating})</span>
                                        </div>
                                    </div>
                                    <p className="mt-2 text-gray-700">{review.comment}</p>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500">No reviews yet.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
