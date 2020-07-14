<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Gallery extends Model
{
    //

    public function stand()
    {
        return $this->belongsTo('App\Stand');
    }

    protected $guarded = [];
}
