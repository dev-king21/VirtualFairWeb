<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
    //
    protected $guarded=[];
    protected $attributes = ["status" => 0];
}
