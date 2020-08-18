<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRequest;
use App\Http\Requests\PostRequest;
use App\Http\Requests\CommentPostRequest;
use App\User;
use App\Post;
use App\CommentPost;
use Auth;

class UserController extends Controller
{
    public function createUser(UserRequest $request)
    {
        $user = new User;
        $user->createUser($request);
        return response()->json($user, 201);
    }

    public function showUser($id)
    {
        $user = User::showUser($id);
        return response()->json($user, 200);
    }

    public function listUsers()
    {
        $users = User::listUsers();
        return response()->json([$users], 200);
    }

    public function updateUser(UserRequest $request, $id)
    {
        $user = User::findOrFail($id);
        $user->updateUser($request, $id);
        return response()->json($user, 200);
    }

    public function deleteUser($id)
    {
        $user = User::deleteUser($id);
        return response()->json($user, 202);
    }

    public function follow($following_id)
    {
        $follower_id = Auth::user()->id;
        $following = new User;
        $response = $following->follow($following_id, $follower_id);
        return response()->json($response);
    }

    public function publishPost(PostRequest $request)
    {
        $post = new Post;
        $post->createPost($request);
        return response()->json($post);
    }

    public function commentPost(CommentPostRequest $request)
    {
      $comment = new CommentPost;
      $comment->createCommentPost($request);
      return response()->json($comment);
    }

    public function like($post_id)
    {
        $response = User::like($post_id);
        return response()->json($response);
    }

    public function viewPosts()
    {
        $user = Auth::user();
        $following = $user->following;
        $posts = [];
        $i = 0;

        foreach ($following as $friend) {
            $posts[$i]= $friend->posts;
            $i++;
        }
        
        return response()->json($posts, 200);
    }
}
