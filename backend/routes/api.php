<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

//
// Passport Routes
//
Route::post('register', 'API\PassportController@register');
Route::post('login', 'API\PassportController@login');

Route::group(['middleware'=>'auth:api'], function(){
    
    //PassportController
    Route::get('logout', 'API\PassportController@logout');
    Route::get('getUserDetails', 'API\PassportController@getDetails');
    
    //UserController
    Route::get('user/posts', 'UserController@viewPosts');
    Route::post('user/post', 'UserController@publishPost');
    Route::post('user/commentPost', 'UserController@commentPost');
    Route::put('user/follow/{following_id}', 'UserController@follow');
    Route::put('user/like/{post_id}', 'UserController@like');

    // PostsController
    Route::get('post/{id}', 'PostController@showPost');
    Route::get('post/{id}/comments', 'PostController@showComments');
    Route::get('post/{id}/likes', 'PostController@showLikes');
    Route::get('post/{id}/likes/users', 'PostController@showUsersLikes');
    Route::put('post/{id}', 'PostController@updatePost')->middleware('checkPermission');
    Route::delete('post/{id}', 'PostController@deletePost')->middleware('checkPermission');

    //CommentsController
    Route::put('commentPost/{id}', 'CommentPostController@updateCommentPost')->middleware('checkPermission');
    Route::delete('commentPost/{id}', 'CommentPostController@deleteCommentPost')->middleware('checkPermission');
    
});