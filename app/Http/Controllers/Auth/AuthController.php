<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
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

    //<!--------------BEGIN CUSTOMER OPERATIONS-------------->
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
            102, $request->phone
        ]);
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

    //Endpoint to delete customer
    public function DeleteCustomer($id)
    {
        $act = DB::insert('call spDeleteCustomer (?)', [$id]);
        if ($act) {
            return response()->json($act);
        } else {
            $act = "Error, something happened.";
            return response()->json($act);
        }
    }

    //<!--------------END CUSTOMER OPERATIONS-------------->


    //<!--------------BEGIN SUPER ADMIN OPERATIONS-------------->

    //Endpoint to add employee
    public function Employee(Request $request)
    {
        $pro = DB::insert('call spMakeMeForEmp (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [
            1001,
            null, //empid
            $request->title,
            $request->email,
            $request->surname,
            $request->firstname,
            null, //$request->midnme,
            null, //$request->dob,
            null, //$request->phone,
            $request->payment,
            $request->salary,
            $request->commission,
            $request->role,
            null, //$request->pass,
            null //$request->passold
        ]);
        if ($pro) {
            //encrypt the email and id using .encrypt($email & $id) each
            //send the mail with the email and the id to the get route
            //of the email e.g: /mail/{email}/{id}
            $email = encrypt($pro->email);
            $id = encrypt($pro->id);
            
            return redirect('mail/' . $email . '/' . $id);
        } else {
            $msg = "error, something happened";
            return response()->json($msg);
        }
    }

    //Endpoint to update employee by super admin
    public function UpdateEmployee(Request $request)
    {
        $pro = DB::insert('call spUpdateProfileEmp (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [
            $request->empid,
            $request->title,
            $request->email,
            $request->surn,
            $request->fname,
            $request->midnme,
            null, //$request->pass,
            $request->dob,
            $request->phone,
            $request->payment,
            $request->salary,
            $request->comm,
            $request->role,
            null, //$request->avatar
        ]);
        if ($pro) {
            return response()->json($pro);
        } else {
            $msg = "error, something happened.";
            return response()->json($msg);
        }
    }


    //Endpoint to delete Employee
    public function DeleteEmp($id)
    {
        $act = DB::insert('call spDeleteEmp (?)', [$id]);
        if ($act) {
            return response()->json($act);
        } else {
            $act = "Error, something happened.";
            return response()->json($act);
        }
    }

    //Enpoint to create notification
    public function CreateNotif(Request $request)
    {
        $notif = DB::insert('call spNotification (?, ?, ?)', [
            101,
            null,//notificatio_id
            $request->messg
        ]);
        if ($notif) {
            return response()->json($notif);
        } else {
            $notif = "Error, something happened.";
            return response()->json($notif);
        }
    }

    //Enpoint to show notification
    public function showNotif()
    {
        $notif = DB::select('call spNotification (?, ?, ?)', [
            102,
            null,//notificatio_id
            null//$request->messg
        ]);
        if ($notif) {
            return response()->json($notif);
        } else {
            $notif = "Error, something happened.";
            return response()->json($notif);
        }
    }

    //<!--------------END SUPER ADMIN OPERATIONS-------------->


    //<!--------------BEGIN SIGN UP OPERATION-------------->

    //Endpoint to send email
    public function Sendmail($email, $id)
    {
        $d_email = encrypt($email);
        $d_id = encrypt($id);
        //dd($d_id);
        return redirect('api/mail/' . $d_email . '/' . $d_id);
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
        } else {
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
        } else {
            die('fail');
            $veri = "Error, something happened.";
            return response()->json($veri);
        }
    }

    //<!--------------END SIGN UP OPERATION-------------->


    //<!--------------BEGIN EMPLOYEE OPERATIONS-------------->

    //Endpoint for employee login
    public function LoginEmp(Request $request)
    {
        //$pass = Hash::make($request->password);
        //$pass1 = encrypt($request->password);
        $pass = base64_encode($request->password);
        // return response()->json($pass2);
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
            $pass,
            null //$request->passold
        ]);
        if ($pro) {
            return response()->json($pro, 200, ['Access-Control-Allow-Origin' => '*']);
        } else {
            $pro = "Error, something happened.";
            return response()->json($pro, 400);
        }
    }

    //Enpoint for employee to change password
    public function ChangePassword($pass, $id)
    {
        // $email = $request->email;
        // $id = $request->id;
        //dd($email);
        $pass = DB::insert('call spMakeMeReset_Passwd(?, ?)', [$id, $pass]);
        if ($pass) {
            return response()->json($pass);
        } else {
            $pass = "Error, something happened";
            return response()->json($pass);
        }
    }

    //Endpoint to update employee by employee
    public function UpdateEmp(Request $request)
    {
        $pro = DB::insert('call spUpdateProfileEmp (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [
            $request->empid,
            null, //$request->title,
            null, //$request->email,
            $request->surn,
            $request->fname,
            null, //$request->midnme,
            null, //$request->pass,
            null, //$request->dob,
            $request->phone,
            null, //$request->payment,
            null, //$request->salary,
            null, //$request->comm,
            null, //$request->role,
            $request->avatar,
            $request->addr
        ]);
        if ($pro) {
            return response()->json($pro);
        } else {
            $msg = "error, something happened.";
            return response()->json($msg);
        }
    }

    //Endpoint for forgot password
    public function forgotPass($email)
    {
        $pass = DB::select('call spMakeMe_Forgot_Pssword (?)', [$email]);
        if ($pass) {
            $id = $pass[0]->Emp_Id;
            $this->ChangePassword($id);
        } else {
            $pass = "Error, something happened.";
            return response()->json($pass);
        }
    }

    //<!--------------END EMPLOYEE OPERATIONS-------------->


    //<!--------------BEGIN OTHER OPERATIONS-------------->

    //Endpoint to return all employee details
    public function Emps()
    {
        $emp = DB::select('call spSelectAllEmp')->simplePaginate(25);
        if ($emp) {
            return response()->json($emp);
        } else {
            $msg = "error, something happened.";
            return response()->json($msg);
        }
    }
    //<!--------------END OTHER OPERATIONS-------------->

}
