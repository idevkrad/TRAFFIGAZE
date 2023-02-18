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
        'username',
        'email',
        'password',
        'role',
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

    public function profile()
    {
        return $this->hasOne('App\Models\UserProfile', 'user_id');
    } 

    public function employee()
    {
        return $this->hasOne('App\Models\UserEmployee', 'user_id');
    } 

    public function info()
    {
        return $this->hasOne('App\Models\UserInfo', 'user_id');
    } 

    public function groups()
    {
        return $this->morphedByMany(ListGroup::class, 'userable');
    }

    public function roles()
    {
        return $this->morphedByMany(ListRole::class, 'userable');
    }

    public function dtrs()
    {
        return $this->hasMany('App\Models\Dtr', 'user_id');
    } 

    public function hasRole($roles)
    {
        foreach ($roles as $role) {
            if ($this->role == $role) {
                return true;
            }
        }
        return false;
    }

    public function scopeNew($query, $request){
        $username = strtolower($request['firstname'][0].$request['middlename'][0].$request['lastname'][0].date("m",strtotime($request['birthday'])).date("d",strtotime($request['birthday'])));
        $user = $query->create(array_merge($request, ['username' => $username, 'password' => bcrypt('dost9ict'), 'role' => 'Employee']));
        $user->profile()->create($request);
        $user->employee()->create($request);
        return $user;
    }

    public function scopeImage($query, $request){
        $user = $this->storeImage($request);
        return $user;
    }

    public function getUpdatedAtAttribute($value)
    {
        return date('M d, Y g:i a', strtotime($value));
    }

    public function getCreatedAtAttribute($value)
    {
        return date('M d, Y g:i a', strtotime($value));
    }

}
