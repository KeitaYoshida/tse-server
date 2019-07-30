<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\CntOrder;
use App\Model\CntOrderList;
use App\Model\Item;
use App\Model\CntOrderPrice;
use App\Model\CntOrderStatus;
use App\Model\CntOrderListStatus;

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

  public function OrderListColUp($id, $col, $val)
  {
    $ol = new CntOrderList;
    $ol->where('cnt_orderlist_id', $id)->update([$col => $val]);
  }

  public function OrderListOne($ccode)
  {
    $o = new CntOrder;
    // return $o->where('cnt_order_code', $ccode)->whereHas('price', function ($q) {
    //   return $q->where('vendor_code', 'k0004');
    // })->with('price.vname')->get();
    return $o->where('cnt_order_code', $ccode)->with(['price.vname', 'cmpt', 'item', 'listdata'])->orderBy('cmpt_id')->orderBy('assy_num')->get();
  }

  public function OrderDataOne($ccode)
  {
    $ol = new CntOrderList;
    return $ol->where('cnt_order_code', $ccode)->with(['status', 'order_status'])->get();
  }

  public function OrderListYoyaku()
  {
    $o = new CntOrder;
    return $o->whereHas('listdata', function ($q) {
      $q->where('cnt_status', 0);
    })->with(['price.vname', 'cmpt', 'item', 'listdata'])->orderBy('cmpt_id')->orderBy('assy_num')->get();
  }

  public function ins_etc_row($id, $rev, $price)
  {
    CntOrder::create(['cnt_order_code' => 'etc', 'assy_code' => 'main', 'item_code' => $id, 'item_rev' => $rev, 'order_price' => $price, 'num_recept' => 99999]);
  }

  public function OrderClass()
  {
    $osl = new CntOrderListStatus;
    return $osl->all();
  }

  public function OrderListOrderd(Request $req)
  {
    $ol = new CntOrderList;
    foreach ($req->all() as $val) {
      $ol->where('cnt_order_code', $val)->update(['cnt_status' => 1]);
    }
    return 'ok';
  }

  public function YoyakuListGaiyou()
  {
    $ol = new CntOrderList;
    return $ol->where('cnt_status', 0)->orWhere('cnt_status', 8)->with(['status', 'order_status'])->get();
  }

  public function OrderYoyakuTouroku(Request $req)
  {
    $co = new CntOrder;
    $col = new CntOrderList;
    $cp = new CntOrderPrice;
    $it = new Item;
    /* ----------------------
      部材予約数加算機能追加
      部材手配数加算機能追加
    ---------------------- */

    $list = $req->ol;
    $order = $req->o;
    $price = $req->op;
    $list_code = $col->create($list)->cnt_orderlist_id;
    $i = 0;
    foreach ($order as $k1 => $v1) {
      foreach ($v1 as $k2 => $v2) {
        if (is_null($v2)) continue;
        $order_id = $co->create($v2)->cnt_order_id;
        $i = $i + 1;
        if (isset($price[$k1][$k2])) {
          foreach ((array) $price[$k1][$k2] as $k3 => $v3) {
            if (is_null($v3)) continue;
            $price_row = array_merge($v3, array('cnt_order_id' => $order_id));
            $cpid = $cp->create($price_row)->cnt_order_price_id;
          }
        }
      }
    }
    return $i;
  }
}
