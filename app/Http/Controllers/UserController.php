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

    public function requestUser(Request $request) {
        $res = array();
        $today = date("y-m-d");
        $now = date("y-m-d h:i:s");
        $stands = Stand::where("status", "=", 0)
        ->whereHas("fair", function($q){
            $q->where("start_date", ">", $today);
        })->get();

        $talks = Talk::where("status", "=", 0)
        ->whereHas("room", function($q){
            $q->where("start_time", ">", $now);
        })->get();

        $res["stands"] = $stands;
        $res["talks"] = $talks;

        return response()->json($res);
    }

    public function bookedUser(Request $request) {
        $res = array();
        $today = date("y-m-d");
        $now = date("y-m-d h:i:s");
        $stands = Stand::where("status", "=", 1)
        ->whereHas("fair", function($q){
            $q->where("start_date", ">", $today);
        })->get();

        $talks = Talk::where("status", "=", 1)
        ->whereHas("room", function($q){
            $q->where("start_time", ">", $now);
        })->get();

        $res["stands"] = $stands;
        $res["talks"] = $talks;

        return response()->json($res);
    }

    public function activeUser(Request $request) {
        $res = array();
        $today = date("y-m-d");
        $now = date("y-m-d h:i:s");
        $stands = Stand::where("status", "=", 1)
        ->whereHas("fair", function($q){
            $q->where("start_date", ">", $today);
        })->get();

        $talks = Talk::where("status", "=", 1)
        ->whereHas("room", function($q){
            $q->where("start_time", ">", $now);
        })->get();

        $res["stands"] = $stands;
        $res["talks"] = $talks;

        return response()->json($res);
    }


}
