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

Route::get('/user','Auth\AuthController@apis')->middleware('auth:api');

//<!---------------wrapped in super admin middleware---------------->
Route::post('/create','Auth\AuthController@createJobCard');
Route::post('/employee','Auth\AuthController@Employee');
Route::post('/confirm','Auth\AuthController@confirm');
Route::any('/mail/{email}/{id}', 'MailController@send');
//Route::any('/build/{email}/{id}', 'MailTrap@build');

Route::post('/login','Auth\AuthController@LoginEmp');

Route::post('/change','Auth\AuthController@ChangePassword');

Route::any('/verify/{email}/{id}','Auth\AuthController@verify');
Route::any('/sendmail/{email}/{id}','Auth\AuthController@Sendmail');
