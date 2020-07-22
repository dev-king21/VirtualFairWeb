<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\FairType;
use App\StandType;
use App\StandLocation;

class SettingController extends Controller
{
    public function allFairType() {
        $res = array();
        $res['fair_types'] = FairType::with('stand_locations')->get();
        return response()->json($res);
    }

    public function getFairType(Request $request, $id) {
        $res = array();
        $res['fair_type'] = FairType::find($id);
        return response()->json($res);
    }

    public function updateFairType(Request $request, $id) {
        $res = array();
        FairType::whereId($id)->update($request->post());
        $res['status'] = 'ok';
        return response()->json($res);
    }

    public function createFairType(Request $request) {
        $res = array();
        $fairType = new FairType;
        $fairType->name = $request->post('name');
        $fairType->building = $request->post('building');
        $fairType->interior = $request->post('interior');
        
        $fairType->save();
        $res['status'] = 'ok';
        return response()->json($res);
    }

    public function allStandType(){
        $res = array();
        $res['stand_types'] = StandType::all();
        return response()->json($res);
    }

    public function updateStandType(Request $request, $id){
        $res = array();
        StandType::whereId($id)->update($request->post());
        $res['status'] = 'ok';
        return response()->json($res);
    }

    public function createStandType(Request $request){
        $res = array();
        $standType = new StandType;
        $standType->name = $request->post('name');
        $standType->building = $request->post('building');
        $standType->interior = $request->post('interior');
        $standType->save();
        $res['status'] = 'ok';
        return response()->json($res);
    }

    public function allStandLocation(Request $request, $ftype_id = 0) {
        $res = array();
        $res['stand_locations'] = [];
        if (!isset($ftype_id) || $ftype_id == 0)
            $res['stand_locations'] = StandLocation::all(); 
        else 
            $res['stand_locations']  = FairType::find($ftype_id)->stand_locations();
        
        return response()->json($res);
    }

    public function updateStandLocation(Request $request, $id){
        $res = array();
        StandLocation::whereId($id)->update($request->post());
        $res['status'] = 'ok';
        return response()->json($res);
    }

    public function createStandLocation(Request $request){
        $res = array();
        $standLocation = new StandLocation;
        $standLocation->name = $request->post('name');
        $standLocation->fair_type_id = $request->post('fair_type_id');
        $standLocation->stand_type_id = $request->post('stand_type_id');
        $standLoation->left = $request->post('left');
        $standLoation->top = $request->post('top');
        $standLoation->width = $request->post('width');
        $standLoation->height = $request->post('height');
        $standType->save();
        
        $res['status'] = 'ok';

        return response()->json($res);
    }

    public function allStandTypeItem(Request $request, $stype_id = 0) {
        $res = array();
        $res['stand_type_items'] = [];
        if (!isset($stype_id) || $stype_id == 0)
            $res['stand_type_items'] = StandTypeItem::all();
        else 
            $res['stand_type_items'] = StandType::find($stype_id)->stand_type_items();

        return response()->json($res);
    }

    public function updateStandTypeItem(Request $request, $id){
        $res = array();
        StandTypeItem::whereId($id)->update($request->post());
        $res['status'] = 'ok';
        return response()->json($res);
    }

    public function createStandTypeItem(Request $request){
        $res = array();
        $standTypeItem = new StandTypeItem;
        $standTypeItem->stand_type_id = $request->post('stand_type_id');
        $standTypeItem->left = $request->post('left');
        $standTypeItem->top = $request->post('top');
        $standTypeItem->width = $request->post('width');
        $standTypeItem->height = $request->post('height');
        $standTypeItem->type = $request->post('type');

        $standTypeItem->save();
        $res['status'] = 'ok';
        return response()->json($res);
    }

    public function dummyCreate() {
        for ($i = 1; $i<6; $i++) {
            $fairType = new FairType;
            $fairType->name = 'fair type - '.$i;
            $fairType->building = 'fair_building'.$i.'.jpeg';
            $fairType->interior = 'fair_interior'.$i.'.jpeg';
            
            $fairType->save();
        }  
        
        for ($i = 1; $i<8; $i++) {
            $standType = new StandType;
            $standType->name = 'stand type - '.$i;
            $standType->building = 'stand_building'.$i.'.jpeg';
            $standType->interior = 'stand_interior'.$i.'.jpeg';
            
            $standType->save();
        }

        for ($i = 1; $i < 6; $i++) {
            for ($j = 0; $j < 12; $j++) {
                $standLocation = new StandLocation;
                $standLocation->fair_type_id = $i;
                $standLocation->stand_type_id = rand(1, 7);
                $standLocation->left = ($j % 3) * 0.3 + 0.1;
                $standLocation->top = ($j - ($j % 3))/3 * 0.3 + 0.1;
                $standLocation->width = 0.2;
                $standLocation->height = 0.2;
                $standLocation->save();
            }
        }

        return response()->json(["status" => "ok"]);
    }
}
