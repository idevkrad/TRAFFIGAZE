<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Services\StringFixer;

class ListPosition extends Model
{
    use HasFactory;

    protected $fillable = ['name','code','salary','salary_id'];

    public function salary()
    {
        return $this->belongsTo('App\Models\ListDropdown', 'salary_id', 'id');
    }   

    public function getNameAttribute($value){
        return StringFixer::uppercaseExcept($value);
    }

    public function getCodeAttribute($value){
        return strtoupper($value);
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
