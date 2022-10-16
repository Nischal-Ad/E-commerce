<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name' => fake()->name(),
            'slug' => fake()->slug(),
            'price' => fake()->numberBetween($min = 25000, $max = 200000),
            'description' => fake()->paragraph,
            'img_src' =>  fake()->imageUrl(),
            'category' => fake()->name(),
        ];
    }
}
