<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SustainabilityImage extends Model
{
    protected $guarded = [];

    public function Sustainability() {
        return $this->belongsTo('App\Sustainability');
    }
}
