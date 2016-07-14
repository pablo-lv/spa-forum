<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

$factory->define(App\Category::class, function (Faker\Generator $faker) {
    return [
        'name' => implode(' ', $faker->words(2)),
        'description' => $faker->sentence(),
    ];
});

$factory->define(App\Topic::class, function (Faker\Generator $faker) {
    return [
        'category_id' => null,
        'title' => $faker->sentence,
        'body'  => $faker->paragraph(7),
        'views' => $faker->numberBetween(0,300),
        'created_at' => $faker->dateTimeBetween('-5 months'),
    ];
});
