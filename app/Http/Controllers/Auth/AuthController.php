<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use DB;
use crypt;
use Hash;
use Illuminate\Http\Request;
use Illuminate\Contracts\Support\Jsonable;
use \Illuminate\Pagination\LengthAwarePaginator;
//use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\URL;
use \Illuminate\Routing\ResponseFactory;
#
class AuthController extends Controller
{

   //Endpoint to verify user
   public function verif(Request $request)
   {
    $pass = DB::select('call spMakeMe_Forgot_Pssword (?)', [$request->email]);
      
        return response()->json($pass);
   
    //return redirect('http://localhost:8000/api/'.$email.'/'.$id);
    //return redirect('url/'.$d_email);
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
        $emp = DB::insert('call spMakemeCustomer (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [
            null,
            100,
            $request->category,
            $request->surname,
            $request->firstname,
            null,//$request->midnme,
            $request->gender,
            null,//$request->dob,
            $request->email,
            $request->phone,
            null,//$request->mobile,
            $request->address,
            $request->state,
            null,//$request->country
        ]);
        return response()->json($emp);
    }

    //Endpoint to search for customer
    public function SearchCustomer(Request $request)
    {
        $emp = DB::select('call spCustomer (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [
            null,
            102, 
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            $request->phone,
            null,
            null,
            null,
            null
        ]);
        if ($emp) {
            return response()->json($emp);
        }
        else {
            $emp = 'Error, something happened.';
            return response()->json($emp);
        }
    }

    //Endpoint to edit customer details
    public function EditCustomer(Request $request)
    {
        $emp = DB::insert('call spCustomer (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [
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
        $payment = ($request->payment == '') ? null : $request->payment;
        $salary = ($request->salary == '') ? null : $request->salary;
        $commission = ($request->commission == '') ? null : $request->commission;
        $pro = DB::select('call spMakeMeForEmp (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [
            1001,
            null, //empid
            $request->title,
            $request->email,
            $request->surname,
            $request->firstname,
            null, //$request->midnme,
            null, //$request->dob,
            null, //$request->phone,
            $payment,
            $salary,
            $commission,
            $request->role,
            null, //$request->pass,
            null //$request->passold
        ]);
        if ($pro) {
            //encrypt the email and id using .encrypt($email & $id) each
            //send the mail with the email and the id to the get route
            //of the email e.g: /mail/{email}/{id}
            $email = encrypt($pro[0]->Email);
            $id = encrypt($pro[0]->Trans_Id);
            //response()->json('Successful.');
            return redirect('/api/mail/' . $email . '/' . $id);
        } else {
            $msg = "error, something happened";
            return response()->json($msg);
        }
    }

    //Endpoint to update employee by super admin
    public function UpdateEmployee(Request $request)
    {
        $payment = ($request->payment == '') ? null : $request->payment;
        $salary = ($request->salary == '') ? null : $request->salary;
        $commission = ($request->commission == '') ? null : $request->commission;
        $pro = DB::insert('call spUpdateProfileEmp (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [
            null,//$request->empid,
            $request->title,
            $request->email,
            $request->surname,
            $request->firstname,
            null,//$request->midnme,
            null, //$request->pass,
            //null,//$request->dob,
            null,//$request->phone,
            $payment,
            $salary,
            $commission,
            $request->role,
            null, //$request->avatar
            null,//$request->address
        ]);
        if ($pro) {
            return response()->json($pro);
        } else {
            $msg = "error, something happened.";
            return response()->json($msg);
        }
    }


    //Endpoint to delete Employee
    public function DeleteEmp(Request $request)
    {
        $id = $request->id;
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
            null, //notificatio_id
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
            null, //notificatio_id
            null //$request->messg
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
        $d_id = decrypt($id);
        $veri = DB::statement('call spMakeMeVerifyAccount (?, ?)', [
            $d_id,
            $d_email
        ]);
        if ($veri) {
            //$this->confirm($d_email, $d_id);
            //return response()->json($d_email);
            return redirect('http://127.0.0.1:8000/#/register/'.$d_id);
        } else {
            $msg = "Error, something happened.";
            return response()->json($msg);
        }
    }

    //Endpoint to finish user sign up 
    public function confirm(Request $request)
    {
        //dd($pass);
        $pass = base64_encode($request->password);
        $veri = DB::insert('call spConfirm_Passwd (?, ?)', [
            $request->Trans_ID,
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
        //$pes = base64_decode($request->password);
        //return response()->json($pes);
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
            return response()->json($pro);
        } else {
            $pro = "Error, something happened.";
            return response()->json($pro);
        }
    }

    //Enpoint for employee to change password
    public function ChangePassword(Request $request)
    {
        $pass = DB::insert('call spMakeMeReset_Passwd(?, ?)', [$request->Trans_ID, base64_encode($request->password)]);
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
            //null, //$request->dob,
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
    public function forgotPass(Request $request)
    {
        $email = encrypt($request->email);
        $pass = DB::select('call spMakeMe_Forgot_Pssword (?)', [$request->email]);
        if ($pass) {
            $verified = $pass[0]->Verified;
            $id = encrypt($pass[0]->Trans_Id);
            if ($verified == '0') {
                return redirect('/api/mail/' . $email . '/' . $id);
            }
            else {
                return redirect('/api/pail/' . $email . '/' . $id);            
            }
            //return response()->json($pass);
        } else {
            $pass = "Error, something happened.";
            return response()->json($pass);
        }
    }

    //Endpoint to send email to reset
    public function Sender($email, $id)
    {
        $d_email = encrypt($email);
        $d_id = encrypt($id);
        //dd($d_id);
        return redirect('api/pail/' . $d_email . '/' . $d_id);
    }

    //Endpoint to verify and reset password
    public function Email($id)
    {
        //decrypt the email and id using decrypt($email & $id) each
        $d_id = decrypt($id);
        return redirect('http://127.0.0.1:8000/#/newpassword/'.$d_id);
    }

//<!--------------END EMPLOYEE OPERATIONS-------------->


    //<!--------------BEGIN OTHER OPERATIONS-------------->

     //Endpoint to return all employee details
    // public function Emps()
    // {
    //     $emp = DB::select(DB::raw('call AllEmp'));
    //     if ($emp) {
    //         $current_page = LengthAwarePaginator::resolveCurrentPage();
    //         $paginator = 10;
    //         $emps = array_slice($emp, ($current_page * $paginator) - 1, $paginator, true );
    //         $empr = new LengthAwarePaginator($current_page, count($emps), $paginator);  
    //         //$semp = $emp->paginate(6)->toJson();
    //         return response()->json($empr);
    //     } else {
    //         $msg = "error, something happened.";
    //         return response()->json($msg);
    //     }
    // }
     //Endpoint to return all employee details
     public function Emps()
     {
         $emp = DB::select('call AllEmp');
         if ($emp) {
             return response()->json($emp);
         } else {
             $msg = "error, something happened.";
             return response()->json($msg);
         }
     }
    //<!--------------END OTHER OPERATIONS-------------->

    
    //<!--------------BEGIN ACCOUNTANT OPERATIONS-------------->
     //Endpoint to create nes service and price
     public function CreateService(Request $request){
        $crea = DB::select('call spCreateService (?, ?)',[
            $request->name,
            $request->price
        ]);
        if($crea){
            return response()->json($crea);
        }
        else {
            $crea = 'Error, something happened.';
            return response()->json($crea);            
        }
     }

     //Endpoint to call all services and price
     public function Services(){
        $crea = DB::select('call spSelectAllServices');
        if($crea){
            return response()->json($crea);
        }
        else {
            $crea = 'Error, something happened.';
            return response()->json($crea);            
        }
     }

     //Endpoint to update service and price
     public function UpdateService(Request $request){
        $crea = DB::select('call spUpdateService (?, ?, ?)',[
            $request->id,
            $request->name,
            $request->price
        ]);
        if($crea){
            return response()->json($crea);
        }
        else {
            $crea = 'Error, something happened.';
            return response()->json($crea);            
        }
     }

     //Endpoint to call all salary
     public function Salary(){
        $sal = DB::select('call spreturn');
        if($sal){
            return response()->json($sal);
        }
        else {
            $sal = 'Error, something happened.';
            return response()->json($sal);            
        }
     }
    //<!--------------END ACCOUNTANT OPERATIONS-------------->

   
}
