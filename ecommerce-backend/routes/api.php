<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::get('/products', [ProductController::class, 'index']);
Route::get('/products', [ProductController::class, 'index']); // Get all products
// Route::get('/products/{id}', [ProductController::class, 'show']); // Get product by ID
Route::post('/products', [ProductController::class, 'store']); // Create a new product
Route::put('/products/{id}', [ProductController::class, 'update']); // Update an existing product
Route::delete('/products/{id}', [ProductController::class, 'destroy']);
// Route::get('/products/{id}', [ProductController::class, 'show']);
Route::get('/products/{slug}', [ProductController::class, 'showBySlug']);
Route::post('/orders', [OrderController::class, 'store']);
