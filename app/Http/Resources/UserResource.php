<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    public function toArray($request)
    {
        // return parent::toArray($request);
        return [
            'id' => $this->id,
            'email' => $this->email,
            'avatar' => 'http://traffigaze.local/images/avatars/'.$this->avatar,
            'role' => ($this->is_admin) ? 'Administrator' : 'User',
            'is_active' => $this->is_active,
            'name' => $this->name,
            'mobile' => $this->mobile,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at
        ];
    }
}
