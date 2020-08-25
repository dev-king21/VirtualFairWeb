<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Fair;
use App\Stand;
use App\Country;
use App\Contact;
use App\StandLocation;
use App\StandType;
use App\StandTypeItem;
use App\StandContent;
use App\ContactRequest;
use App\Category;
use App\Sustainability;

class FairController extends Controller
{
    //

    public function all_fairs() {
        $res = array();
        $res["fairs"] = Fair::with('categories')->where("status", 1)->get();
        return response()->json($res);
    }

    public function fairs_year(Request $request, $year) {
        $res = array();
        if (!isset($year)) 
            $year = date("y");
        $res["year"] = $year;
        $res["fairs"] = Fair::with('categories')->where("opened_year",  $year)->get();
        return response()->json($res);
    }

    public function current_fairs(Request $request) {
        $res = array();
        $now = date("y-m-d");
        $query = [
            ["start_date", "<=", $now], 
            ["end_date", ">=", $now]
        ]; 
        $query["status"] = 1;
        $res["fairs"] = Fair::with('categories')->where($query)->get();
        return response()->json($res);
    }

    public function current_fair(Request $request) {
        $res = array();
        $now = date("y-m-d");
        $query = [
            ["start_date", "<=", $now], 
            ["end_date", ">=", $now]
        ]; 
        $query["status"] = 1;
        $res["fair"] = Fair::with('categories')->where($query)->first();
        $res["country"] = Country::select('id', 'name', 'code')->where("status", 1)->first();

        return response()->json($res);
    }

    public function current_fair_category(Request $request) {
        $res = array();
        $now = date("y-m-d");
        $query = [
            ["start_date", "<=", $now], 
            ["end_date", ">=", $now]
        ]; 
        $query["status"] = 1;
        $fair = Fair::with('categories')->where($query)->first();
        if (isset($fair))
            $res["categories"] = $fair->categories;
        
        return response()->json($res);
    }

    public function next_fairs(Request $request) {
        $res = array();
        $now = date("y-m-d");
        $query = [
            ["start_date", ">", $now] 
        ]; 
        $query["status"] = 1;
        $res["fairs"] = Fair::with('categories')->where($query)->get();
        return response()->json($res);
    }

    public function past_fairs(Request $request) {
        $res = array();
        $now = date("y-m-d");
        $query = [
            ["end_date", "<", $now] 
        ]; 
        $query["status"] = 1;
        $res["fairs"] = Fair::with('categories')->where($query)->get();
        return response()->json($res);
    }

    public function create_fair(Request $request) {
        $res = array();
        $fair = new Fair;
        $fair->name = $request->post("name");
        $fair->fair_type_id = $request->post("fair_type_id");

        $fair->start_date = $request->post("start_date");
        $fair->end_date = $request->post("end_date");
        $fair->status = $request->post("status");
        if (isset($request->logo)) {
            $b_fileName = md5(time()).'.'.$request->logo->extension();  
            $request->logo->move(public_path('fair_image'), $b_fileName);
            $fair->logo = $b_fileName;
        } 
        $fair->save();

        $sustain = new Sustainability;
        $sustain->fair_id = $fair->id;
        $sustain->description = "";
        $sustain->save();

        if($request->post('categories') != null) {
            foreach ($request->post('categories') as $category) {
                $cat = new Category;
                $cat->name = $category;
                $cat->fair_id = $fair->id;
                $cat->save();
            }
        }

        $countries = Country::select('id')->where("status", 1)->get();
        $stand_locations = StandLocation::with(['stand_type' => function($qr) {
            $qr->with("stand_type_items")->get();
        }])->select(['id', 'stand_type_id'])->where("fair_type_id", $fair->fair_type_id)->get();

        foreach($countries as $country) {
            foreach ($stand_locations as $location) {
                $stand = new Stand;
                $stand->fair_id = $fair->id;
                $stand->country_id = $country->id;
                $stand->stand_location_id = $location->id;
                $stand->save();

                $stand_items = $location->stand_type->stand_type_items;
                foreach($stand_items as $sitem) {
                    $standContent = new StandContent;
                    $standContent->stand_id = $stand->id;
                    $standContent->stand_type_item_id = $sitem->id;
                    $standContent->save();
                }

                $contact = new Contact;
                $contact->stand_id = $stand->id;
                $contact->save();
            }
        }        

        $res["status"] = "ok";
        return response()->json($res);
    }

