<?php

namespace App\Http\Middleware;

use Closure;

class SuperAdminMiddleware
{
    public function handle($request, Closure $next)
    {
        $user = $request->user();
        if (!isset($user)) {
            return response()->json(["status" => "error", "message"=> "not_super"], 401);
        }
        if ( $user->role !== 'super' ) {
            return response()->json(["status" => "error", "message"=> "not_super"], 401);
        }
        
        return $next($request);
    }
}
