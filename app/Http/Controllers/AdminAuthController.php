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
        
        $admin = AdminUser::where('email', $request->post('key'))->first();
        if (!isset($admin) || !Hash::check($request->post('password'), $admin->password)) {
            return response()->json(['error' => 'Unauthorized']);
        }
        $admin->load('user');

        $tokenResult = $admin->createToken('Virtual Fair Admin Api Token');
        $token = $tokenResult->token;
        if ($request->remember_me)
            $token->expires_at = Carbon::now()->addWeeks(1);
        
        $token->save();
        return response()->json([
            'key' => $admin->email,
            'user' => $admin->user,
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
