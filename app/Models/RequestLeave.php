<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RequestLeave extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $fillable = ['specify','detail_id','type_id'];

    public function request()
    {
        return $this->belongsTo('App\Models\Request', 'request_id', 'id');
    }

    public function detail()
    {
        return $this->belongsTo('App\Models\ListDropdown', 'detail_id', 'id');
    }

    public function type()
    {
        return $this->belongsTo('App\Models\ListDropdown', 'type_id', 'id');
    }
}
