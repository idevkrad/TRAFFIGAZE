<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Dtr extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'am_in_at',
        'am_out_at',
        'pm_in_at',
        'pm_out_at',
        'is_updated',
        'remarks',
        'date'
    ];

    public function user()
    {
        return $this->belongsTo('App\Models\User', 'user_id', 'id');
    }

}
