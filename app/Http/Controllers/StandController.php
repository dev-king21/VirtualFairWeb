<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Stand;
use App\StandContent;
use App\StandLocation;
use App\File;
use App\Contact;
use App\Gallery;
use App\Portfolio;
use App\GalleryDownload;
use App\PortfolioDownload;
use App\Appointment;
use App\Payment;

class StandController extends Controller
{
    public function get_stripe_pubkey(Request $request) {
        return response()->json(['key' => env('STRIPE_KEY')]);
    }

    public function save_transaction(Request $request) {
        $user = $request->user();
        $paymentMethodID = $request->get('payment_method');

        if( $user->stripe_id == null ) {
            $user->createAsStripeCustomer();
        }

        $user->addPaymentMethod( $paymentMethodID );
        $user->updateDefaultPaymentMethod( $paymentMethodID );
        $stand = Stand::find($request->post('stand_id'));
        $stand->user_id = $request->user()->id;
        $stand->save();
        
        return response()->json( null, 204 );        
    }

    public function save_transaction_paypal(Request $request) {

        $user = $request->user();
        $payment = new Payment;
        $payment->link = $request->post('link');
        $payment->payer_id = $request->post('payer_id');
        $payment->payer_country = $request->post('payer_country');
        $payment->payer_name = $request->post('payer_name');
        $payment->payer_email = $request->post('payer_email');
        $payment->payment_amount = $request->post('payment_amount');
        $payment->payment_status = $request->post('payment_status');
        $payment->payment_capture_id = $request->post('payment_capture_id');
        $payment->update_time = $request->post('update_time');
        $payment->status = $request->post('status');
        $payment->user_id = $user->id;

        $payment->save();
        $stand = Stand::find($request->post('stand_id'));
        $stand->user_id = $request->user()->id;
        $stand->save();

        return response()->json(["status" => "ok"]);
    }

    public function purchase_intent(Request $request) {
        return $request->user()->createSetupIntent();
    }

    public function get_stand(Request $request) {
        $id = $request->post('_id');
        if (!isset($id))
            return response()->json(["status" => "unknown_stand"]);

        $res["stand"] = Stand::with(['contact', 'stand_contents' => function($query) {
            $query->with('stand_type_item')->get();
        }])->find($id);      
        $res["stand_type"] = StandLocation::with('stand_type') -> find($res["stand"]->stand_location_id)->stand_type;
  
        return response()->json($res);
    }
    
    public function get_information(Request $request) {
        $res = array();
        $id = $request->post('_id');
        if (!isset($id))
            return response()->json(["status" => "unknown_stand"]);

        $res["stand"] = Stand::with(['contact'])->find($id);      
        return response()->json($res);
    }

    public function get_brochures(Request $request) {
        $res = array();
        $id = $request->post('_id');
        if (!isset($id))
            return response()->json(["status" => "unknown_stand"]);
        
        $res["stand"] = Stand::with(['portfolios'])->find($id);      
        return response()->json($res);
    }

    public function download_brochure(Request $request) {
        $res = array();
        $id = $request->post("_id");
        $user = $request->user();
        if (!isset($id) && !isset($user)) 
            return response()->json(["status" => "unknown_webinar"]);
        
        $count = PortfolioDownload::where(["user_id"=> $user->id, "portfolio_id" => $id])->count();    
        if ($count !== 0) {
            return response()->json(["status" => "already_downloaded"]);
        }

        $download = new PortfolioDownload;
        $download->user_id = $user->id;
        $download->portfolio_id = $id;
        $download->save();

        $res["status"] = "ok";
        
        return response()->json($res);
    }

    public function get_gallery(Request $request) {
        $res = array();
        $id = $request->post('_id');
        if (!isset($id))
            return response()->json(["status" => "unknown_portfolio"]);
    
        $res["stand"] = Stand::with(['gallerys'])->find($id);      
        return response()->json($res);
    }

