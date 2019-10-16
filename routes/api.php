<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get( function (Request $request) {
//     return $request->user();
// });

Route::get('/user', 'Auth\AuthController@apis')->middleware('auth:api');

Route::any('/ver/{email}', 'Auth\AuthController@Verif');

Route::group(['middleware' => 'cors'],function(){
    //<!--------------BEGIN INTERNAL OPERATIONS--------------->
    Route::any('/mail/{email}/{id}', 'MailController@send'); //SEND MAIL
    Route::any('/emps', 'Auth\AuthController@Emps'); //SHOWS ALL EMPLOYEE NAMES
    //<!--------------BEGIN INTERNAL OPERATIONS--------------->

    //<!--------------BEGIN CUSTOMER OPERATIONS-------------->
    Route::post('/create', 'Auth\AuthController@createJobCard'); //CREATE JOB CARD
    Route::post('/pro', 'Auth\AuthController@Pro'); //REGISTER CUSTOMER
    Route::post('/search', 'Auth\AuthController@SearchCustomer'); //SEARCH FOR CUSTOMER
    Route::post('/editCus', 'Auth\AuthController@EditCustomer'); //EDIT/UPDATE CUSTOMER DETAILS
    Route::get('/delCus/{id}', 'Auth\AuthController@DeleteCustomer'); //DELETE CUSTOMER
    //<!--------------END CUSTOMER OPERATIONS-------------->

    //<!--------------BEGIN SUPER ADMIN OPERATIONS-------------->
    Route::post('/employee', 'Auth\AuthController@Employee'); //CREATE EMPLOYEE
    Route::post('/update', 'Auth\AuthController@UpdateEmployee'); //UPDATE EMPLOYEE DETAIL
    Route::post('/employee/{id}', 'Auth\AuthController@DeleteEmp'); //DELETE EMPLOYEE
    Route::post('/notif', 'Auth\AuthController@CreateNotif'); //CREATE NOTIFICATION
    Route::get('/notifs', 'Auth\AuthController@showNotif'); //SHOW ALL NOTIFICATION
    //<!--------------END SUPER ADMIN OPERATIONS-------------->

    //<!--------------BEGIN SIGN UP OPERATION-------------->
    Route::any('/verify/{email}/{id}','Auth\AuthController@verify');//CHANGE VERIFIED STATUS
    Route::any('/sendmail/{email}/{id}','Auth\AuthController@Sendmail');//SEND THE MAIL ON EMP CREATION
    Route::any('/comfirm/{email}/{password}','Auth\AuthController@confirm');//FINISH USER SIGN UP
    //<!--------------END SIGN UP OPERATION-------------->

    Route::any('/ver/{email}', 'Auth\AuthController@verif'); //CHANGE VERIFIED STATUS


    //<!--------------BEGIN EMPLOYEE OPERATIONS-------------->
    Route::post('/login', 'Auth\AuthController@LoginEmp'); //EMPLOYEE LOGIN
    Route::get('/reset', 'Auth\AuthController@ChangePassword'); //RESET/CHANGE PASSWORD
    Route::post('/update', 'Auth\AuthController@UpdateEmp'); //UPDATE EMPLOYEE PROFILE
    Route::get('/forgot/{email}', 'Auth\AuthController@forgotPass'); //FORGOT PASSWORD
    //<!--------------END EMPLOYEE OPERATIONS-------------->
});
