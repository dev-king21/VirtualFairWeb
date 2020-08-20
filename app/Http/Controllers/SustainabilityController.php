<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\SustainabilityImage;

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
        $sustainability->show = $request->post("show");
       
        $res["status"] = "ok";

        $sustainability->save();    
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