    public function update_fair(Request $request, $id) {
        $res = array();
       
        $query = array();
        
        $query['name'] = $request->post("name");
        $query['fair_type_id'] = $request->post("fair_type_id");
        $query['start_date'] = $request->post("start_date");
        $query['end_date'] = $request->post("end_date");
        $query['status'] = $request->post("status");

        $request->validate([
            'logo' => 'mimes:png,gif,jpeg,jpg',
        ]);
  
        if (isset($request->logo)) {
            $b_fileName =  md5(time()).'.'.$request->logo->extension();  
            $request->logo->move(public_path('fair_image'), $b_fileName);
            $query['logo'] = $b_fileName;
        } 

        $sus_exist = Sustainability::find($id);
        if (!isset($sus_exist)) {
            $sustain = new Sustainability;
            $sustain->fair_id = $id;
            $sustain->description = "";
            $sustain->save();
        }

        Category::where('fair_id', $id)->delete();
        $categories = $request->post('categories');
        if (isset($categories))
            foreach ($categories as $category) {
                $cat = new Category;
                $cat->name = $category;
                $cat->fair_id = $id;
                $cat->save();
            }
       
        Fair::whereId($id)->update($query);
        $res['status'] = 'ok';        
        $res['id'] = $id;
        return response()->json($res);
    }

    public function get_countries(Request $request, $fair_id = 0) {
        $res = array();
        if ($fair_id == 0) {
            $now = date("y-m-d");
            $query = [
                ["start_date", "<=", $now], 
                ["end_date", ">=", $now]
            ]; 
            $query["status"] = 1;
            $fair = Fair::with('fair_type')->where($query)->first();
        } else 
            $fair = Fair::with('fair_type')->find($fair_id);

        if ($fair == null)
        {
            $res["status"] = "No current fair";
        } else {
            $res["status"] = "ok";
            $res["fair"] = $fair;
            $res["countries"] = Stand::select('country_id')->with(['country'=> function($query){
                $query->select(['id', 'name', 'code'])->get();
            }])->where("fair_id", $fair->id)->groupBy("country_id")->get();
        }

        return response()->json($res);

    }

    public function get_stands(Request $request, $fair_id = 0, $country_id = 0) {
        $res = array();
        if ($fair_id == 0)
        {
            $now = date("y-m-d");
            $query = [
                ["start_date", "<=", $now], 
                ["end_date", ">=", $now]
            ]; 
            $query["status"] = 1;
            $res["fair"] = Fair::with('fair_type')->where($query)->first();
            $fair_id = $res["fair"]->id;
        } else 
            $res["fair"] = Fair::with('fair_type')->find($fair_id);

        if ($country_id == 0)
        {
            $res["country"] = Country::select('id', 'name', 'code')->where("status", 1)->first();
            $country_id = $res["country"]->id;
        } else
            $res["country"] = Country::find($country_id);
        
        $res["stands"] = Stand::with(['stand_location'=> function($query) {
            $query->with('stand_type')->get();
        }])->where([
            "fair_id"=> $fair_id,
            "country_id"=> $country_id
        ])->get();

        return response()->json($res);

    }

    public function get_stand(Request $request, $fair_id, $country_id, $stand_id) {
        if (!isset($fair_id) || $fair_id == 0)
        {
            $res["status"] = "error";
            $res["msg"] = "unknown fair";
            return response()->json($res);
        }
        if (!isset($country_id) || $country_id == 0)
        {
            $res["status"] = "error";
            $res["msg"] = "unknown country";
            return response()->json($res);
        }

        $res["fair"] = Fair::find($fair_id);
        $res["country"] = Country::find($country_id);
        $res["stand"] = Stand::with(['appointments', 'gallerys', 'portfolios', 'files', 'contact', 'stand_contents'=> function($query) {
            $query->with('stand_type_item')->get();
        }])->find($stand_id);
        
        $res["stand_type"] = StandLocation::with('stand_type') -> find($res["stand"]->stand_location_id)->stand_type;
        return response()->json($res);
    }

    public function get_sustainability(Request $request) {
        $res = array();
        $now = date("y-m-d");
        $query = [
            ["start_date", "<=", $now], 
            ["end_date", ">=", $now]
        ]; 
        $query["status"] = 1;
        $fair = Fair::where($query)->first();
        if (!isset($fair)) {
            return response()->json(["status" => "unknown_fair"]);
        }
        $res["sustainability"] = Sustainability::with("sustainability_images")->find($fair->id);

        return response()->json($res);
    }

