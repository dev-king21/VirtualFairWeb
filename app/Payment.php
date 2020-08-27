<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    public function stand()
    {
        return $this->belongsTo('App\Stand');
    }

    public function user()
    {
        return $this->belongsTo('App\User');
    }

}
