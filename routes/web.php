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
Route::get("/items/all", "ItemsCtrl@ItemAll");
Route::get("/items/itemClass", "ItemsCtrl@ItemClass");
Route::get('/items/iteminfo/{code}/{rev}', 'ItemsCtrl@iteminfo');
Route::get('/items/item_inv_his/{id}/{rev}', 'ItemCountHistoryCtrl@history');
Route::get('/items/order_price/{id}', 'ItemsCtrl@item_order_price');
Route::get('/items/up_item_num_inv/{id}/{rev}/{num}/{order}/{assy}', 'ItemsCtrl@up_item_num_inv')->middleware('auth');
Route::get('/items/mini', 'ItemsCtrl@itemListMini');
Route::post("/db/add/last/item", "ItemsCtrl@AddLastNum");
Route::get("/db/items/search/get/new/rev/{code}", "ItemsCtrl@GetItemsOfNewRev");
Route::get("/db/items/fix/price/{item_id}/{vend_id}/{price}", "ItemsCtrl@FixItemPrice");

Route::get('/vendor/list', 'VendorCtrl@vendor_list');
Route::post('/vendor-item/up/{id}', 'MVendorItemCtrl@up_vendor_item');

Route::get('/items/constorder/{id}/{rev}', 'CntOrderCtrl@item_to_cntlist');
Route::get('/items/cnt_order_ins_etc/{id}/{rev}/{price}', 'CntOrderCtrl@ins_etc_row');
Route::post('/items/update/post/{id}', 'ItemsCtrl@up_item_data');

Route::post('/db/model_entry/', 'ModelCtrl@ModelEntry');
Route::get('/db/r_cmpt_item/swich/order/flg/{cid}/{iid}/{val}', 'ModelCtrl@SwitchOrderFlg');
Route::get('/db/r_cmpt_item/delete/item/{cid}/{iid}', 'ModelCtrl@DeleteCmptItems');
Route::post('/db/r_cmpt_item/add/item/', 'ModelCtrl@AddCmptItems');
Route::get('/db/items/add/item/{iid}/{irev}', 'ItemsCtrl@AddItem');
Route::get('/db/items/delete/item/{iid}/{irev}', 'ModelCtrl@DeleteItem');
Route::get('/db/items/class/list', 'ItemsCtrl@ClassList');
Route::get('/db/items/class/set/{cid}/{iid}', 'ItemsCtrl@ClassSet');
Route::post('/db/items/numSet/', 'ItemsCtrl@NumSet');

Route::get('/db/model_mst/list', 'ModelCtrl@ModelList');
Route::get('/db/model_mst/data/{id}', 'ModelCtrl@ModelData');
Route::get('/db/model_mst/data/{id}/{pt}', 'ModelCtrl@ModelData');
Route::post('/db/model_mst/work/add', 'ModelCtrl@ModelAddWork');
Route::get('/db/model_mst/work/list/{id}', 'ModelCtrl@ModelCmptWorkList');
Route::get('/db/model_mst/work/row/update/{id}/{row}', 'ModelCtrl@ModelCmptWorkRowUpdate');
Route::get('/db/model_mst/cmpt/list/{id}', 'ModelCtrl@ModelCmptList');
Route::get('/db/model_mst/cmpt/data/{id}', 'ModelCtrl@ModelCmptData');
Route::get('/db/model_mst/cmpt/work/title/list', 'ModelCtrl@ModelCmptWorkTitleList');
Route::get("/db/model_mst/cmpt/work/del/row/{row}/{cmpt}", 'ModelCtrl@ModelCmptWorkDelRow');
Route::get("/db/model_mst/cmpt/work/item/select/{cid}/{wid}", 'ModelCtrl@ModelCmptWorkItemSelect');
Route::post("/db/model_mst/cmpt/work/item/select/{wid}", 'ModelCtrl@ModelCmptWorkItemAll');
Route::get("/db/model_mst/cmpt/work/item/all/delete/{wid}", 'ModelCtrl@ModelCmptWorkItemAllDelete');
Route::get('/db/model_mst/cmpt/row/set/{model_id}/{cmpt_id}/{row}', 'ModelCtrl@SetRModelCmptRow');
Route::get("/db/model_mst/delete/model/{mid}", "ModelCtrl@DeleteModel");
Route::post("/db/model_mst/copy/model/{tar_id}", "ModelCtrl@CopyModel");
Route::post("/db/model_mst/copy/cmpt/{model_id}", "ModelCtrl@CopyCmptToModel");

Route::post("/db/comt/get/data/arr/with/whereIn", "CmptCtrl@GetCmptDataArr");
Route::get("/db/cmpt/data/{id}", "CmptCtrl@GetCmptData");
Route::get("/db/cmpt/all/not/itemdetail", "CmptCtrl@GetAllNotDetail");
Route::post("/db/comt/get/data/arr", "CmptCtrl@GetCmptDataArr");
Route::get("/db/cmpt/delete/cmpt/{mid}/{cid}", "CmptCtrl@DeleteCmpt");
Route::post("/db/cmpt/get/item/list/with/array", "CmptCtrl@GetItemListWithArray");

