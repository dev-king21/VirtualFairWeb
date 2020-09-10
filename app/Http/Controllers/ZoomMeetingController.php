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

    public function create_webinar(Request $request) {
        // {
        //     "topic": "Test Webinar",
        //     "type": 5,
        //     "start_time": "2020-09-20T06:59:00Z",
        //     "duration": "60",
        //     "timezone": "America/Los_Angeles",
        //     "password": "avfhfgh",
        //     "agenda": "Test Webinar",
        //     "recurrence": {
        //       "type": 1,
        //       "repeat_interval": 1,
        //       "end_date_time": "2020-09-22T06:59:00Z"
        //     },
        //     "settings": {
        //       "host_video": "true",
        //       "panelists_video": "true",
        //       "practice_session": "true",
        //       "hd_video": "true",
        //       "approval_type": 0,
        //       "registration_type": 2,
        //       "audio": "both",
        //       "auto_recording": "none",
        //       "enforce_login": "false",
        //       "close_registration": "true",
        //       "show_share_button": "true",
        //       "allow_multiple_devices": "false",
        //       "registrants_email_notification": "true"
        //     }
        //   }
        
        $webinar = Zoom::user()->find(id)->webinars()->create([]);
        // $webinar = Zoom::webinar()->make([...]);
        // $user = Zoom::user()->find(id)->webinars()->save($webinar);
    }

    public function add_registrant() {
        // {
        //     "email": "sjfkghdsg@someemail.dfgjd",
        //     "first_name": "Jill",
        //     "last_name": "Chill",
        //     "address": "dsfhkdjsfh st",
        //     "city": "jackson heights",
        //     "country": "US",
        //     "zip": "11371",
        //     "state": "NY",
        //     "phone": "00000000",
        //     "industry": "Food",
        //     "org": "Cooking Org",
        //     "job_title": "Chef",
        //     "purchasing_time_frame": "1-3 months",
        //     "role_in_purchase_process": "Influencer",
        //     "no_of_employees": "10",
        //     "comments": "Looking forward to the Webinar",
        //     "custom_questions": [
        //         {
        //             "title": "What do you hope to learn from this Webinar?",
        //             "value": "Look forward to learning how you come up with new recipes and what other services you offer."
        //         }
        //     ]
        // }
        $webinar = Zoom::webinar()->find($id);
        /* $registrant = Zoom::panelist()->create([]);
        $webinar->panelists()->save($panelist); */
        $registrant = Zoom::registrant()->create([]);
        $webinar->registrants()->save($registrant);
    }





    
}
