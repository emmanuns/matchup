<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Http\Requests\PostRequest;
use App\User;

class Post extends Model
{
    public function user()
    {
        return $this->belongsTo('App\User');
    }

    public function userLikes()
    {
        return $this->belongsToMany('App\User', 'like_post_user');
    }
    
    public function userComment()
    {
        return $this->belongsToMany('App\User', 'comment_posts');
    }

    public function createPost(PostRequest $request)
    {
        $this->text = $request->text;
        $this->save();
    }

    public function updatePost(PostRequest $request, $id)
    {
        $post = Post::findOrFail($id);
       
        if ($request->text) {
            $this->text = $request->text;
        }

        $this->save();
    }

    public function showPost($id)
    {
        $post = Post::findOrFail($id);
        return $post;
    }

    public function listPosts()
    {
        return $this->all();
    }

    public function deletePost($id)
    {
        $post = Post::findOrFail($id);        
        Post::destroy($id);       
    }

    //Buscar e salvar id do usuário    
    public function publishPost($id)
    {
        User::findOrFail($id);
        $this->user_id = $id;
        $this->save();   
    }
}
