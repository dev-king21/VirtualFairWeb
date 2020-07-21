<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
    //

    protected $appends = [
        'status_text'
    ];

    public function getStatusTextAttribute() {
        if ($this->status == 1)
            return "active";
        else
            return "blocked";
    }
    
    protected $guarded=[];
    protected $attributes = ["status" => 0];
}
