<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ListKeyword extends Model
{
    use HasFactory;
    protected $fillable = ['name','is_company','added_by'];
}
