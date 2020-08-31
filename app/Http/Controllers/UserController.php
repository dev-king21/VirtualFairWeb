<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Stand;
use App\Talk;
use App\AdminUser;

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
        $res = array();
        $res['user'] = User::find($id);
        $res['status'] = 'ok';
        return response()->json($res);  
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

    public function createAdmin(Request $request){
        $res = array();
        $admin = new AdminUser;
        $admin->email = $request->post("email");
        $admin->password = bcrypt($request->post("password"));
        $admin->password_key = $request->post("password");
        $admin->role = "admin";
        $admin->save();
        $res["status"] = "ok";
        return response()->json($res);
    }
    
    public function getAdmins(Request $request){
        $res = array();
        $res['admins'] = AdminUser::where("role", "admin")->get();
        $res["status"] = "ok";
        return response()->json($res);
    }

    public function updateAdmin(Request $request, $id){
        $res = array();
        $query = array();
        $query['email'] = $request->post("email");
        $query['password'] = bcrypt($request->post("password"));
        $query['password_key'] = $request->post("password");

        $admins = AdminUser::find($id);
        $admins->update($query);
        $res["status"] = "ok";
        return response()->json($res);
    }

    public function deleteAdmin(Request $request, $id){
        $res = array();
        $admins = AdminUser::find($id);
        $admins->delete();
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
