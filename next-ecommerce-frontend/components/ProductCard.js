import Link from 'next/link';
import Image from 'next/image';

export default function ProductCard({ product }) {
    // Get the first image from the product_images array
    const imageUrl = product.product_images[0]?.image_path;

    return (
        <div className="border p-4 rounded">
            {/* Display product image */}
            <div className="relative w-full h-48 mb-4">
                <Image
                    src={imageUrl} 
                    alt={product.name} 
                    layout="fill" // This makes the image fill the container
                    objectFit="cover" // Ensures the image covers the space without distortion
                    className="rounded"
                />
            </div>

            <h3 className="text-lg font-bold">{product.name}</h3>
            <p className="text-gray-500">{product.description}</p>
            <p className="text-green-600 font-bold">${product.price}</p>
            <Link href={`/products/${product.slug}`} className="text-blue-600 underline">
                View Details
            </Link>
        </div>
    );
}
