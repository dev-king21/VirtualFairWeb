<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Room;
use App\Talk;

class RoomController extends Controller
{
    //
    public function create_room(Request $request){
        $res = array();
        $room = new Room;
        $room->name = $request->post("name");
        $room->description = $request->post("description");
        $room->limited = $request->post("limited");
        $room->exhibitor_name = $request->post("exhibitor_name");
        $room->exhibitor_profession = $request->post("exhibitor_profession");
        $room->exhibitor_company = $request->post("exhibitor_company");
        $room->start_time = $request->post("start_time");
        $room->end_time = $request->post("end_time");
        $room->country = $request->post("country");
        $room->save();
        $res["status"] = "ok";
        return response()->json($res);
    }

    public function update_room(Request $request, $id){
        $res = array();
        $appointment = Room::whereId($id)->update($request->post());
        $res["status"] = "ok";
        return response()->json($res);
    }

    public function all_room(Request $request){
        $res = array();
        $res["room"] = Room::all();
        return response()->json($res);
    }


    //talks
    public function create_talk(Request $request){
        $res = array();
        $talk = new Talk;
        $talk->room_id = $request->post("room_id");
        $talk->talk_date = $request->post("talk_date");
        $talk->video = $request->post("video");
       
        $talk->save();
        $res["status"] = "ok";
        return response()->json($res);
    }

    public function update_talk(Request $request, $id){
        $res = array();
        $appointment = Talk::whereId($id)->update($request->post());
        $res["status"] = "ok";
        return response()->json($res);
    }

    public function all_talk(Request $request){
        $res = array();
        $res["talk"] = Talk::all();
        return response()->json($res);
    }
}
