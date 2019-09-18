<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\MVendorItem;
use App\Model\Item;

class MVendorItemCtrl extends Controller
{

  public function up_vendor_item(Request $req, $id)
  {
    $item = new Item;
    $price = 0;
    foreach ($req->all() as $vendor) {
      $price = $price + $vendor['vendor_item_price'];
    }
    $item->where('item_id', $id)->update(['item_price' => $price]);

    $d = new MVendorItem;
    $d->where('item_id', $id)->delete();
    $d->insert($req->all());

    return $d->where('item_id', $id)->with('vendname')->get();
  }
}
