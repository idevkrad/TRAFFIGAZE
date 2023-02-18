<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Services\StringFixer;

class ListGroup extends Model
{
    use HasFactory;

    protected $fillable = ['name','acronym','type','address'];

    public function getNameAttribute($value){
        return StringFixer::uppercaseExcept($value);
    }

    // public function getAcronymAttribute($value){
    //     return strtoupper($value);
    // }

    public function users()
    {
        return $this->morphToMany(User::class, 'userable');
    }
    
    public function getUpdatedAtAttribute($value)
    {
        return date('M d, Y g:i:s a', strtotime($value));
    }

    public function getCreatedAtAttribute($value)
    {
        return date('M d, Y g:i:s a', strtotime($value));
    }
}
