<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\FairType;
use App\StandType;
use App\StandLocation;
use App\StandTypeItem;
use App\Stand;
use App\Fair;
use App\Room;
use App\Talk;
use App\Appointment;
use App\Contact;
use App\Country;
use App\Gallery;
use App\File;
use App\Portfolio;
use App\User;




use Hash;

class SettingController extends Controller
{
    public function allFairType() {
        $res = array();
        $res['fair_types'] = FairType::with('stand_locations')->get();
        return response()->json($res);
    }

    public function getFairType(Request $request, $id) {
        $res = array();
        $res['fair_type'] = FairType::find($id);
        return response()->json($res);
    }

    public function updateFairType(Request $request, $id) {
        $res = array();
        $query = array();
        $name = $request->post('name');
        if ($name === null)
            $name = 'Fair Type - ' + rand();
        $query['name'] = $name;

        $request->validate([
            'building_file' => 'mimes:png,gif,jpeg,jpg',
            'interior_file' => 'mimes:png,gif,jpeg,jpg',
        ]);
  
        if (isset($request->building_file)) {
            $b_fileName =  md5(time()).'.'.$request->building_file->extension();  
            $request->building_file->move(public_path('fair_image'), $b_fileName);
            $query['building'] = $b_fileName;
        } 
        if (isset($request->interior_file))  {
            $i_fileName =  md5(time()).'.'.$request->interior_file->extension();  
            $request->interior_file->move(public_path('fair_image'), $i_fileName); 
            $query['interior'] = $i_fileName;       
        }

        FairType::whereId($id)->update($query);
        $res['status'] = 'ok';        
        $res['id'] = $id;
        return response()->json($res);
    }

    public function createFairType(Request $request) {
        $res = array();
        $fairType = new FairType;
        $name = $request->post('name');
        if ($name === null)
            $name = 'Fair Type - ' + rand();
        $fairType->name = $name;

        $request->validate([
            'building_file' => 'mimes:png,gif,jpeg,jpg',
            'interior_file' => 'mimes:png,gif,jpeg,jpg',
        ]);
  
        if (isset($request->building_file)) {
            $b_fileName = md5(time()).'.'.$request->building_file->extension();  
            $request->building_file->move(public_path('fair_image'), $b_fileName);
            $fairType->building = $b_fileName;
        } 
        if (isset($request->interior_file))  {
            $i_fileName =  md5(time()).'.'.$request->interior_file->extension();  
            $request->interior_file->move(public_path('fair_image'), $i_fileName);   
            $fairType->interior = $i_fileName;     
        }

        $fairType->save();
        $res['status'] = 'ok';
        $res['id'] = $fairType->id;
        return response()->json($res);
    }

    public function allStandType(){
        $res = array();
        $res['stand_types'] = StandType::all();
        return response()->json($res);
    }

    public function getStandType(Request $request, $id) {
        $res = array();
        $res['stand_type'] = StandType::find($id);
        return response()->json($res);
    }

    public function updateStandType(Request $request, $id) {
        $res = array();
        $query = array();
        $name = $request->post('name');
        if ($name === null)
            $name = 'Fair Type - ' + rand();
        $query['name'] = $name;

        $request->validate([
            'building_file' => 'mimes:png,gif,jpeg,jpg',
            'interior_file' => 'mimes:png,gif,jpeg,jpg',
        ]);
  
        if (isset($request->building_file)) {
            $b_fileName =  md5(time()).'.'.$request->building_file->extension();  
            $request->building_file->move(public_path('fair_image'), $b_fileName);
            $query['building'] = $b_fileName;
        } 
        if (isset($request->interior_file))  {
            $i_fileName =  md5(time()).'.'.$request->interior_file->extension();  
            $request->interior_file->move(public_path('fair_image'), $i_fileName);   
            $query['interior'] = $i_fileName;
        }

        StandType::whereId($id)->update($query);
        $res['status'] = 'ok';        
        $res['id'] = $id;
        return response()->json($res);
    }

