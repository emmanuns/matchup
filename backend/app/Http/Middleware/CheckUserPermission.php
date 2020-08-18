<?php

namespace App\Http\Middleware;

use Closure;
use Auth;
use App\User;

class CheckUserPermission
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $authenticated_user = Auth::user();
        $user = User::showUser($request->id);


        if($request->method() === 'PUT') {
            if($authenticated_user->id != $user->id)
                return response()->json('Permissão negada para realizar a operação.', 401);
        }

        if($request->method() === 'DELETE') {
            if($authenticated_user->admin == 1 || $authenticated_user->admin == true)
                return $next($request);
                
            if($authenticated_user->id != $user->id)
                return response()->json('Permissão negada para realizar a operação.', 401);
        }

        return $next($request);
    }
}
