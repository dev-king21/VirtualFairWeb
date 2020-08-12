<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class BusinessCard extends Model
{
    public function stand()
    {
        return $this->belongsTo('App\Stand');
    }

    protected $guarded = [];
}
