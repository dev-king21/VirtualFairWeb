<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Carbon\Carbon;
use MacsiDigital\Zoom\Facades\Zoom;

class ZoomMeetingController extends Controller
{
    public function get_users(Request $request) {


    }

    public function all_users(Request $request) {
        $user = Zoom::user()->all();

    }
    
    public function meeting_users(Request $request) {
        $user = Zoom::user()->where();
    }


    public function create_user(Request $request) {
        $data = array();
        $user = Zoom::user()->create([ 
            'first_name' => 'First Name',
            'last_name' => 'Last Name',
            'email' => 'test@test.com',
            'password' => 'secret'
        ]);
    }

    
}
