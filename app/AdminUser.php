<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use SMartins\PassportMultiauth\HasMultiAuthApiTokens;
use Laravel\Cashier\Billable;

class AdminUser extends Authenticatable
{
    use Notifiable, HasMultiAuthApiTokens, Billable;
    
    protected $guarded = ['created_at', 'updated_at'];
    protected $hidden = ['created_at', 'updated_at'];

    public function user() {
        return $this->belongsTo('App\User');
    }
    
}
