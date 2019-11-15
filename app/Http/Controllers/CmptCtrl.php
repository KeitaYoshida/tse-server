<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\Components;
use App\Model\RModelCmpt;
use App\Model\RCmptItem;

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
  public function DeleteCmpt($mid, $cid)
  {
    // return $mid . ' - ' . $cid;
    $rmc = new RModelCmpt;
    $rmc->where('model_id', $mid)->where('cmpt_id', $cid)->delete();
  }
  public function GetAllNotDetail()
  {
    $rmc = new RCmptItem;
    return $rmc->all();
  }
}
