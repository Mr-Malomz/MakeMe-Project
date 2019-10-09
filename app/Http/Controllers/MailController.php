<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Mail;
use App\Mail\MailTrap;
use Crypt;
use Illuminate\Http\Request;

class MailController extends Controller
{
    public function send($email, $id)
    {
        dd($email.$id);
        $e_email = decrypt($email);
        $params = [
            $email,
            $id
        ];
        $sent = Mail::to($e_email)->send(new MailTrap($params));
        $msg = "";
        if ($sent) {
            $msg = "mail sent successfully";
            return response()->json($msg);
        }
        else {
            $msg = "mail wasn't sent.";
            return response()->json($msg);
        }
    }
}
