<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\CntOrder;

class CntOrderCtrl extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function item_to_cntlist($id, $rev)
  {
    $d = new CntOrder;
    // return $d->load('live')->where(['item_code' => $id, 'item_rev' => $rev])->get();
    return $d->whereHas('live', function ($query) {
      $query->where('cnt_status', 1);
    })->with('live')->where(['item_code' => $id, 'item_rev' => $rev])->where('num_recept', '<>', 0)->get();
  }

  public function ins_etc_row($id, $rev, $price)
  {
    CntOrder::create(['cnt_order_code' => 'etc', 'assy_code' => 'main', 'item_code' => $id, 'item_rev' => $rev, 'order_price' => $price, 'num_recept' => 99999]);
  }
}
