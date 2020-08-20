<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Http\Requests\CommentPostRequest;
use App\User;
use App\Post;
use Auth;

class CommentPost extends Model
{

    //
    //Relations
    //

    public function user()
    {
        return $this->belongsTo('App\User');
    }

     public function post()
    {
        return $this->belongsTo('App\Post');
    }

    //
    //Operations
    //

    public function createCommentPost(CommentPostRequest $request)
    {
        $user_id = Auth::user()->id;
        $post_id = Post::showPost($request->post_id)->id;
        $this->user_id = $user_id;
        $this->post_id = $post_id;
        $this->text = $request->text;
        $this->save();
    }

    public function updateCommentPost(CommentPostRequest $request)
    {
        if ($request->text) {
            $this->text = $request->text;
        }

        $this->save();
    }

    public static function showCommentPost($id)
    {
        $comment = CommentPost::findOrFail($id);
        return $comment;
    }

    public function listCommentsPost()
    {
        return $this->all();
    }

    public function deleteCommentPost($id)
    {
        $comment = CommentPost::findOrFail($id);
        CommentPost::destroy($id);
    }
}
