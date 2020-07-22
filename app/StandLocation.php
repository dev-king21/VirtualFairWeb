<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class StandLocation extends Model
{
    public function fair_type() {
        $this->belongsTo('fair_type');
    }

    public function stand_type() {
        $this->belongsTo('App\StandType');
    }

    protected $guarded = [];
}
