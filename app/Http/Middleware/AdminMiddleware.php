<?php

namespace App\Http\Middleware;

use Closure;

class AdminMiddleware
{
    public function handle($request, Closure $next)
    {
        $user = $request->user();
        if (!isset($user)) {
            return response()->json(["status" => "error", "message"=> "not_admin"], 401);
        }
        if ( $user->role !== 'admin' && $user->role !== 'super' ) {
            return response()->json(["status" => "error", "message"=> "not_admin"], 401);
        }
        return $next($request);
    }
}
