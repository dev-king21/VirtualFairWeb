<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Advertisement;

class AdsController extends Controller
{
    //
    public function createAds(Request $request){
        $res = array();
        $ads = new Advertisement;
        $request->validate([
            'ads_file' => 'mimes:png,gif,jpeg,jpg',
        ]);
  
        if (isset($request->ads_file)) {
            $b_fileName =  md5(time()).'.'.$request->ads_file->extension();  
            $request->ads_file->move(public_path('fair_image'), $b_fileName);
            $ads->url = $b_fileName;
        } 
        $ads->show = $request->post("show");
       
        $res["status"] = "ok";

        $ads->save();    
        return response()->json($res); 
    }

    public function updateAds(Request $request, $id){
        $res = array();
        $ads = Advertisement::whereId($id)->update($request->post());
        $res["status"] = "ok";
        return response()->json($res);
    }

    public function getAds(Request $request) {
        $res = array();
        $res['ads'] = Advertisement::all();
        return response()->json($res);
    }

    public function getActiveAds(Request $request) {
        $res = array();
        $res['ads'] = Advertisement::where('show', 1)->get();
        return response()->json($res);
    }

    public function deleteAds(Request $request, $id){
        $res = array();
        $res['ads'] = Advertisement::where('id', $id)->delete();
        $res["status"] = "ok";
        return response()->json($res);
    }
}
