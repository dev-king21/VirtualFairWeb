<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Portfolio extends Model
{
    //

    public function stand()
    {
        return $this->belongsTo('App\Stand');
    }

    protected $guarded = [];
}
