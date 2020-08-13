<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
    use Notifiable, HasApiTokens;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $guarded = ['created_at', 'updated_at', 'type', 'role'];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token', 'created_at', 'updated_at', 'type' , 'email_verified_at'
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    protected $appends = [
        'role'
    ];

    public function stands() {
        return $this->hasMany("App\Stand");
    }

    public function talks() {
        return $this->hasMany("App\Talk");
    }

    public function portfolio_downloads() {
        return $this->hasMany("App\PortfolioDownload");
    }

    public function gallery_downloads() {
        return $this->hasMany("App\GalleryDownload");
    }

    public function webinar_downloads() {
        return $this->hasMany("App\WebinarDownload");
    }

    public function getRoleAttribute() {
        $is_owner = 
            $this->stands()
            ->where("status", "=", 1)
            ->whereHas("fair", function($q){
                $today = date("y-m-d");
                $query = [
                    ["start_date", "<=", $today]
                ];
                $q->where($query);
            })->count() != 0;

        $now = date("y-m-d h:i:s");
        $query = [
            ["start_time", "<=", $now],
            ["status", "=", 1]
        ];
        $is_lecturer = $this->talks()->where($query)->count() != 0;

        if($is_lecturer)
            $role = "lecturer";
        else if($is_owner)
            $role = "Owner";
        else
            $role = "User";
        return $role;
    }
  
}
