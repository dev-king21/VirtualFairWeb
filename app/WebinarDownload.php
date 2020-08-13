<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class WebinarDownload extends Model
{
    public function talk()
    {
        return $this->belongsTo('App\Talk');
    }

    public function user()
    {
        return $this->belongsTo('App\User');
    }

    protected $guarded = [];
}
