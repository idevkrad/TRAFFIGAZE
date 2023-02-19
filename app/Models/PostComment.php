<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PostComment extends Model
{
    use HasFactory;

    protected $fillable = ['comment','user_id','post_id'];

    public function likes()
    {
        return $this->hasMany('App\Models\PostCommentLike', 'comment_id');
    }

    public function post()
    {
        return $this->belongsTo('App\Models\Post', 'post_id', 'id');
    }

    public function user()
    {
        return $this->belongsTo('App\Models\User', 'user_id', 'id');
    }
}
