<?php

namespace App\Http\Middleware;

use Closure;
use Auth;
use App\Post;

class CheckPostPermission
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
        $post = Post::showPost($request->id);

        if($request->method() === 'PUT') {
            if($user->id != $post->user_id)
                return response()->json('Permissão negada para realizar a operação.', 401);
        }

        if($request->method() === 'DELETE') {
            if($user->admin == 1 || $user->admin == true)
                return $next($request);
                
            if($user->id != $post->user_id)
                return response()->json('Permissão negada para realizar a operação.', 401);
        }

        return $next($request);
    }
}
