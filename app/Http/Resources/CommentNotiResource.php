<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CommentNotiResource extends JsonResource
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
            'avatar' => 'https://traffigaze.rjumli.me/images/avatars/'.$this->user->avatar,
            'name' => $this->user->name,
            'text' => 'commented on your post.',
            'type' => 'comment',
            'post_id' => $this->post->id,
            'user_id' => $this->post->user_id,
            'created' => $this->created_at
        ];
    }
}
