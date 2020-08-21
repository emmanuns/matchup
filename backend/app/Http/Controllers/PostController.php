<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\PostRequest;
use App\Post;
use Auth;

class PostController extends Controller
{
    public function createPost(PostRequest $request)
    {
        $post = new Post;
        $post->createPost($request);
        return response()->json($post, 201);
    }

    public function showPost($id)
    {
        $post = Post::showPost($id);
        return response()->json($post, 200);
    }

    public function listPosts()
    {
        $posts = Post::listPosts();
        return response()->json([$posts], 200);
    } 

    public function updatePost(PostRequest $request, $id)
    {   
        $post = Post::findOrFail($id);
        $post->updatePost($request);
        return response()->json($post, 200);
    }

    public function deletePost($id)
    {
        Post::deletePost($id);
        return response()->json("Post ".$id." deletado!", 202);
    }

    public function showComments($id)
    {
        $post = Post::showPost($id);
        return response()->json($post->comments, 200);
    }

    public function showLikes($id)
    {
        $post = Post::showPost($id);
        return response()->json($post->userLikes()->count(), 200);
    }

    public function showUsersLikes($id)
    {
        $post = Post::showPost($id);
        return response()->json($post->userLikes, 200);
    }

    public function searchPost(Request $request){
        $search = $request->text;
        $posts = Post::where('text','like', '%'.$search.'%')->orderBy('created_at', 'desc')->get();
        return response()->json($posts, 200);
    }
}
