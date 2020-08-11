<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRequest;
use App\Http\Requests\PostRequest;
use App\Http\Requests\CommentPostRequest;
use App\User;
use App\Post;
use App\CommentPost;

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
        $user = new User;
        $user = $user->showUser($id);
        return response()->json($user, 200);
    }

    public function listUsers()
    {
        $users = new User;
        $users = $users->listUsers();
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
        $user = new User;
        $user = $user->deleteUser($id);
        return response()->json($user, 202);
    }

    public function follow($following_id, $follower_id)
    {
        $following = new User;
        $response = $following->follow($following_id, $follower_id);
        return response()->json($response);
    }

    public function unfollow($following_id, $follower_id)
    {
        $following = new User;
        $response = $following->unfollow($following_id, $follower_id);
        return response()->json($response);
    }

    public function publishPost(PostRequest $request, $id)
    {
        $post = new Post;
        $post->createPost($request);
        $post->publishPost($id);
        return response()->json($post);
    }

    public function commentPost(CommentPostRequest $request, $user_id, $post_id)
    {
      $comment = new CommentPost;
      $comment->createCommentPost($request);
      $comment->commentPost($user_id, $post_id);
      return response()->json($comment);
    }

    public function like($user_id, $post_id)
    {
        $liking = new User;
        $response = $liking->like($user_id, $post_id);
        return response()->json($response);
    }

    public function unlike($user_id, $post_id)
    {
        $liking = new User;
        $response = $liking->unlike($user_id, $post_id);
        return response()->json($response);
    }
}
