<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class StandContent extends Model
{
    //

    public function stand() {
        return $this->belongsTo('App\Stand');
    }

    public function stand_type_item() {
        return $this->belongsTo('App\StandTypeItem');
    }

    protected $hidden = ['created_at', 'updated_at'];
    protected $guarded = [];
}
