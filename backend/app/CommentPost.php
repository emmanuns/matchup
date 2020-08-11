<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Http\Requests\CommentPostRequest;
use App\User;
use App\Post;

class CommentPost extends Model
{
    public function createCommentPost(CommentPostRequest $request)
    {
        $this->text = $request->text;
        $this->save();
    }

    public function updateCommentPost(CommentPostRequest $request, $id)
    {
        $comment = CommentPost::findOrFail($id);

        if ($request->text) {
            $this->text = $request->text;
        }

        $this->save();
    }

    public function showCommentPost($id)
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

    public function commentPost($user_id, $post_id)
    {
        User::findOrFail($user_id);
        Post::findOrFail($post_id);
        $this->user_id = $user_id;
        $this->post_id = $post_id;
        $this->save(); 
    }
}
