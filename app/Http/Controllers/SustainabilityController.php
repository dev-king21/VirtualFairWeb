<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\SustainabilityImage;
use App\Sustainability;

class SustainabilityController extends Controller
{
    public function createSustainabilityImag(Request $request){
        /* $id = $request->post("_id");
        if (!isset($id))
            return response()->json(["status" => "unknown_stand"]); */
        $sustainability = new SustainabilityImage;
        // $sustainability->fair_id = $id;
        $res = array();
        $request->validate([
            'image_file' => 'mimes:png,gif,jpeg,jpg',
        ]);
  
        if (isset($request->image_file)) {
            $b_fileName =  md5(time()).'.'.$request->image_file->extension();  
            $request->image_file->move(public_path('fair_image'), $b_fileName);
            $sustainability->url = $b_fileName;
        } 
        $sustainability->sustainability_id = $request->post("sustainability_id");

        $sustainability->show = $request->post("show");
       
        $res["status"] = "ok";

        $sustainability->save();    
        return response()->json($res);        
    }
    public function saveSustainability(Request $request){
        /* $id = $request->post("_id");
        if (!isset($id))
            return response()->json(["status" => "unknown_stand"]); */
        $sustainability = new Sustainability;
        // $sustainability->fair_id = $id;
        $res = array();
        if (!isset($request->fair_id)) {
            $res["status"] = "error";
            $res["msg"] = "fair is not selected";
            return response()->json($res);
        }
        // $sustainability->fair_id = $request->post("fair_id");
        // $sustainability->description = $request->post("description");
        $res["status"] = "ok";
        Sustainability::where('fair_id', $request->fair_id)->update($request->post());    
        return response()->json($res);        
    }

    public function updateSusImg(Request $request, $id){
        $res = array();
        $sustainability = SustainabilityImage::whereId($id)->update($request->post());
        $res["status"] = "ok";
        return response()->json($res);
    }

    public function getSusImg(Request $request) {
        $res = array();
        $res['sustainabilities'] = SustainabilityImage::all();
        return response()->json($res);
    }

    public function getActiveSusImg(Request $request) {
        $res = array();
        $res['sustainabilities'] = SustainabilityImage::where('show', 1)->get();
        return response()->json($res);
    }

    public function deleteSusImg(Request $request, $id){
        $res = array();
        $res['sustainabilities'] = SustainabilityImage::where('id', $id)->delete();
        $res["status"] = "ok";
        return response()->json($res);
    }
}
