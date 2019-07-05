<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\Vendor;

class VendorCtrl extends Controller
{

  public function vendor_list()
  {
    return Vendor::all();
  }
}
