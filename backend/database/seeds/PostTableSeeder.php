<?php

use Illuminate\Database\Seeder;

class PostTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory (App\Post::class,10)->create()->each(function($post){
            $comments = factory(App\CommentPost::class, 2)->make();
            $post->comments()->saveMany($comments);
        });
    }
}
