<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\FairType;
use App\StandType;
use App\StandLocation;
use App\StandTypeItem;
use Hash;

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
        $query = array();
        $name = $request->post('name');
        if ($name === null)
            $name = 'Fair Type - ' + rand();
        $query['name'] = $name;

        $request->validate([
            'building_file' => 'mimes:png,gif,jpeg,jpg',
            'interior_file' => 'mimes:png,gif,jpeg,jpg',
        ]);
  
        if (isset($request->building_file)) {
            $b_fileName =  md5(time()).'.'.$request->building_file->extension();  
            $request->building_file->move(public_path('fair_image'), $b_fileName);
            $query['building'] = $b_fileName;
        } 
        if (isset($request->interior_file))  {
            $i_fileName =  md5(time()).'.'.$request->interior_file->extension();  
            $request->interior_file->move(public_path('fair_image'), $i_fileName); 
            $query['interior'] = $i_fileName;       
        }

        FairType::whereId($id)->update($query);
        $res['status'] = 'ok';        
        $res['id'] = $id;
        return response()->json($res);
    }

    public function createFairType(Request $request) {
        $res = array();
        $fairType = new FairType;
        $name = $request->post('name');
        if ($name === null)
            $name = 'Fair Type - ' + rand();
        $fairType->name = $name;

        $request->validate([
            'building_file' => 'mimes:png,gif,jpeg,jpg',
            'interior_file' => 'mimes:png,gif,jpeg,jpg',
        ]);
  
        if (isset($request->building_file)) {
            $b_fileName = md5(time()).'.'.$request->building_file->extension();  
            $request->building_file->move(public_path('fair_image'), $b_fileName);
            $fairType->building = $b_fileName;
        } 
        if (isset($request->interior_file))  {
            $i_fileName =  md5(time()).'.'.$request->interior_file->extension();  
            $request->interior_file->move(public_path('fair_image'), $i_fileName);   
            $fairType->interior = $i_fileName;     
        }

        $fairType->save();
        $res['status'] = 'ok';
        $res['id'] = $fairType->id;
        return response()->json($res);
    }

    public function allStandType(){
        $res = array();
        $res['stand_types'] = StandType::all();
        return response()->json($res);
    }

    public function getStandType(Request $request, $id) {
        $res = array();
        $res['stand_type'] = StandType::find($id);
        return response()->json($res);
    }

    public function updateStandType(Request $request, $id) {
        $res = array();
        $query = array();
        $name = $request->post('name');
        if ($name === null)
            $name = 'Fair Type - ' + rand();
        $query['name'] = $name;

        $request->validate([
            'building_file' => 'mimes:png,gif,jpeg,jpg',
            'interior_file' => 'mimes:png,gif,jpeg,jpg',
        ]);
  
        if (isset($request->building_file)) {
            $b_fileName =  md5(time()).'.'.$request->building_file->extension();  
            $request->building_file->move(public_path('fair_image'), $b_fileName);
            $query['building'] = $b_fileName;
        } 
        if (isset($request->interior_file))  {
            $i_fileName =  md5(time()).'.'.$request->interior_file->extension();  
            $request->interior_file->move(public_path('fair_image'), $i_fileName);   
            $query['interior'] = $i_fileName;
        }

        StandType::whereId($id)->update($query);
        $res['status'] = 'ok';        
        $res['id'] = $id;
        return response()->json($res);
    }

    public function createStandType(Request $request) {
        $res = array();
        $standType = new StandType;
        $name = $request->post('name');
        if ($name === null)
            $name = 'Fair Type - ' + rand();
        $standType->name = $name;

        $request->validate([
            'building_file' => 'mimes:png,gif,jpeg,jpg',
            'interior_file' => 'mimes:png,gif,jpeg,jpg',
        ]);
  
        if (isset($request->building_file)) {
            $b_fileName = md5(time()).'.'.$request->building_file->extension();  
            $request->building_file->move(public_path('fair_image'), $b_fileName);
            $standType->building = $b_fileName;
        } 
        if (isset($request->interior_file))  {
            $i_fileName =  md5(time()).'.'.$request->interior_file->extension();  
            $request->interior_file->move(public_path('fair_image'), $i_fileName);   
            $standType->interior = $i_fileName;     
        }

        $standType->save();
        $res['status'] = 'ok';
        $res['id'] = $standType->id;
        return response()->json($res);
    }

    public function allTypes(Request $request) {
        $res = array();
        $res['fair_types'] = FairType::all();
        $res['stand_types'] = StandType::all();
        return response()->json($res);    
    }

    public function allStandLocation(Request $request, $ftype_id = 0) {
        $res = array();
        if (!isset($ftype_id) || $ftype_id == 0)
            $ftype_id = FairType::first()->id; 
        $res["ftype"] = FairType::find($ftype_id);
        $res['stand_locations']  = StandLocation::with('stand_type')->where("fair_type_id", $ftype_id)->get();
        
        return response()->json($res);
    }

    public function saveStandLocation(Request $request){
        $res = array();
        foreach ($request->post("locations") as $location) {
            $updateQuery = [
                "left" => $location["left"],
                "top" => $location["top"]
            ];
            if (isset($location["id"]))
                StandLocation::whereId($location["id"])->update($updateQuery);
            else {
                $newLocation = new StandLocation;
                $newLocation->fair_type_id = $location["fair_type_id"];
                $newLocation->stand_type_id = $location["stand_type_id"];
                $newLocation->left = $location["left"];
                $newLocation->top = $location["top"];
                $newLocation->width = 0.2;
                $newLocation->height = 0.2;
                $newLocation->save();
            }
        }
        $res['status'] = 'ok';
        return response()->json($res);
    }

    public function removeStandLocation(Request $request) {
        StandLocation::where("id", $request->post("remove_id"))->delete();
        return response()->json(["status"=> "ok"]);
    }

    public function allStandTypeItem(Request $request, $stype_id = 0) {
        $res = array();
        if (!isset($stype_id) || $stype_id == 0)
            $stype_id = StandType::first()->id;

        $stype = StandType::find($stype_id);
        $res["stype"] = $stype;
        $res['stand_type_items'] = StandTypeItem::where("stand_type_id", $stype_id)->get();
        
        return response()->json($res);
    }

    public function saveStandTypeItem(Request $request){
        $res = array();
        foreach ($request->post("locations") as $location) {
            $updateQuery = [
                "left" => $location["left"],
                "top" => $location["top"],
                "width" => $location["width"],
                "height" => $location["height"]
            ];
            if (isset($location["id"]))
                StandTypeItem::whereId($location["id"])->update($updateQuery);
            else {
                $standTypeItem = new StandTypeItem;
                $standTypeItem->stand_type_id = $location["stand_type_id"];
                $standTypeItem->left = $location["left"];
                $standTypeItem->top = $location["top"];
                $standTypeItem->width = $location["width"];
                $standTypeItem->height = $location["height"];
                $standTypeItem->type = $location["type"];
                $standTypeItem->save();
            }
        }
        $res['status'] = 'ok';
        return response()->json($res);
    }

    public function removeStandTypeItem(Request $request) {
        StandTypeItem::where('id', $request->post("remove_id"))->delete();
        return response()->json(["status"=>"ok"]);
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
            $standType->building = 'stand_building'.$i.'.png';
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
