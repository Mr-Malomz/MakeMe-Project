<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
//use App\Http\Controllers\Controller;
use DB;
use Hash;
use Illuminate\Http\Request;

class AuthController extends Controller
{
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

    public function Employee(Request $request)
    {
        $pass = Hash::make($request->password);
        $pro = DB::insert('call spMakeMeEmp (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [
            $request->Transtype,
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
        return response()->json($emp);
        
    }

    //Endpoint to edit customer
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
}
