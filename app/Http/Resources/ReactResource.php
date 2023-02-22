<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ReactResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'user' => new ProfileResource($this->user),
            'post' => $this->post,
            'created_at' => $this->created_at
        ];
    }
}
