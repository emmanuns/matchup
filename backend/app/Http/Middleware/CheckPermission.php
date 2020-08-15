<?php

namespace App\Http\Middleware;

use Closure;
use Auth;

class CheckPermission
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
        $user = Auth::user();

        //Checa se o usuário é admin
        if($user->admin == 1 || $user->admin == true)
            return $next($request);

        //Checa se a operação realizada pelo usuário pertence a ele
        if(!isset($request->id) || $request->id == NULL || $user->id != $request->id)
            return response()->json('Permissão negada para realizar a operação.', 401);

        return $next($request);
    }
}
