<?php

namespace App\Http\Middleware;
use Closure;

class AdminAuthenticate
{
    public function handle($request, Closure $next)
    {
        /*auth()->guard('admin')->user();
        return response()->json(["user" => auth()->guard('admin')->user()]);
        $user = auth()->guard('admin')->user();
        if (!isset($user)) return response()->json(["error" => "unknown_user"]);*/
        config(['auth.guards.api.provider' => 'admin_users']);
        return $next($request);
    }
}
