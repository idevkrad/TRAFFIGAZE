<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class MapBroadcast implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $post;
    public $type;
    
    public function __construct($post,$type)
    {
        $this->post = $post;
        $this->type = $type;
    }

     public function broadcastOn()
    {
        return ['map'];
    }

    public function broadcastWith()
    {
        return [
            'post' => $this->post,
            'type' => $this->type
        ];
    }
}
