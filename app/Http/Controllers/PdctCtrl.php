<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\Production;
use App\Model\Reception;
use App\Model\PdctWorklistClass;
use App\Model\PdctWorkdataList;
use App\Model\Serials;
use App\Model\SerialCmpt;
use App\Model\Process;

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
  public function MakeSerialProcess(Request $req)
  {
    $wdlist = new PdctWorkdataList;
    $serials = new Serials;
    $serialcmpt = new SerialCmpt;
    $pdb = new Process;

    $listdata = $req->listdata;
    $process = $req->process;
    $snarr = $req->snarr;
    $row = count($listdata);
    for ($i = 0; $i < $row; $i++) {
      $ld_row = $listdata[$i];
      $serial_num = $ld_row['num'];
      $wdserial = $wdlist->create($listdata[$i])->worklist_id;
      for ($h = 0; $h < $serial_num; $h++) {
        $sn = $serials->create(['worklist_id' => $wdserial])->serial_id;
        foreach ($snarr[$i] as $cmpt) {
          $serialcmpt
            ->create([
              'serial_id' => $sn,
              'cmpt_id' => $cmpt['cmpt_id'],
              'serial_no' => $cmpt['serial_no'] + $h
            ]);
        }
        foreach ($process as $prow) {
          $prow = $prow + array('serial_id' => $sn);
          $pdb->create($prow);
        }
      }
    }
    return $i;
  }
  public function GetPdctData($pid)
  {
    $pdct = new Production;
    return $pdct->where('pdct_id', $pid)->get();
  }
}
