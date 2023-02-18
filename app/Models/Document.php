<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Document extends Model
{
    use HasFactory;
    protected $fillable = [
        'subject',
        'keywords',
        'remarks',
        'received',
        'document',
        'sender_id',
        'company_id',
        'type_id',
        'route_slip',
        'encoded_by',
        'is_incoming',
        'is_completed',
        'is_status',
        'actions'
    ];

    protected $casts = [
        'keywords' => 'array'
    ];

    public function encoder()
    {
        return $this->belongsTo('App\Models\User', 'encoded_by', 'id');
    }

    public function router()
    {
        return $this->belongsTo('App\Models\User', 'routed_by', 'id');
    }

    public function type()
    {
        return $this->belongsTo('App\Models\ListDropdown', 'type_id', 'id');
    }

    public function sender()
    {
        return $this->belongsTo('App\Models\ListKeyword', 'sender_id', 'id');
    }

    public function company()
    {
        return $this->belongsTo('App\Models\ListKeyword', 'company_id', 'id');
    }

    public function attachments()
    {
        return $this->hasMany('App\Models\DocumentAttachment', 'document_id');
    } 

    public function routings()
    {
        return $this->hasMany('App\Models\DocumentRouting', 'document_id');
    } 

    public function getDocumentAttribute($value)
    {
        return date('M d, Y', strtotime($value));
    }

    public function getReceivedAttribute($value)
    {
        return date('M d, Y', strtotime($value));
    }

    public function getUpdatedAtAttribute($value)
    {
        return date('M d, Y g:i a', strtotime($value));
    }

    public function getCreatedAtAttribute($value)
    {
        return date('M d, Y g:i a', strtotime($value));
    }

    public function commentroute()
    {   
        $comments = $this->morphMany('App\Models\DocumentComment', 'commentable')->count();
        $route = $this->hasMany('App\Models\DocumentRouting', 'document_id')->count();

        return $comments.' out of '.$route;
    }
}
