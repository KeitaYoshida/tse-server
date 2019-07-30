<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\Item;
use App\Model\ItemCountHistory;
use App\Model\ItemClass;
use App\Model\CntOrder;
use Auth;

class ItemsCtrl extends Controller
{
  public function itemlist()
  {
    return Item::all();
  }

  public function up_item_data(Request $req, $id)
  {
    $item = new Item;
    $item->where(['item_id' => $id])->update($req->all());
    // return $item->where(['item_id' => $id])->get();
  }

  public function iteminfo($code, $rev)
  {
    return Item::with('vendor.vendname')->where(['item_code' => $code, 'item_rev' => $rev])->get();
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
}