Route::post('/db/recept/hatyu/data/list', 'ReceptCtrl@DataList');
Route::post('/db/recept/hatyu/data/set/{setTime}/{type}', 'ReceptCtrl@SetData');

Route::get('/db/csv/type/setting/{type}', 'ReceptCtrl@CheckType');
Route::post('/db/csv/type/setting/', 'ReceptCtrl@UpdateType');

Route::post('/db/recept/unknown/data/', 'ReceptCtrl@UpUnknownData');
Route::post('/db/recept/tyuzan/up/', 'ReceptCtrl@TyuzanUp');
Route::get('/db/recept/tyuzan/data/', 'ReceptCtrl@Tyuzan');
Route::get('/db/recept/oneupdate/{id}/{col}/{val}', 'ReceptCtrl@OneColumnUpdate');
Route::post('/db/recept/nohin/list/', 'ReceptCtrl@GetNohinList');

Route::post('/db/pdct/create/{rid}', 'PdctCtrl@CreatePdct');
Route::get('/db/pdct/create/{model_code}/{pdct_name}/{class}', 'PdctCtrl@CreatePdctWithGet');
Route::get('/db/pdct/list/from/model/{id}', 'PdctCtrl@PdctListFromModel');
Route::get('/db/pdct/add/rcpt/{code}/{rid}', 'PdctCtrl@AddRecept');
Route::get("/db/pdct/is/this/{code}", 'PdctCtrl@CheckDup');
Route::get("/db/pdct/list/live", 'PdctCtrl@ProductList');
Route::get("/db/pdct/nolink/{id}", 'PdctCtrl@NoLinkUpdate');
Route::post('/db/pdct/make/sn_process', 'PdctCtrl@MakeSerialProcess');
Route::get("/db/pdct/data/{pid}", "PdctCtrl@GetPdctData");
Route::get("/db/pdct/brother/{pid}", "PdctCtrl@GetPdctBrother");

Route::get("/db/workdata/make/class", 'PdctCtrl@GetMakeWorkdataClass');
Route::get("/db/workdata/get/worklist/num/{id}", 'PdctCtrl@GetWorklistNum');
Route::get("/db/workdata/get/worklist/not/start", 'PdctCtrl@GetWorklistNotStart');
Route::get("/db/workdata/process/{id}", "PdctWorkList@GetProcessData");
Route::get("/db/workdata/process/cmpt_row/{mid}", "PdctWorkList@GetProcessCmptRowData");
Route::get("/db/workdata/get/process_status", "PdctWorkList@GetProcessStatus");
Route::get("/db/workdata/process/status/{wid}/{row}", "PdctWorkList@GetProcessSerialStatus");
Route::post("/db/workdata/set/sn/act/{row}", "PdctWorkList@SetSnAct");
Route::get("/db/workdata/cmpt/items/{wid}", "PdctWorkList@GetWorkItems");
Route::post("/db/workdata/use/item/act/{flg}/{price}/{wid}/{cmpt}", "PdctWorkList@UseItemAction");
Route::get("/db/workdata/set/const/status/{wid}/{per}", "PdctWorkList@SetConstStatus");
Route::get("/db/workdata/delete/const/{wid}", "PdctWorkList@DeleteConst");
Route::get("/db/workdata/set/status/{wid}/{status}", "PdctWorkList@SetStatus");
Route::get("/db/workdata/set/useitemprice/{wid}/{price}", "PdctWorkList@SetConstUseItemPrice");
Route::post("/db/workdata/process/useitem/list", "PdctWorkList@GetProcessUseItem");
Route::post("/db/workdata/worklist/useitem/set", "PdctWorkList@SetUseItem");

Route::get("/db/works/get/list/way/day/{before}/{after}", "PdctWorkList@GetWorkListWayToDay");
Route::get("/db/works/set/day/{id}/{sday}/{eday}", "PdctWorkList@SetWorkListDate");

Route::get("/db/user_info/all", 'UserCtrl@RtUserInfoAll');
Route::post("/db/user_info/shonin_relation/{uid}", 'UserCtrl@MakeShoninRelation');
Route::get("/db/user_info/shonin/child/{uid}", 'UserCtrl@RtShoninChild');

