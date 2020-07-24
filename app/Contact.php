<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    //
    public function stand()
    {
        return $this->hasOne('App\Stand');
    }

    protected $guarded = [];
}
