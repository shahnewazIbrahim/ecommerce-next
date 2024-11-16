<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Get some category IDs
        $electronicsCategory = Category::where('slug', 'electronics')->first();
        $mobileCategory = Category::where('slug', 'mobile-phones')->first();
        $laptopCategory = Category::where('slug', 'laptops')->first();
        $fashionCategory = Category::where('slug', 'fashion')->first();

        // Create products under Mobile Phones
        Product::create([
            'name' => 'iPhone 14 Pro',
            'slug' => 'iphone-14-pro',
            'description' => 'Latest Apple iPhone with advanced features.',
            'price' => 999.99,
            'discount_price' => 899.99,
            'stock_quantity' => 50,
            'sku' => 'IP14P',
            'is_active' => true,
            'category_id' => $mobileCategory->id,
        ]);

        Product::create([
            'name' => 'Samsung Galaxy S23',
            'slug' => 'samsung-galaxy-s23',
            'description' => 'Flagship Samsung smartphone with cutting-edge tech.',
            'price' => 899.99,
            'discount_price' => 849.99,
            'stock_quantity' => 30,
            'sku' => 'SGS23',
            'is_active' => true,
            'category_id' => $mobileCategory->id,
        ]);

        // Create products under Laptops
        Product::create([
            'name' => 'Dell XPS 13',
            'slug' => 'dell-xps-13',
            'description' => 'Compact and powerful laptop for professionals.',
            'price' => 1199.99,
            'discount_price' => 1099.99,
            'stock_quantity' => 20,
            'sku' => 'DXPS13',
            'is_active' => true,
            'category_id' => $laptopCategory->id,
        ]);

        Product::create([
            'name' => 'MacBook Air M2',
            'slug' => 'macbook-air-m2',
            'description' => 'Apple\'s lightweight and efficient laptop.',
            'price' => 1299.99,
            'discount_price' => null,
            'stock_quantity' => 15,
            'sku' => 'MBAIR2',
            'is_active' => true,
            'category_id' => $laptopCategory->id,
        ]);

        // Create products under Fashion
        Product::create([
            'name' => 'Men\'s Leather Jacket',
            'slug' => 'mens-leather-jacket',
            'description' => 'Premium leather jacket for men.',
            'price' => 199.99,
            'discount_price' => 179.99,
            'stock_quantity' => 25,
            'sku' => 'MLJACKET',
            'is_active' => true,
            'category_id' => $fashionCategory->id,
        ]);

        Product::create([
            'name' => 'Women\'s Summer Dress',
            'slug' => 'womens-summer-dress',
            'description' => 'Light and comfortable summer dress for women.',
            'price' => 49.99,
            'discount_price' => 39.99,
            'stock_quantity' => 40,
            'sku' => 'WSDRESS',
            'is_active' => true,
            'category_id' => $fashionCategory->id,
        ]);
    }
}
