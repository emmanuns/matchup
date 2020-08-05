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
    Route::get('logout', 'API\PassportController@logout');
    Route::get('getUserDetails', 'API\PassportController@getDetails');
});

//
// CRUD Users
//

Route::get('user/{id}', 'UserController@showUser');
Route::get('user', 'UserController@listUser');
Route::post('user', 'UserController@createUser');
Route::put('user/{id}', 'UserController@updateUser');
Route::delete('user/{id}', 'UserController@deleteUser');


