<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Talk extends Model
{
    //

    public function room()
    {
        return $this->belongsTo('App\Room');
    }

    public function lecturer()
    {
        return $this->belongsTo('App\User');
    }

    protected $guarded = [];
}
