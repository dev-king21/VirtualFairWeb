<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class StandLocation extends Model
{
    public function fair_type() {
        return $this->belongsTo('fair_type');
    }

    public function stand_type() {
        return $this->belongsTo('App\StandType');
    }
    public function stand_location(){
        return $this->hasMany('App\Stand');
    }
    protected $guarded = [];
}
