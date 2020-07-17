<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Stand extends Model
{

    public function fair() {
        return $this->belongsTo('App\Fair');
    }

    public function owner() {
        return $this->belongsTo('App\User');
    }

    public function appointments()
    {
        return $this->hasMany('App\Appointment');
    }

    public function gallerys()
    {
        return $this->hasMany('App\Gallery');
    }

    public function portfolios()
    {
        return $this->hasMany('App\Portfolio');
    }

    public function files()
    {
        return $this->hasMany('App\File');
    }

    public function contact()
    {
        return $this->hasOne('App\Contact');
    }

    
    protected $guarded = [];
    protected $attributes = ["status" => 0];
}
