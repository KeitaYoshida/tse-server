<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\Models;
use App\Model\Components;
use App\Model\RModelCmpt;
use App\Model\Item;
use App\Model\RCmptItem;
use App\Model\CmptWorks;

class ModelCtrl extends Controller
{
  public function ModelEntry(Request $req)
  {
    $m = new Models;
    $mid = $m->updateOrCreate(
      ['model_code' => $req->model['model_code'], 'model_rev' => $req->model['model_rev']],
      $req->model
    )->model_id;

    $c = new Components;
    $r_cmpt_item = new RCmptItem;
    foreach ($req->basis as  $val) {
      $cData[$val['cmpt_code']] =
        ['model_id' => $mid, 'cmpt_id' => $c->updateOrCreate($val)->cmpt_id];
      $r_cmpt_item->where('cmpt_id', $cData[$val['cmpt_code']]['cmpt_id'])->delete();
    }

    $im = new Item;
    $r_model_cmpt = new RModelCmpt;
    $h = $i = 0;
    foreach ($cData as $key => $cmpt_data) {
      $r_model_cmpt->updateOrCreate($cmpt_data);
      $h = $h + $i;
      for ($i = 0; $i < count($req->item[$key]); $i++) {
        $imid = $im
          ->updateOrCreate($req->iuni[$key][$i], $req->item[$key][$i])->item_id;
        $imData[$h + $i] = [
          'cmpt_id' => $cData[$key]['cmpt_id'],
          'item_id' => $imid,
          'item_ren' => $req->rele[$key][$i]['item_ren'],
          'item_use' => $req->rele[$key][$i]['item_use'],
          'item_order' => $req->rele[$key][$i]['item_order']
        ];
      }
    }

    foreach ($imData as $val) {
      $r_cmpt_item->create($val);
    }

    return $m->where('model_id', $mid)->with('cmpt.item_use.items.vendor.vendname')->get();
  }

  public function SwitchOrderFlg($cid, $iid, $val)
  {
    $rci = new RCmptItem;
    $rci->where('cmpt_id', $cid)->where('item_id', $iid)->update(['item_order' => $val]);
  }

  public function DeleteCmptItems($cid, $iid)
  {
    $rci = new RCmptItem;
    $rci->where('cmpt_id', $cid)->where('item_id', $iid)->delete();
  }

  public function AddCmptItems(Request $req)
  {
    $im = new Item;
    $item_id = $im->updateOrCreate($req->item)->item_id;

    $rci = new RCmptItem;
    $chkdata = ['cmpt_id' => $req->cmpt['cmpt_id'], 'item_id' => $item_id];
    $cnt = $rci->where($chkdata)->count();
    if ($cnt > 0) {
      return;
    }
    $chkdata = $chkdata + ['item_use' => $req->cmpt['item_use']];
    $rci_id = $rci->create($chkdata)->r_ci_id;
    return $rci->where('r_ci_id', $rci_id)->with('items.vendor.vendname')->get();
  }

  public function DeleteItem($iid, $irev)
  {
    $im = new Item;
    $im->where('item_code', $iid)->where('item_rev', $irev)->delete();
  }

  public function ModelList()
  {
    $m = new Models;
    return $m->with('cmpt.works')->get();
  }

  public function ModelAddWork(Request $req)
  {
    $cm = new Components;
    $cmpt = $cm->where('cmpt_id', $req->cmpt_id)->with('works')->get()[0];
    $works = $cmpt->works;
    $len = count($works);
    $row = $len + 1;
    $cmw = new CmptWorks;
    $add = $cmw->create(['cmpt_id' => $req->cmpt_id, 'work_title' => $req->val, 'row' => $row]);
    return $add;
  }

  public function ModelCmptWorkList($id)
  {
    $cmw = new CmptWorks;
    return $cmw->where('cmpt_id', $id)->get();
  }

  public function ModelCmptWorkTitleList()
  {
    $cmw = new CmptWorks;
    return $cmw->groupBy('work_title')->get('work_title');
  }

  public function ModelCmptWorkDelRow($row, $cmpt)
  {
    $cmw = new CmptWorks;
    $cmw->where('cmpt_id', $cmpt)->where('row', $row)->delete();
    $cmw->where('cmpt_id', $cmpt)->where('row', '>', $row)->decrement('row');
  }

  public function ModelCmptData($id)
  {
    $cm = new Components;
    return $cm->where('cmpt_id', $id)->with('item_use.items')->get();
  }

  public function ModelCmptWorkRowUpdate($id, $row)
  {
    $cmw = new CmptWorks;
    $cmw->where('work_id', $id)->update(['row' => $row]);
  }

  public function ModelCmptWorkItemSelect($cid, $wid)
  {
    $rci = new RCmptItem;
    if ($wid === 'null') {
      $rci->where('r_ci_id', $cid)->update(['work_id' => null]);
    } else {
      $rci->where('r_ci_id', $cid)->update(['work_id' => $wid]);
    }
  }

  public function ModelData($id, $pt = "all")
  {
    $m = new Models;
    if ($pt === 'all') {
      $ptv = "cmpt.item_use.items.vendor.vendname";
      return $m->where('model_id', $id)->with($ptv)->get();
    } else if ($pt === 'fromItem') {
      $ptv = "cmpt.item_use.items.item_class_val";
      return $m->where('model_id', $id)->with($ptv)->get();
    }
  }

  public function ModelListForOrder()
  {
    $m = new Models;
    return $m->with(array('cmpt.item_use.items' => function ($q) {
      $q->where('item_class', '<>', '図面')->where('item_class', '<>', 'CHIP品');
    }))->get();
    // return $m->whereHas('cmpt.item_use.items', function ($q) {
    //   $q->where('item_class', '<>', '図面')->where('item_class', '<>', 'CHIP品');
    // })->with('cmpt.item_use.items')->get();
  }
}
