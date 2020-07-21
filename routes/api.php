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

Route::post('register_country', 'CountryController@temp_add');

Route::group(['middleware' => 'auth:api'], function(){
    Route::get('users', 'UserController@index')->middleware('isAdmin');
    Route::get('users/{id}', 'UserController@show')->middleware('isAdminOrSelf');
});

Route::prefix('auth')->group(function () {
    Route::post('register', 'AuthController@register');
    Route::post('login', 'AuthController@login');
    Route::get('refresh', 'AuthController@refresh');
    Route::group(['middleware' => 'auth:api'], function() {
        Route::get('user', 'AuthController@user');
        Route::post('logout', 'AuthController@logout');
    });
});

//user
Route::get('/user/all', 'UserController@allUser');
Route::get('/user/request', 'UserController@requestUser');
Route::get('/user/book', 'UserController@bookedUser');
Route::get('/user/active', 'UserController@activeUser');
Route::get('/user/past', 'UserController@pastUser');

//fair
Route::get('/fair/all', 'FairController@all_fairs');
Route::get('/fair/year/{year}', 'FairController@fairs_year');
Route::get('/fair/current', 'FairController@current_fairs');
Route::get('/fair/next', 'FairController@next_fairs');
Route::post('/fair/create', 'FairController@create_fair');
Route::post('/fair/update/{id}', 'FairController@update_fair');
Route::get('/fair/request', 'FairController@requestFair');
Route::get('/fair/book', 'FairController@bookedFair');
Route::get('/fair/active', 'FairController@activeFair');
Route::get('/fair/past', 'FairController@pastFair');


//stand
Route::get('/stand/all', 'StandController@all_stands');
Route::post('/stand/create', 'StandController@create_stand');
Route::get('/stand/user/{user_id}', 'StandController@current_user_stand');
Route::get('/stand/user/{user_id}/{fair_id}', 'StandController@current_user_stand');
Route::post('/stand/update/{id}', 'StandController@update_stand');

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


//talk
Route::post('/room/talk/create', 'RoomController@create_talk');
Route::post('/room/talk/update/{id}', 'RoomController@update_talk');
Route::get('/room/talk/all', 'RoomController@all_talk');


//country
Route::get('/country/all', 'CountryController@show');
Route::post('/country/update/{id}', 'CountryController@update');
Route::post('/country/activate/{status}', 'CountryController@activate');

//standLocation
Route::get('/standLocation/all', 'StandLocationController@show');
Route::post('/standLocation/update/{id}', 'StandLocationController@update');
Route::post('/standLocation/create', 'StandLocationController@create');

//standType
Route::get('/standType/all', 'StandTypeController@show');
Route::post('/standType/update/{id}', 'StandTypeController@update');
Route::post('/standType/create', 'StandTypeController@create');

//standTypeItem
Route::get('/standTypeItem/all', 'StandTypeItemController@show');
Route::post('/standTypeItem/update/{id}', 'StandTypeItemController@update');
Route::post('/standTypeItem/create', 'StandTypeItemController@create');

