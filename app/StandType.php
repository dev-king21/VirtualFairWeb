<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class StandType extends Model
{
    public function stand_type_items() {
        return $this->hasMany('App\StandTypeItem');
    }

    protected $guarded = [];
    

}
