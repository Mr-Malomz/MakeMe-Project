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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//<!---------------wrapped in super admin middleware---------------->
Route::post('/create','Auth\AuthController@createJobCard');
Route::post('/employee','Auth\AuthController@Employee');
Route::post('/confirm','Auth\AuthController@confirm');
Route::any('/mail/{email}/{id}', 'MailController@send');
//<!---------------wrapped in super admin middleware---------------->

//<!---------------wrapped in receptionist middleware---------------->
Route::post('/change','Auth\AuthController@ChangePassword');

//<!---------------wrapped in receptionist middleware---------------->

//<!---------------wrapped in accountant middleware---------------->
Route::post('/change','Auth\AuthController@ChangePassword');

//<!---------------wrapped in accountant middleware---------------->

//<!---------------wrapped in supervisor middleware---------------->
Route::post('/change','Auth\AuthController@ChangePassword');
Route::post('/login','Auth\AuthController@LoginEmp');

//<!---------------wrapped in supervisor middleware---------------->

//<!---------------wrapped in workers middleware---------------->
Route::post('/change','Auth\AuthController@ChangePassword');

//<!---------------wrapped in workers middleware---------------->

Route::post('/verify/{email}/{id}','Auth\AuthController@verify');
Route::post('/sendmail/{email}/{id}','Auth\AuthController@Sendmail');
