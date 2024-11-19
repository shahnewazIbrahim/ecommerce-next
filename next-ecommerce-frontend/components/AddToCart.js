"use client"
import { useState } from 'react';

export default function AddToCart({ productId }) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleAddToCart = async (productId) => {
        setLoading(true);
        setError(null);

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/cart`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ product_id: productId, quantity: 1 }),
            });

            if (!res.ok) {
                throw new Error('Failed to add product to cart');
            }

            const data = await res.json();
            alert(data.message); // Show success message
        } catch (err) {
            setError(err.message || 'An error occurred');
        } finally {
            setLoading(false);
        }
    };
    return (
        <div>
            {/* Add to Cart Button */}
            <button
                    className={`mt-4 px-4 py-2 rounded ${
                        loading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'
                    } text-white`}
                    onClick={() => handleAddToCart(productId)} // Replace 1 with product.id
                    disabled={loading}
                >
                    {loading ? 'Adding to Cart...' : 'Add to Cart'}
                </button>

                {/* Error Message */}
                {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
    );
}
