<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
// Route::get('/admin/{any}', 'ApplicationController@admin')->where('any', '.*');
// Route::get('/{any}', 'ApplicationController@index')->where('any', '.*');

Route::get('/app', 'ApplicationController@index');
Route::get('/admin', 'ApplicationController@admin');
Route::redirect('/', '/app');