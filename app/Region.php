<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Region extends Model
{
    protected $guarded = [];
    protected $appends = ['label'];
    protected $hidden = ["created_at", "updated_at", "phone", "currency", "capital", "continent"];

    public function country()
    {
        return $this->belongsTo('App\Country');
    }

    public function getLabelAttribute() {
        return $this->name;
    }
}
