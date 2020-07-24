<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Stand;
use App\Talk;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all();
        return response()->json(
            [
                'status' => 'success',
                'users' => $users->toArray()
            ], 200);
    }

    public function show(Request $request, $id)
    {
        $user = User::find($id);
        return response()->json(
            [
                'status' => 'success',
                'user' => $user->toArray()
            ], 200);
    }

    public function allUser()
    {
        $res = array();
        $res["users"] = User::all();
        
        return response()->json($res);

    }

    public function createUser(Request $request){
        $res = array();
        $user = new User;
        $user->username = $request->post("username");
        $user->email = $request->post("email");
        $user->name = $request->post("name");
        $user->country = $request->post("country");
        $user->password = $request->post("password");
        $user->avatar = $request->post("avatar");

        $user->email_verified_at = $request->post("email_verified_at");
        
        $user->save();

        $res["status"] = "ok";
        return response()->json($res);
    }
    
    /* public function requestUser(Request $request) {
        $res = array();
        
        $stands = Stand::with(['fair', 'user'])->where("status", "=", 0)
        ->whereHas("fair", function($q){
            $today = date("y-m-d");
            $query = [
                ["start_date", ">", $today]
            ];
            $q->where($query);
        })->get();

        $now = date("y-m-d h:i:s");
        $query = [
            ["start_time", ">", $now],
            ["status", "=", 0]
        ];
        $talks = Talk::with(['room', 'user'])->where($query)->get();

        $res["stands"] = $stands;
        $res["talks"] = $talks;

        return response()->json($res);
    }

    public function bookedUser(Request $request) {
        $res = array();
        $stands = Stand::with(['fair', 'user'])->where("status", "=", 1)
        ->whereHas("fair", function($q){
            $today = date("y-m-d");
            $query = [
                ["start_date", ">", $today]
            ];
            $q->where($query);
        })->get();

        $now = date("y-m-d h:i:s");
        $query = [
            ["start_time", ">", $now],
            ["status", "=", 1]
        ];
        $talks = Talk::with(['room', 'user'])->where($query)->get();

        $res["stands"] = $stands;
        $res["talks"] = $talks;

        return response()->json($res);
    }

    public function activeUser(Request $request) {
        $res = array();
        $stands = Stand::with(['fair', 'user'])->where("status", "=", 1)
        ->whereHas("fair", function($q){
            $today = date("y-m-d");
            $query = [
                ["start_date", "<=", $today],
                ["end_date",">=", $today]
            ];
            $q->where($query);
        })->get();

        $now = date("y-m-d h:i:s");
        $query = [
            ["start_time", "<=", $now],
            ["end_time",">=", $now], 
            ["status", "=", 1]
        ];
        $talks = Talk::with(['room', 'user'])->where($query)->get();

        $res["stands"] = $stands;
        $res["talks"] = $talks;

        return response()->json($res);
    }

    public function pastUser(Request $request) {
        $res = array();

        $stands = Stand::with(['fair', 'user'])->where("status", "=", 1)
        ->whereHas("fair", function($q){
            $today = date("y-m-d");
            $query = [
                ["start_date", ">", $today]
            ];
            $q->where($query);
        })->get();

        $now = date("y-m-d h:i:s");
        $query = [
            ["start_time", ">", $now],
            ["status", "=", 1]
        ];
        $talks = Talk::with(['room', 'user'])->where($query)->get();

        $res["stands"] = $stands;
        $res["talks"] = $talks;

        return response()->json($res);
    } */


}
