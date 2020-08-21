<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Post;
use App\Tag;
use Faker\Generator as Faker;

$factory->define(Post::class, function (Faker $faker) {
    return [
        'text' => $faker->sentence($nbWords = 10, $variableNbWords = true),
        'user_id' => factory('App\User')->create()->id,
        'tag_id' => Tag::all()->random()->id,
    ];
});
