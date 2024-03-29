<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    use HasFactory;
    protected $fillable = ['name','icon'];

    public function posts()
    {
        return $this->hasMany('App\Models\Post', 'tag_id');
    }

    function likes()
    {
        return $this->hasManyThrough('App\Models\PostLike', 'App\Models\Post');
    }

    function reports()
    {
        return $this->hasManyThrough('App\Models\PostReport', 'App\Models\Post');
    }
}