Route::post("/db/order/yoyaku/set", 'CntOrderCtrl@OrderYoyakuTouroku');
Route::get("/db/order/class", 'CntOrderCtrl@OrderClass');
Route::get("/db/order/yoyaku/gaiyou", 'CntOrderCtrl@YoyakuListGaiyou');
Route::get("/db/order/list/one/{ccode}", 'CntOrderCtrl@OrderListOne');
Route::get("/db/order/data/one/{ccode}", 'CntOrderCtrl@OrderDataOne');
Route::get("/db/order/list/col/up/{id}/{col}/{val}", 'CntOrderCtrl@OrderListColUp');
Route::post("/db/order/list/orderd/", 'CntOrderCtrl@OrderListOrderd');
Route::get("/db/order/list/yoyaku", 'CntOrderCtrl@OrderListYoyaku');
Route::get("/db/order/torikeshi/{ocode}", 'CntOrderCtrl@OrderTorikeshi');
Route::get("/db/order/ukeire/cnt/list", 'CntOrderCtrl@OrderUkeireCntList');
Route::get("/db/order/mini", 'CntOrderCtrl@OrderListMini');
Route::get("/db/order/get/all/order", 'CntOrderCtrl@GetAllOrder');

Route::get('/db/ukeire/all/list', "CntOrderCtrl@GetUkeireAllList");
Route::post("/db/ukeire/action", "CntOrderCtrl@UkeireAction");

Route::post("/db/shukei/action", "CntOrderCtrl@ShukeiAction");
Route::post("/db/shukei/set/item", "CntOrderCtrl@ShukeiSetItem");

Route::get("/db/vendor/list", 'VendorCtrl@vendor_list');
Route::get("/db/vendor/update/one/col/{vid}/{col}/{val}", 'VendorCtrl@VendorUpOne');
Route::get("/db/vendor/togo/{mid}/{sid}", 'VendorCtrl@VendorTogo');
Route::get("/db/vendor/del/{vid}", 'VendorCtrl@VendorDel');
Route::get("/db/vendor/insert/comp/{name}", "VendorCtrl@AddComp");

Route::get("/db/monitor/init_day", "monitor@InitDay");
Route::get("/db/monitor/init_month", "monitor@InitMonth");

Route::get("/db/inventory/history/day/{day}", "ItemsCtrl@inventoryHistory");
Route::get("/db/inventory/working/const/list", "PdctWorkList@GetWorkingConstList");
Route::get("/db/inventory/worklist/check/{wid}/{day}/{uid}", "PdctWorkList@SetWorklistCheckInfo");
Route::post("/db/inventory/add/findate", "InvActions@AddInvDate");
Route::get("/db/inventory/sum/history/list", "InvActions@InvHistoryList");
Route::get("/db/inventory/get/outin/his/{item_id}", "InvActions@InvItemOutInHistory");
Route::get("/db/inv/his/items/{date}", "InvActions@GetInvHisItems");
Route::post("/db/inv/fix/item/", "InvActions@FixInvHisItems");
Route::post("/db/inv/add/inv/item", "InvActions@AddInvItem");
Route::get("/db/inv/fix/worklist/{date}", "InvActions@GetInvHisWorkList");
Route::get("/db/inv/fix/worklist/item/{date}/{wcode}", "InvActions@GetInvHisWorkListItem");
Route::get("/db/inv/fix/worklist/workprice/{date}/{id}/{price}", "InvActions@SetWorkPrice");
Route::get("/db/inv/fix/worklist/set/iprice/{price}/{date}/{code}", "InvActions@SetWorkListItemPrice");
Route::get("/db/inv/fix/worklistitem/set/iprice/{id}/{price}/{num}", "InvActions@SetWorkListItem_ItemPrice");
Route::get("/db/inv/fix/list/working/price/{date}/{iprice}/{wprice}", "InvActions@SetListWorkingPrice");
Route::get("/db/inv/etc/get/list/{inv_id}", "InvActions@GetInvEtcList");
Route::post("/db/inv/etc/add/{inv_id}", "InvActions@AddInvEtc");
Route::get("/db/inv/etc/increment/{inv_etc_id}/{num}", "InvActions@IncrementInvEtc");
Route::post("/db/inv/etc/edit/{inv_etc_id}", "InvActions@EditInvEtc");
Route::get("/db/inv/list/set/etc/price/{inv_id}/{price}", "InvActions@SetInvListEtcPrice");
Route::get("/db/inv/list/data/get/{inv_id}", "InvActions@GetInvListData");
Route::get("/db/inv/his/history/worker/{inv_date}", "InvActions@GetInvHisWorkerHistory");
Route::get("/db/inv/his/history/cheker/{inv_date}", "InvActions@GetInvHisChekerHistory");
Route::post("/db/inv/merge/{inv_date}", "InvActions@MergeInvDate");

Route::post('/db/file/xlsx', 'FileAction@XlsxToCsv');

Route::get('/inventory/buzai-order-list', 'InventoryData@BuzaiOrderList');
Route::get('/inventory/buzai-etc-list', 'InventoryData@BuzaiEtcList');
Route::get('/inventory/buzai-cnt-list', 'InventoryData@BuzaiCntList');
Route::get('/inventory/order-list-one/{id}', 'InventoryData@OrderListOne');
Route::get('/inventory/buzai-inv-his', 'InventoryData@BuzaiInvHis');

Route::get('/TamaTebako/test', 'TamaTebako@test');
Route::post('/Firebase/test', 'TamaTebako@fire');

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
