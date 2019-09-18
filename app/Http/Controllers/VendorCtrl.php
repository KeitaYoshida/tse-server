<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\Vendor;
use App\Model\MVendorItem;

class VendorCtrl extends Controller
{

  public function vendor_list()
  {
    return Vendor::orderBy('level', 'desc')->get();
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

  public function AddComp($name)
  {
    $v = new Vendor;
    $id = $v->orderBy('vendor_code', 'desc')->limit(1)->get('vendor_code');
    $num = substr($id[0]['vendor_code'], -2);
    $tarnum = $num + 1;
    $tarval = 'k' . substr('000' . $tarnum, -4);
    $v->insert(['vendor_code' => $tarval, 'com_name' => $name]);
    return $tarval;
  }
}
