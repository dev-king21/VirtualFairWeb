<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Room;
use App\Talk;
use App\Country;
use App\User;
use App\AdminUser;
use App\Fair;
use App\Category;

class RoomController extends Controller
{
    //
    public function create_room(Request $request){
        $res = array();
        $room = new Room;
        $room->country_id = $request->post("country_id");       
        $room->name = $request->post("name");
        $room->description = $request->post("description");
        $room->status = $request->post("status");

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
        $talk->user_id = $request->post("user_id");
        $talk->live = $request->post("live");
        $talk->status = 1;
        $talk->title = $request->post("title");
        $talk->exhibitor_name = $request->post("exhibitor_name");
        $talk->exhibitor_profession = $request->post("exhibitor_profession");
        $talk->exhibitor_company = $request->post("exhibitor_company");
        $talk->description = $request->post("description");
        $talk->key = $request->post("key");
        $talk->password = $request->post("password");
        $talk->talk_date = $request->post("talk_date");
        $talk->start_time = $request->post("start_time");
        $talk->end_time = $request->post("end_time");
        $talk->user_option = $request->post("user_option");

        $talk->save();
       
        $admin_user = new AdminUser;
        $admin_user->user_id = $request->post("user_id");
        $admin_user->email = $request->post("key");
        $admin_user->password = bcrypt($request->post("password"));
        $admin_user->password_key = $request->post("password");
        $admin_user->save();

        $res["status"] = "ok";
        return response()->json($res);


    }

    public function update_talk(Request $request, $id){
        $res = array();
        $query = array();
        $talk = Talk::where('id', $id);
        $query['room_id'] = $request->post("room_id");
        $query['user_id'] = $request->post("user_id");
        $talk->live = $request->post("live");

        $query['status'] = 1;
        $query['title'] =  $request->post("title");
        $query['exhibitor_name'] =  $request->post("exhibitor_name");
        $query['exhibitor_profession'] =  $request->post("exhibitor_profession");
        $query['exhibitor_company'] =  $request->post("exhibitor_company");
        $query['description'] =  $request->post("description");
        $query['key'] =  $request->post("key");
        $query['password'] =  $request->post("password");
        $query['talk_date'] =  $request->post("talk_date");
        $query['start_time'] =  $request->post("start_time");
        $query['end_time'] =  $request->post("end_time");
        $query['user_option'] = $request->post("user_option");

        $talk->update($query);

        $query = array();
        $admin_user = AdminUser::where("user_id" , $request->post('user_id'));
        $query['email'] = $request->post("key");
        $query['password'] = bcrypt($request->post("password"));
        $query['password_key'] = $request->post("password");
        $admin_user->update($query);
        $res["status"] = "ok";
        return response()->json($res);
    }

    public function delete_talk(Request $request, $id) {
        $res = array();
        $talk = Talk::find($id);
        $user_id = $talk->user_id;
        $talk->delete();
        $user = User::find($user_id);
        $user->delete();
        $res['status'] = 'ok';
        return response()->json($res);
    }

    public function check_talk(Request $request, $id) { 
        $res = array();
        $talk = Talk::find($id);
        $nowDate = date("Y-m-d");
        $nowTime = date("H:i:s");
        if($nowDate < $talk->talk_date) {
            $res['status'] = 'not talk date';
        }
        else if ($nowDate == $talk->talk_date) {
            if($talk->start_time <= $nowTime && $talk->end_time >= $nowTime){
                $res['status'] = 'ok';
            }
        }
        else if ($nowDate > $talk->talk_date) $res['status'] = 'ok';
        $res['start'] = $talk->talk_date;
        $res['nowTime'] = $nowDate;
        return response()->json($res);
    }

    public function all_talk(Request $request){
        $res = array();
        $res["talk"] = Talk::all();
        return response()->json($res);
    }

    public function requestRoom(Request $request) {
        $res = array();
        $now = date("y-m-d h:i:s");
        $query = [
            ["start_time", ">", $now],
            ["status", "=", 0]
        ];
        $talks = Talk::with(['room'])->where($query)->get();

        $res["talks"] = $talks;

        return response()->json($res);
    }

    public function bookedRoom(Request $request) {
        $res = array();
        $now = date("y-m-d h:i:s");
        $query = [
            ["start_time", ">", $now],
            ["status", "=", 1]
        ];
        $talks = Talk::with(['room'])->where($query)->get();

        $res["talks"] = $talks;

        return response()->json($res);
    }

    public function activeRoom(Request $request) {
        $res = array();
        $now = date("y-m-d h:i:s");
        $query = [
            ["start_time", "<=", $now],
            ["end_time",">=", $now], 
            ["status", "=", 1]
        ];
        $talks = Talk::with(['room'])->where($query)->get();
        $res["talks"] = $talks;
        return response()->json($res);
    }

