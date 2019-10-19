<?php

namespace App\Mail;

use Illuminate\Http\Request;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Support\Facades\Crypt;

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
        
        if( stristr($url, 'pail') != ''){
            $this->trim($url, 'http://localhost:8000/api/pail/', 'sake');//for reset password
            //return $this->view('sake')->with($param);
        }
        else if ( stristr($url, 'mail') != ''){
            $this->trim($url, 'http://localhost:8000/api/mail/', 'make');//for verify email on sign up
        }
        else{
                return redirect('http://localhost:8000/verify');
            }
    }

    public function trim($url, $ail, $view)
    {
        //$url = $request->url();
        $all = ltrim($url, $ail);
        $pos = strpos($all, '/');
        $email = strtok($all,'/');
        $id = substr($all,$pos+1);
        $d_email = decrypt($email);
        $param = [
            'email' => $email,
            'id' => $id,
            'd_email' => $d_email
        ];
        return $this->view($view)->with($param);
    }
}
