<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\InvList;
use App\Model\InvItem;
use App\Model\InvHistory;
use App\Model\InvWorklist;
use App\Model\InvWorklistItem;
use App\Model\Item;
use App\Model\CntOrder;
use App\Model\InventoryHistory;
use App\Model\CntOrderList;
use App\Model\PdctUseItem;
use App\Model\itemLastHistory;
use App\Model\InvFixHistory;

class InvActions extends Controller
{
  public function AddInvDate(Request $req)
  {
    $InvList = new InvList;
    $InvItem = new InvItem;
    $InvHistory = new InvHistory;
    $InvWorkList = new InvWorkList;
    $InvWorkListItem = new InvWorklistItem;
    $InvList->insert($req->inv_list);
    $InvItem->insert($req->inv_items);
    $InvHistory->insert($req->inv_history);
    $InvWorkList->insert($req->inv_worklist);
    $InvWorkListItem->insert($req->inv_worklist_items);
    // return $req->inv_list;
    $Item = new Item;
    $CntOrder = new CntOrder;
    $InventoryHistory = new InventoryHistory;
    $Item->where('inv_num', '<>', 0)->update(['inv_num' => 0]);
    $CntOrder->where('num_inv', '<>', 0)->update(['num_inv' => 0]);
    $InventoryHistory->query()->delete();
  }

  public function InvHistoryList()
  {
    $InvList = new InvList;
    return $InvList->all();
  }

  public function InvItemOutInHistory($item_id)
  {
    $CntOrder = new CntOrder;
    $PdctUseItem = new PdctUseItem;
    $ItemLastHis = new itemLastHistory;

    $coData = $CntOrder->where("item_id", $item_id)->where("num_recept", ">", 0)->with('cmpt')->orderBy("updated_at", "desc")->take(10)->get();
    $pdData = $PdctUseItem->where("item_id", $item_id)->where("use_num", ">", 0)->with(['cmpt', 'workdata'])->orderBy("updated_at", "desc")->take(10)->get();
    $ilData = $ItemLastHis->where("item_id", $item_id)->orderBy("updated_at", "desc")->take(10)->get();
    return [
      'cntOrder' => $coData,
      'pdctUseItem' => $pdData,
      'itemLastHis' => $ilData
    ];
  }

  public function GetInvHisItems($date)
  {
    $invItem = new InvItem;
    return $invItem->where('inv_date', $date)->with('item_info.item_class_val')->get();
  }

  public function FixInvHisItems(Request $req)
  {
    $invItem = new InvItem;
    $invList = new InvList;
    $invFixHis = new InvFixHistory;
    $invFixHis->create($req->history);
    $invItem->where('inv_item_id', $req->history['inv_item_id'])->update([$req->history['tar_column'] => $req->history['fix_val']]);
    $invList->where('inv_date', $req->history['inv_date'])->update(['items_price' => $req->total_price]);
    return $req;
  }

  public function AddInvItem(Request $req)
  {
    $invItem = new InvItem;
    $inv_item_id =  $invItem->create($req->all())->inv_item_id;
    return $invItem->where('inv_item_id', $inv_item_id)->with('item_info.item_class_val')->get();
    // return $req;
  }

  public function GetInvHisWorkList($date)
  {
    $InvWorkList = new InvWorkList;
    return $InvWorkList
      ->where("inv_date", $date)
      ->where("use_item_price", "!=", 0.00)
      ->orderBy('model_code')
      ->orderBy('worklist_code')
      ->get();
  }

  public function GetInvHisWorkListItem($date, $wcode)
  {
    $InvWorkListItem = new InvWorklistItem;
    return $InvWorkListItem
      ->where('inv_date', $date)
      ->where('worklist_code', $wcode)
      ->with('cmpt')
      ->orderBy('cmpt_id')
      ->get();
  }

  public function SetWorkPrice($date, $id, $price)
  {
    $InvList = new Invlist;
    $InvWorkList = new InvWorklist;
    $InvList->where('inv_date', $date)->increment('process_price', $price);
    $InvWorkList->where('inv_worklist_id', $id)->increment('work_context_price', $price);
  }
}
