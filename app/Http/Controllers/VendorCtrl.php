<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\Vendor;
use App\Model\MVendorItem;

class VendorCtrl extends Controller
{

  public function vendor_list()
  {
    return Vendor::all();
  }

  public function VendorUpOne($vid, $col, $val)
  {
    $v = new Vendor;
    return $v->where('vendor_code', $vid)->update([$col => $val]);
  }

  public function VendorTogo($mid, $sid)
  {
    $mv = new MVendorItem;
    $d = $mv->where('vendor_code', $mid)->get();
    foreach ($d as $val) {
      $cnt = $mv->where(['item_id' => $val->item_id, 'vendor_code' => $sid])->count();
      if ($cnt <> 0) {
        $mv->where(['item_id' => $val->item_id, 'vendor_code' => $sid])->delete();
      }
    }
    return $mv->where('vendor_code', $sid)->update(['vendor_code' => $mid]);
  }

  public function VendorDel($vid)
  {
    $v = new Vendor;
    $v->where('vendor_code', $vid)->delete();
  }
}
