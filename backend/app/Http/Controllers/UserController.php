<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\UserRequest;
use App\User;

class UserController extends Controller
{
    public function createUser(UserRequest $request)
    {
        $user = new User;
        $user->createUser($request);
        return response()->json($user);
    }
    public function showUser($id)
    {
        $user = User::findOrFail($id);
        return response()->json($user);
    }
    public function listUser()
    {
        $user = User::all();
        return response()->json([$user]);
    } 
    public function updateUser(UserRequest $request, $id)
    {
        $user = User::findOrFail($id);
        $user->updateUser($request);
        return response()->json($user);
    }
    public function deleteUser($id)
    {
        User::destroy($id);
        return response()->json(['Usuário deletado!']);
    }
}
