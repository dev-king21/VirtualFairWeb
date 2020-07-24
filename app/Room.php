<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Room extends Model
{
    //

    public function talks()
    {
        return $this->hasMany('App\Talk');
    }

    public function country()
    {
        return $this->belongsTo('App\Country');
    }

}
