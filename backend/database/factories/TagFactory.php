<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Tag;
use Faker\Generator as Faker;

$factory->define(Tag::class, function (Faker $faker) {
    return [
        'name' => $faker->randomElement(['League of Legends', 'Valorant', 'Dota 2', 'Dead By Daylight', 'CS:GO', 'Dont Starve', 'Fall Guys', 'Overwatch']),         
    ];
});
