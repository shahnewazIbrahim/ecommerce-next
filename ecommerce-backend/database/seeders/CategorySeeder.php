<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
         // Create parent categories
         $electronics = Category::create([
            'name' => 'Electronics',
            'slug' => 'electronics',
            'description' => 'All kinds of electronic gadgets and devices.',
            'is_active' => true,
        ]);

        $fashion = Category::create([
            'name' => 'Fashion',
            'slug' => 'fashion',
            'description' => 'Latest trends in fashion and clothing.',
            'is_active' => true,
        ]);

        // Create child categories under Electronics
        Category::create([
            'name' => 'Mobile Phones',
            'slug' => 'mobile-phones',
            'description' => 'Smartphones and accessories.',
            'parent_id' => $electronics->id,
            'is_active' => true,
        ]);

        Category::create([
            'name' => 'Laptops',
            'slug' => 'laptops',
            'description' => 'Personal and professional laptops.',
            'parent_id' => $electronics->id,
            'is_active' => true,
        ]);

        // Create child categories under Fashion
        Category::create([
            'name' => 'Men',
            'slug' => 'fashion-men',
            'description' => 'Clothing for men.',
            'parent_id' => $fashion->id,
            'is_active' => true,
        ]);

        Category::create([
            'name' => 'Women',
            'slug' => 'fashion-women',
            'description' => 'Clothing for women.',
            'parent_id' => $fashion->id,
            'is_active' => true,
        ]);
    }
}
