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
Route::get('/items/iteminfo/{code}/{rev}', 'ItemsCtrl@iteminfo');
Route::get('/items/item_inv_his/{id}/{rev}', 'ItemCountHistoryCtrl@history');
Route::get('/items/order_price/{id}', 'ItemsCtrl@item_order_price');
Route::get('/items/up_item_num_inv/{id}/{rev}/{num}/{order}/{assy}', 'ItemsCtrl@up_item_num_inv')->middleware('auth');

Route::get('/vendor/list', 'VendorCtrl@vendor_list');
Route::post('/vendor-item/up/{id}', 'MVendorItemCtrl@up_vendor_item');

Route::get('/items/constorder/{id}/{rev}', 'CntOrderCtrl@item_to_cntlist');
Route::get('/items/cnt_order_ins_etc/{id}/{rev}/{price}', 'CntOrderCtrl@ins_etc_row');
Route::post('/items/update/post/{id}', 'ItemsCtrl@up_item_data');

Route::post('/db/model_entry/', 'ModelCtrl@ModelEntry');
Route::get('/db/r_cmpt_item/swich/order/flg/{cid}/{iid}/{val}', 'ModelCtrl@SwitchOrderFlg');
Route::get('/db/r_cmpt_item/delete/item/{cid}/{iid}', 'ModelCtrl@DeleteCmptItems');
Route::post('/db/r_cmpt_item/add/item/', 'ModelCtrl@AddCmptItems');
Route::get('/db/items/delete/item/{iid}/{irev}', 'ModelCtrl@DeleteItem');
Route::get('/db/model_mst/list', 'ModelCtrl@ModelList');
Route::post('/db/recept/hatyu/data/list', 'ReceptCtrl@DataList');
Route::post('/db/recept/hatyu/data/set/{setTime}/{type}', 'ReceptCtrl@SetData');
Route::get('/db/csv/type/setting/{type}', 'ReceptCtrl@CheckType');
Route::post('/db/csv/type/setting/', 'ReceptCtrl@UpdateType');
Route::post('/db/recept/unknown/data/', 'ReceptCtrl@UpUnknownData');
Route::post('/db/recept/tyuzan/up/', 'ReceptCtrl@TyuzanUp');
Route::get('/db/recept/tyuzan/data/', 'ReceptCtrl@Tyuzan');
Route::get('/db/recept/oneupdate/{id}/{col}/{val}', 'ReceptCtrl@OneColumnUpdate');
Route::get('/db/pdct/list/from/model/{id}', 'PdctCtrl@PdctListFromModel');
Route::post('/db/pdct/create/{rid}', 'PdctCtrl@CreatePdct');
Route::get('/db/pdct/add/rcpt/{code}/{rid}', 'PdctCtrl@AddRecept');
Route::get("/db/pdct/is/this/{code}", 'PdctCtrl@CheckDup');
Route::get("/db/pdct/list/live", 'PdctCtrl@ProductList');
Route::get("/db/pdct/nolink/{id}", 'PdctCtrl@NoLinkUpdate');

Route::post('/db/file/xlsx', 'FileAction@XlsxToCsv');

Route::get('/inventory/buzai-order-list', 'InventoryData@BuzaiOrderList');
Route::get('/inventory/buzai-etc-list', 'InventoryData@BuzaiEtcList');
Route::get('/inventory/buzai-cnt-list', 'InventoryData@BuzaiCntList');
Route::get('/inventory/order-list-one/{id}', 'InventoryData@OrderListOne');
Route::get('/inventory/buzai-inv-his', 'InventoryData@BuzaiInvHis');

Route::get('/TamaTebako/test', 'TamaTebako@test');

Route::post('/upload/items/image', 'Uploader@upload');
Route::post('/upload/check/items', 'Uploader@get_image');
Route::post('/upload/delete/items', 'Uploader@delete_image');

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
// Route::post('/logout', function () {
//   Session::flush();
//   $com = new Auth\LoginController;
//   $com->logout();
// })->name('logout');
Route::post('/logout', 'Auth\LoginController@logout')->name('logout');

Route::get('/{any}', function () {
  return view('vueapp');
})->where('any', '.*');
