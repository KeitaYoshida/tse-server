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
    $Item->where('inv_num', '>', 0)->update(['inv_num' => 0]);
    $CntOrder->where('num_inv', '>', 0)->update(['num_inv' => 0]);
    $InventoryHistory->query()->delete();
  }

  public function InvHistoryList()
  {
    $InvList = new InvList;
    return $InvList->all();
  }
}
