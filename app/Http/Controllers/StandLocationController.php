<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\StandLocation;

class StandLocationController extends Controller
{
    //
    public function show(){
        $res = array();
        $res["stand_locations"] = StandLocation::all();
        return response()->json($res);
    }

    public function update(Request $request, $id){
        $res = array();
        $standLocation = StandLocation::whereId($id)->update($request->post());
        $res["status"] = "ok";
        return response()->json($res);
    }
    public function create(Request $request){
        $res = array();
        $standLoation = new StandLocation;
        $standLoation->left = $request->post("left");
        $standLoation->top = $request->post("top");
        $standLoation->width = $request->post("width");
        $standLoation->height = $request->post("height");
        $standLoation->save();
        $res["status"] = "ok";
        return response()->json($res);
    }
}
