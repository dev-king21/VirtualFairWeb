<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Talk;
use App\WebinarDownload;
use App\WebinarTicket;

class TalkController extends Controller
{
    //
    public function Talks(){
        $id = request('id');
        $res = array();
        $res["stands"] = Stand::with(['user', 'stand_location', 'gallerys', 'files','appointments','contact','portfolios', 'standType', 'stand_contents'])
        ->where("id", $id)->get();
        return response()->json($res);
    }

    public function get_schedule(Request $request) {
        $res = array();
        $now = date("Y-m-d");
        $res["webinars"] = Talk::with("user")->where("talk_date", ">=", $now)->get();
        $res["today"] = $now;
  
        return response()->json($res);
    }
  
    public function get_webinars(Request $request) {
        $res = array();
        $now = date("Y-m-d");
        $res["webinars"] = Talk::with("user")->where("talk_date", "<=", $now)->get();
        
        return response()->json($res);
    }

    public function get_webinar(Request $request) {
        $res = array();
        $res["webinar"] = Talk::with("user")->find($request->post("_id"));
        
        return response()->json($res);
    }

    public function download_webinar(Request $request) {
        $res = array();
        $id = $request->post("_id");
        $user = $request->user();
        if (!isset($id) || !isset($user)) 
            return response()->json(["status" => "unknown_webinar"]);
        
        $count = WebinarDownload::where(["user_id"=> $user->id, "talk_id" => $id])->count();    
        if ($count !== 0) {
            return response()->json(["status" => "already_downloaded"]);
        }

        $download = new WebinarDownload;
        $download->user_id = $user->id;
        $download->talk_id = $id;
        $download->save();

        $res["status"] = "ok";
        
        return response()->json($res);
    }

    public function add_to_board_webinar(Request $request) {
        $res = array();
        $id = $request->post("_id");
        $user = $request->user();
        if (!isset($id) || !isset($user)) 
            return response()->json(["status" => "unknown_webinar"]);
        
        $count = WebinarTicket::where(["user_id"=> $user->id, "talk_id" => $id])->count();    
        if ($count !== 0) {
            return response()->json(["status" => "already_inserted"]);
        }

        $download = new WebinarTicket;
        $download->user_id = $user->id;
        $download->talk_id = $id;
        $download->save();

        $res["status"] = "ok";
        
        return response()->json($res);
    }
}
