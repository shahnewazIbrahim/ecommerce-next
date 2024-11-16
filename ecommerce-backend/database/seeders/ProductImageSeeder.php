<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;

class ProductImageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();
        
        // Fetch products to associate images with
        $products = DB::table('products')->pluck('id');
        
        foreach ($products as $productId) {
            // Generate a random number of product images (e.g., between 1 and 5)
            $imageCount = rand(1, 5);

            for ($i = 0; $i < $imageCount; $i++) {
                DB::table('product_images')->insert([
                    'product_id' => $productId,
                    'image_path' => $faker->imageUrl(640, 480, 'product'), // Use Faker to generate an image URL
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);
            }
        }
    }
}
