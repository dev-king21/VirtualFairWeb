<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FairType extends Model
{
    public function stand_locations() {
        $this->hasMany('App\StandLocation');
    }

    protected $guarded = [];
}
