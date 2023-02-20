<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $fillable = ['coordinates','information','image','tag_id','user_id'];

    public function comments()
    {
        return $this->hasMany('App\Models\PostComment', 'post_id');
    }

    public function likes()
    {
        return $this->hasMany('App\Models\PostLike', 'post_id');
    }

    public function reports()
    {
        return $this->hasMany('App\Models\PostReport', 'post_id');
    }

    public function tag()
    {
        return $this->belongsTo('App\Models\Tag', 'tag_id', 'id');
    }

    public function user()
    {
        return $this->belongsTo('App\Models\User', 'user_id', 'id');
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
