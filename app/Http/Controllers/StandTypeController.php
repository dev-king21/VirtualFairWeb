<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\StandType;

class StandTypeController extends Controller
{
    //
    public function show(){
        $res = array();
        $res["stand_types"] = StandType::all();
        return response()->json($res);
    }

    public function update(Request $request, $id){
        $res = array();
        $standType = StandType::whereId($id)->update($request->post());
        $res["status"] = "ok";
        return response()->json($res);
    }

    public function create(Request $request){
        $res = array();
        $standType = new StandType;
        $standType->stand_location_id = $request->post("stand_location_id");
        $standType->background = $request->post("background");
        $standType->name = $request->post("name");
        $standType->save();
        $res["status"] = "ok";
        return response()->json($res);
    }
}
