<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

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
}
