<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\Production;
use App\Model\Reception;
use App\Model\PdctWorklistClass;
use App\Model\PdctWorkdataList;

class PdctCtrl extends Controller
{
  public function PdctListFromModel($id)
  {
    $pd = new Production;
    return $pd->where('pdct_status', '<', 10)->where('model_id', $id)->with('child')->with('status')->get();
  }

  public function CreatePdct(Request $req, $rid)
  {
    $pd = new Production;
    $pid = $pd->create($req->all())->pdct_id;
    $rc = new Reception;
    $rc->where('recept_id', $rid)->update(['pdct_id' => $pid]);
    return $pid;
  }

  public function CheckDup($code)
  {
    $pd = new Production;
    return  $pd->where('const_code', $code)->get();
  }

  public function AddRecept($code, $rid)
  {
    $pd = new Production;
    $pid = $pd->where('const_code', $code)->get('pdct_id');

    $rc = new Reception;
    $rc->where('recept_id', $rid)->update(['pdct_id' => $pid[0]->pdct_id]);
    return $pid[0]->pdct_id;
  }

  public function NoLinkUpdate($id)
  {
    $pd = new Production;
    $pd->where('pdct_id', $id)->update(['pdct_status' => 9]);
  }

  public function ProductList()
  {
    $pd = new Production;
    return $pd
      ->where('pdct_status', '<', 10)
      ->with('status')
      ->with('child')
      ->with(['orders.status', 'orders.order_status'])
      ->with(['workdata.class', 'workdata.status', 'workdata.model'])
      ->get();
  }

  public function GetMakeWorkdataClass()
  {
    $wdclass = new PdctWorklistClass;
    return $wdclass->get(['val']);
  }
  public function GetWorklistNum($id)
  {
    $wdlist = new PdctWorkdataList;
    return $wdlist->where('pdct_id', $id)->count();
  }
}
