<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

//
// Passport Routes
//
Route::post('register', 'API\PassportController@register');
Route::post('login', 'API\PassportController@login');

Route::group(['middleware'=>'auth:api'], function(){
    Route::get('logout', 'API\PassportController@logout');
    Route::get('getUserDetails', 'API\PassportController@getDetails');
// Posts
    Route::post('dev/post', 'PostController@createPost');
    Route::put('dev/post/{id}', 'PostController@updatePost');
    Route::delete('dev/post/{id}', 'PostController@deletePost')->middleware('admin');

//Comments
    Route::post('dev/commentPost', 'CommentPostController@createCommentPost');
    Route::put('dev/commentPost/{id}', 'CommentPostController@updateCommentPost');
    Route::delete('dev/commentPost/{id}', 'CommentPostController@deleteCommentPost')->middleware('admin');

// Seguir outros usuários
    Route::put('follow/{following_id}/{follower_id}', 'UserController@follow');
    Route::put('unfollow/{following_id}/{follower_id}', 'UserController@unfollow');

// Publicar posts
    Route::post('publishPost/{id}', 'UserController@publishPost');

// Comentar posts
    Route::post('commentPost/{user_id}/{post_id}', 'UserController@commentPost');

// Curtir posts
    Route::put('like/{post_id}', 'UserController@like');
    Route::put('unlike/{post_id}', 'UserController@unlike');

// Visualizar posts
     Route::get('view', 'PostController@viewPost');

});

//
// DEV CRUD Users
//

Route::get('dev/user/{id}', 'UserController@showUser');
Route::get('dev/user', 'UserController@listUsers');
Route::post('dev/user', 'UserController@createUser');
Route::put('dev/user/{id}', 'UserController@updateUser');
Route::delete('dev/user/{id}', 'UserController@deleteUser');

//
// DEV CRUD Posts
//

Route::get('dev/post/{id}', 'PostController@showPost');
Route::get('dev/post', 'PostController@listPosts');

//
// DEV CRUD Comments
//

Route::get('dev/commentPost/{id}', 'CommentPostController@showCommentPost');
Route::get('dev/commentPost', 'CommentPostController@listCommentsPost');


