<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\ContactRequest;
use App\Chat;
use App\Events\ChatEvent;

class ChatController extends Controller
{

    public function create(Request $request) {
        $res = array();
        $other = $request->post("_id");
        $uid = $request->user()->id;
        if (!isset($other) || !isset($uid)) {
            return response()->json(["status" => "unknown_chatting"]);
        }

        $count = Chat::where(["sender_id" => $uid, "receiver_id" => $other])
                    ->orWhere(["sender_id" => $other, "receiver_id" => $uid])->count();
        if ($count === 0) {
            $chat = new Chat;
            $chat->sender_id = $uid;
            $chat->receiver_id = $other;
            $chat->message = "";
            $chat->save();
        }

        return response()->json(["status"=> "ok"]);
    }
    
    public function get_contacts(Request $request) {
        $res = array();
        $res["contacts"] = array();
        $contacts = array();
        $uid = $request->user()->id;
        /* $res["contacts"] = ContactRequest::with(["requestor"=> function($query) use($uid) {
            $query->with(['send_unread_messages'=>function($qr) use($uid){
                $qr->where('receiver_id', $uid)->get();
            }])->select(['id', 'first_name', 'last_name', 'company', 'country', 'address', 'avatar'])->get();
        }])->whereHas("stand", function($qr) use($uid) {
            $qr->where("user_id", $uid);
        })->select(['id', 'stand_id', 'user_id'])->get(); */
        
        $contacts1 = Chat::with(['receiver' => function($query){
            $query->select(['id', 'first_name', 'last_name', 'company', 'country', 'address', 'avatar'])->get();
        }])->where('sender_id', $uid)->groupBy('receiver_id')->orderBy('id', 'desc')->get();

        $contacts2 = Chat::with(['sender'=> function($query) use($uid) {
            $query->with(['send_unread_messages' => function($qr) use($uid){
                $qr->where('receiver_id', $uid)->get();
            }])->select(['id', 'first_name', 'last_name', 'company', 'country', 'address', 'avatar'])->get();
        }])->where('receiver_id', $uid)->groupBy('sender_id')->orderBy('id', 'desc')->get();

        foreach($contacts2 as $cont) {
            array_push($contacts, $cont->sender);
            array_push($res["contacts"], $cont->sender);
        }
        $res["contacts1"] = $contacts1;
        $res["contacts2"] = $contacts2;

        $res["compare"] = [];
        foreach($contacts1 as $cont1) {
            foreach($contacts as $cont2) {
                if ($cont2->id === $cont1->receiver_id) continue;
                array_push($res["contacts"], $cont1->receiver);
            }
        }

        return response()->json($res);
    }


    /* public function get_contacts(Request $request) {
        $res = array();
        $uid = $request->user()->id;
        $res["contacts"] = ContactRequest::with(["requestor"=> function($query) use($uid) {
            $query->with(['send_unread_messages'=>function($qr) use($uid){
                $qr->where('receiver_id', $uid)->get();
            }])->select(['id', 'first_name', 'last_name', 'company', 'country', 'address', 'avatar'])->get();
        }])->whereHas("stand", function($qr) use($uid) {
            $qr->where("user_id", $uid);
        })->select(['id', 'stand_id', 'user_id'])->get();
        
        return response()->json($res);
    } */

    public function get_messages(Request $request) {
        $res = array();
        $uid = $request->user()->id;
        $other = $request->post('other');
        if (!isset($uid) || !isset($uid))
        {
            return response()->json(["status" => "unknown_user"]);
        }
        $res["messages"] = Chat::where(["sender_id" => $uid, "receiver_id" => $other])
                                ->orWhere(["sender_id" => $other, "receiver_id" => $uid])->get();
        Chat::where(["sender_id" => $other, 'receiver_id' => $uid])->update(['read' => 1]);
        
        return response()->json($res);        
    }

    public function send_message(Request $request) {
        $res = array();
        $uid = $request->user()->id;
        $other = $request->post('other');
        $message = $request->post('message');
        if (!isset($uid) || !isset($uid) || !isset($message))
        {
            return response()->json(["status" => "unknown_user"]);
        }
        $chat = new Chat;
        $chat->sender_id = $uid;
        $chat->receiver_id = $other;
        $chat->message = $request->post('message');
        $chat->save();

        broadcast(new ChatEvent($chat->load('sender', 'receiver')))->toOthers();
        
        $res["status"] = "ok";
        
        return response()->json($res);        
    }
}
