<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Appointment;

class AppointmentController extends Controller
{
    //
    public function all_appointments(Request $request, $stand_id = 0, $user_id = 0) {
        $res = array();
        if ($stand_id != 0)
        {
            $query = ["stand_id" => $stand_id];

            if($user_id != 0)
            {
                $query["user_id"] = $user_id;
            }
            $res["appointments"] = Appointment::where($query)->get();
           
        }
        else 
        {
            if($user_id != 0)
                $res["appointments"] = Appointment::where("user_id", $user_id)->get();
            else
              $res["appointments"] = Appointment::all();

        }
        // if (Session::get("user_id", 0) == 0)
        //     Session::put("user_id", 1); 
        // $res["user_id"] =  Session::get("user_id");
        

        return response()->json($res);
    }

    public function create_appointment(Request $request)
    {
        $res = array();
        $appointment = new Appointment;
        $appointment->stand_id = $request->post("stand_id");
        $appointment->user_id = $request->post("user_id");
        $appointment->save();

        $res["status"] = "ok";
        return response()->json($res);
    }

    public function update_appointment(Request $request, $id)
    {
        $res = array();
        $appointment = new Appointment;
        $appointment = Appointment::whereId($id)->update($request->post());
        $res["status"] = "ok";
        return response()->json($res);
    }
}
