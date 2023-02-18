<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RequestCto extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $fillable = ['purpose','total','reports'];

    public function request()
    {
        return $this->belongsTo('App\Models\Request', 'request_id', 'id');
    }
}
