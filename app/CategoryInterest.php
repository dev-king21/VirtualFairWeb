<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CategoryInterest extends Model
{
    protected $guarded = ['created_at', 'updated_at'];
    protected $hidden = ['created_at', 'updated_at'];
    public function category() {
        return $this->belongsTo('App\Category');
    }
}
