<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Request extends Model
{
    use HasFactory;
    protected $fillable = ['code','start','end','user_id','status_id','request_type','is_seened','due'];

    public function cto()
    {
        return $this->hasOne('App\Models\RequestCto', 'request_id');
    } 

    public function statuses()
    {
        return $this->hasMany('App\Models\RequestStatus', 'request_id');
    } 

    public function leave()
    {
        return $this->hasOne('App\Models\RequestLeave', 'request_id');
    } 

    public function user()
    {
        return $this->belongsTo('App\Models\User', 'user_id', 'id');
    }

    public function status()
    {
        return $this->belongsTo('App\Models\ListDropdown', 'status_id', 'id');
    }

    public function type()
    {
        return $this->belongsTo('App\Models\ListDropdown', 'request_type', 'id');
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
