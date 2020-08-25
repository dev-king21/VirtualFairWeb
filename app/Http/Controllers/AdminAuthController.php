<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\AdminUser;
use Carbon\Carbon;
use Hash;
use Auth;

class AdminAuthController extends Controller
{
    public function login(Request $request)
    {
        /* config(["auth.guards.admin.driver" => "session"]);
        $credentials = ["email" => $request->post("key"), "password" => $request->post("password")];
        if (!Auth::guard('admin')->attempt($credentials))
            return response()->json(['error' => 'Unauthorized', $credentials]);  */
        
        $user = AdminUser::where('email', $request->post('key'))->first();
        if (!isset($user) || !Hash::check($request->post('password'), $user->password)) {
            return response()->json(['error' => 'Unauthorized']);
        }

        $tokenResult = $user->createToken('Virtual Fair Admin Api Token');
        $token = $tokenResult->token;
        if ($request->remember_me)
            $token->expires_at = Carbon::now()->addWeeks(1);
        
        $token->save();
        return response()->json([
            'key' => $user->email,
            'access_token' => $tokenResult->accessToken,
            'token_type' => 'Bearer',
            'expires_at' => Carbon::parse(
                $tokenResult->token->expires_at
            )->toDateTimeString()
        ]);
        
    }

    public function logout(Request $request)
    {
        $request->user()->token()->revoke();
        return response()->json([
            'message' => 'Successfully logged out'
        ]);
    }
}
