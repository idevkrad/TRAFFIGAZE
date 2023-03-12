<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PostResource extends JsonResource
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
            'information' => $this->information,
            'user' => new ProfileResource($this->user),
            'tag' => new TagResource($this->tag),
            'image' => $this->image,
            'location' => $this->location,
            'barangay' => $this->barangay,
            'coordinates' => json_decode($this->coordinates),
            'likes' => LikeResource::collection($this->likes),
            'reports' => ReportResource::collection($this->reports),
            'comments' => CommentResource::collection($this->comments),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at
        ];
    }
}
