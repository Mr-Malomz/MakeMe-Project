<?php

namespace App\Mail;

use Illuminate\Http\Request;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class MailTrap extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build(Request $request)
    {
        
        $url = $request->url();
        $all = ltrim($url, 'http://localhost:8000/api/mail/');
        $pos = strpos($all, '/');
        $email = strtok($all,'/');
        $id = substr($all,$pos+1);
        $param = [
            'email' => $email,
            'id' => $id
        ];
        return $this->view('make')->with($param);
    }
}
