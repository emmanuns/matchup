<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Http\Requests\CommentRequest;

class Comment extends Model
{   
    public function createComment(CommentRequest $request)
    {
        $this->text = $request->text;
        $this->save();
    }

    public function updateComment(CommentRequest $request, $id)
    {
        $comment = Comment::findOrFail($id);
       
        if ($request->text) {
            $this->text = $request->text;
        }

        $this->save();
    }

    public function showComment($id)
    {
        $comment = Comment::findOrFail($id);
        return $comment;
    }

    public function listComments()
    {
        return $this->all();
    }

    public function deleteComment($id)
    {
        $comment = Comment::findOrFail($id);        
        Comment::destroy($id);       
    }
}