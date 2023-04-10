<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class LikeNotiResource extends JsonResource
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
            'avatar' => 'https://traffigaze.info/images/avatars/'.$this->user->avatar,
            'name' => $this->user->name,
            'text' => 'likes your post.',
            'type' => 'like',
            'post_id' => $this->post->id,
            'user_id' => $this->post->user_id,
            'created' => $this->created_at
        ];
    }
}
