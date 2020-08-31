<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
    protected $appends = [
        'status_text', 'label'
    ];

    public function getStatusTextAttribute() {
        if ($this->status == 1)
            return "active";
        else
            return "blocked";
    }
    public function stands() {
        return $this->hasMany("App\Stand");
    }

    public function rooms() {
        return $this->hasMany("App\Room");
    }

    public function regions()
    {
        return $this->hasMany('App\Region');
    }

    public function getLabelAttribute() {
        return $this->name;
    }

    protected $guarded=[];
    protected $hidden = ["created_at", "updated_at", "phone", "currency", "capital", "continent"];
    protected $attributes = ["status" => 0];
}
