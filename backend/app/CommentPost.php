<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Http\Requests\CommentPostRequest;

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
}