    public function download_gallery(Request $request) {
        $res = array();
        $id = $request->post("_id");
        $user = $request->user();
        if (!isset($id) && !isset($user)) 
            return response()->json(["status" => "unknown_gallery"]);
        
        $count = GalleryDownload::where(["user_id"=> $user->id, "gallery_id" => $id])->count();    
        if ($count !== 0) {
            return response()->json(["status" => "already_downloaded"]);
        }

        $download = new GalleryDownload;
        $download->user_id = $user->id;
        $download->gallery_id = $id;
        $download->save();

        $res["status"] = "ok";
        
        return response()->json($res);
    }

    public function get_video(Request $request) {
        $res = array();
        $id = $request->post("_id");
        $type = $request->post("type");
        if (!isset($id) || !isset($type)){
            return response()->json(["status"=>"unknown_video"]);
        }
        if ($type=="gallery")
            $res["video"] = Gallery::find($id);
        else if ($type=="stand_content")
            $res["video"] = StandContent::find($id);
        
        return response()->json($res);
    }

    public function get_businesscards(Request $request) {
        $res = array();
        $id = $request->post('_id');
        if (!isset($id))
            return response()->json(["status" => "unknown_stand"]);
    
        $res["stand"] = Stand::with(['business_cards'])->find($id);      
        return response()->json($res);
    }

    public function get_available_times(Request $request) {
        $res = array();
        $id = $request->post('_id');
        if (!isset($id))
            return response()->json(["status" => "unknown_stand"]);
    
        $res["time_table"] = Stand::find($id)->time_table;      
        return response()->json($res);
    }

    public function save_appointment(Request $request) {
        $res = array();
        $id = $request->post('_id');
        $uid = $request->user()->id;
        if (!isset($id) || !isset($uid))
            return response()->json(["status" => "unknown_stand"]);

        $app = new Appointment;
        $app->stand_id = $id;
        $app->user_id = $uid;
        $app->schedule_date = $request->post('schedule_date');
        $app->start_time = $request->post('start_time');
        $app->end_time = $request->post('end_time');
        $app->save();
        $res["status"] = "ok";    
        return response()->json($res);
    }
     
    // all stands
    public function all_stands(Request $request, $fair_id = 0) {
        $res = array();
        if ($fair_id != 0)
            $res["stands"] = Stand::where("fair_id", $fair_id)->get();
        else
            $res["stands"] = Stand::all();
        return response()->json($res);
    }

    public function create_stand(Request $request) {
        $res = array();
        $stand = new Stand;
        $stand->fair_id = $request->post("fair_id");
        $stand->user_id = 1;
        $stand->site_link = $request->post("site_link");
        $stand->logo = $request->post("logo");

        $stand->save();

        $res["status"] = "ok";
        return response()->json($res);
    }

    public function current_user_stand(Request $request, $user_id, $fair_id = 0){
        $res = array();
        $query = ["user_id"=> $user_id];
        if ($fair_id != 0)
            $query["fair_id"] = $fair_id;
        $res["stands"] = Stand::where($query)->get();
        return response()->json($res);
    }

    public function update_stand(Request $request, $id) {
        $res = array();
        $stand = Stand::whereId($id)->update($request->post());
        $res["status"] = "ok";
        return response()->json($res);
    }

//contact
    public function create_contact(Request $request){
        $res = array();
        $contact = new Contact;
        $contact->stand_id = $request->post("stand_id");
        $contact->phone = $request->post("phone");
        $contact->email = $request->post("email");
        $contact->address = $request->post("address");
        $contact->whatsapp = $request->post("whatsapp");
        $contact->google = $request->post("google");
        $contact->facebook = $request->post("facebook");
        $contact->linkedin = $request->post("linkedin");
        $contact->instagram = $request->post("instagram");
        $contact->youtube = $request->post("youtube");
        $contact->twitter = $request->post("twitter");

        $contact->save();

        $res["status"] = "ok";
        return response()->json($res);
    }

    public function update_contact(Request $request, $id){
        $res = array();
        $contact = Contact::whereId($id)->update($request->post());
        $res["status"] = "ok";
        return response()->json($res);
    }