    public function get_sponsors(Request $request, $fair_id = 0, $country_id = 0) {
        $res = array();
        if ($fair_id == 0)
        {
            $now = date("y-m-d");
            $query = [
                ["start_date", "<=", $now], 
                ["end_date", ">=", $now]
            ]; 
            $query["status"] = 1;
            $res["fair"] = Fair::with('fair_type')->where($query)->first();
            $fair_id = $res["fair"]->id;
        } else 
            $res["fair"] = Fair::with('fair_type')->find($fair_id);

        if ($country_id == 0)
        {
            $res["country"] = Country::select('id', 'name', 'code')->where("status", 1)->first();
            $country_id = $res["country"]->id;
        } else
            $res["country"] = Country::find($country_id);
        
        $res["stands"] = Stand::select(['id', 'logo', 'company'])->where([
            "fair_id"=> $fair_id,
            "country_id"=> $country_id,
        ])->whereNotNull('user_id')->whereNotNull('logo')->whereNotNull('company')->get();

        return response()->json($res); 
    }

    public function sponsor_request(Request $request) {
        $res = array();

        $user = $request->user();
        $contactRequest = new ContactRequest;
        $contactRequest->stand_id = $request->post("stand_id");
        $contactRequest->user_id = $user->id;
        $contactRequest->phone_request = $request->post("phone");
        $contactRequest->mail_request = $request->post("mail");
        $contactRequest->contact_text = $request->post("contact_text");
        $contactRequest->save();

        $res["status"] = "ok";
        return response()->json($res); 
    }

    public function requestFair(Request $request) {
        $res = array();
        
        $stands = Stand::with(['fair'])->where("status", 0)
        ->whereHas("fair", function($q){
            $today = date("y-m-d");
            $query = [
                ["start_date", ">", $today]
            ];
            $q->where($query);
        })->get();

        $res["stands"] = $stands;
        return response()->json($res);
    }

    public function bookedFair(Request $request) {
        $res = array();
        $stands = Stand::with(['fair'])->where("status", 1)
        ->whereHas("fair", function($q){
            $today = date("y-m-d");
            $query = [
                ["start_date", ">", $today]
            ];
            $q->where($query);
        })->get();

        $res["stands"] = $stands;

        return response()->json($res);
    }

    public function activeFair(Request $request) {
        $res = array();
        $stands = Stand::with(['fair'])->where("status", 1)
        ->whereHas("fair", function($q){
            $today = date("y-m-d");
            $query = [
                ["start_date", "<=", $today],
                ["end_date",">=", $today]
            ];
            $q->where($query);
        })->get();

        $res["stands"] = $stands;

        return response()->json($res);
    }

    public function pastFair(Request $request) {
        $res = array();

        $stands = Stand::with(['fair'])->where("status", 1)
        ->whereHas("fair", function($q){
            $today = date("y-m-d");
            $query = [
                ["start_date", ">", $today]
            ];
            $q->where($query);
        })->get();

        $res["stands"] = $stands;

        return response()->json($res);
    }

    public function fairStands(Request $request, $id){
        $res = array();
        $countries = Country::where("status", 1)->get();
        $res["stands"] = Stand::with(['fair', 'user', 'country'])->where("fair_id", $id)->get();
        $res["countries"] = $countries;
        return response()->json($res);
    }

    public function countryStands(Request $request, $id, $country_id = 0){
        $res = array();
        $query = ["fair_id"=> $id];
        if ($country_id != 0)
            $query["country_id"] = $country_id;
        $res["stands"] = Stand::with(['fair', 'user', 'country'])->where($query)->get();
        return response()->json($res);
    }

    public function purchase_stand(Request $request) {
        $res = array();
        $stand = Stand::find($request->post("stand"));
        if (!isset($stand)) {
            $res["status"] = "error";
            $res["msg"] = "unknown_stand";
            return response()->json($res);
        } 
        if ($stand->user_id != null) {
            $res["status"] = "error";
            $res["msg"] = "purchased";
            return response()->json($res);
        }
        
        $user = $request->user();
        $stand->user_id = $user->id;
        $stand->save();
       
        $res["status"] = "ok";
        return response()->json($res);
    }   

    //sustainability information according to fair
    public function getSustainabilityInfo(Request $request) {
        $res = array();
        $fairs = Fair::with(['sustainability'=> function($qr){
            $qr->with('sustainability_images')->get();
        }])->get();
        $res["status"] = "ok";
        $res["fairs"] = $fairs;
        return response()->json($res);
    }

}
