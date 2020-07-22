<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class StandTypeItem extends Model
{
    public function stand_type() {
        $this->belongsTo('App\StandType');
    }

    protected $guarded = [];
}