    public function all_contact(Request $request, $stand_id = 0){
        $res = array();
        if ($stand_id != 0)
            $res["contact"] = Contact::where("stand_id", $stand_id)->get();
        else
            $res["contact"] = Contact::all();
        return response()->json($res);
    }

    //file
    public function create_file(Request $request){
        $res = array();
        $file = new File;
        $file->stand_id = $request->post("stand_id");
        $file->url = $request->post("url");
       
        $file->save();

        $res["status"] = "ok";
        return response()->json($res);
    }
    public function update_file(Request $request, $id){
        $res = array();
        $file = File::whereId($id)->update($request->post());
        $res["status"] = "ok";
        return response()->json($res);
    }

    public function all_file(Request $request, $stand_id = 0){
        $res = array();
        if ($stand_id != 0)
            $res["file"] = File::where("stand_id", $stand_id)->get();
        else
            $res["file"] = File::all();
        return response()->json($res);
    }

    //Gallery
    public function create_gallery(Request $request){
        $res = array();
        $gallery = new Gallery;
        $gallery->stand_id = $request->post("stand_id");
        $gallery->url = $request->post("url");
       
        $gallery->save();

        $res["status"] = "ok";
        return response()->json($res);
    }
    public function update_gallery(Request $request, $id){
        $res = array();
        $gallery = Gallery::whereId($id)->update($request->post());
        $res["status"] = "ok";
        return response()->json($res);
    }

    public function all_gallery(Request $request, $stand_id = 0){
        $res = array();
        if ($stand_id != 0)
            $res["gallery"] = Gallery::where("stand_id", $stand_id)->get();
        else
            $res["gallery"] = Gallery::all();
       
        return response()->json($res);
    }

    //portfolio
    public function create_portfolio(Request $request){
        $res = array();
        $portfolio = new Portfolio;
        $portfolio->stand_id = $request->post("stand_id");
        $portfolio->url = $request->post("url");
        $portfolio->name = $request->post("name");
        $portfolio->country = $request->post("country");
        $portfolio->description = $request->post("description");
       
        $portfolio->save();

        $res["status"] = "ok";
        return response()->json($res);
    }
    public function update_portfolio(Request $request, $id){
        $res = array();
        $portfolio = Portfolio::whereId($id)->update($request->post());
        $res["status"] = "ok";
        return response()->json($res);
    }

    public function all_portfolio(Request $request, $stand_id = 0){
        $res = array();
        if ($stand_id != 0)
            $res["portfolio"] = Portfolio::where("stand_id", $stand_id)->get();
        else
            $res["portfolio"] = Portfolio::all();
       
        return response()->json($res);
    }

    //appointments
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

    //stand and user according to fair_id and country_id

    public function get_stands(Request $request, $fair_id, $country_id = 0){
        $res = array();
        $query = ["fair_id"=> $fair_id];
        if ($country_id != 0)
            $query["country_id"] = $country_id;
        $res["stands"] = Stand::with(['user'])->where($query)->get();
        
        return response()->json($res);
    }

    //all the information connected to a selected stand 
 /*    public function stand_information(Request $request, $id){
        $res = array();
        $res["stands"] = Stand::with(['user', 'stand_location', 'stand_type_item', 'gallery', 'file','appointment','contact','portfolio'])
        ->where($id)->get();
        return response()->json($res);
    } */
    public function stand_information(Request $request, $fair_id, $country_id = 0){
        $res = array();
        $query = ["fair_id"=> $fair_id];
        if ($country_id != 0)
            $query["country_id"] = $country_id;

        $res["stands"] = Stand::with(['user', 'stand_location', 'stand_type_item', 'gallery', 'file','appointment','contact','portfolio'])
        ->where($query)->get();
        return response()->json($res);
    }

    public function standDetail(){
        $id = request('id');
        $res = array();
        $res["stands"] = Stand::with(['user', 'stand_location', 'gallerys', 'files','appointments','contact','portfolios', 'stand_type', 'stand_contents'])
        ->where("id", $id)->get();
        return response()->json($res);
    }

}
