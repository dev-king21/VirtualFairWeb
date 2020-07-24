<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Fair;
use App\Stand;
use App\Country;

class FairController extends Controller
{
    //

    public function all_fairs() {
        $res = array();
        $res["fairs"] = Fair::all();
        return response()->json($res);
    }

    public function fairs_year(Request $request, $year) {
        $res = array();
        if (!isset($year)) 
            $year = date("y");
        $res["year"] = $year;
        $res["fairs"] = Fair::where("opened_year",  $year)->get();
        return response()->json($res);
    }

    public function current_fairs(Request $request) {
        $res = array();
        $now = date("y-m-d");
        $query = [
            ["start_date", "<=", $now], 
            ["end_date", ">=", $now]
        ]; 
        $res["fairs"] = Fair::where($query)->get();
        return response()->json($res);
    }

    public function next_fairs(Request $request) {
        $res = array();
        $now = date("y-m-d");
        $query = [
            ["start_date", ">", $now] 
        ]; 
        $res["fairs"] = Fair::where($query)->get();
        return response()->json($res);
    }

    public function past_fairs(Request $request) {
        $res = array();
        $now = date("y-m-d");
        $query = [
            ["end_date", "<", $now] 
        ]; 
        $res["fairs"] = Fair::where($query)->get();
        return response()->json($res);
    }

    public function create_fair(Request $request) {
        $res = array();
        $fair = new Fair;
        $fair->name = $request->post("name");
        $fair->opened_year = $request->post("opened_year");
        $fair->start_date = $request->post("start_date");
        $fair->end_date = $request->post("end_date");
        $fair->save();

        $res["status"] = "ok";
        return response()->json($res);
    }

    public function update_fair(Request $request, $id) {
        $res = array();
        $fair = Fair::whereId($id)->update($request->post());
        $res["status"] = "ok";
        return response()->json($res);
    }


    public function requestFair(Request $request) {
        $res = array();
        
        $stands = Stand::with(['fair'])->where("status", "=", 0)
        ->whereHas("fair", function($q){
            $today = date("y-m-d");
            $query = [
                ["start_date", ">", $today]
            ];
            $q->where($query);
        })->get();

        $res["stands"] = $stands;
        return response()->json($res);
    }

    public function bookedFair(Request $request) {
        $res = array();
        $stands = Stand::with(['fair'])->where("status", "=", 1)
        ->whereHas("fair", function($q){
            $today = date("y-m-d");
            $query = [
                ["start_date", ">", $today]
            ];
            $q->where($query);
        })->get();

        $res["stands"] = $stands;

        return response()->json($res);
    }

    public function activeFair(Request $request) {
        $res = array();
        $stands = Stand::with(['fair'])->where("status", "=", 1)
        ->whereHas("fair", function($q){
            $today = date("y-m-d");
            $query = [
                ["start_date", "<=", $today],
                ["end_date",">=", $today]
            ];
            $q->where($query);
        })->get();

        $res["stands"] = $stands;

        return response()->json($res);
    }

    public function pastFair(Request $request) {
        $res = array();

        $stands = Stand::with(['fair'])->where("status", "=", 1)
        ->whereHas("fair", function($q){
            $today = date("y-m-d");
            $query = [
                ["start_date", ">", $today]
            ];
            $q->where($query);
        })->get();

        $res["stands"] = $stands;

        return response()->json($res);
    }

    public function fairStands(Request $request, $id){
        $res = array();
        $countries = Country::where("status", "=", 1)->get();
        $res["stands"] = Stand::with(['fair', 'user', 'country'])->where("fair_id", "=", $id)->get();
        $res["countries"] = $countries;
        return response()->json($res);
    }

    public function countryStands(Request $request, $id, $country_id = 0){
        $res = array();
        $query = ["fair_id"=> $id];
        if ($country_id != 0)
            $query["country_id"] = $country_id;
        $res["stands"] = Stand::with(['fair', 'user', 'country'])->where($query)->get();
        return response()->json($res);
    }

}
