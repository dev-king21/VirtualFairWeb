<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::post('/register_country', 'CountryController@dummyCreate');
Route::any('/init_setting', 'SettingController@dummyCreate');


Route::group(['middleware' => 'auth:api'], function(){
    Route::get('users', 'UserController@index')->middleware('isAdmin');
    Route::get('users/{id}', 'UserController@show')->middleware('isAdminOrSelf');

    Route::get('/fair/get_current_stands', 'FairController@get_stands');
    Route::post('/stand/purchase', 'FairController@purchase_stand');

    Route::post('/setting/my_stand', 'SettingController@get_my_stand');
    Route::post('/setting/my_stand/save_content', 'SettingController@save_content');
    Route::post('/setting/my_stand/remove_content', 'SettingController@remove_content');
    Route::post('/setting/my_stand/save_contact', 'SettingController@save_contact');
    
    Route::post('/setting/my_stand/get_information', 'SettingController@get_information');
    Route::post('/setting/my_stand/save_information', 'SettingController@save_information');
    
    Route::post('/setting/my_stand/get_brochures', 'SettingController@get_brochures');
    Route::post('/setting/my_stand/save_brochure', 'SettingController@save_brochure');
    Route::post('/setting/my_stand/remove_brochure', 'SettingController@remove_brochure');
    
    Route::post('/setting/my_stand/get_videos', 'SettingController@get_videos');
    Route::post('/setting/my_stand/save_video', 'SettingController@save_video');
    Route::post('/setting/my_stand/remove_video', 'SettingController@remove_video');

    Route::post('/setting/my_stand/get_businesscards', 'SettingController@get_businesscards');
    Route::post('/setting/my_stand/save_businesscard', 'SettingController@save_businesscard');
    Route::post('/setting/my_stand/remove_businesscard', 'SettingController@remove_businesscard');


});

Route::prefix('auth')->group(function () {
    Route::post('register', 'AuthController@register');
    Route::post('login', 'AuthController@login');
    Route::get('refresh', 'AuthController@refresh');
    Route::group(['middleware' => 'auth:api'], function() {
        Route::post('profile', 'AuthController@user');
        Route::post('save', 'AuthController@save');
        Route::post('logout', 'AuthController@logout');
    });
});

//user
Route::get('/user/all', 'UserController@allUser');
Route::get('/user/request', 'UserController@requestUser');
Route::get('/user/book', 'UserController@bookedUser');
Route::get('/user/active', 'UserController@activeUser');
Route::get('/user/past', 'UserController@pastUser');
Route::post('/user/create', 'UserController@createUser');


//fair
Route::get('/fair/all', 'FairController@all_fairs');
Route::get('/fair/year/{year}', 'FairController@fairs_year');
Route::get('/fair/current', 'FairController@current_fairs');
Route::get('/fair/now', 'FairController@current_fair');
Route::get('/fair/next', 'FairController@next_fairs');
Route::get('/fair/past', 'FairController@past_fairs');
Route::get('/fair/show', 'FairController@get_countries');
Route::get('/fair/show/{fair_id}', 'FairController@get_countries');
Route::get('/fair/show/{fair_id}/{country_id}', 'FairController@get_stands');
Route::get('/fair/show/{fair_id}/{country_id}/{stand_id}', 'FairController@get_stand');

///////////////////// get stands of current fair and first country



Route::post('/fair/create', 'FairController@create_fair');
Route::post('/fair/update/{id}', 'FairController@update_fair');
Route::get('/fair/request', 'FairController@requestFair');
Route::get('/fair/book', 'FairController@bookedFair');
Route::get('/fair/active', 'FairController@activeFair');

Route::get('/fair/stands/{id}', 'FairController@fairStands');
Route::get('/fair/stands/{id}/{country_id}', 'FairController@countryStands');

//stand
Route::get('/stand/all', 'StandController@all_stands');
Route::post('/stand/create', 'StandController@create_stand');
Route::get('/stand/user/{user_id}', 'StandController@current_user_stand');
Route::get('/stand/user/{user_id}/{fair_id}', 'StandController@current_user_stand');
Route::post('/stand/update/{id}', 'StandController@update_stand');
Route::get('/stand/stand-detail/{id}', 'StandController@standDetail');



//appointments
Route::get('/stand/appointment/all', 'AppointmentController@all_appointments');
Route::get('/stand/appointment/all/{stand_id}', 'AppointmentController@all_appointments');
Route::get('/stand/appointment/all/{stand_id}/{user_id}', 'AppointmentController@all_appointments');

