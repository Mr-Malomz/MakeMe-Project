<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
// Route::view('/{path?}', 'welcome');
Route::group(['middleware' => 'cors'], function(){
    Route::any('/password/{password}','Auth\AuthController@Hasher');
    //Route::post('/sendmail/{email}/{id}','Auth\AuthController@Sendmail');
    Route::any('/change/{email}','Auth\AuthController@ChangePassword');
});
Route::fallback(function () {
    return redirect('http://localhost:8000/#/verify');
});
