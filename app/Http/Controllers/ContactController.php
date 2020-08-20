<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\QueryContactMessage;
use App\ContactMessage;

class ContactController extends Controller
{
    //

    public function addQueryContact(Request $request){
        $res = array();
        $queryContact = new QueryContactMessage;
        $queryContact->name = $request->post("name");
        $queryContact->email = $request->post("email");
        $queryContact->message = $request->post("message");
        $res["status"] = "ok";
        $queryContact->save();
        return response()->json($res); 

    }

    public function getQueryContact(Request $request){
        $res = array();
        $res["queries"] = QueryContactMessage::all();
        return response()->json($res);
    }

    public function addContactMessage(Request $request){
        $res = array();
        $contactMessage = new ContactMessage;
        $contactMessage->first_name = $request->post("first_name");
        $contactMessage->last_name = $request->post("last_name");
        $contactMessage->email = $request->post("email");
        $contactMessage->company = $request->post("company");
        $contactMessage->phone = $request->post("phone");
        $contactMessage->address = $request->post("address");
        $contactMessage->country = $request->post("country");
        $contactMessage->region = $request->post("region");
        $contactMessage->message = $request->post("message");
        $res["status"] = "ok";

        $contactMessage->save();    
        return response()->json($res); 

    }

    public function getContactMessage(Request $request){
        $res = array();
        $res["messages"] = ContactMessage::all();
        return response()->json($res);
    }
}
