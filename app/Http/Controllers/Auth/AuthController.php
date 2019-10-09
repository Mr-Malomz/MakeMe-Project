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
        $pass = Hash::make($request->password);
        $pro = DB::insert('call spMakeMeEmp (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [
            1001,
            $request->title,
            $request->surn,
            $request->fname,
            $request->midnme,
            $pass,
            $request->dob,
            $request->email,
            $request->phone,
            $request->addr,
            $request->salary,
            $request->comm,
            $request->role,
            $request->oldpass
        ]);
        return response()->json($pro);
    }

    //Endpoint for employee login
    public function LoginEmp(Request $request)
    {
        $pass = Hash::make($request->password);
        $pro = DB::select('call spMakeMeEmp (?, ?)',[
            1002,
            $pass,
            $request->email
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
