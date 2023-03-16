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
            'text' => 'commented your post.',
            'type' => 'comment',
            'post_id' => $this->post->id,
            'created' => $this->created_at
        ];
    }
}
