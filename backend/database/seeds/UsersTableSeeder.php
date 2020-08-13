<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //factory (App\User::class,10)->create();
        
        //
        //Criando Usuários e posts
        //
        factory(App\User::class, 8)->create()->each(function ($user) {
            $post = factory(App\Post::class, 3)->make();
            $user->posts()->saveMany($post);
        });
    }
}
