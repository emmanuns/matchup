<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\CommentPost;
use Faker\Generator as Faker;

$factory->define(CommentPost::class, function (Faker $faker) {
    return [
        'text'=>$faker->text,
        'post_id'=>factory('App\Post')->create()->id,
        'user_id'=>factory('App\User')->create()->id,
    ];
});
