<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\MVendorItem;

class MVendorItemCtrl extends Controller
{

  public function up_vendor_item(Request $req, $id)
  {
    $d = new MVendorItem;
    $d->where('item_id', $id)->delete();
    $d->insert($req->all());
    return $d->where('item_id', $id)->with('vendname')->get();
  }
}
