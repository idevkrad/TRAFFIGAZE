<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CommentResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'post_id' => $this->post_id,
            'comment' => $this->comment,
            'user' => new ProfileResource($this->user),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at
        ];
    }
}
