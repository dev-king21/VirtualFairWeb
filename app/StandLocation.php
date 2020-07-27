<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class StandLocation extends Model
{
    public function fair_type() {
        return $this->belongsTo('App\FairType');
    }

    public function stand_type() {
        return $this->belongsTo('App\StandType');
    }

    protected $guarded = [];
    protected $hidden = ['created_at', 'updated_at'];
}
