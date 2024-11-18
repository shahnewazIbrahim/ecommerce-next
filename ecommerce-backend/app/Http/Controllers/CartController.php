<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CartController extends Controller
{
    public function addToCart(Request $request)
    {
        $validated = $request->validate([
            'product_id' => 'required|integer',
            'quantity' => 'required|integer|min:1',
        ]);

        // Example: Save to database or session
        $cart = session()->get('cart', []);
        $cart[$validated['product_id']] = $validated['quantity'];
        session(['cart' => $cart]);

        return response()->json(['message' => 'Product added to cart successfully!'], 201);
    }
}
