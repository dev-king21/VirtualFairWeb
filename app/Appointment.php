<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Appointment extends Model
{
    //

    public function stand()
    {
        return $this->belongsTo('App\Stand');
    }

    public function requestor()
    {
        return $this->belongsTo('App\User');
    }

    protected $guarded = [];
    protected $attributes = ["status" => 0];

}
