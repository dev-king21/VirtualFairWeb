<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Fair extends Model
{
    //
    public function stands() {
        return $this->hasMany('App\Stand');
    }


    protected $guarded = [];
    protected $attributes = ["status" => 0];
}
