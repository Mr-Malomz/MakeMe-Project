<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
//use App\Http\Controllers\Controller;
use DB;
use crypt;
use Hash;
use Illuminate\Http\Request;

class AuthController extends Controller
{

    //api Route
    public function apis(Request $request)
    {
        return $request->user();
    }
    
    //Endpoint to create job
    public function createJobCard(Request $request)
    {
        $card = DB::select('call spCreateJobCard(?, ?, ?, ?, ?, ?, ?)', [
            $request->Cid,
            $request->Eid,
            $request->Desc,
            $request->Super,
            $request->price,
            $request->Pid,
            $request->comment
        ]);
        return response()->json($card);
        
    }

    //Endpoint to register customer
    public function Pro(Request $request)
    { 
        $emp = DB::insert('call spMakemeCustomer (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [
            100,
            $request->title,
            $request->surn,
            $request->fname,
            $request->midnme,
            $request->gen,
            $request->dob,
            $request->email,
            $request->phone,
            $request->mobile,
            $request->addr,
            $request->state,
            $request->country
        ]);
        return response()->json($emp);
        
    }

    //Endpoint to search for customer
    public function SearchCustomer(Request $request)
    {
        $emp = DB::select('call spMakemeCustomer (?, ?)', [
        102, $request->phone]);
    }

    //Endpoint to edit customer details
    public function EditCustomer(Request $request)
    {
        $emp = DB::insert('call spMakemeCustomer (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [
            $request->Cid,
            100,
            $request->title,
            $request->surn,
            $request->fname,
            $request->midnme,
            $request->gen,
            $request->dob,
            $request->email,
            $request->phone,
            $request->mobile,
            $request->addr,
            $request->state,
            $request->country
        ]);
        return response()->json($emp);
        
    }

    //Endpoint to add employee
    public function Employee(Request $request)
    {
        $pro = DB::insert('call spMakeMeForEmp (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [
            1001,
            null, //empid
            $request->title,
            $request->email,
            $request->surn,
            $request->fname,
            $request->midnme,
            $request->dob,
            $request->phone,
            $request->payment,
            $request->salary,
            $request->comm,
            $request->role,
            null,//$request->pass,
            null//$request->passold
        ]);
        if ($pro) {
            //encrypt the email and id using .encrypt($email & $id) each
            //send the mail with the email and the id to the get route
            //of the email e.g: /mail/{email}/{id}
            $d_email = encrypt($pro->email);
            $d_id = encrypt($pro->id);
            return redirect('mail/'.$d_email.'/'.$d_id);
        }
        else {
            $msg = "error, something happened";
            return response()->json($msg);
        }
    }

    //Endpoint to send email
    public function Sendmail($email, $id)
    {
        $d_email = encrypt($email);
        $d_id = encrypt($id);
        //dd($d_id);
        return redirect('api/mail/'.$d_email.'/'.$d_id);
    }

    //Endpoint to verify user
    public function verify($email, $id)
    {
        //decrypt the email and id using decrypt($email & $id) each
        $d_email = decrypt($email);
        $d_id = 'Essential';
        $veri = DB::statement('call spMakeMeVerifyAccount (?, ?)', [
            $d_id,
            $d_email
        ]);
        if ($veri) {
            $this->confirm($d_email, $d_id);
        }
        else {
            $msg = "Error, something happened.";
            return response()->json($msg);
        }
    }

    //Endpoint to finish user sign up 
    public function confirm($email, $pass)
    {
        //dd($pass);
        $pass = Hash::make($pass);
        $veri = DB::select('call spConfirm_Passwd (?, ?)', [
            $email,
            $pass,
        ]);
        if ($veri) {
            return response()->json($veri);
            //dd($pass);
        }
        else {
            die('fail');
            $veri = "Error, something happened.";
            return response()->json($veri);
        }
    }

    //Endpoint for employee login
    public function LoginEmp(Request $request)
    {
        $pass = Hash::make($request->password);
        $pro = DB::select('call spMakeMeForEmp (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [
            1002,
            null, //empid
            null,
            $request->email,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            $request->pass,
            null//$request->passold
        ]);
        return response()->json($pro);
    }
    
    //Enpoint for employee to change password
    public function ChangePassword($email)
    {
        dd($email);
    }
}
