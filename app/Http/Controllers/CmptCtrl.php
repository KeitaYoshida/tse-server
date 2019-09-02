<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\Components;

class CmptCtrl extends Controller
{
  public function GetCmptData($id)
  {
    $cm = new Components;
    return $cm->where('cmpt_id', $id)->get();
  }
  public function GetCmptDataArr(Request $req)
  {
    $cm = new Components;
    return $cm->whereIn('cmpt_id', $req)->get();
  }
}
