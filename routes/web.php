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
  return view('vueapp');
  // });
})->middleware('auth');

Route::resource(
  'constOrderData',
  'ConstOrderDataController'
)->middleware('auth');

Route::resource(
  'processMst',
  'ProcessMstController'
)->middleware('auth');

Route::get('sample/mailable/preview', function () {
  return new App\Mail\MailNotification();
});

Route::get('mail/send/info', 'MailController@MailNotification');

Route::get('/login', 'Auth\LoginController@showLoginForm')->name('login');
Route::post('/login', 'Auth\LoginController@login');
Route::post('/logout', 'Auth\LoginController@logout')->name('logout');

Route::get('/get-text', function () {
  return view('gettext');
})->middleware('auth');
// Auth::routes();

Route::get('/{any}', function () {
  return view('vueapp');
})->middleware('auth')->where('any', '.*');
