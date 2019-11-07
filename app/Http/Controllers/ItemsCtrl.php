<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\Item;
use App\Model\ItemCountHistory;
use App\Model\ItemClass;
use App\Model\CntOrder;
use App\Model\InventoryHistory;
use App\Model\itemLastHistory;
use Auth;

class ItemsCtrl extends Controller
{
  public function itemlist()
  {
    return Item::with('item_class_val')->with('vendor')->get();
  }

  public function ItemClass()
  {
    return ItemClass::all();
  }
  public function up_item_data(Request $req, $id)
  {
    $item = new Item;
    $item->where(['item_id' => $id])->update($req->all());
    // return $item->where(['item_id' => $id])->get();
  }

  public function iteminfo($code, $rev)
  {
    return Item::with('item_class_val')->with('vendor.vendname')->where(['item_code' => $code, 'item_rev' => $rev])->get();
  }

  public function up_item_num_inv($id, $rev, $num, $order, $assy)
  {
    $user = Auth::user()->name;
    Item::where(['item_code' => $id, 'item_rev' => $rev])->increment('inv_num', $num);
    CntOrder::where(['cnt_order_code' => $order, 'assy_code' => $assy, 'item_code' => $id])->increment('num_inv', $num);
    ItemCountHistory::create(
      ['item_code' => $id, 'item_rev' => $rev, 'user_name' => $user, 'const_code' => $order, 'count_num' => $num, 'assy_code' => $assy]
    );
  }

  public function ClassList()
  {
    $ic = new ItemClass;
    return $ic->all();
  }

  public function ClassSet($cid, $iid)
  {
    $i = new Item;
    return $i->where('item_id', $iid)->update(['item_class' => $cid]);
  }

  public function AddItem($iid, $irev)
  {
    $i = new Item;
    $i->create(['item_code' => $iid, 'item_rev' => $irev]);
  }

  public function itemListMini()
  {
    $i = new Item;
    return $i->where('last_num', '>', 0)->get(['item_id', 'item_code', 'item_name', 'item_model', 'last_num', 'inv_num', 'item_price']);
  }

  public function inventoryHistory($day)
  {
    $iv = new InventoryHistory;
    return $iv
      ->where('created_at', '>', date("Y-m-d", strtotime("-" . $day . " day")))
      ->with(['items:item_id,item_code,item_name,item_model', 'users:loginid,name'])
      ->get();
  }

  public function NumSet(Request $req)
  {
    $i = new Item;
    $i->where('item_id', $req->item_id)->increment('last_num', $req->last_num);
    $i->where('item_id', $req->item_id)->increment('appo_num', $req->appo_num);
    $i->where('item_id', $req->item_id)->increment('order_num', $req->order_num);
    // $i->where('item_id', $req->item_id)->update([
    //   'last_num' => $req->last_num,
    //   'appo_num' => $req->appo_num,
    //   'order_num' => $req->order_num
    // ]);
  }
  public function ItemAll()
  {
    $i = new Item;
    return $i->all();
  }
  public function AddLastNum(Request $req)
  {
    // return $req;
    $ih = new itemLastHistory;
    $ih->create($req->all());
    $i = new Item;
    $i->where('item_id', $req->item_id)->update(['location' => $req->location]);
    $i->where('item_id', $req->item_id)->increment('last_num', $req->act_num);
  }
}
