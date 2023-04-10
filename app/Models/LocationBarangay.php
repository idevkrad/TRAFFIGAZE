<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LocationBarangay extends Model
{
    use HasFactory;

    public function posts()
    {
        return $this->hasMany('App\Models\Post', 'barangay_id');
    }
}