    public function createStandType(Request $request) {
        $res = array();
        $standType = new StandType;
        $name = $request->post('name');
        if ($name === null)
            $name = 'Fair Type - ' + rand();
        $standType->name = $name;

        $request->validate([
            'building_file' => 'mimes:png,gif,jpeg,jpg',
            'interior_file' => 'mimes:png,gif,jpeg,jpg',
        ]);
  
        if (isset($request->building_file)) {
            $b_fileName = md5(time()).'.'.$request->building_file->extension();  
            $request->building_file->move(public_path('fair_image'), $b_fileName);
            $standType->building = $b_fileName;
        } 
        if (isset($request->interior_file))  {
            $i_fileName =  md5(time()).'.'.$request->interior_file->extension();  
            $request->interior_file->move(public_path('fair_image'), $i_fileName);   
            $standType->interior = $i_fileName;     
        }

        $standType->save();
        $res['status'] = 'ok';
        $res['id'] = $standType->id;
        return response()->json($res);
    }

    public function allTypes(Request $request) {
        $res = array();
        $res['fair_types'] = FairType::all();
        $res['stand_types'] = StandType::all();
        return response()->json($res);    
    }

    public function allStandLocation(Request $request, $ftype_id = 0) {
        $res = array();
        if (!isset($ftype_id) || $ftype_id == 0)
            $ftype_id = FairType::first()->id; 
        $res["ftype"] = FairType::find($ftype_id);
        $res['stand_locations']  = StandLocation::with('stand_type')->where("fair_type_id", $ftype_id)->get();
        
        return response()->json($res);
    }

    public function saveStandLocation(Request $request){
        $res = array();
        foreach ($request->post("locations") as $location) {
            $updateQuery = [
                "left" => $location["left"],
                "top" => $location["top"]
            ];
            if (isset($location["id"]))
                StandLocation::whereId($location["id"])->update($updateQuery);
            else {
                $newLocation = new StandLocation;
                $newLocation->fair_type_id = $location["fair_type_id"];
                $newLocation->stand_type_id = $location["stand_type_id"];
                $newLocation->left = $location["left"];
                $newLocation->top = $location["top"];
                $newLocation->width = 0.2;
                $newLocation->height = 0.2;
                $newLocation->save();
            }
        }
        $res['status'] = 'ok';
        return response()->json($res);
    }

    public function removeStandLocation(Request $request) {
        StandLocation::where("id", $request->post("remove_id"))->delete();
        return response()->json(["status"=> "ok"]);
    }

    public function allStandTypeItem(Request $request, $stype_id = 0) {
        $res = array();
        if (!isset($stype_id) || $stype_id == 0)
            $stype_id = StandType::first()->id;

        $stype = StandType::find($stype_id);
        $res["stype"] = $stype;
        $res['stand_type_items'] = StandTypeItem::where("stand_type_id", $stype_id)->get();
        
        return response()->json($res);
    }

    public function saveStandTypeItem(Request $request){
        $res = array();
        foreach ($request->post("locations") as $location) {
            $updateQuery = [
                "left" => $location["left"],
                "top" => $location["top"],
                "width" => $location["width"],
                "height" => $location["height"]
            ];
            if (isset($location["id"]))
                StandTypeItem::whereId($location["id"])->update($updateQuery);
            else {
                $standTypeItem = new StandTypeItem;
                $standTypeItem->stand_type_id = $location["stand_type_id"];
                $standTypeItem->left = $location["left"];
                $standTypeItem->top = $location["top"];
                $standTypeItem->width = $location["width"];
                $standTypeItem->height = $location["height"];
                $standTypeItem->type = $location["type"];
                $standTypeItem->save();
            }
        }
        $res['status'] = 'ok';
        return response()->json($res);
    }

