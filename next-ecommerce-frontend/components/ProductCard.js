import Link from "next/link";
import Image from "next/image";

export default function ProductCard({ product }) {
  const imageUrl = product.product_images.length ?  product.product_images[0]?.image_path : null;

  return (
    <div className="w-full group border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Product Image */}
      <div className="relative w-full h-64 overflow-hidden">
        <Image
          src={imageUrl ?? null}
          alt={product.name}
          layout="fill"
          objectFit="cover"
          className="group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-black group-hover:text-purple-600 transition-colors duration-300">
          {product.name}
        </h3>
        <div className="flex items-center space-x-2 mt-2">
          <span className="text-green-600 font-bold">&#2547;{product.price}</span>
          {product.discount_price && (
            <>
              <del className="text-gray-400 text-sm">${product.original_price}</del>
              <span className="text-red-500 text-sm">
                {product.discount_percentage}% Off
              </span>
            </>
          )}
        </div>
        <div className="flex items-center mt-2">
          <div className="flex">
            <div
              className="h-4 bg-yellow-500"
              style={{ width: `${(product.rating / 5) * 100}%` }}
            ></div>
          </div>
          <span className="ml-2 text-gray-500 text-sm">({product.reviews_count})</span>
        </div>
        <p className="text-sm text-gray-500 mt-3 line-clamp-2">
          {product.description}
        </p>
        <div className="flex justify-between items-center mt-4">
          <Link href={`/products/${product.slug}`} className="text-purple-600 hover:underline">
            View Details
          </Link>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
