<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//
// Passport Routes
//
Route::post('register', 'API\PassportController@register');
Route::post('login', 'API\PassportController@login');

Route::group(['middleware'=>'auth:api'], function(){

    //
    // Login/User operations
    //
    
    Route::get('logout', 'API\PassportController@logout');
    Route::get('getUserDetails', 'API\PassportController@getDetails');

    //
    // Users routes
    //

    Route::get('user/{id}', 'UserController@showUser');
    Route::get('user', 'UserController@listUsers')->middleware('checkPermission');
    Route::post('user', 'UserController@createUser')->middleware('checkPermission');
    Route::put('user/{id}', 'UserController@updateUser')->middleware('checkPermission');
    Route::delete('user/{id}', 'UserController@deleteUser')->middleware('checkPermission');

    //
    // Posts routes
    //
    
    /*
    Route::get('post/{id}', 'PostController@showPost');
    Route::get('post', 'PostController@listPosts');
    Route::post('post', 'PostController@createPost');
    Route::put('post/{id}', 'PostController@updatePost');
    Route::delete('post/{id}', 'PostController@deletePost');
    Route::get('post/comments', 'PostController@listPostComments');
    */

    //
    // Comments routes
    //

    /*
    Route::get('comment/{id}', 'CommentController@showComment');
    Route::get('comment', 'CommentController@listComments');
    Route::post('comment', 'CommentController@createComment');
    Route::put('comment/{id}', 'CommentController@updateComment');
    Route::delete('comment/{id}', 'CommentController@deleteComment');
    */

});


/* Dev only routes */


//
// Users routes
//

Route::get('dev/user/{id}', 'UserController@showUser');
Route::get('dev/user', 'UserController@listUsers');
Route::post('dev/user', 'UserController@createUser');
Route::put('dev/user/{id}', 'UserController@updateUser');
Route::delete('dev/user/{id}', 'UserController@deleteUser');

//
// Posts routes
//

/*
Route::get('dev/post/{id}', 'PostController@showPost');
Route::get('dev/post', 'PostController@listPosts');
Route::post('dev/post', 'PostController@createPost');
Route::put('dev/post/{id}', 'PostController@updatePost');
Route::delete('dev/post/{id}', 'PostController@deletePost');
Route::get('post/comments', 'PostController@listPostComments');
*/

//
// Comments routes
//

/*
Route::get('dev/comment/{id}', 'CommentController@showComment');
Route::get('dev/comment', 'CommentController@listComments');
Route::post('dev/comment', 'CommentController@createComment');
Route::put('dev/comment/{id}', 'CommentController@updateComment');
Route::delete('dev/comment/{id}', 'CommentController@deleteComment');
*/


