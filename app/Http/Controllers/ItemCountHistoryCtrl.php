<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\ItemCountHistory;

class ItemCountHistoryCtrl extends Controller
{
  public function history($id, $rev)
  {
    $now = date("Y/m/d H:i:s");
    $bef = date("Y/m/d H:i:s", strtotime('-3 day'));
    return ItemCountHistory::where(['item_code' => $id, 'item_rev' => $rev])->whereBetween('add_time', array($bef, $now))->get();
  }
}
