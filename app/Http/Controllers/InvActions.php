<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\InvList;
use App\Model\InvItem;
use App\Model\InvHistory;
use App\Model\InvWorklist;
use App\Model\InvWorklistItem;

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
  }
}
