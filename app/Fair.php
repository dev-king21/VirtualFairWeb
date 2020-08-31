<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Fair extends Model
{
    //
    public function stands() {
        return $this->hasMany('App\Stand');
    }

    public function fair_type() {
        return $this->belongsTo('App\FairType');
    }

    public function categories() {
        return $this->hasMany('App\Category');
    }

    public function sustainability() {
        return $this->hasOne('App\Sustainability');
    }
    public function users(){
        return $this->hasMany('App\User');
    }


    protected $guarded = [];
    protected $attributes = ["status" => 0];
    protected $hidden = ["created_at", "updated_at"];
}
