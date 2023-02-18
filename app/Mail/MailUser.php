<?php

namespace App\Mail;

use App\Models\Document;
use App\Models\DocumentAttachment;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class MailUser extends Mailable
{
    use Queueable, SerializesModels;

    protected $name, $document_id;

    public function __construct($name = null, $document_id = null)
    {
        $this->name = $name;
        $this->document_id = $document_id;
    }

    public function build()
    {
        $data = Document::where('id', $this->document_id)->first();
        $message = "You have been tagged to the document with  Routing Slip : ".$data->route_slip." and a subject : ".$data->subject.".";

        $mail= $this->view('email.mail')->with('name',$this->name)->with('body',$message);
        $mail->subject($data->subject);

        $files = DocumentAttachment::where('document_id',$this->document_id)->get();
        foreach($files as $file){
            $mail->attach(storage_path("app/public/".$file['path']));
        }   
        
        return $mail;
    }
}
