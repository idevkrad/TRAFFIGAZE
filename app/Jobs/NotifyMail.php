<?php

namespace App\Jobs;

use App\Models\User;
use App\Mail\MailUser;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;

class NotifyMail implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $user_id, $document_id;

    public function __construct($user_id, $document_id)
    {
        $this->user_id = $user_id;
        $this->document_id = $document_id;
    }

    public function handle()
    {
        $user = User::with('profile')->where('id',$this->user_id)->first();
        $name = $user->profile->firstname.' '.$user->profile->extension.' '.$user->profile->middlename[0].'. '.$user->profile->lastname;
        Mail::to($user->email)->send(new MailUser($name,$this->document_id));
    }
}
