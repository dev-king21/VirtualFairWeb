<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\StandTypeItem;

class StandTypeItemController extends Controller
{
    //
    public function show(){
        $res = array();
        $res["stand_types"] = StandTypeItem::all();
        return response()->json($res);
    }

    public function update(Request $request, $id){
        $res = array();
        $standType = StandTypeItem::whereId($id)->update($request->post());
        $res["status"] = "ok";
        return response()->json($res);
    }

    public function create(Request $request){
        $res = array();
        $standTypeItem = new StandTypeItem;
        $standTypeItem->stand_type_id = $request->post("stand_type_id");
        $standTypeItem->left = $request->post("left");
        $standTypeItem->top = $request->post("top");
        $standTypeItem->width = $request->post("width");
        $standTypeItem->height = $request->post("height");
        $standTypeItem->type = $request->post("type");

        $standTypeItem->save();
        $res["status"] = "ok";
        return response()->json($res);
    }
}
