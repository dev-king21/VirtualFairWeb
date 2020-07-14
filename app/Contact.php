<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    //

    public function stand()
    {
        return $this->belongsTo('App\Stand');
    }

    protected $guraded = [];
}
