<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FairType extends Model
{
    public function stand_locations() {
        return $this->hasMany('App\StandLocation');
    }

    protected $hidden = ['created_at', 'updated_at'];
    protected $guarded = [];
}
