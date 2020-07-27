<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class StandType extends Model
{
    public function stand_type_items() {
        return $this->hasMany('App\StandTypeItem');
    }

    public function stand_locations() {
        return $this->hasMany('App\StandLocation');
    }

    protected $guarded = [];
    protected $hidden = ['created_at', 'updated_at'];

}
