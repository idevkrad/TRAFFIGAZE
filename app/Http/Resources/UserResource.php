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
            'avatar' => $this->avatar,
            'role' => $this->role,
            'is_active' => $this->is_active,
            'profile_id' => $this->profile->id,
            'firstname' => $this->profile->firstname,
            'lastname' => $this->profile->lastname,
            'middlename' => $this->profile->middlename,
            'suffix' => $this->profile->suffix,
            'gender' => $this->profile->gender,
            'mobile' => $this->profile->mobile,
            'birthday' => $this->profile->birthday,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at
        ];
    }
}
