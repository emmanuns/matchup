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
        return $this->belongsToMany('App\User');
    }
    
    public function userComment()
    {
        return $this->belongsToMany('App\User', 'comments');
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
}
