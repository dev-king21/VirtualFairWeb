<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Country;

class CountryController extends Controller
{
    //
    public function show_country(Request $request){
        $res = array();
        $res["country"] = Country::all();
        return response()->json($res);
    }

    public function temp_add(Request $request){
        $res = array();
        foreach ($request->post("countries") as $item) {
            $ctry = new Country;
            $ctry->name = $item["name"];
            $ctry->code = $item["code"];
            $ctry->save();
        }
        $res["status"] = "ok";

        return response()->json($res);
    }
}
