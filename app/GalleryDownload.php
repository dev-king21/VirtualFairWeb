<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class GalleryDownload extends Model
{
    public function gallery()
    {
        return $this->belongsTo('App\Gallery');
    }

    public function user()
    {
        return $this->belongsTo('App\User');
    }

    protected $guarded = [];
}