    public function pastRoom(Request $request) {
        $res = array();
        $now = date("y-m-d h:i:s");
        $query = [
            ["start_time", ">", $now],
            ["status", "=", 1]
        ];
        $talks = Talk::with(['room'])->where($query)->get();
        $res["talks"] = $talks;
        return response()->json($res);
    }


    //room menu
     public function allRooms(Request $request){
        $res = array();
        $countries = Country::where("status", "=", 1)->get();
        $res["rooms"] = Room::with(['country'])->where("status", 1)->get();
        $res["countries"] = $countries;
        return response()->json($res);
    }

    public function countryRooms(Request $request, $country_id){
        $res = array();
        if ($country_id != 0)
          $res["rooms"] = Room::with(['country'])->where("country_id", "=", $country_id)->get();
        return response()->json($res);
    }

    public function Talks(Request $request, $id){
        $id = request('id');
        $res = array();
        $res["talks"] = Talk::with(['user', 'room'])
        ->where("room_id", $id)->get();
        $res["rooms"] = Room::all();
        $res["users"] = User::where("type", "lecturer")->get();
        $res["status"] = "ok";
        return response()->json($res);
    }

    public function RequestTalks(Request $request){
        $res["status"] = "ok";

        $res = array();
        $now = date("y-m-d h:i:s");

        $res["now"] = $now;
        $query = [
            ["start_time", ">", $now],
            ["status", "=", 0]
        ];

        $res["talks"] = Talk::with(['user', 'room'])
        ->where($query)->get();
        $res["rooms"] = Room::all();
        $res["users"] = User::where("type", "lecturer")->get();
        return response()->json($res);
    }

    public function ScheduledTalks(Request $request){
        $res["status"] = "ok";
        $res = array();
        $today = date("y-m-d");
        $query = [
            ["talk_date", ">=", $today],
            ["status", "=", 1]
        ];

        $res["talks"] = Talk::with(['user', 'room'])
        ->where($query)->get();
        $res["rooms"] = Room::all();
        
        $now = date("y-m-d");
        $query1 = [
            ["start_date", "<=", $now], 
            ["end_date", ">=", $now]
        ]; 
        $query1["status"] = 1;
        $fair = Fair::where($query1)->first();
        $res["users"] = User::where(["type"=>"lecturer", "fair_id"=>$fair->id])->get();

        $res["categories"] = Category::where('fair_id', $fair->id)->first();
        return response()->json($res);
    }

    public function LiveTalks(Request $request){
        $res["status"] = "ok";

        $res = array();
        $now = date("y-m-d h:i:s");

        $res["now"] = $now;
        $query = [
            ["start_time", "<=", $now],
            ["end_time",">=", $now], 
            ["status", "=", 1]
        ];

        $res["talks"] = Talk::with(['user', 'room'])
        ->where($query)->get();
        $res["rooms"] = Room::all();
        $res["users"] = User::where("type", "lecturer")->get();
        return response()->json($res);
    }
    public function PastTalks(Request $request){
        $res["status"] = "ok";

        $res = array();
        $today = date("y-m-d");

        $query = [
            ["talk_date","<", $today] 
        ];

        $res["talks"] = Talk::with(['user', 'room'])
        ->where($query)->get();
        $res["rooms"] = Room::all();
        $res["users"] = User::where("type", "lecturer")->get();

        $now = date("y-m-d");
        $query1 = [
            ["start_date", "<=", $now], 
            ["end_date", ">=", $now]
        ]; 
        $query1["status"] = 1;
        $fair = Fair::where($query1)->first();
        $res["categories"] = Category::where('fair_id', $fair->id)->first();

        return response()->json($res);
    }

    //exhibitor webinar
    public function exhibitorWebinar(Request $request){
        $res = array();
        $user_id = $request->user()->user_id;
        $today = date("y-m-d");
        $query = [
            ["talk_date", ">=", $today],
            ["status", "=", 1],
            ["user_id", "=", $user_id]
        ];

        $res["talks"] = Talk::with(['user', 'room'])
        ->where($query)->get();
        $res["rooms"] = Room::all();
        $res["users"] = User::where("type", "lecturer")->get();
        $res["user"] = $request->user();
        return response()->json($res);
    }

    public function updateWebinar(Request $request, $talk_id){
        $res = array();
        $query['start_time'] = $request->post('start_time');
        $query['end_time'] = $request->post('end_time');

        $request->validate([
            'background' => 'mimes:png,gif,jpeg,jpg',
        ]);
  
        if (isset($request->background)) {
            $b_fileName =  md5(time()).'.'.$request->background->extension();  
            $request->background->move(public_path('fair_image'), $b_fileName);
            $query['background'] = $b_fileName;
        } 

        Talk::whereId($talk_id)->update($query);
        $res["status"] = "ok";
        return response()->json($res);

       
    }

}
