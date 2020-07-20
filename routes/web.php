<?php
use Illuminate\Support\Facades\Route;

Route::get('/admin', 'ApplicationController@admin');
Route::get('/admin/{any}', 'ApplicationController@admin')->where('any', '.*');
Route::get('/{any}', 'ApplicationController@index')->where('any', '.*');

