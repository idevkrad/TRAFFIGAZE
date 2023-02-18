<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use \Spatie\WelcomeNotification\ReceivesWelcomeNotification;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use App\Http\Traits\ImageUploadTrait;
use App\Jobs\EmailNewAccount;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, ReceivesWelcomeNotification, ImageUploadTrait; 

    protected $fillable = [
        'email',
        'name',
        'mobile',
        'password',
        'is_admin',
        'is_active',
        'avatar',
        'welcome_valid_until'
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function getUpdatedAtAttribute($value)
    {
        return date('M d, Y g:i a', strtotime($value));
    }

    public function getCreatedAtAttribute($value)
    {
        return date('M d, Y g:i a', strtotime($value));
    }

}
