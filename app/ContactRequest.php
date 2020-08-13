<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ContactRequest extends Model
{
    public function stand() {
        return $this->belongsTo("App\Stand");
    }

    public function requestor() {
        return $this->belongsTo("App\User", "user_id");
    }

    protected $guarded = [];
}
