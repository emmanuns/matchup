<?php

use Illuminate\Database\Seeder;

class TagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        App\Tag::create([
            'name'=>"League of Legends"
        ]);
        App\Tag::create([
            'name'=>"Valorant"
        ]);
        App\Tag::create([
            'name'=> "Don't Starve"
        ]);
        App\Tag::create([
            'name'=>"Counter-Strike"
        ]);
        App\Tag::create([
            'name'=>"FIFA"
        ]);
    }
}
