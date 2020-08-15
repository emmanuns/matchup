<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Http\Requests\PostRequest;
use App\User;
use Auth;

class Post extends Model
{

    //
    //Relations
    //

    public function user()
    {
        return $this->belongsTo('App\User');
    }

    public function userLikes()
    {
        return $this->belongsToMany('App\User', 'like_post_user');
    }

    public function comments()
    {
        return $this->hasMany('App\CommentPost');
    }

    public function tag()
    {
        return $this->belongsTo('App\Tag');
    }

    //
    //Operations
    //

    public function createPost(PostRequest $request)
    {
        $user_id = Auth::user()->id;
        $this->user_id = $user_id;
        $this->text = $request->text;
        $this->save();
    }

    public function updatePost(PostRequest $request, $id)
    {       
        if ($request->text) {
            $this->text = $request->text;
        }

        $this->save();     
    }

    public static function showPost($id)
    {
        $post = Post::findOrFail($id);
        return $post;
    }

    public static function listPosts()
    {
        return Post::all();
    }

    public static function deletePost($id)
    {
        $post = Post::findOrFail($id);
        Post::destroy($id);
    }
}
