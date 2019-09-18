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
    $tmp = array();
    foreach ($req->all() as $cmpt_id) {
      // return $cm->where('cmpt_id', $cmpt_id)->get();
      $hoge = $cm->where('cmpt_id', $cmpt_id)->get();
      array_push($tmp, $hoge[0]);
    }
    return $tmp;
  }
  public function DeleteCmpt($id)
  {
    $cm = new Components;
    $cm->where('cmpt_id', $id)->delete();
  }
}
