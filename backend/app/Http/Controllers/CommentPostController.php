<?php

namespace App\Http\Controllers;

use App\Http\Requests\CommentPostRequest;
use App\CommentPost;

class CommentPostController extends Controller
{
    public function createCommentPost(CommentPostRequest $request)
    {
        $comment = new CommentPost;
        $comment->createCommentPost($request);
        return response()->json($comment, 201);
    }

    public function showCommentPost($id)
    {
        $comment = new CommentPost;
        $comment = $comment->showCommentPost($id);
        return response()->json($comment, 200);
    }

    public function listCommentsPost()
    {
        $comments = new CommentPost;
        $comments = $comments->listCommentsPost();
        return response()->json([$comments], 200);
    } 

    public function updateCommentPost(CommentPostRequest $request, $id)
    {
        $comment = CommentPost::findOrFail($id);
        $comment->updateCommentPost($request);
        return response()->json($comment, 200);
    }

    public function deleteCommentPost($id)
    {
        $comment = new CommentPost;
        $comment->deleteCommentPost($id);
        return response()->json("Comentário ".$id." deletado!", 202);
    }
}
