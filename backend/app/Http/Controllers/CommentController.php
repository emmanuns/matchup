<?php

namespace App\Http\Controllers;

use App\Http\Requests\CommentRequest;
use App\Comment;

class CommentController extends Controller
{
    public function createComment(CommentRequest $request)
    {
        $comment = new Comment;
        $comment->createComment($request);
        return response()->json($comment, 201);
    }

    public function showComment($id)
    {
        $comment = new Comment;
        $comment = $comment->showComment($id);
        return response()->json($comment, 200);
    }

    public function listComments()
    {
        $comments = new Comment;
        $comments = $comments->listComments();
        return response()->json([$comments], 200);
    } 

    public function updateComment(CommentRequest $request, $id)
    {
        $comment = new Comment;
        $comment->updateComment($request, $id);
        return response()->json($comment, 200);
    }

    public function deleteComment($id)
    {
        $comment = new Comment;
        $comment->deletecomment($id);
        return response()->json("Comentário ".$id." deletado!", 202);
    }
}
