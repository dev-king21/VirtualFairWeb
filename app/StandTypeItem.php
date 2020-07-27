<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class StandTypeItem extends Model
{
    public function stand_type() {
        return $this->belongsTo('App\StandType');
    }

    protected $guarded = [];
    protected $hidden = ['created_at', 'updated_at'];
}
