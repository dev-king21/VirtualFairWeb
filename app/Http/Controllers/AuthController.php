<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use Validator;
use App\User;
use Carbon\Carbon;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        
        $v = Validator::make($request->all(), [
            'first_name' => 'required',
            'last_name' => 'required',
            'phone' => 'required|min:8',
            'company' => 'required',
            'address' => 'required',
            'country' => 'required',
            'region' => 'required',
            'email' => 'required|email',
            'password'  => 'required|min:8',
            'type'  => 'required',
        ]);
        if ($v->fails())
        {
            return response()->json([
                'status' => 'error',
                'errors' => $v->errors()
            ], 422);
        }

        
        
        $user = new User;
        $user->first_name = $request->post('first_name');
        $user->last_name = $request->post('last_name');
        $user->phone = $request->post('phone');
        $user->address = $request->post('address');
        $user->company = $request->post('company');
        $user->country = $request->post('country');
        $user->region = $request->post('region');
        $user->email = $request->post('email');
        $user->type = $request->post('type');
        $user->password = bcrypt($request->post('password'));
        if (isset($request->avatar_file)) {
            $b_fileName =  md5(time()).'.'.$request->avatar_file->extension();  
            $request->avatar_file->move(public_path('fair_image'), $b_fileName);
            $user->avatar = $b_fileName;
        }
        $user->save();
        
        return response()->json(['status' => 'success'], 200);
    }

    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');
        if (!Auth::attempt($credentials))
            return response()->json(['error' => 'Unauthorized'], 401);
        
        $user = $request->user();
        $tokenResult = $user->createToken('Virtual Fair Web Api Token');
        $token = $tokenResult->token;
        if ($request->remember_me)
            $token->expires_at = Carbon::now()->addWeeks(1);
        
        $token->save();
        return response()->json([
            'user' => $user,
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
  
    public function user(Request $request)
    {
        return response()->json($request->user());
    }

    public function save(Request $request)
    {
        $v = Validator::make($request->all(), [
            'first_name' => 'required',
            'last_name' => 'required',
            'phone' => 'required|min:8',
            'company' => 'required',
            'address' => 'required',
            'country' => 'required',
            'region' => 'required',
            'email' => 'required|email'
        ]);
        if ($v->fails())
        {
            return response()->json([
                'status' => 'error',
                'errors' => $v->errors()
            ], 422);
        }
        
        $user = $request->user();
        $user->first_name = $request->post('first_name');
        $user->last_name = $request->post('last_name');
        $user->phone = $request->post('phone');
        $user->address = $request->post('address');
        $user->company = $request->post('company');
        $user->country = $request->post('country');
        $user->region = $request->post('region');
        $user->email = $request->post('email');
        $user->type = $request->post('type');
        if ($request->post('password') != '')
            $user->password = bcrypt($request->post('password'));
        
        $user->save();
        unset($user->password);
        
        return response()->json(['status' => 'success', 'user'=> $user], 200);
    }

}
