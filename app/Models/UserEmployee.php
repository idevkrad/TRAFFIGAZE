<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserEmployee extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $fillable = ['department_id', 'position_id', 'status_id', 'office_id','religion_id','blood_id','level_id'];

    public function department()
    {
        return $this->belongsTo('App\Models\ListDropdown', 'department_id', 'id');
    }

    public function status()
    {
        return $this->belongsTo('App\Models\ListDropdown', 'status_id', 'id');
    }

    public function office()
    {
        return $this->belongsTo('App\Models\ListDropdown', 'office_id', 'id');
    }

    public function religion()
    {
        return $this->belongsTo('App\Models\ListDropdown', 'religion_id', 'id');
    }

    public function level()
    {
        return $this->belongsTo('App\Models\ListDropdown', 'level_id', 'id');
    }

    public function bloodtype()
    {
        return $this->belongsTo('App\Models\ListDropdown', 'blood_id', 'id');
    }

    public function position()
    {
        return $this->belongsTo('App\Models\ListPosition', 'position_id', 'id');
    }

    public function user()
    {
        return $this->belongsTo('App\Models\User', 'user_id', 'id');
    }
}