Route::post('/stand/appointment/create', 'AppointmentController@create_appointment');
Route::post('/stand/appointment/update/{id}', 'AppointmentController@update_appointment');

//contacts
Route::post('/stand/contact/create', 'StandController@create_contact');
Route::post('/stand/contact/update/{id}', 'StandController@update_contact');
Route::get('/stand/contact/all', 'StandController@all_contact');
Route::get('/stand/contact/all/{stand_id}', 'StandController@all_contact');

//file
Route::post('/stand/file/create', 'StandController@create_file');
Route::post('/stand/file/update/{id}', 'StandController@update_file');
Route::get('/stand/file/all', 'StandController@all_file');
Route::get('/stand/file/all/{stand_id}', 'StandController@all_file');

//gallery
Route::post('/stand/gallery/create', 'StandController@create_gallery');
Route::post('/stand/gallery/update/{id}', 'StandController@update_gallery');
Route::get('/stand/gallery/all', 'StandController@all_gallery');
Route::get('/stand/gallery/all/{stand_id}', 'StandController@all_gallery');

//portfolio
Route::post('/stand/portfolio/create', 'StandController@create_portfolio');
Route::post('/stand/portfolio/update/{id}', 'StandController@update_portfolio');
Route::get('/stand/portfolio/all', 'StandController@all_portfolio');
Route::get('/stand/portfolio/all/{stand_id}', 'StandController@all_portfolio');

//room
Route::post('/room/create', 'RoomController@create_room');
Route::post('/room/update/{id}', 'RoomController@update_room');
Route::get('/room/all', 'RoomController@all_room');
Route::get('/room/request', 'RoomController@requestRoom');
Route::get('/room/book', 'RoomController@bookedRoom');
Route::get('/room/active', 'RoomController@activeRoom');
Route::get('/room/past', 'RoomController@pastRoom');


Route::get('/rooms/all', 'RoomController@allRooms');
Route::get('/rooms/all/{country_id}', 'RoomController@countryRooms');
Route::get('/rooms/talks/all/{id}', 'RoomController@Talks');
Route::get('/rooms/talks/request', 'RoomController@RequestTalks');
Route::get('/rooms/talks/scheduled', 'RoomController@ScheduledTalks');
Route::get('/rooms/talks/live', 'RoomController@LiveTalks');
Route::get('/rooms/talks/past', 'RoomController@PastTalks');


//talk
Route::post('/room/talk/create', 'RoomController@create_talk');
Route::post('/room/talk/update/{id}', 'RoomController@update_talk');
Route::get('/room/talk/all', 'RoomController@all_talk');

//country
Route::get('/country/all', 'CountryController@show');
Route::post('/country/update/{id}', 'CountryController@update');
Route::post('/country/activate/{status}', 'CountryController@activate');

//fairType
Route::get('/fair_type/all', 'SettingController@allFairType');
Route::get('/fair_type/get/{id}', 'SettingController@getFairType');
Route::post('/fair_type/create', 'SettingController@createFairType');
Route::post('/fair_type/update/{id}', 'SettingController@updateFairType');
Route::get('/fair_type/{ftype_id}/stand_locations', 'SettingController@allStandLocation');

//standType
Route::get('/stand_type/all', 'SettingController@allStandType');
Route::get('/stand_type/get/{id}', 'SettingController@getStandType');
Route::post('/stand_type/create', 'SettingController@createStandType');
Route::post('/stand_type/update/{id}', 'SettingController@updateStandType');
Route::get('/stand_type/{stype_id}/stand_type_items', 'SettingController@allStandTypeItems');

//standLocation
Route::get('/stand_location/allTypes', 'SettingController@allTypes');
Route::get('/stand_location/all', 'SettingController@allStandLocation');
Route::get('/stand_location/all/{ftype_id}', 'SettingController@allStandLocation');
Route::post('/stand_location/save', 'SettingController@saveStandLocation');
Route::post('/stand_location/remove', 'SettingController@removeStandLocation');

//standTypeItem
Route::get('/stand_type_item/all', 'SettingController@allStandTypeItem');
Route::get('/stand_type_item/all/{id}', 'SettingController@allStandTypeItem');
Route::post('/stand_type_item/save', 'SettingController@saveStandTypeItem');
Route::post('/stand_type_item/remove', 'SettingController@removeStandTypeItem');

//fair-country-stand
Route::get('/fair/country/stand/{fair_id}/{country_id}', 'StandController@get_stands');

//all the informaton related to stand
Route::get('fair/country/stand/information/{fair_id}/{country_id}', 'StandController@stand_information');

