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

  public function OrderTorikeshi($ocode)
  {
    $col = new CntOrderList;
    $co = new CntOrder;
    $it = new Item;

    $ol = $co->where('cnt_order_code', $ocode)->get();
    foreach ($ol as $v) {
      $it->where('item_id', $v['item_id'])->decrement('appo_num', $v['num_order']);
      $it->where('item_id', $v['item_id'])->decrement('order_num', $v['num_order']);
    }
    $col->where('cnt_order_code', $ocode)->delete();
  }

  public function OrderUkeireCntList()
  {
    $col = new CntOrderList;
    return $col->where('cnt_status', 1)->with(['status'])->get();
  }

  public function OrderYoyakuTouroku(Request $req)
  {
    $co = new CntOrder;
    $col = new CntOrderList;
    $cp = new CntOrderPrice;
    $it = new Item;

    $list = $req->ol;
    $order = $req->o;
    $price = $req->op;
    $list_code = $col->create($list)->cnt_orderlist_id;
    $i = 0;
    foreach ((array) $order as $k1 => $v1) {
      foreach ((array) $v1 as $k2 => $v2) {
        if (is_null($v2)) continue;
        $it->where('item_id', $v2['item_id'])->increment('appo_num', $v2['appo_num']);
        if ($v2['num_order'] === 0) continue;
        $it->where('item_id', $v2['item_id'])->increment('order_num', $v2['num_order']);
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

  public function UkeireAction(Request $req)
  {
    $co = new CntOrder;
    $col = new CntOrderList;
    $it = new Item;
    $o = $req->orders;
    $i = $req->items;
    $co->where('cnt_order_id', $o['cnt_order_id'])->update(['num_recept' => $o['num_recept']]);
    $it->where('item_id', $i['item_id'])->increment('last_num', $i['last_num']);
    $it->where('item_id', $i['item_id'])->increment('order_num', $i['order_num']);

    $row = $co->where('cnt_order_code', $o['cnt_order_code'])->get();
    $i = $cnt = 0;
    foreach ($row as $val) {
      if ($val['num_recept'] >= $val['num_order']) {
        $cnt = $cnt + 1;
      }
      $i = $i + 1;
    }
    $context = round($cnt / $i * 100, 2);
    if ($context === 100.00) {
      $col->where('cnt_order_code', $o['cnt_order_code'])->update(['context' => $context, 'cnt_status' => 2]);
    } else {
      $col->where('cnt_order_code', $o['cnt_order_code'])->update(['context' => $context, 'cnt_status' => 1]);
    }
  }
  public function GetUkeireAllList()
  {
    $co = new CntOrder;
    return $co->whereColumn('num_recept', '<', 'num_order')->with(['cmpt', 'item'])->get();
  }
}
