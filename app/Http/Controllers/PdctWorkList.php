<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\PdctWorkdataList;
use App\Model\PdctWorklistClass;
use App\Model\Serials;
use App\Model\SerialCmpt;
use App\Model\Process;
use App\Model\ProcessStatus;
use App\Model\RCmptItem;
use App\Model\Item;
use App\Model\RModelCmpt;
use App\Model\PdctUseItem;

class PdctWorkList extends Controller
{
  public function GetProcessData($id)
  {
    $PWLC = new PdctWorkdataList;
    return $PWLC
      ->where('worklist_id', $id)
      ->with(['status', 'class', 'model'])
      ->with(['serials.cmpt_sn' => function ($q) {
        $q;
      }, 'serials.process' => function ($q) {
        $q->orderBy('process.row', 'asc');
      }])
      ->get();
  }

  public function GetProcessCmptRowData($mid)
  {
    $RMC = new RModelCmpt;
    return $RMC->where('model_id', $mid)->orderBy('row', 'desc')->get();
  }

  public function GetProcessStatus()
  {
    $pst = new ProcessStatus;
    return $pst->all();
  }
  public function GetProcessSerialStatus($wid, $row)
  {
    $PWLC = new PdctWorkdataList;
    return $PWLC
      ->where('worklist_id', $wid)
      ->with(['serials.process' => function ($q) use ($row) {
        $q->where('process.row', $row);
        $q->orderBy('process.row', 'asc');
      }])->get();
  }

  public function SetSnAct(Request $req, $row)
  {
    $PR = new Process;
    $time = $req->shutoku_time;
    $up = $req->upval;
    return $PR
      ->where(
        [
          'serial_id' => $up['serial_id'],
          'row' => $row,
          'check_time' => $time
        ]
      )
      ->update($up);
  }
  public function SetWorkListDate($id, $sday, $eday)
  {
    $PWLC = new PdctWorkdataList;
    $PWLC->where('worklist_id', $id)->update(['st_day' => $sday, 'ed_day' => $eday]);
    // return     $PWLC->where('worklist_id', $id)->update(['st_day' => $sday, 'ed_day' => $eday])->toSql(0);
    return $id . ': ' . $sday . ' - ' . $eday;
  }

  public function GetWorkItems($wid)
  {
    $CM = new RCmptItem;
    return $CM->where('work_id', $wid)->with('items')->get();
  }
  public function UseItemAction(Request $req, $flg, $price, $wid, $cmpt)
  {
    // return $req;
    $IT = new Item;
    $PdctUseItem = new PdctUseItem;
    foreach ($req->all() as $val) {
      if ($flg === 'add') {
        $IT->where('item_id', $val['item_id'])->decrement('last_num', $val['item_use']);
        $IT->where('item_id', $val['item_id'])->decrement('appo_num', $val['item_use']);
        $useItem = $PdctUseItem
          ->where('worklist_id', $wid)
          ->where('cmpt_id', $cmpt)
          ->where('item_id', $val['item_id']);
        if ($useItem->exists()) {
          $useItem->increment('use_num', $val['item_use']);
        } else {
          $useItem->create(['worklist_id' => $wid, 'cmpt_id' => $cmpt, 'item_id' => $val['item_id']]);
          $useItem->increment('use_num', $val['item_use']);
        }
      } else {
        $IT->where('item_id', $val['item_id'])->increment('last_num', $val['item_use']);
        $IT->where('item_id', $val['item_id'])->increment('appo_num', $val['item_use']);
        $useItem = $PdctUseItem
          ->where('worklist_id', $wid)
          ->where('cmpt_id', $cmpt)
          ->where('item_id', $val['item_id']);
        if ($useItem->exists()) {
          $useItem->decrement('use_num', $val['item_use']);
        } else {
          $useItem->create(['worklist_id' => $wid, 'cmpt_id' => $cmpt, 'item_id' => $val['item_id']]);
          $useItem->decrement('use_num', $val['item_use']);
        }
      }
    }

    $PWLC = new PdctWorkdataList;
    if ($flg === 'add') {
      $PWLC->where("worklist_id", $wid)->increment('use_item_price', $price);
    } else {
      $PWLC->where("worklist_id", $wid)->decrement('use_item_price', $price);
    }
  }
  public function SetConstUseItemPrice($wid, $price)
  {
    $PWLC = new PdctWorkdataList;
    $PWLC->where("worklist_id", $wid)->update(['use_item_price' => $price]);
  }
  public function SetConstStatus($id, $per)
  {
    $status = 0;
    if (0 < $per && $per < 100) {
      $status = 1;
    } else {
      $status = 2;
    }
    $PWLC = new PdctWorkdataList;
    $PWLC->where('worklist_id', $id)->update(['worklist_status' => $status, 'context' => $per]);
  }
  public function GetWorkListWayToDay($before, $after)
  {
    $PWLC = new PdctWorkdataList;
    return $PWLC->where('ed_day', '>=', $before)->where('st_day', '<=', $after)->with('model')->orderBy('model_id')->orderBy('worklist_code')->get();
  }
  public function DeleteConst($wid)
  {
    $PWLC = new PdctWorkdataList;
    $PWLC->where('worklist_id', $wid)->delete();
  }
  public function SetStatus($wid, $status)
  {
    $PWLC = new PdctWorkdataList;
    $PWLC->where('worklist_id', $wid)->update(['worklist_status' => $status]);
  }
  public function GetWorkingConstList()
  {
    $PWLC = new PdctWorkdataList;
    return $PWLC
      ->where('context', '!=', 0)
      ->where('context', '!=', 100)
      ->with(['status', 'class', 'model', 'user'])
      ->get();
    // ->with(['status', 'class', 'model' => function ($q) {
    //   $q->orderBy('model.model_code', 'asc');
    // }])
  }

  public function SetWorklistCheckInfo($wid, $day, $uid)
  {
    $PWLC = new PdctWorkdataList;
    $PWLC->where('worklist_id', $wid)->update(['inv_loginid' => $uid, 'inv_day' => $day]);
  }

  public function GetProcessUseItem(Request $req)
  {
    $cmpt_items = new RCmptItem;
    return $cmpt_items->whereIn('work_id', $req->all())->get();
  }

  public function SetUseItem(Request $req)
  {
    $PdctUseItem = new PdctUseItem;
    $PdctUseItem->create($req->all());
  }
}
