<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
//use App\Http\Controllers\Controller;
use DB;
use Hash;
use Illuminate\Http\Request;

class AuthController extends Controller
{
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
        $emp = DB::insert('call spMakeMePro (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [
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
        $emp = DB::select('call spMakeMePro (?, ?)', [
        102, $request->phone]);
    }

    //Endpoint to edit customer details
    public function EditCustomer(Request $request)
    {
        $emp = DB::insert('call spMakeMePro (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [
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
        
        return response()->json($pro);
    }

    //Endpoint to verify user
    public function verify($email, $id)
    {
        $veri = DB::statement('call spMakeMeVerifyAccount (?, ?)', [
            $id,
            $email
        ]);
        return response()->json($veri);
    }
    
    
    public function FunctionName($email)
    {
        # code...
    }

    //Endpoint to finish user sign up 
    public function confirm(Request $request)
    {
        $pass = Hash::make($request->pass);
        $veri = DB::select('call spConfirm_Passwd (?, ?)', [
            $request->email,
            $pass,
        ]);
        return response()->json($veri);
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
    public function ChangePassword()
    {
        $pass = Hash::make('C0dename47');
        return response()->json($pass);
    }
}