    public function removeStandTypeItem(Request $request) {
        StandTypeItem::where('id', $request->post("remove_id"))->delete();
        return response()->json(["status"=>"ok"]);
    }

    public function dummyCreate() {
    
        $d_country = [
            [
              "name"=> "Andorra",
              "native"=> "Andorra",
              "code"=> "AD",
              "phone"=> "376",
              "continent"=> "Europe",
              "capital"=> "Andorra la Vella",
              "currency"=> "EUR",
              "languages"=> [
                "ca"
              ]
            ],
            [
              "name"=> "United Arab Emirates",
              "native"=> "دولة الإمارات العربية المتحدة",
              "code"=> "AE",
              "phone"=> "971",
              "continent"=> "Asia",
              "capital"=> "Abu Dhabi",
              "currency"=> "AED",
              "languages"=> [
                "ar"
              ]
            ],
            [
              "name"=> "Afghanistan",
              "native"=> "افغانستان",
              "code"=> "AF",
              "phone"=> "93",
              "continent"=> "Asia",
              "capital"=> "Kabul",
              "currency"=> "AFN",
              "languages"=> [
                "ps",
                "uz",
                "tk"
              ]
            ],
            [
              "name"=> "Antigua and Barbuda",
              "native"=> "Antigua and Barbuda",
              "code"=> "AG",
              "phone"=> "1268",
              "continent"=> "North America",
              "capital"=> "Saint Johns",
              "currency"=> "XCD",
              "languages"=> [
                "en"
              ]
            ],
            [
              "name"=> "Anguilla",
              "native"=> "Anguilla",
              "code"=> "AI",
              "phone"=> "1264",
              "continent"=> "North America",
              "capital"=> "The Valley",
              "currency"=> "XCD",
              "languages"=> [
                "en"
              ]
            ],
            [
              "name"=> "Albania",
              "native"=> "Shqipëria",
              "code"=> "AL",
              "phone"=> "355",
              "continent"=> "Europe",
              "capital"=> "Tirana",
              "currency"=> "ALL",
              "languages"=> [
                "sq"
              ]
            ],
            [
              "name"=> "Armenia",
              "native"=> "Հայաստան",
              "code"=> "AM",
              "phone"=> "374",
              "continent"=> "Asia",
              "capital"=> "Yerevan",
              "currency"=> "AMD",
              "languages"=> [
                "hy",
                "ru"
              ]
            ],
            [
              "name"=> "Angola",
              "native"=> "Angola",
              "phone"=> "244",
              "code"=> "AO",
              "continent"=> "Africa",
              "capital"=> "Luanda",
              "currency"=> "AOA",
              "languages"=> [
                "pt"
              ]
            ],
            [
              "name"=> "Antarctica",
              "native"=> "Antarctica",
              "code"=> "AQ",
              "phone"=> "672",
              "continent"=> "Antarctica",
              "capital"=> "",
              "currency"=> "",
              "languages"=> []
            ],
            [
              "name"=> "Argentina",
              "native"=> "Argentina",
              "code"=> "AR",
              "phone"=> "54",
              "continent"=> "South America",
              "capital"=> "Buenos Aires",
              "currency"=> "ARS",
              "languages"=> [
                "es",
                "gn"
              ]
            ],
            [
              "name"=> "American Samoa",
              "native"=> "American Samoa",
              "code"=> "AS",
              "phone"=> "1684",
              "continent"=> "Oceania",
              "capital"=> "Pago Pago",
              "currency"=> "USD",
              "languages"=> [
                "en",
                "sm"
              ]
            ],
            [
              "name"=> "Austria",
              "native"=> "Österreich",
              "code"=> "AT",
              "phone"=> "43",
              "continent"=> "Europe",
              "capital"=> "Vienna",
              "currency"=> "EUR",
              "languages"=> [
                "de"
              ]
            ],
            [
              "name"=> "Australia",
              "native"=> "Australia",
              "code"=> "AU",
              "phone"=> "61",
              "continent"=> "Oceania",
              "capital"=> "Canberra",
              "currency"=> "AUD",
              "languages"=> [
                "en"
              ]
            ],
            [
              "name"=> "Aruba",
              "native"=> "Aruba",
              "code"=> "AW",
              "phone"=> "297",
              "continent"=> "North America",
              "capital"=> "Oranjestad",
              "currency"=> "AWG",
              "languages"=> [
                "nl",
                "pa"
              ]
            ],
            [
              "name"=> "Åland",
              "native"=> "Åland",
              "code"=> "AX",
              "phone"=> "358",
              "continent"=> "Europe",
              "capital"=> "Mariehamn",
              "currency"=> "EUR",
              "languages"=> [
                "sv"
              ]
            ],
            [
              "name"=> "Azerbaijan",
              "native"=> "Azərbaycan",
              "code"=> "AZ",
              "phone"=> "994",
              "continent"=> "Asia",
              "capital"=> "Baku",
              "currency"=> "AZN",
              "languages"=> [
                "az"
              ]
            ],
            [
              "name"=> "Bosnia and Herzegovina",
              "native"=> "Bosna i Hercegovina",
              "code"=> "BA",
              "phone"=> "387",
              "continent"=> "Europe",
              "capital"=> "Sarajevo",
              "currency"=> "BAM",
              "languages"=> [
                "bs",
                "hr",
                "sr"
              ]
            ],
            [
              "name"=> "Barbados",
              "native"=> "Barbados",
              "code"=> "BB",
              "phone"=> "1246",
              "continent"=> "North America",
              "capital"=> "Bridgetown",
              "currency"=> "BBD",
              "languages"=> [
                "en"
              ]
            ],
            [
              "name"=> "Bangladesh",
              "native"=> "Bangladesh",
              "code"=> "BD",
              "phone"=> "880",
              "continent"=> "Asia",
              "capital"=> "Dhaka",
              "currency"=> "BDT",
              "languages"=> [
                "bn"
              ]
            ],
            [
              "name"=> "Belgium",
              "native"=> "België",
              "code"=> "BE",
              "phone"=> "32",
              "continent"=> "Europe",
              "capital"=> "Brussels",
              "currency"=> "EUR",
              "languages"=> [
                "nl",
                "fr",
                "de"
              ]
            ],
            [
              "name"=> "Burkina Faso",
              "native"=> "Burkina Faso",
              "code"=> "BF",
              "phone"=> "226",
              "continent"=> "Africa",
              "capital"=> "Ouagadougou",
              "currency"=> "XOF",
              "languages"=> [
                "fr",
                "ff"
              ]
            ],
            [
              "name"=> "Bulgaria",
              "native"=> "България",
              "code"=> "BG",
              "phone"=> "359",
              "continent"=> "Europe",
              "capital"=> "Sofia",
              "currency"=> "BGN",
              "languages"=> [
                "bg"
              ]
            ],
            [
              "name"=> "Bahrain",
              "native"=> "‏البحرين",
              "code"=> "BH",
              "phone"=> "973",
              "continent"=> "Asia",
              "capital"=> "Manama",
              "currency"=> "BHD",
              "languages"=> [
                "ar"
              ]
            ],
            [
              "name"=> "Burundi",
              "native"=> "Burundi",
              "code"=> "BI",
              "phone"=> "257",
              "continent"=> "Africa",
              "capital"=> "Bujumbura",
              "currency"=> "BIF",
              "languages"=> [
                "fr",
                "rn"
              ]
            ],
            [
              "name"=> "Benin",
              "native"=> "Bénin",
              "code"=> "BJ",
              "phone"=> "229",
              "continent"=> "Africa",
              "capital"=> "Porto-Novo",
              "currency"=> "XOF",
              "languages"=> [
                "fr"
              ]
            ],
            [
              "name"=> "Saint Barthélemy",
              "native"=> "Saint-Barthélemy",
              "code"=> "BL",
              "phone"=> "590",
              "continent"=> "North America",
              "capital"=> "Gustavia",
              "currency"=> "EUR",
              "languages"=> [
                "fr"
              ]
            ],
            [
              "name"=> "Bermuda",
              "native"=> "Bermuda",
              "code"=> "BM",
              "phone"=> "1441",
              "continent"=> "North America",
              "capital"=> "Hamilton",
              "currency"=> "BMD",
              "languages"=> [
                "en"
              ]
            ],
            [
              "name"=> "Brunei",
              "native"=> "Negara Brunei Darussalam",
              "code"=> "BN",
              "phone"=> "673",
              "continent"=> "Asia",
              "capital"=> "Bandar Seri Begawan",
              "currency"=> "BND",
              "languages"=> [
                "ms"
              ]
            ],
            [
              "name"=> "Bolivia",
              "native"=> "Bolivia",
              "code"=> "BO",
              "phone"=> "591",
              "continent"=> "South America",
              "capital"=> "Sucre",
              "currency"=> "BOB,BOV",
              "languages"=> [
                "es",
                "ay",
                "qu"
              ]
            ],
            [
              "name"=> "Bonaire",
              "native"=> "Bonaire",
              "code"=> "BQ",
              "phone"=> "5997",
              "continent"=> "North America",
              "capital"=> "Kralendijk",
              "currency"=> "USD",
              "languages"=> [
                "nl"
              ]
            ],
            [
              "name"=> "Brazil",
              "native"=> "Brasil",
              "code"=> "BR",
              "phone"=> "55",
              "continent"=> "South America",
              "capital"=> "Brasília",
              "currency"=> "BRL",
              "languages"=> [
                "pt"
              ]
            ],
            "BS"=> [
              "name"=> "Bahamas",
              "native"=> "Bahamas",
              "code"=> "BS",
              "phone"=> "1242",
              "continent"=> "North America",
              "capital"=> "Nassau",
              "currency"=> "BSD",
              "languages"=> [
                "en"
              ]
            ],
            [
              "name"=> "Bhutan",
              "native"=> "ʼbrug-yul",
              "code"=> "BT",
              "phone"=> "975",
              "continent"=> "Asia",
              "capital"=> "Thimphu",
              "currency"=> "BTN,INR",
              "languages"=> [
                "dz"
              ]
            ],
            [
              "name"=> "Bouvet Island",
              "native"=> "Bouvetøya",
              "code"=> "BV",
              "phone"=> "47",
              "continent"=> "Antarctica",
              "capital"=> "",
              "currency"=> "NOK",
              "languages"=> [
                "no",
                "nb",
                "nn"
              ]
            ],
            [
              "name"=> "Botswana",
              "native"=> "Botswana",
              "code"=> "BW",
              "phone"=> "267",
              "continent"=> "Africa",
              "capital"=> "Gaborone",
              "currency"=> "BWP",
              "languages"=> [
                "en",
                "tn"
              ]
            ],
            [
              "name"=> "Belarus",
              "native"=> "Белару́сь",
              "code"=> "BY",
              "phone"=> "375",
              "continent"=> "Europe",
              "capital"=> "Minsk",
              "currency"=> "BYN",
              "languages"=> [
                "be",
                "ru"
              ]
            ],
            [
              "name"=> "Belize",
              "native"=> "Belize",
              "code"=> "BZ",
              "phone"=> "501",
              "continent"=> "North America",
              "capital"=> "Belmopan",
              "currency"=> "BZD",
              "languages"=> [
                "en",
                "es"
              ]
            ],
            [
              "name"=> "Canada",
              "native"=> "Canada",
              "code"=> "CA",
              "phone"=> "1",
              "continent"=> "North America",
              "capital"=> "Ottawa",
              "currency"=> "CAD",
              "languages"=> [
                "en",
                "fr"
              ]
            ],
            [
              "name"=> "Cocos [Keeling] Islands",
              "native"=> "Cocos (Keeling) Islands",
              "code"=> "CC",
              "phone"=> "61",
              "continent"=> "Asia",
              "capital"=> "West Island",
              "currency"=> "AUD",
              "languages"=> [
                "en"
              ]
            ],
            [
              "name"=> "Democratic Republic of the Congo",
              "native"=> "République démocratique du Congo",
              "code"=> "CD",
              "phone"=> "243",
              "continent"=> "Africa",
              "capital"=> "Kinshasa",
              "currency"=> "CDF",
              "languages"=> [
                "fr",
                "ln",
                "kg",
                "sw",
                "lu"
              ]
            ],
            [
              "name"=> "Central African Republic",
              "native"=> "Ködörösêse tî Bêafrîka",
              "code"=> "CF",
              "phone"=> "236",
              "continent"=> "Africa",
              "capital"=> "Bangui",
              "currency"=> "XAF",
              "languages"=> [
                "fr",
                "sg"
              ]
            ],
            [
              "name"=> "Republic of the Congo",
              "native"=> "République du Congo",
              "code"=> "CG",
              "phone"=> "242",
              "continent"=> "Africa",
              "capital"=> "Brazzaville",
              "currency"=> "XAF",
              "languages"=> [
                "fr",
                "ln"
              ]
            ],
            [
              "name"=> "Switzerland",
              "native"=> "Schweiz",
              "code"=> "CH",
              "phone"=> "41",
              "continent"=> "Europe",
              "capital"=> "Bern",
              "currency"=> "CHE,CHF,CHW",
              "languages"=> [
                "de",
                "fr",
                "it"
              ]
            ],
            [
              "name"=> "Ivory Coast",
              "native"=> "Côte d'Ivoire",
              "code"=> "CI",
              "phone"=> "225",
              "continent"=> "Africa",
              "capital"=> "Yamoussoukro",
              "currency"=> "XOF",
              "languages"=> [
                "fr"
              ]
            ],
            [
              "name"=> "Cook Islands",
              "native"=> "Cook Islands",
              "code"=> "CK",
              "phone"=> "682",
              "continent"=> "Oceania",
              "capital"=> "Avarua",
              "currency"=> "NZD",
              "languages"=> [
                "en"
              ]
            ],
            [
              "name"=> "Chile",
              "native"=> "Chile",
              "code"=> "CL",
              "phone"=> "56",
              "continent"=> "South America",
              "capital"=> "Santiago",
              "currency"=> "CLF,CLP",
              "languages"=> [
                "es"
              ]
            ],
            [
              "name"=> "Cameroon",
              "native"=> "Cameroon",
              "code"=> "CM",
              "phone"=> "237",
              "continent"=> "Africa",
              "capital"=> "Yaoundé",
              "currency"=> "XAF",
              "languages"=> [
                "en",
                "fr"
              ]
            ],
            [
              "name"=> "China",
              "native"=> "中国",
              "code"=> "CN",
              "phone"=> "86",
              "continent"=> "Asia",
              "capital"=> "Beijing",
              "currency"=> "CNY",
              "languages"=> [
                "zh"
              ]
            ],
            [
              "name"=> "Colombia",
              "native"=> "Colombia",
              "code"=> "CO",
              "phone"=> "57",
              "continent"=> "South America",
              "capital"=> "Bogotá",
              "currency"=> "COP",
              "languages"=> [
                "es"
              ]
            ],
            [
              "name"=> "Costa Rica",
              "native"=> "Costa Rica",
              "code"=> "CR",
              "phone"=> "506",
              "continent"=> "North America",
              "capital"=> "San José",
              "currency"=> "CRC",
              "languages"=> [
                "es"
              ]
            ],
            [
              "name"=> "Cuba",
              "native"=> "Cuba",
              "code"=> "CU",
              "phone"=> "53",
              "continent"=> "North America",
              "capital"=> "Havana",
              "currency"=> "CUC,CUP",
              "languages"=> [
                "es"
              ]
            ],
            [
              "name"=> "Cape Verde",
              "native"=> "Cabo Verde",
              "code"=> "CV",
              "phone"=> "238",
              "continent"=> "Africa",
              "capital"=> "Praia",
              "currency"=> "CVE",
              "languages"=> [
                "pt"
              ]
            ],
            [
              "name"=> "Curacao",
              "native"=> "Curaçao",
              "code"=> "CW",
              "phone"=> "5999",
              "continent"=> "North America",
              "capital"=> "Willemstad",
              "currency"=> "ANG",
              "languages"=> [
                "nl",
                "pa",
                "en"
              ]
            ],
            [
              "name"=> "Christmas Island",
              "native"=> "Christmas Island",
              "code"=> "CX",
              "phone"=> "61",
              "continent"=> "Asia",
              "capital"=> "Flying Fish Cove",
              "currency"=> "AUD",
              "languages"=> [
                "en"
              ]
            ],
            [
              "name"=> "Cyprus",
              "native"=> "Κύπρος",
              "code"=> "CY",
              "phone"=> "357",
              "continent"=> "Europe",
              "capital"=> "Nicosia",
              "currency"=> "EUR",
              "languages"=> [
                "el",
                "tr",
                "hy"
              ]
            ],
            [
              "name"=> "Czech Republic",
              "native"=> "Česká republika",
              "code"=> "CZ",
              "phone"=> "420",
              "continent"=> "Europe",
              "capital"=> "Prague",
              "currency"=> "CZK",
              "languages"=> [
                "cs",
                "sk"
              ]
            ],
            [
              "name"=> "Germany",
              "native"=> "Deutschland",
              "code"=> "DE",
              "phone"=> "49",
              "continent"=> "Europe",
              "capital"=> "Berlin",
              "currency"=> "EUR",
              "languages"=> [
                "de"
              ]
            ]
        ];

        $i = 0;
        foreach ($d_country as $item) {
            $ctry = new Country;
            $ctry->name = $item["name"];
            $ctry->phone = $item["phone"];
            $ctry->continent = $item["continent"];
            $ctry->capital = $item["capital"];
            $ctry->currency = $item["currency"];
            if ($i++ <= 10)
                $ctry->status = 1;
            else  
                $ctry->status = 0;
            $ctry->code = $item["code"];
            $ctry->save();
        }

        for ($i = 1; $i<6; $i++) {
            $fairType = new FairType;
            $fairType->name = 'fair type - '.$i;
            $fairType->building = 'fair_building'.$i.'.jpeg';
            $fairType->interior = 'fair_interior'.$i.'.jpeg';
            
            $fairType->save();
        }  
        
        for ($i = 1; $i<8; $i++) {
            $standType = new StandType;
            $standType->name = 'stand type - '.$i;
            $standType->building = 'stand_building'.$i.'.png';
            $standType->interior = 'stand_interior'.$i.'.jpeg';
            
            $standType->save();
        }

        for ($i = 1; $i < 6; $i++) {
            for ($j = 0; $j < 12; $j++) {
                $standLocation = new StandLocation;
                $standLocation->fair_type_id = $i;
                $standLocation->stand_type_id = rand(1, 7);
                $standLocation->left = ($j % 3) * 0.3 + 0.1;
                $standLocation->top = ($j - ($j % 3))/3 * 0.3 + 0.1;
                $standLocation->width = 0.2;
                $standLocation->height = 0.2;
                $standLocation->save();
            }
        }
        for($i = 1; $i < 10; $i++){
            $fair = new Fair;
            $fair->name = 'Fair - '.$i;
            $fair->fair_type_id = rand(1, 5);
            $sd = rand(1, 31);
            $fair->start_date = '2020-07-'.$sd;
            $fair->end_date = '2020-07-'.rand($sd, 31);
            $fair->status = 1;
            $fair->save();            
        }

        for($i = 1; $i < 10; $i++){
            $stand = new Stand;
            $stand->fair_id = rand(1, 10);
            $stand->country_id = rand(1, 10);
            $stand->user_id = rand(1, 10);
            $stand->stand_location_id = rand(1, 60);
            $stand->stand_location_id = rand(1, 60);
            $stand->site_link = 'http://localhost/site_link'.$i;
            $stand->logo = 'logo-'.$i;
            $stand->description = 'description-'.$i;
            $stand->status = 1;
            $stand->save();
        }

       //country


       //room
       for($i = 1; $i < 10; $i++){
            $room = new Room;
            $room->country_id = rand(1, 10);
            $room->name = 'room-'.$i;
            $room->description = 'description-'.$i;
            $room->status = rand(0,1);
            $room->save();
        }

        //talks
        for($i = 1; $i < 10; $i++){
            $talk = new Talk;
            $talk->room_id = rand(1, 10);
            $talk->user_id = rand(1, 10);
            $talk->title = 'title-'.$i;
            $talk->status = rand(0,1);
            $talk->limited = rand(0,1);
            $talk->peoples = rand(10,15);
            $talk->exhibitor_profession = 'exhibitor_profession-'.$i;
            $talk->exhibitor_company = 'exhibitor_company-'.$i;
          
            $sd = rand(1, 31);

            $talk->start_time = '2020-07-'.$sd.' 00:00:00';
            $talk->end_time = '2020-07-'.rand($sd, 31).' 00:00:00';
            $talk->video = 'card-image-5.jpg';
            $talk->talk_date = '2020-07-27';

            $talk->save();
        }

        //user
        for($i = 1; $i < 10; $i++){
            $user = new User;
            $user->username = 'username-'.$i;
            $user->name = 'name - '.$i;
            $user->email = 'email'.$i."@gmail.com";
            $user->country = 'country - '.$i;
            $user->password = 'password'.$i;
            $user->avatar = 'avatar'.$i;
            $user->save();
        }

        //files
        for($i = 1; $i < 10; $i++){
            $file = new File;
            $file->stand_id = rand(1, 10);
            $file->name = 'name - '.$i;
            $file->url = 'url - '.$i;
            $file->save();
        }

        //gallery
        for($i = 1; $i < 10; $i++){
            $gallery = new Gallery;
            $gallery->stand_id = rand(1, 10);
            $gallery->url = 'card-image-5.jpg';
            $gallery->save();
        }
        //portofolio
        for($i = 1; $i < 10; $i++){
            $portofolio = new Portfolio;
            $portofolio->stand_id = rand(1, 10);
            $portofolio->name = 'name - '.$i;
            $portofolio->url = 'card-image-5.jpg';
            $portofolio->country = 'country'.$i;
            $portofolio->description = 'description'.$i;

            $portofolio->save();
        }

         //appointment
         for($i = 1; $i < 10; $i++){
            $appointment = new Appointment;
            $appointment->stand_id = rand(1, 10);
            $appointment->user_id = rand(1, 10);
            $appointment->status = rand(0, 1);
            $appointment->save();
        }

        //contact
        for($i = 1; $i < 10; $i++){
            $contact = new Contact;
            $contact->stand_id = rand(1, 10);
            $contact->phone = 10000 + $i;
            $contact->email = 'email'.$i;
            $contact->address = 'address'.$i;
            $contact->whatsapp = 'whatsapp'.$i;
            $contact->google = 'google'.$i;
            $contact->facebook = 'facebook'.$i;
            $contact->linkedin = 'linkin'.$i;
            $contact->instagram = 'instagram'.$i;
            $contact->youtube = 'youtube'.$i;
            $contact->twitter = 'twitter'.$i;
            $contact->save();
        }

        return response()->json(["status" => "ok"]);
    }
}
