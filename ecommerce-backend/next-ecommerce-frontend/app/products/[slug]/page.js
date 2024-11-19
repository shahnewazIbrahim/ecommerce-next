import AddToCart from '@/components/AddToCart';
import Navbar from '@/components/Navbar';
import Image from 'next/image';

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
        <div>
            <Navbar />
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold">{product.name}</h1>
                <p className="text-gray-500">{product.description}</p>
                <p className="text-green-600 font-bold text-xl">${product.price}</p>
                
                {/* Display multiple product images */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                    {product.product_images?.map((image, index) => (
                        <div key={index} className="relative w-full h-48">
                            <Image
                                src={image.image_path} // Assuming image_path is the field that holds the image URL
                                alt={`Image ${index + 1} of ${product.name}`}
                                layout="fill" // Make the image fill the container
                                objectFit="cover" // Ensure it covers the area without distortion
                                className="rounded"
                            />
                        </div>
                    ))}
                </div>

                <AddToCart productId={product.id}/>
            </div>
        </div>
    );
}
