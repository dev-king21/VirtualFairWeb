<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\ContactRequest;
use App\Chat;
use App\Events\ChatEvent;

class ChatController extends Controller
{
    public function get_contacts(Request $request) {
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
    }

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
