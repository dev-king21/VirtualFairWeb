<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;
use Laravel\Cashier\Billable;

class User extends Authenticatable
{
    use Notifiable, HasApiTokens, Billable;

    protected $guarded = ['created_at', 'updated_at', 'type', 'role'];
    protected $hidden = [
        'password', 'remember_token', 'created_at', 'updated_at', 'email_verified_at'
    ];

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

    public function webinar_tickets() {
        return $this->hasMany("App\WebinarTicket");
    }

    public function webinar_downloads() {
        return $this->hasMany("App\WebinarDownload");
    }

    public function send_unread_messages() {
        return $this->hasMany('App\Chat', 'sender_id')->where(['chats.read'=> 0]);        
    }

    public function received_messages_count() {
        return $this->hasMany('App\Chat', 'receiver_id')->where('chats.read', 0)->count();        
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
