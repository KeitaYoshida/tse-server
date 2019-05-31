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

Route::get('/userinfo', function () {
  if (Auth::check()) {
    return Auth::user();
  } else {
    return 'GUEST';
  }
});

Route::get('/work/equipStartCheck/{code}/{date}', function ($c, $date) {
  $checkdata = App\Checkdata::where('workcode', $c)->where('workday', $date)->get();
  foreach ($checkdata as $chk) {
    $chk->error;
  }
  return $checkdata;
});


Route::get('/data/cnt_orders/item_to_cntlist', 'CntOrderCtrl@item_to_cntlist');

Route::post('/checkdata', 'CheckdataController@store')->middleware('auth');
Route::post('/checkdata/upid', 'CheckdataController@upid');
Route::get('/checkdata/day/{date}', 'CheckdataController@daylist');

Route::post('/errordata', 'ErrorDataDailyController@store')->middleware('auth');

Route::get('/items/itemlist', 'ItemsCtrl@itemlist');
Route::get('/items/iteminfo/{id}/{rev}', 'ItemsCtrl@iteminfo');
Route::get('/items/item_inv_his/{id}/{rev}', 'ItemCountHistoryCtrl@history');
Route::get('/items/up_item_num_inv/{id}/{rev}/{num}/{order}/{assy}', 'ItemsCtrl@up_item_num_inv')->middleware('auth');

Route::get('/items/constorder/{id}/{rev}', 'CntOrderCtrl@item_to_cntlist');
Route::get('/items/cnt_order_ins_etc/{id}/{rev}/{price}', 'CntOrderCtrl@ins_etc_row');

Route::get('/adduser/{id}/{name}/{password}', function ($id, $name, $ps) {
  DB::table('users')->insert(
    [
      [
        'name' => $name,
        'loginid' => $id,
        'password' => Hash::make($ps),
      ]
    ]
  );
});

// Route::get('/vendors', function () {
//   $d = new App\Model\MVendorItem;
//   return $d->with('vendname')->where('item_code', 'AUA30720003000')->get();
// });

Route::get('sample/mailable/preview', function () {
  return new App\Mail\MailNotification();
});

Route::get('mail/send/info', 'MailController@MailNotification');

Route::get('/login', 'Auth\LoginController@showLoginForm')->name('login');
Route::post('/login', 'Auth\LoginController@login');
Route::post('/logout', function () {
  Session::flush();
  $com = new Auth\LoginController;
  $com->logout();
})->name('logout');

Route::get('/{any}', function () {
  return view('vueapp');
})->where('any', '.*');
