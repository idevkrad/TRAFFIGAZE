<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ReportNotiResource extends JsonResource
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
            'text' => 'reported your post.',
            'type' => 'report',
            'post_id' => $this->post->id,
            'created' => $this->created_at
        ];
    }
}
