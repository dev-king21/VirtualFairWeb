<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Fair;
use App\Stand;
use App\Country;
use App\StandLocation;

class FairController extends Controller
{
    //

    public function all_fairs() {
        $res = array();
        $res["fairs"] = Fair::where("status", 1)->get();
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
        $query["status"] = 1;
        $res["fairs"] = Fair::where($query)->get();
        return response()->json($res);
    }

    public function next_fairs(Request $request) {
        $res = array();
        $now = date("y-m-d");
        $query = [
            ["start_date", ">", $now] 
        ]; 
        $query["status"] = 1;
        $res["fairs"] = Fair::where($query)->get();
        return response()->json($res);
    }

    public function past_fairs(Request $request) {
        $res = array();
        $now = date("y-m-d");
        $query = [
            ["end_date", "<", $now] 
        ]; 
        $query["status"] = 1;
        $res["fairs"] = Fair::where($query)->get();
        return response()->json($res);
    }

    public function create_fair(Request $request) {
        $res = array();
        $fair = new Fair;
        $fair->name = $request->post("name");
        $fair->fair_type_id = $request->post("fair_type_id");

        $fair->start_date = $request->post("start_date");
        $fair->end_date = $request->post("end_date");
        $fair->status = $request->post("status");
        $fair->save();

        $countries = Country::select('id')->where("status", 1)->get();
        $stand_locations = StandLocation::select('id')->where("fair_type_id", $fair->fair_type_id)->get();
        foreach($countries as $country) {
            foreach ($stand_location as $location){
                $stand = new Stand;
                $stand->fair_id = $fair->id;
                $stand->country_id = $country->id;
                $stand->stand_location_id = $location->id;
                $stand->save();
            }
        }        


        $res["status"] = "ok";
        return response()->json($res);
    }

    public function update_fair(Request $request, $id) {
        $res = array();
        $fair = Fair::whereId($id)->update($request->post());
        $res["status"] = "ok";
        return response()->json($res);
    }

    public function get_countries(Request $request, $fair_id = 0) {
        $res = array();
        if ($fair_id == 0) {
            $now = date("y-m-d");
            $query = [
                ["start_date", "<=", $now], 
                ["end_date", ">=", $now]
            ]; 
            $query["status"] = 1;
            $fair = Fair::with('fair_type')->where($query)->first();
        } else 
            $fair = Fair::with('fair_type')->find($fair_id);

        if ($fair == null)
        {
            $res["status"] = "No current fair";
        } else {
            $res["status"] = "ok";
            $res["fair"] = $fair;
            $res["countries"] = Stand::select('country_id')->with(['country'=> function($query){
                $query->select(['id', 'name', 'code'])->get();
            }])->where("fair_id", $fair->id)->groupBy("country_id")->get();
        }

        return response()->json($res);

    }

    public function get_stands(Request $request, $fair_id, $country_id = 0) {
        if (!isset($fair_id) || $fair_id == 0)
        {
            $res["status"] = "error";
            $res["msg"] = "unknown fair";
            return response()->json($res);
        }
        if (!isset($country_id) || $country_id == 0)
        {
            $res["status"] = "error";
            $res["msg"] = "unknown country";
            return response()->json($res);
        }

        $res["fair"] = Fair::with('fair_type')->find($fair_id);
        $res["country"] = Country::find($country_id);
        $res["stands"] = Stand::with(['stand_location'=> function($query) {
            $query->with('stand_type')->get();
        }])->where([
            "fair_id"=> $fair_id,
            "country_id"=> $country_id
        ])->get();

        return response()->json($res);

    }

    public function get_stand(Request $request, $fair_id, $country_id, $stand_id) {
        if (!isset($fair_id) || $fair_id == 0)
        {
            $res["status"] = "error";
            $res["msg"] = "unknown fair";
            return response()->json($res);
        }
        if (!isset($country_id) || $country_id == 0)
        {
            $res["status"] = "error";
            $res["msg"] = "unknown country";
            return response()->json($res);
        }

        $res["fair"] = Fair::find($fair_id);
        $res["country"] = Country::find($country_id);
        $res["stand"] = Stand::with(['appointments', 'gallerys', 'portfolios', 'files', 'contact', 'stand_contents'=> function($query) {
            $query->with('stand_type_item')->get();
        }])->find($stand_id);
        
        $res["stand_type"] = StandLocation::with('stand_type') -> find($res["stand"]->stand_location_id)->stand_type;
        return response()->json($res);

    }

    public function requestFair(Request $request) {
        $res = array();
        
        $stands = Stand::with(['fair'])->where("status", 0)
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
        $stands = Stand::with(['fair'])->where("status", 1)
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
        $stands = Stand::with(['fair'])->where("status", 1)
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

        $stands = Stand::with(['fair'])->where("status", 1)
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
        $countries = Country::where("status", 1)->get();
        $res["stands"] = Stand::with(['fair', 'user', 'country'])->where("fair_id", $id)->get();
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
