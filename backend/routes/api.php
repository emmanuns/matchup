<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

//
// Mail Routes
//
Route::get('confirmAccount/{id}', 'UserController@confirmAccount');

//
// Passport Routes
//

Route::post('register', 'API\PassportController@register');
Route::post('login', 'API\PassportController@login');

//
// Guest Routes
//

//Posts Controller
Route::get('post', 'PostController@listPosts');
Route::get('post/{id}', 'PostController@showPost');
Route::get('post/{id}/comments', 'PostController@showComments');
Route::get('post/{id}/likes', 'PostController@showLikes');
Route::get('post/{id}/likes/users', 'PostController@showUsersLikes');

//User Controller
Route::get('user/profile/{id}', 'UserController@showUser');

//
// Authenticated Routes
//

Route::group(['middleware'=>'auth:api'], function(){
    
    //PassportController
    Route::get('logout', 'API\PassportController@logout');
    Route::get('getUserDetails', 'API\PassportController@getDetails');
    
    //UserController
    Route::get('user/posts', 'UserController@viewPosts');
    Route::get('user/followers', 'UserController@getMyFollowers');
    Route::get('user/following', 'UserController@getMyFollowings');
    Route::get('user/{id}/followers', 'UserController@getFollowers');
    Route::get('user/{id}/following', 'UserController@getFollowings');
    Route::post('user/post', 'UserController@publishPost');
    Route::post('user/commentPost', 'UserController@commentPost');
    Route::put('user/{id}', 'UserController@updateUser')->middleware('checkUserPermission');
    Route::put('user/follow/{following_id}', 'UserController@follow');
    Route::put('user/like/{post_id}', 'UserController@like');
    Route::delete('user/{id}', 'UserController@deleteUser')->middleware('checkUserPermission');
    
    // PostsController
    Route::put('post/{id}', 'PostController@updatePost')->middleware('checkPostPermission');
    Route::delete('post/{id}', 'PostController@deletePost')->middleware('checkPostPermission');

    //CommentsController
    Route::put('commentPost/{id}', 'CommentPostController@updateCommentPost')->middleware('checkCommentPermission');
    Route::delete('commentPost/{id}', 'CommentPostController@deleteCommentPost')->middleware('checkCommentPermission');
    
});