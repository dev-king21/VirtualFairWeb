<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Country;

class CountryController extends Controller
{
    //
    public function show(Request $request){
        $res = array();
        $res["countries"] = Country::all();
        return response()->json($res);
    }

    public function temp_add(Request $request){
        $res = array();
        foreach ($request->post() as $key => $item) {
            $ctry = new Country;
            $ctry->name = $item["name"];
            $ctry->phone = $item["phone"];
            $ctry->continent = $item["continent"];
            $ctry->capital = $item["capital"];
            $ctry->currency = $item["currency"];

            $ctry->code = $key;

            $ctry->save();
        }
        $res["status"] = "ok";

        return response()->json($res);
    }

    public function activate(Request $request, $status) {
        $countries_list = $request->post("countries");
        $country = Country::whereIn("id", $countries_list)->update(["status"=>$status]);
        
        return $this->show($request);
    }

    public function update(Request $request, $id){
        $res = array();
        $country = Country::whereId($id)->update($request->post());
        $res["status"] = "ok";
        return response()->json($res);
    }
}
