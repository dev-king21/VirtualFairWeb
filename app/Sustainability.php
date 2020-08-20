<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Sustainability extends Model
{
    protected $guarded = [];

    public function sustainability_images() {
        return $this->hasMany('App\SustainabilityImage');
    }

    public function fair() {
        return $this->belongsTo('App\Fair');
    }
}
